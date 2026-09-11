$ErrorActionPreference = 'Stop'
$taskGear = @{
  small='战术快拆背包'; '3h'='3H战术背包'; ga='GA野战背包'; gt1='GT1户外登山包'; d3='D3战术登山包'; gt5='GT5野战背包'; d7='D7战术背包'; gto='GTO重型战术包'; universal='通用战术胸挂'; dsa='DSA战术胸挂'; g01='G01战术弹挂'; drc='DRC先进侦察胸挂'
}
$taskPages = @('https://sjz.ptskins.com/item/bag/index.html','https://sjz.ptskins.com/item/chest/index.html')
$taskImages = @{}
foreach ($taskUrl in $taskPages) {
  $taskHtml = (Invoke-WebRequest -UseBasicParsing $taskUrl).Content
  foreach ($taskMatch in [regex]::Matches($taskHtml, '<img[^>]+src="([^"]+)"[^>]+alt="([^"]+)"')) { $taskImages[$taskMatch.Groups[2].Value] = $taskMatch.Groups[1].Value }
}
$taskFolder = Join-Path $PSScriptRoot '../assets/equipment'
New-Item -ItemType Directory -Force -Path $taskFolder | Out-Null
$taskManifest = @{}
foreach ($taskId in $taskGear.Keys) {
  $taskUrl = $taskImages[$taskGear[$taskId]]
  if (-not $taskUrl -or -not $taskUrl.StartsWith('https://playerhub.df.qq.com/')) { throw "Missing official image: $taskId" }
  Invoke-WebRequest -UseBasicParsing $taskUrl -OutFile (Join-Path $taskFolder "$taskId.png")
  $taskManifest[$taskId] = @{name=$taskGear[$taskId];url=$taskUrl;local="./assets/equipment/$taskId.png"}
}
$taskMedIds=@{'consumable-14020000003'='14020000003';medkit='14020000002';'field-med'='14020000004';bandage='14040000002';'consumable-14030000001'='14030000001'}
foreach ($taskId in $taskMedIds.Keys) {
  $taskUrl="https://playerhub.df.qq.com/playerhub/60004/object/$($taskMedIds[$taskId]).png"
  Invoke-WebRequest -UseBasicParsing $taskUrl -OutFile (Join-Path $taskFolder "$taskId.png")
  $taskManifest[$taskId]=@{url=$taskUrl;local="./assets/equipment/$taskId.png"}
}
$taskManifest | ConvertTo-Json -Depth 4 | Set-Content -Encoding utf8 (Join-Path $PSScriptRoot '../data/equipment-icons.json')
$taskLines=$taskManifest.Keys | Sort-Object | ForEach-Object { "  '$_': '$($taskManifest[$_].local)'," }
"export const GEAR_ICONS = {`n$($taskLines -join "`n")`n};" | Set-Content -Encoding utf8 (Join-Path $PSScriptRoot '../src/data/gear-icons.js')
Write-Output "$($taskManifest.Count) official equipment and medical images downloaded."
