param(
  [int]$Port = 4173,
  [string]$Root = (Resolve-Path "$PSScriptRoot\..").Path
)

$mimeTypes = @{
  ".html" = "text/html; charset=utf-8"
  ".css" = "text/css; charset=utf-8"
  ".js" = "text/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".svg" = "image/svg+xml"
  ".png" = "image/png"
  ".jpg" = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".webp" = "image/webp"
  ".ico" = "image/x-icon"
}

function Resolve-StaticPath {
  param([string]$UrlPath)

  $relative = [Uri]::UnescapeDataString($UrlPath.TrimStart("/"))
  if ([string]::IsNullOrWhiteSpace($relative)) {
    $relative = "index.html"
  }

  $candidate = Join-Path $Root $relative
  $fullPath = [System.IO.Path]::GetFullPath($candidate)
  $rootFull = [System.IO.Path]::GetFullPath($Root)

  if (-not $fullPath.StartsWith($rootFull, [System.StringComparison]::OrdinalIgnoreCase)) {
    return $null
  }

  if (Test-Path -LiteralPath $fullPath -PathType Container) {
    $fullPath = Join-Path $fullPath "index.html"
  }

  return $fullPath
}

function Write-HttpResponse {
  param(
    [System.Net.Sockets.NetworkStream]$Stream,
    [int]$Status,
    [string]$StatusText,
    [string]$ContentType,
    [byte[]]$Body
  )

  $header = "HTTP/1.1 $Status $StatusText`r`nContent-Type: $ContentType`r`nContent-Length: $($Body.Length)`r`nConnection: close`r`nCache-Control: no-cache`r`n`r`n"
  $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
  $Stream.Write($headerBytes, 0, $headerBytes.Length)
  $Stream.Write($Body, 0, $Body.Length)
}

$logPath = Join-Path $Root ".dev-server.log"
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Parse("127.0.0.1"), $Port)

try {
  $listener.Start()

  while ($true) {
    $client = $listener.AcceptTcpClient()
    try {
      $stream = $client.GetStream()
      $reader = [System.IO.StreamReader]::new($stream, [System.Text.Encoding]::ASCII, $false, 4096, $true)
      $requestLine = $reader.ReadLine()

      if ([string]::IsNullOrWhiteSpace($requestLine)) {
        $client.Close()
        continue
      }

      $parts = $requestLine.Split(" ")
      $method = $parts[0]
      $urlPath = if ($parts.Length -gt 1) { $parts[1].Split("?")[0] } else { "/" }

      while (-not [string]::IsNullOrEmpty($reader.ReadLine())) {}

      if ($method -ne "GET" -and $method -ne "HEAD") {
        $body = [System.Text.Encoding]::UTF8.GetBytes("Method not allowed")
        Write-HttpResponse -Stream $stream -Status 405 -StatusText "Method Not Allowed" -ContentType "text/plain; charset=utf-8" -Body $body
        $client.Close()
        continue
      }

      $path = Resolve-StaticPath -UrlPath $urlPath
      if ($null -eq $path -or -not (Test-Path -LiteralPath $path -PathType Leaf)) {
        $body = [System.Text.Encoding]::UTF8.GetBytes("Not found")
        Write-HttpResponse -Stream $stream -Status 404 -StatusText "Not Found" -ContentType "text/plain; charset=utf-8" -Body $body
        $client.Close()
        continue
      }

      $extension = [System.IO.Path]::GetExtension($path).ToLowerInvariant()
      $contentType = if ($mimeTypes.ContainsKey($extension)) { $mimeTypes[$extension] } else { "application/octet-stream" }
      $body = [System.IO.File]::ReadAllBytes($path)
      if ($method -eq "HEAD") {
        $body = [byte[]]::new(0)
      }
      Write-HttpResponse -Stream $stream -Status 200 -StatusText "OK" -ContentType $contentType -Body $body
      $client.Close()
    }
    catch {
      $client.Close()
    }
  }
}
finally {
  if ($Error.Count -gt 0) {
    $Error[0] | Out-String | Set-Content -Encoding UTF8 -Path $logPath
  }
  $listener.Stop()
}
