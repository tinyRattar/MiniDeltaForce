// pools are container-first loot tables. Each entry is
// { itemId, weight }, where weight is relative inside the same container.
// Category-based generation is handled by scripts/rebuild-loot-data.mjs, but
// the generated table stays explicit so special items can be tuned per container.
export const CONTAINER_TYPES = {
  "bird-nest": {
    "name": "鸟窝",
    "size": [
      4,
      4
    ],
    "min": 1,
    "max": 2,
    "pools": [
      {
        "itemId": "collectible-15010010008",
        "weight": 2400
      },
      {
        "itemId": "collectible-15040010007",
        "weight": 2400
      },
      {
        "itemId": "collectible-15040010008",
        "weight": 2400
      },
      {
        "itemId": "collectible-15040010009",
        "weight": 2400
      },
      {
        "itemId": "collectible-15060080002",
        "weight": 2400
      },
      {
        "itemId": "collectible-15060080003",
        "weight": 2400
      },
      {
        "itemId": "collectible-15060080007",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050046",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050047",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050048",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050049",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050050",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050051",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050052",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050053",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050054",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050055",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050059",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050060",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050081",
        "weight": 2400
      },
      {
        "itemId": "collectible-15040010003",
        "weight": 2310
      },
      {
        "itemId": "collectible-15080010003",
        "weight": 2310
      },
      {
        "itemId": "collectible-15080010004",
        "weight": 2310
      },
      {
        "itemId": "collectible-15080040004",
        "weight": 2310
      },
      {
        "itemId": "collectible-15080040005",
        "weight": 2310
      },
      {
        "itemId": "collectible-15080050007",
        "weight": 2310
      },
      {
        "itemId": "collectible-15080050017",
        "weight": 2310
      },
      {
        "itemId": "collectible-15010010015",
        "weight": 1260
      },
      {
        "itemId": "collectible-15060080001",
        "weight": 1260
      },
      {
        "itemId": "collectible-15060080004",
        "weight": 1260
      },
      {
        "itemId": "collectible-15060080006",
        "weight": 1260
      },
      {
        "itemId": "collectible-15060080009",
        "weight": 1260
      },
      {
        "itemId": "collectible-15080050019",
        "weight": 1260
      },
      {
        "itemId": "collectible-15080050020",
        "weight": 1260
      },
      {
        "itemId": "collectible-15080050022",
        "weight": 1260
      },
      {
        "itemId": "collectible-15080050077",
        "weight": 1260
      },
      {
        "itemId": "collectible-15080050078",
        "weight": 1260
      },
      {
        "itemId": "collectible-15080050079",
        "weight": 1260
      },
      {
        "itemId": "collectible-15080050080",
        "weight": 1260
      },
      {
        "itemId": "collectible-15200000134",
        "weight": 1260
      },
      {
        "itemId": "collectible-15200000138",
        "weight": 1260
      },
      {
        "itemId": "lighter",
        "weight": 1260
      },
      {
        "itemId": "collectible-15020010001",
        "weight": 1200
      },
      {
        "itemId": "collectible-15020010002",
        "weight": 1200
      },
      {
        "itemId": "collectible-15020010003",
        "weight": 1200
      },
      {
        "itemId": "collectible-15020010004",
        "weight": 1200
      },
      {
        "itemId": "collectible-15020010006",
        "weight": 1200
      },
      {
        "itemId": "collectible-15020010010",
        "weight": 1200
      },
      {
        "itemId": "collectible-15020010014",
        "weight": 1200
      },
      {
        "itemId": "collectible-15040010016",
        "weight": 1200
      },
      {
        "itemId": "collectible-15080050085",
        "weight": 1200
      },
      {
        "itemId": "collectible-15080050086",
        "weight": 1200
      },
      {
        "itemId": "collectible-15080050008",
        "weight": 990
      },
      {
        "itemId": "collectible-15080050011",
        "weight": 990
      },
      {
        "itemId": "collectible-15080050012",
        "weight": 990
      },
      {
        "itemId": "collectible-15080050023",
        "weight": 990
      },
      {
        "itemId": "collectible-15080050193",
        "weight": 990
      },
      {
        "itemId": "collectible-15200000073",
        "weight": 990
      },
      {
        "itemId": "collectible-15020010007",
        "weight": 630
      },
      {
        "itemId": "collectible-15020010008",
        "weight": 630
      },
      {
        "itemId": "collectible-15020010017",
        "weight": 630
      },
      {
        "itemId": "collectible-15020010019",
        "weight": 630
      },
      {
        "itemId": "collectible-15020010020",
        "weight": 630
      },
      {
        "itemId": "collectible-15020010021",
        "weight": 630
      },
      {
        "itemId": "collectible-15020010026",
        "weight": 630
      },
      {
        "itemId": "collectible-15020010027",
        "weight": 630
      },
      {
        "itemId": "collectible-15020010030",
        "weight": 630
      },
      {
        "itemId": "collectible-15020010032",
        "weight": 630
      },
      {
        "itemId": "collectible-15020040003",
        "weight": 630
      },
      {
        "itemId": "collectible-15020040004",
        "weight": 630
      },
      {
        "itemId": "collectible-15040010012",
        "weight": 630
      },
      {
        "itemId": "collectible-15080050084",
        "weight": 630
      },
      {
        "itemId": "collectible-15080050087",
        "weight": 630
      },
      {
        "itemId": "screwdriver",
        "weight": 630
      },
      {
        "itemId": "wire",
        "weight": 630
      },
      {
        "itemId": "collectible-15060080010",
        "weight": 540
      },
      {
        "itemId": "collectible-15060080011",
        "weight": 540
      },
      {
        "itemId": "collectible-15060080013",
        "weight": 540
      },
      {
        "itemId": "collectible-15060080016",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050021",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050026",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050027",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050072",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050073",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050074",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050075",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050076",
        "weight": 540
      },
      {
        "itemId": "collectible-15200000139",
        "weight": 540
      },
      {
        "itemId": "collectible-15200000163",
        "weight": 540
      },
      {
        "itemId": "collectible-15040010014",
        "weight": 330
      },
      {
        "itemId": "collectible-15080040002",
        "weight": 330
      },
      {
        "itemId": "collectible-15080040003",
        "weight": 330
      },
      {
        "itemId": "collectible-15080050001",
        "weight": 330
      },
      {
        "itemId": "collectible-15080050016",
        "weight": 330
      },
      {
        "itemId": "collectible-15080050018",
        "weight": 330
      },
      {
        "itemId": "collectible-15080050024",
        "weight": 330
      },
      {
        "itemId": "collectible-15080050124",
        "weight": 330
      },
      {
        "itemId": "collectible-15080050139",
        "weight": 330
      },
      {
        "itemId": "collectible-15080050182",
        "weight": 330
      },
      {
        "itemId": "collectible-15200000126",
        "weight": 330
      },
      {
        "itemId": "cement-bag",
        "weight": 270
      },
      {
        "itemId": "collectible-15020010016",
        "weight": 270
      },
      {
        "itemId": "collectible-15020010018",
        "weight": 270
      },
      {
        "itemId": "collectible-15020010023",
        "weight": 270
      },
      {
        "itemId": "collectible-15020040002",
        "weight": 270
      },
      {
        "itemId": "collectible-15040010017",
        "weight": 270
      },
      {
        "itemId": "collectible-15040010021",
        "weight": 270
      },
      {
        "itemId": "collectible-15040010022",
        "weight": 270
      },
      {
        "itemId": "fabric",
        "weight": 270
      },
      {
        "itemId": "toolbox-item",
        "weight": 270
      },
      {
        "itemId": "wireless-drill",
        "weight": 270
      },
      {
        "itemId": "collectible-15060080005",
        "weight": 180
      },
      {
        "itemId": "collectible-15060080008",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050068",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050070",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050136",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050183",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050215",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050218",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050219",
        "weight": 180
      },
      {
        "itemId": "collectible-15200000135",
        "weight": 180
      },
      {
        "itemId": "collectible-15200000140",
        "weight": 180
      },
      {
        "itemId": "collectible-15200000164",
        "weight": 180
      },
      {
        "itemId": "collectible-15200000183",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050043",
        "weight": 168.779
      },
      {
        "itemId": "collectible-15080050134",
        "weight": 142.917
      },
      {
        "itemId": "collectible-15080050025",
        "weight": 99
      },
      {
        "itemId": "collectible-15200000048",
        "weight": 99
      },
      {
        "itemId": "collectible-15200000068",
        "weight": 99
      },
      {
        "itemId": "collectible-15200000070",
        "weight": 99
      },
      {
        "itemId": "collectible-15200000075",
        "weight": 99
      },
      {
        "itemId": "collectible-15200000114",
        "weight": 99
      },
      {
        "itemId": "collectible-15200000130",
        "weight": 99
      },
      {
        "itemId": "collectible-15200000151",
        "weight": 99
      },
      {
        "itemId": "collectible-15200000154",
        "weight": 99
      },
      {
        "itemId": "collectible-15200000155",
        "weight": 99
      },
      {
        "itemId": "collectible-15200000157",
        "weight": 99
      },
      {
        "itemId": "collectible-15200000167",
        "weight": 99
      },
      {
        "itemId": "collectible-15080050143",
        "weight": 98.405
      },
      {
        "itemId": "collectible-15080050009",
        "weight": 95.914
      },
      {
        "itemId": "collectible-15080050137",
        "weight": 94.64
      },
      {
        "itemId": "collectible-15020010024",
        "weight": 90
      },
      {
        "itemId": "collectible-15020050003",
        "weight": 90
      },
      {
        "itemId": "collectible-15020050004",
        "weight": 90
      },
      {
        "itemId": "collectible-15020050006",
        "weight": 90
      },
      {
        "itemId": "collectible-15080050119",
        "weight": 90
      },
      {
        "itemId": "collectible-15080050130",
        "weight": 90
      },
      {
        "itemId": "collectible-15200000044",
        "weight": 90
      },
      {
        "itemId": "special-steel",
        "weight": 90
      },
      {
        "itemId": "wrench",
        "weight": 90
      },
      {
        "itemId": "collectible-15080050165",
        "weight": 89.401
      },
      {
        "itemId": "collectible-15080050015",
        "weight": 88.631
      },
      {
        "itemId": "collectible-15200000032",
        "weight": 88.115
      },
      {
        "itemId": "collectible-15080050004",
        "weight": 68.237
      },
      {
        "itemId": "collectible-15200000118",
        "weight": 65.994
      },
      {
        "itemId": "collectible-15080050094",
        "weight": 65.356
      },
      {
        "itemId": "collectible-15080050138",
        "weight": 65.342
      },
      {
        "itemId": "collectible-15080050093",
        "weight": 65.116
      },
      {
        "itemId": "collectible-15080050164",
        "weight": 63.678
      },
      {
        "itemId": "collectible-15080050135",
        "weight": 61.278
      },
      {
        "itemId": "collectible-15200000141",
        "weight": 54
      },
      {
        "itemId": "collectible-15200000142",
        "weight": 54
      },
      {
        "itemId": "collectible-15200000165",
        "weight": 54
      },
      {
        "itemId": "collectible-15200000184",
        "weight": 54
      },
      {
        "itemId": "collectible-15080050163",
        "weight": 52.303
      },
      {
        "itemId": "collectible-15080050162",
        "weight": 51.253
      },
      {
        "itemId": "collectible-15080050002",
        "weight": 49.123
      },
      {
        "itemId": "collectible-15080050092",
        "weight": 49.037
      },
      {
        "itemId": "collectible-15060080014",
        "weight": 43.41
      },
      {
        "itemId": "collectible-15080050133",
        "weight": 38.615
      },
      {
        "itemId": "collectible-15080050132",
        "weight": 37.545
      },
      {
        "itemId": "collectible-15080050180",
        "weight": 37.22
      },
      {
        "itemId": "collectible-15080050082",
        "weight": 34.65
      },
      {
        "itemId": "collectible-15080050083",
        "weight": 34.65
      },
      {
        "itemId": "collectible-15080050197",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000034",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000049",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000058",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000059",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000069",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000071",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000072",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000115",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000117",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000123",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000124",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000125",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000127",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000131",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000137",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000152",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000153",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000156",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000158",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000168",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15080050174",
        "weight": 22.914
      },
      {
        "itemId": "collectible-15080050071",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15080050179",
        "weight": 18.376
      },
      {
        "itemId": "collectible-15080050069",
        "weight": 13.5
      },
      {
        "itemId": "collectible-15080050173",
        "weight": 13.5
      },
      {
        "itemId": "collectible-15200000143",
        "weight": 13.5
      },
      {
        "itemId": "collectible-15200000166",
        "weight": 13.5
      },
      {
        "itemId": "collectible-15200000185",
        "weight": 13.5
      },
      {
        "itemId": "collectible-15030050019",
        "weight": 11.347
      },
      {
        "itemId": "collectible-15040010023",
        "weight": 9.45
      },
      {
        "itemId": "africa-heart",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15010050001",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15040050002",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080040001",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050003",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050014",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050040",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050041",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050120",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050121",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050122",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050123",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050142",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050166",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050184",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050185",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050187",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15200000060",
        "weight": 8.662
      },
      {
        "itemId": "gold-bar",
        "weight": 8.662
      },
      {
        "itemId": "watch",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050144",
        "weight": 6.75
      },
      {
        "itemId": "collectible-15080050220",
        "weight": 6.75
      },
      {
        "itemId": "collectible-15060080015",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15080050066",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15080050067",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15080050131",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15020010031",
        "weight": 2.362
      },
      {
        "itemId": "collectible-15030050017",
        "weight": 2.362
      },
      {
        "itemId": "collectible-15080050178",
        "weight": 2.362
      },
      {
        "itemId": "collectible-15080050211",
        "weight": 2.362
      }
    ]
  },
  "safe-small": {
    "name": "小保险",
    "size": [
      5,
      5
    ],
    "min": 1,
    "max": 3,
    "pools": [
      {
        "itemId": "collectible-15040010003",
        "weight": 2310
      },
      {
        "itemId": "collectible-15080010003",
        "weight": 2310
      },
      {
        "itemId": "collectible-15080010004",
        "weight": 2310
      },
      {
        "itemId": "collectible-15080040004",
        "weight": 2310
      },
      {
        "itemId": "collectible-15080040005",
        "weight": 2310
      },
      {
        "itemId": "collectible-15080050007",
        "weight": 2310
      },
      {
        "itemId": "collectible-15080050017",
        "weight": 2310
      },
      {
        "itemId": "collectible-15030010009",
        "weight": 2000
      },
      {
        "itemId": "collectible-15020050007",
        "weight": 1050
      },
      {
        "itemId": "collectible-15030010002",
        "weight": 1050
      },
      {
        "itemId": "collectible-15030010007",
        "weight": 1050
      },
      {
        "itemId": "collectible-15030010011",
        "weight": 1050
      },
      {
        "itemId": "collectible-15030010013",
        "weight": 1050
      },
      {
        "itemId": "collectible-15030010014",
        "weight": 1050
      },
      {
        "itemId": "collectible-15030010018",
        "weight": 1050
      },
      {
        "itemId": "collectible-15030010019",
        "weight": 1050
      },
      {
        "itemId": "collectible-15030040011",
        "weight": 1050
      },
      {
        "itemId": "collectible-15080050008",
        "weight": 990
      },
      {
        "itemId": "collectible-15080050011",
        "weight": 990
      },
      {
        "itemId": "collectible-15080050012",
        "weight": 990
      },
      {
        "itemId": "collectible-15080050023",
        "weight": 990
      },
      {
        "itemId": "collectible-15080050193",
        "weight": 990
      },
      {
        "itemId": "collectible-15200000073",
        "weight": 990
      },
      {
        "itemId": "collectible-15010010008",
        "weight": 800
      },
      {
        "itemId": "collectible-15040010007",
        "weight": 800
      },
      {
        "itemId": "collectible-15040010008",
        "weight": 800
      },
      {
        "itemId": "collectible-15040010009",
        "weight": 800
      },
      {
        "itemId": "collectible-15060080002",
        "weight": 800
      },
      {
        "itemId": "collectible-15060080003",
        "weight": 800
      },
      {
        "itemId": "collectible-15060080007",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050046",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050047",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050048",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050049",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050050",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050051",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050052",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050053",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050054",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050055",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050056",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050059",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050060",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050081",
        "weight": 800
      },
      {
        "itemId": "collectible-15090010024",
        "weight": 800
      },
      {
        "itemId": "collectible-15090010026",
        "weight": 800
      },
      {
        "itemId": "collectible-15090910016",
        "weight": 800
      },
      {
        "itemId": "collectible-15090910019",
        "weight": 800
      },
      {
        "itemId": "collectible-15020050008",
        "weight": 450
      },
      {
        "itemId": "collectible-15030010001",
        "weight": 450
      },
      {
        "itemId": "collectible-15030010008",
        "weight": 450
      },
      {
        "itemId": "collectible-15030040002",
        "weight": 450
      },
      {
        "itemId": "collectible-15030050016",
        "weight": 450
      },
      {
        "itemId": "collectible-15070010001",
        "weight": 450
      },
      {
        "itemId": "collectible-15070010002",
        "weight": 450
      },
      {
        "itemId": "collectible-15080050039",
        "weight": 450
      },
      {
        "itemId": "collectible-15080050194",
        "weight": 450
      },
      {
        "itemId": "collectible-15080050217",
        "weight": 450
      },
      {
        "itemId": "collectible-15010010015",
        "weight": 420
      },
      {
        "itemId": "collectible-15060080001",
        "weight": 420
      },
      {
        "itemId": "collectible-15060080004",
        "weight": 420
      },
      {
        "itemId": "collectible-15060080006",
        "weight": 420
      },
      {
        "itemId": "collectible-15060080009",
        "weight": 420
      },
      {
        "itemId": "collectible-15070010005",
        "weight": 420
      },
      {
        "itemId": "collectible-15070010006",
        "weight": 420
      },
      {
        "itemId": "collectible-15070010007",
        "weight": 420
      },
      {
        "itemId": "collectible-15070010008",
        "weight": 420
      },
      {
        "itemId": "collectible-15070010009",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050019",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050020",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050022",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050077",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050078",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050079",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050080",
        "weight": 420
      },
      {
        "itemId": "collectible-15090910017",
        "weight": 420
      },
      {
        "itemId": "collectible-15090910022",
        "weight": 420
      },
      {
        "itemId": "collectible-15090910023",
        "weight": 420
      },
      {
        "itemId": "collectible-15200000134",
        "weight": 420
      },
      {
        "itemId": "collectible-15200000138",
        "weight": 420
      },
      {
        "itemId": "lighter",
        "weight": 420
      },
      {
        "itemId": "collectible-15030040010",
        "weight": 390.785
      },
      {
        "itemId": "collectible-15040010014",
        "weight": 330
      },
      {
        "itemId": "collectible-15080040002",
        "weight": 330
      },
      {
        "itemId": "collectible-15080040003",
        "weight": 330
      },
      {
        "itemId": "collectible-15080050001",
        "weight": 330
      },
      {
        "itemId": "collectible-15080050016",
        "weight": 330
      },
      {
        "itemId": "collectible-15080050018",
        "weight": 330
      },
      {
        "itemId": "collectible-15080050024",
        "weight": 330
      },
      {
        "itemId": "collectible-15080050124",
        "weight": 330
      },
      {
        "itemId": "collectible-15080050139",
        "weight": 330
      },
      {
        "itemId": "collectible-15080050182",
        "weight": 330
      },
      {
        "itemId": "collectible-15200000126",
        "weight": 330
      },
      {
        "itemId": "collectible-15060080010",
        "weight": 180
      },
      {
        "itemId": "collectible-15060080011",
        "weight": 180
      },
      {
        "itemId": "collectible-15060080013",
        "weight": 180
      },
      {
        "itemId": "collectible-15060080016",
        "weight": 180
      },
      {
        "itemId": "collectible-15070040002",
        "weight": 180
      },
      {
        "itemId": "collectible-15070050003",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050021",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050026",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050027",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050072",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050073",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050074",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050075",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050076",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050096",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050213",
        "weight": 180
      },
      {
        "itemId": "collectible-15200000139",
        "weight": 180
      },
      {
        "itemId": "collectible-15200000163",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050043",
        "weight": 168.779
      },
      {
        "itemId": "collectible-15030040012",
        "weight": 150
      },
      {
        "itemId": "collectible-15030040014",
        "weight": 150
      },
      {
        "itemId": "collectible-15030050005",
        "weight": 150
      },
      {
        "itemId": "collectible-15030050011",
        "weight": 150
      },
      {
        "itemId": "collectible-15040010015",
        "weight": 150
      },
      {
        "itemId": "collectible-15040050003",
        "weight": 150
      },
      {
        "itemId": "collectible-15080050037",
        "weight": 150
      },
      {
        "itemId": "collectible-15080050038",
        "weight": 150
      },
      {
        "itemId": "collectible-15080050091",
        "weight": 150
      },
      {
        "itemId": "motherboard",
        "weight": 150
      },
      {
        "itemId": "ram",
        "weight": 150
      },
      {
        "itemId": "ssd",
        "weight": 150
      },
      {
        "itemId": "collectible-15080050134",
        "weight": 142.917
      },
      {
        "itemId": "collectible-15080050036",
        "weight": 113.841
      },
      {
        "itemId": "collectible-15080050025",
        "weight": 99
      },
      {
        "itemId": "collectible-15200000048",
        "weight": 99
      },
      {
        "itemId": "collectible-15200000068",
        "weight": 99
      },
      {
        "itemId": "collectible-15200000070",
        "weight": 99
      },
      {
        "itemId": "collectible-15200000075",
        "weight": 99
      },
      {
        "itemId": "collectible-15200000114",
        "weight": 99
      },
      {
        "itemId": "collectible-15200000130",
        "weight": 99
      },
      {
        "itemId": "collectible-15200000151",
        "weight": 99
      },
      {
        "itemId": "collectible-15200000154",
        "weight": 99
      },
      {
        "itemId": "collectible-15200000155",
        "weight": 99
      },
      {
        "itemId": "collectible-15200000157",
        "weight": 99
      },
      {
        "itemId": "collectible-15200000167",
        "weight": 99
      },
      {
        "itemId": "collectible-15080050143",
        "weight": 98.405
      },
      {
        "itemId": "collectible-15080050009",
        "weight": 95.914
      },
      {
        "itemId": "collectible-15080050137",
        "weight": 94.64
      },
      {
        "itemId": "collectible-15080050165",
        "weight": 89.401
      },
      {
        "itemId": "collectible-15080050015",
        "weight": 88.631
      },
      {
        "itemId": "collectible-15200000032",
        "weight": 88.115
      },
      {
        "itemId": "collectible-15080050004",
        "weight": 68.237
      },
      {
        "itemId": "collectible-15200000118",
        "weight": 65.994
      },
      {
        "itemId": "collectible-15080050094",
        "weight": 65.356
      },
      {
        "itemId": "collectible-15080050138",
        "weight": 65.342
      },
      {
        "itemId": "collectible-15080050093",
        "weight": 65.116
      },
      {
        "itemId": "collectible-15080050164",
        "weight": 63.678
      },
      {
        "itemId": "collectible-15080050135",
        "weight": 61.278
      },
      {
        "itemId": "collectible-15060080005",
        "weight": 60
      },
      {
        "itemId": "collectible-15060080008",
        "weight": 60
      },
      {
        "itemId": "collectible-15070050002",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050045",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050064",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050068",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050070",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050136",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050172",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050181",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050183",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050206",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050207",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050208",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050209",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050215",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050216",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050218",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050219",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000074",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000135",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000140",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000148",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000149",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000150",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000164",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000183",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050092",
        "weight": 49.037
      },
      {
        "itemId": "collectible-15080050095",
        "weight": 42.696
      },
      {
        "itemId": "collectible-15080050168",
        "weight": 42.226
      },
      {
        "itemId": "collectible-15030040013",
        "weight": 40.559
      },
      {
        "itemId": "cpu",
        "weight": 39.119
      },
      {
        "itemId": "collectible-15080050133",
        "weight": 38.615
      },
      {
        "itemId": "collectible-15080050082",
        "weight": 34.65
      },
      {
        "itemId": "collectible-15080050083",
        "weight": 34.65
      },
      {
        "itemId": "collectible-15030050006",
        "weight": 34.529
      },
      {
        "itemId": "collectible-15080050090",
        "weight": 33.744
      },
      {
        "itemId": "collectible-15080050126",
        "weight": 29.969
      },
      {
        "itemId": "collectible-15030050003",
        "weight": 29.182
      },
      {
        "itemId": "ballistic-computer",
        "weight": 27.576
      },
      {
        "itemId": "collectible-15080050035",
        "weight": 26.311
      },
      {
        "itemId": "collectible-15080050197",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000034",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000049",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000058",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000059",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000069",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000071",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000072",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000115",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000117",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000123",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000124",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000125",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000127",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000131",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000137",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000152",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000153",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000156",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000158",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15200000168",
        "weight": 24.75
      },
      {
        "itemId": "collectible-15080050034",
        "weight": 19.293
      },
      {
        "itemId": "collectible-15030040001",
        "weight": 19.035
      },
      {
        "itemId": "collectible-15080050063",
        "weight": 18
      },
      {
        "itemId": "collectible-15080050148",
        "weight": 18
      },
      {
        "itemId": "collectible-15080050149",
        "weight": 18
      },
      {
        "itemId": "collectible-15080050198",
        "weight": 18
      },
      {
        "itemId": "collectible-15090010040",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000129",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000141",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000142",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000145",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000146",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000147",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000162",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000165",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000184",
        "weight": 18
      },
      {
        "itemId": "collectible-15080050140",
        "weight": 17.72
      },
      {
        "itemId": "collectible-15080050163",
        "weight": 17.434
      },
      {
        "itemId": "collectible-15080050162",
        "weight": 17.084
      },
      {
        "itemId": "collectible-15080050002",
        "weight": 16.374
      },
      {
        "itemId": "collectible-15080050033",
        "weight": 15.75
      },
      {
        "itemId": "collectible-15080050088",
        "weight": 15.75
      },
      {
        "itemId": "collectible-15080050189",
        "weight": 15.75
      },
      {
        "itemId": "collectible-15060080014",
        "weight": 14.47
      },
      {
        "itemId": "collectible-15070040001",
        "weight": 14.424
      },
      {
        "itemId": "collectible-15080050188",
        "weight": 13.582
      },
      {
        "itemId": "collectible-15080050150",
        "weight": 12.818
      },
      {
        "itemId": "collectible-15080050132",
        "weight": 12.515
      },
      {
        "itemId": "collectible-15080050180",
        "weight": 12.407
      },
      {
        "itemId": "collectible-15080050013",
        "weight": 12.213
      },
      {
        "itemId": "collectible-15030050013",
        "weight": 11.25
      },
      {
        "itemId": "collectible-15080050204",
        "weight": 11.25
      },
      {
        "itemId": "collectible-15080050205",
        "weight": 11.25
      },
      {
        "itemId": "collectible-15080050191",
        "weight": 10.086
      },
      {
        "itemId": "africa-heart",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15010050001",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15040050002",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080040001",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050003",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050014",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050040",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050041",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050120",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050121",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050122",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050123",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050142",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050166",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050184",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050185",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050187",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15200000060",
        "weight": 8.662
      },
      {
        "itemId": "gold-bar",
        "weight": 8.662
      },
      {
        "itemId": "watch",
        "weight": 8.662
      },
      {
        "itemId": "collectible-15080050171",
        "weight": 6.685
      },
      {
        "itemId": "collectible-15200000031",
        "weight": 6.516
      },
      {
        "itemId": "collectible-15080050062",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15080050071",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15080050069",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15080050173",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000143",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000144",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000166",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000185",
        "weight": 4.5
      },
      {
        "itemId": "camera",
        "weight": 3.937
      },
      {
        "itemId": "collectible-15030050007",
        "weight": 3.937
      },
      {
        "itemId": "collectible-15030050008",
        "weight": 3.937
      },
      {
        "itemId": "collectible-15030050012",
        "weight": 3.937
      },
      {
        "itemId": "collectible-15030050014",
        "weight": 3.937
      },
      {
        "itemId": "collectible-15030050018",
        "weight": 3.937
      },
      {
        "itemId": "collectible-15080050030",
        "weight": 3.937
      },
      {
        "itemId": "collectible-15080050032",
        "weight": 3.937
      },
      {
        "itemId": "collectible-15080050167",
        "weight": 3.937
      },
      {
        "itemId": "collectible-15080050175",
        "weight": 3.937
      },
      {
        "itemId": "collectible-15080050186",
        "weight": 3.937
      },
      {
        "itemId": "drone",
        "weight": 3.937
      },
      {
        "itemId": "military-gpu",
        "weight": 3.937
      },
      {
        "itemId": "portable-radar",
        "weight": 3.937
      },
      {
        "itemId": "radio",
        "weight": 3.937
      },
      {
        "itemId": "collectible-15060080015",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15070040003",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15070050001",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050061",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050066",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050067",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050131",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050151",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050161",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050170",
        "weight": 1.575
      },
      {
        "itemId": "secret-server",
        "weight": 1.575
      }
    ]
  },
  "safe-large": {
    "name": "大保险",
    "size": [
      9,
      9
    ],
    "min": 3,
    "max": 5,
    "pools": [
      {
        "itemId": "collectible-15030010009",
        "weight": 2720
      },
      {
        "itemId": "collectible-15040010003",
        "weight": 1764
      },
      {
        "itemId": "collectible-15080010003",
        "weight": 1764
      },
      {
        "itemId": "collectible-15080010004",
        "weight": 1764
      },
      {
        "itemId": "collectible-15080040004",
        "weight": 1764
      },
      {
        "itemId": "collectible-15080040005",
        "weight": 1764
      },
      {
        "itemId": "collectible-15080050007",
        "weight": 1764
      },
      {
        "itemId": "collectible-15080050017",
        "weight": 1764
      },
      {
        "itemId": "collectible-15020050007",
        "weight": 1428
      },
      {
        "itemId": "collectible-15030010002",
        "weight": 1428
      },
      {
        "itemId": "collectible-15030010007",
        "weight": 1428
      },
      {
        "itemId": "collectible-15030010011",
        "weight": 1428
      },
      {
        "itemId": "collectible-15030010013",
        "weight": 1428
      },
      {
        "itemId": "collectible-15030010014",
        "weight": 1428
      },
      {
        "itemId": "collectible-15030010018",
        "weight": 1428
      },
      {
        "itemId": "collectible-15030010019",
        "weight": 1428
      },
      {
        "itemId": "collectible-15030040011",
        "weight": 1428
      },
      {
        "itemId": "collectible-15080050056",
        "weight": 1120
      },
      {
        "itemId": "collectible-15090010024",
        "weight": 1120
      },
      {
        "itemId": "collectible-15090010026",
        "weight": 1120
      },
      {
        "itemId": "collectible-15090910016",
        "weight": 1120
      },
      {
        "itemId": "collectible-15090910019",
        "weight": 1120
      },
      {
        "itemId": "collectible-15010010004",
        "weight": 800
      },
      {
        "itemId": "collectible-15060010008",
        "weight": 800
      },
      {
        "itemId": "collectible-15060010009",
        "weight": 800
      },
      {
        "itemId": "collectible-15090010077",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050008",
        "weight": 756
      },
      {
        "itemId": "collectible-15080050011",
        "weight": 756
      },
      {
        "itemId": "collectible-15080050012",
        "weight": 756
      },
      {
        "itemId": "collectible-15080050023",
        "weight": 756
      },
      {
        "itemId": "collectible-15080050193",
        "weight": 756
      },
      {
        "itemId": "collectible-15200000073",
        "weight": 756
      },
      {
        "itemId": "collectible-15020050008",
        "weight": 612
      },
      {
        "itemId": "collectible-15030010001",
        "weight": 612
      },
      {
        "itemId": "collectible-15030010008",
        "weight": 612
      },
      {
        "itemId": "collectible-15030040002",
        "weight": 612
      },
      {
        "itemId": "collectible-15030050016",
        "weight": 612
      },
      {
        "itemId": "collectible-15070010001",
        "weight": 612
      },
      {
        "itemId": "collectible-15070010002",
        "weight": 612
      },
      {
        "itemId": "collectible-15080050039",
        "weight": 612
      },
      {
        "itemId": "collectible-15080050194",
        "weight": 612
      },
      {
        "itemId": "collectible-15080050217",
        "weight": 612
      },
      {
        "itemId": "collectible-15070010005",
        "weight": 588
      },
      {
        "itemId": "collectible-15070010006",
        "weight": 588
      },
      {
        "itemId": "collectible-15070010007",
        "weight": 588
      },
      {
        "itemId": "collectible-15070010008",
        "weight": 588
      },
      {
        "itemId": "collectible-15070010009",
        "weight": 588
      },
      {
        "itemId": "collectible-15090910017",
        "weight": 588
      },
      {
        "itemId": "collectible-15090910022",
        "weight": 588
      },
      {
        "itemId": "collectible-15090910023",
        "weight": 588
      },
      {
        "itemId": "collectible-15030040010",
        "weight": 531.467
      },
      {
        "itemId": "collectible-15060010001",
        "weight": 420
      },
      {
        "itemId": "collectible-15060010002",
        "weight": 420
      },
      {
        "itemId": "collectible-15060010003",
        "weight": 420
      },
      {
        "itemId": "collectible-15060010010",
        "weight": 420
      },
      {
        "itemId": "collectible-15060010012",
        "weight": 420
      },
      {
        "itemId": "collectible-15040010014",
        "weight": 252
      },
      {
        "itemId": "collectible-15070040002",
        "weight": 252
      },
      {
        "itemId": "collectible-15070050003",
        "weight": 252
      },
      {
        "itemId": "collectible-15080040002",
        "weight": 252
      },
      {
        "itemId": "collectible-15080040003",
        "weight": 252
      },
      {
        "itemId": "collectible-15080050001",
        "weight": 252
      },
      {
        "itemId": "collectible-15080050016",
        "weight": 252
      },
      {
        "itemId": "collectible-15080050018",
        "weight": 252
      },
      {
        "itemId": "collectible-15080050024",
        "weight": 252
      },
      {
        "itemId": "collectible-15080050096",
        "weight": 252
      },
      {
        "itemId": "collectible-15080050124",
        "weight": 252
      },
      {
        "itemId": "collectible-15080050139",
        "weight": 252
      },
      {
        "itemId": "collectible-15080050182",
        "weight": 252
      },
      {
        "itemId": "collectible-15080050213",
        "weight": 252
      },
      {
        "itemId": "collectible-15200000126",
        "weight": 252
      },
      {
        "itemId": "collectible-15030040012",
        "weight": 204
      },
      {
        "itemId": "collectible-15030040014",
        "weight": 204
      },
      {
        "itemId": "collectible-15030050005",
        "weight": 204
      },
      {
        "itemId": "collectible-15030050011",
        "weight": 204
      },
      {
        "itemId": "collectible-15040010015",
        "weight": 204
      },
      {
        "itemId": "collectible-15040050003",
        "weight": 204
      },
      {
        "itemId": "collectible-15080050037",
        "weight": 204
      },
      {
        "itemId": "collectible-15080050038",
        "weight": 204
      },
      {
        "itemId": "collectible-15080050091",
        "weight": 204
      },
      {
        "itemId": "motherboard",
        "weight": 204
      },
      {
        "itemId": "ram",
        "weight": 204
      },
      {
        "itemId": "ssd",
        "weight": 204
      },
      {
        "itemId": "collectible-15060010004",
        "weight": 180
      },
      {
        "itemId": "collectible-15060010006",
        "weight": 180
      },
      {
        "itemId": "collectible-15060010007",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050065",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050116",
        "weight": 180
      },
      {
        "itemId": "collectible-15090010041",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050036",
        "weight": 154.824
      },
      {
        "itemId": "collectible-15080050043",
        "weight": 128.886
      },
      {
        "itemId": "collectible-15080050134",
        "weight": 109.136
      },
      {
        "itemId": "collectible-15070050002",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050045",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050064",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050172",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050181",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050206",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050207",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050208",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050209",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050216",
        "weight": 84
      },
      {
        "itemId": "collectible-15200000074",
        "weight": 84
      },
      {
        "itemId": "collectible-15200000148",
        "weight": 84
      },
      {
        "itemId": "collectible-15200000149",
        "weight": 84
      },
      {
        "itemId": "collectible-15200000150",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050025",
        "weight": 75.6
      },
      {
        "itemId": "collectible-15200000048",
        "weight": 75.6
      },
      {
        "itemId": "collectible-15200000068",
        "weight": 75.6
      },
      {
        "itemId": "collectible-15200000070",
        "weight": 75.6
      },
      {
        "itemId": "collectible-15200000075",
        "weight": 75.6
      },
      {
        "itemId": "collectible-15200000114",
        "weight": 75.6
      },
      {
        "itemId": "collectible-15200000130",
        "weight": 75.6
      },
      {
        "itemId": "collectible-15200000151",
        "weight": 75.6
      },
      {
        "itemId": "collectible-15200000154",
        "weight": 75.6
      },
      {
        "itemId": "collectible-15200000155",
        "weight": 75.6
      },
      {
        "itemId": "collectible-15200000157",
        "weight": 75.6
      },
      {
        "itemId": "collectible-15200000167",
        "weight": 75.6
      },
      {
        "itemId": "collectible-15080050143",
        "weight": 75.146
      },
      {
        "itemId": "collectible-15080050009",
        "weight": 73.243
      },
      {
        "itemId": "collectible-15080050137",
        "weight": 72.27
      },
      {
        "itemId": "collectible-15080050165",
        "weight": 68.27
      },
      {
        "itemId": "collectible-15080050015",
        "weight": 67.682
      },
      {
        "itemId": "collectible-15200000032",
        "weight": 67.288
      },
      {
        "itemId": "collectible-15060040002",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050057",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050114",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050214",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000061",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050127",
        "weight": 58.807
      },
      {
        "itemId": "collectible-15080050095",
        "weight": 58.066
      },
      {
        "itemId": "collectible-15080050168",
        "weight": 57.427
      },
      {
        "itemId": "collectible-15030040013",
        "weight": 55.16
      },
      {
        "itemId": "collectible-15080050117",
        "weight": 55.078
      },
      {
        "itemId": "cpu",
        "weight": 53.202
      },
      {
        "itemId": "collectible-15080050004",
        "weight": 52.108
      },
      {
        "itemId": "collectible-15200000118",
        "weight": 50.395
      },
      {
        "itemId": "collectible-15080050094",
        "weight": 49.908
      },
      {
        "itemId": "collectible-15080050138",
        "weight": 49.898
      },
      {
        "itemId": "collectible-15080050093",
        "weight": 49.725
      },
      {
        "itemId": "collectible-15080050164",
        "weight": 48.627
      },
      {
        "itemId": "collectible-15030050006",
        "weight": 46.959
      },
      {
        "itemId": "collectible-15080050135",
        "weight": 46.794
      },
      {
        "itemId": "collectible-15080050090",
        "weight": 45.892
      },
      {
        "itemId": "collectible-15080050126",
        "weight": 40.758
      },
      {
        "itemId": "collectible-15030050003",
        "weight": 39.688
      },
      {
        "itemId": "ballistic-computer",
        "weight": 37.504
      },
      {
        "itemId": "collectible-15080050092",
        "weight": 37.446
      },
      {
        "itemId": "collectible-15080050035",
        "weight": 35.783
      },
      {
        "itemId": "collectible-15080050133",
        "weight": 29.487
      },
      {
        "itemId": "collectible-15080050082",
        "weight": 26.46
      },
      {
        "itemId": "collectible-15080050083",
        "weight": 26.46
      },
      {
        "itemId": "collectible-15080050034",
        "weight": 26.239
      },
      {
        "itemId": "collectible-15030040001",
        "weight": 25.887
      },
      {
        "itemId": "collectible-15080050063",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15080050148",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15080050149",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15080050198",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15090010040",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15200000129",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15200000145",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15200000146",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15200000147",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15200000162",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15080050140",
        "weight": 24.808
      },
      {
        "itemId": "collectible-15080050033",
        "weight": 21.42
      },
      {
        "itemId": "collectible-15080050088",
        "weight": 21.42
      },
      {
        "itemId": "collectible-15080050189",
        "weight": 21.42
      },
      {
        "itemId": "collectible-15070040001",
        "weight": 20.194
      },
      {
        "itemId": "collectible-15080050188",
        "weight": 19.015
      },
      {
        "itemId": "collectible-15080050197",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15200000034",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15200000049",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15200000058",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15200000059",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15200000069",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15200000071",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15200000072",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15200000115",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15200000117",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15200000123",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15200000124",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15200000125",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15200000127",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15200000131",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15200000137",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15200000152",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15200000153",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15200000156",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15200000158",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15200000168",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15080050150",
        "weight": 17.945
      },
      {
        "itemId": "collectible-15080050115",
        "weight": 17.395
      },
      {
        "itemId": "collectible-15080050013",
        "weight": 17.098
      },
      {
        "itemId": "collectible-15060040003",
        "weight": 16.13
      },
      {
        "itemId": "collectible-15030050013",
        "weight": 15.3
      },
      {
        "itemId": "collectible-15080050204",
        "weight": 15.3
      },
      {
        "itemId": "collectible-15080050205",
        "weight": 15.3
      },
      {
        "itemId": "collectible-15080050191",
        "weight": 14.121
      },
      {
        "itemId": "collectible-15080050129",
        "weight": 13.184
      },
      {
        "itemId": "collectible-15040010019",
        "weight": 13.152
      },
      {
        "itemId": "collectible-15060040001",
        "weight": 12.519
      },
      {
        "itemId": "collectible-15080050195",
        "weight": 11.075
      },
      {
        "itemId": "collectible-15080050171",
        "weight": 9.359
      },
      {
        "itemId": "collectible-15200000031",
        "weight": 9.122
      },
      {
        "itemId": "collectible-15080050062",
        "weight": 8.82
      },
      {
        "itemId": "collectible-15080050212",
        "weight": 8.737
      },
      {
        "itemId": "africa-heart",
        "weight": 6.615
      },
      {
        "itemId": "collectible-15010050001",
        "weight": 6.615
      },
      {
        "itemId": "collectible-15040050002",
        "weight": 6.615
      },
      {
        "itemId": "collectible-15080040001",
        "weight": 6.615
      },
      {
        "itemId": "collectible-15080050003",
        "weight": 6.615
      },
      {
        "itemId": "collectible-15080050014",
        "weight": 6.615
      },
      {
        "itemId": "collectible-15080050040",
        "weight": 6.615
      },
      {
        "itemId": "collectible-15080050041",
        "weight": 6.615
      },
      {
        "itemId": "collectible-15080050120",
        "weight": 6.615
      },
      {
        "itemId": "collectible-15080050121",
        "weight": 6.615
      },
      {
        "itemId": "collectible-15080050122",
        "weight": 6.615
      },
      {
        "itemId": "collectible-15080050123",
        "weight": 6.615
      },
      {
        "itemId": "collectible-15080050142",
        "weight": 6.615
      },
      {
        "itemId": "collectible-15080050166",
        "weight": 6.615
      },
      {
        "itemId": "collectible-15080050184",
        "weight": 6.615
      },
      {
        "itemId": "collectible-15080050185",
        "weight": 6.615
      },
      {
        "itemId": "collectible-15080050187",
        "weight": 6.615
      },
      {
        "itemId": "collectible-15200000060",
        "weight": 6.615
      },
      {
        "itemId": "gold-bar",
        "weight": 6.615
      },
      {
        "itemId": "watch",
        "weight": 6.615
      },
      {
        "itemId": "collectible-15080050192",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15200000144",
        "weight": 6.3
      },
      {
        "itemId": "camera",
        "weight": 5.355
      },
      {
        "itemId": "collectible-15030050007",
        "weight": 5.355
      },
      {
        "itemId": "collectible-15030050008",
        "weight": 5.355
      },
      {
        "itemId": "collectible-15030050012",
        "weight": 5.355
      },
      {
        "itemId": "collectible-15030050014",
        "weight": 5.355
      },
      {
        "itemId": "collectible-15030050018",
        "weight": 5.355
      },
      {
        "itemId": "collectible-15080050030",
        "weight": 5.355
      },
      {
        "itemId": "collectible-15080050032",
        "weight": 5.355
      },
      {
        "itemId": "collectible-15080050167",
        "weight": 5.355
      },
      {
        "itemId": "collectible-15080050175",
        "weight": 5.355
      },
      {
        "itemId": "collectible-15080050186",
        "weight": 5.355
      },
      {
        "itemId": "drone",
        "weight": 5.355
      },
      {
        "itemId": "military-gpu",
        "weight": 5.355
      },
      {
        "itemId": "portable-radar",
        "weight": 5.355
      },
      {
        "itemId": "radio",
        "weight": 5.355
      },
      {
        "itemId": "collectible-15070040003",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15070050001",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15080050061",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15080050151",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15080050161",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15080050170",
        "weight": 2.205
      },
      {
        "itemId": "secret-server",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15060040004",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050058",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050113",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050128",
        "weight": 1.575
      },
      {
        "itemId": "resuscitator",
        "weight": 1.575
      }
    ]
  },
  "hacker-pc": {
    "name": "骇客电脑",
    "size": [
      7,
      6
    ],
    "min": 2,
    "max": 4,
    "pools": [
      {
        "itemId": "collectible-15030010009",
        "weight": 6240
      },
      {
        "itemId": "collectible-15020050007",
        "weight": 3276
      },
      {
        "itemId": "collectible-15030010002",
        "weight": 3276
      },
      {
        "itemId": "collectible-15030010007",
        "weight": 3276
      },
      {
        "itemId": "collectible-15030010011",
        "weight": 3276
      },
      {
        "itemId": "collectible-15030010013",
        "weight": 3276
      },
      {
        "itemId": "collectible-15030010014",
        "weight": 3276
      },
      {
        "itemId": "collectible-15030010018",
        "weight": 3276
      },
      {
        "itemId": "collectible-15030010019",
        "weight": 3276
      },
      {
        "itemId": "collectible-15030040011",
        "weight": 3276
      },
      {
        "itemId": "collectible-15080050056",
        "weight": 1760
      },
      {
        "itemId": "collectible-15090010024",
        "weight": 1760
      },
      {
        "itemId": "collectible-15090010026",
        "weight": 1760
      },
      {
        "itemId": "collectible-15090910016",
        "weight": 1760
      },
      {
        "itemId": "collectible-15090910019",
        "weight": 1760
      },
      {
        "itemId": "collectible-15020050008",
        "weight": 1404
      },
      {
        "itemId": "collectible-15030010001",
        "weight": 1404
      },
      {
        "itemId": "collectible-15030010008",
        "weight": 1404
      },
      {
        "itemId": "collectible-15030040002",
        "weight": 1404
      },
      {
        "itemId": "collectible-15030050016",
        "weight": 1404
      },
      {
        "itemId": "collectible-15070010001",
        "weight": 1404
      },
      {
        "itemId": "collectible-15070010002",
        "weight": 1404
      },
      {
        "itemId": "collectible-15080050039",
        "weight": 1404
      },
      {
        "itemId": "collectible-15080050194",
        "weight": 1404
      },
      {
        "itemId": "collectible-15080050217",
        "weight": 1404
      },
      {
        "itemId": "collectible-15030040010",
        "weight": 1219.248
      },
      {
        "itemId": "collectible-15070010005",
        "weight": 924
      },
      {
        "itemId": "collectible-15070010006",
        "weight": 924
      },
      {
        "itemId": "collectible-15070010007",
        "weight": 924
      },
      {
        "itemId": "collectible-15070010008",
        "weight": 924
      },
      {
        "itemId": "collectible-15070010009",
        "weight": 924
      },
      {
        "itemId": "collectible-15090910017",
        "weight": 924
      },
      {
        "itemId": "collectible-15090910022",
        "weight": 924
      },
      {
        "itemId": "collectible-15090910023",
        "weight": 924
      },
      {
        "itemId": "collectible-15030040012",
        "weight": 468
      },
      {
        "itemId": "collectible-15030040014",
        "weight": 468
      },
      {
        "itemId": "collectible-15030050005",
        "weight": 468
      },
      {
        "itemId": "collectible-15030050011",
        "weight": 468
      },
      {
        "itemId": "collectible-15040010015",
        "weight": 468
      },
      {
        "itemId": "collectible-15040050003",
        "weight": 468
      },
      {
        "itemId": "collectible-15080050037",
        "weight": 468
      },
      {
        "itemId": "collectible-15080050038",
        "weight": 468
      },
      {
        "itemId": "collectible-15080050091",
        "weight": 468
      },
      {
        "itemId": "motherboard",
        "weight": 468
      },
      {
        "itemId": "ram",
        "weight": 468
      },
      {
        "itemId": "ssd",
        "weight": 468
      },
      {
        "itemId": "collectible-15070040002",
        "weight": 396
      },
      {
        "itemId": "collectible-15070050003",
        "weight": 396
      },
      {
        "itemId": "collectible-15080050096",
        "weight": 396
      },
      {
        "itemId": "collectible-15080050213",
        "weight": 396
      },
      {
        "itemId": "collectible-15080050036",
        "weight": 355.185
      },
      {
        "itemId": "collectible-15080050095",
        "weight": 133.211
      },
      {
        "itemId": "collectible-15070050002",
        "weight": 132
      },
      {
        "itemId": "collectible-15080050045",
        "weight": 132
      },
      {
        "itemId": "collectible-15080050064",
        "weight": 132
      },
      {
        "itemId": "collectible-15080050172",
        "weight": 132
      },
      {
        "itemId": "collectible-15080050181",
        "weight": 132
      },
      {
        "itemId": "collectible-15080050206",
        "weight": 132
      },
      {
        "itemId": "collectible-15080050207",
        "weight": 132
      },
      {
        "itemId": "collectible-15080050208",
        "weight": 132
      },
      {
        "itemId": "collectible-15080050209",
        "weight": 132
      },
      {
        "itemId": "collectible-15080050216",
        "weight": 132
      },
      {
        "itemId": "collectible-15200000074",
        "weight": 132
      },
      {
        "itemId": "collectible-15200000148",
        "weight": 132
      },
      {
        "itemId": "collectible-15200000149",
        "weight": 132
      },
      {
        "itemId": "collectible-15200000150",
        "weight": 132
      },
      {
        "itemId": "collectible-15080050168",
        "weight": 131.744
      },
      {
        "itemId": "collectible-15030040013",
        "weight": 126.544
      },
      {
        "itemId": "cpu",
        "weight": 122.051
      },
      {
        "itemId": "collectible-15030050006",
        "weight": 107.729
      },
      {
        "itemId": "collectible-15080050090",
        "weight": 105.283
      },
      {
        "itemId": "collectible-15080050126",
        "weight": 93.503
      },
      {
        "itemId": "collectible-15030050003",
        "weight": 91.048
      },
      {
        "itemId": "ballistic-computer",
        "weight": 86.037
      },
      {
        "itemId": "collectible-15080050035",
        "weight": 82.09
      },
      {
        "itemId": "collectible-15080050034",
        "weight": 60.195
      },
      {
        "itemId": "collectible-15030040001",
        "weight": 59.389
      },
      {
        "itemId": "collectible-15080050033",
        "weight": 49.14
      },
      {
        "itemId": "collectible-15080050088",
        "weight": 49.14
      },
      {
        "itemId": "collectible-15080050189",
        "weight": 49.14
      },
      {
        "itemId": "collectible-15080050063",
        "weight": 39.6
      },
      {
        "itemId": "collectible-15080050148",
        "weight": 39.6
      },
      {
        "itemId": "collectible-15080050149",
        "weight": 39.6
      },
      {
        "itemId": "collectible-15080050198",
        "weight": 39.6
      },
      {
        "itemId": "collectible-15090010040",
        "weight": 39.6
      },
      {
        "itemId": "collectible-15200000129",
        "weight": 39.6
      },
      {
        "itemId": "collectible-15200000145",
        "weight": 39.6
      },
      {
        "itemId": "collectible-15200000146",
        "weight": 39.6
      },
      {
        "itemId": "collectible-15200000147",
        "weight": 39.6
      },
      {
        "itemId": "collectible-15200000162",
        "weight": 39.6
      },
      {
        "itemId": "collectible-15080050140",
        "weight": 38.984
      },
      {
        "itemId": "collectible-15030050013",
        "weight": 35.1
      },
      {
        "itemId": "collectible-15080050204",
        "weight": 35.1
      },
      {
        "itemId": "collectible-15080050205",
        "weight": 35.1
      },
      {
        "itemId": "collectible-15070040001",
        "weight": 31.733
      },
      {
        "itemId": "collectible-15080050188",
        "weight": 29.881
      },
      {
        "itemId": "collectible-15080050150",
        "weight": 28.199
      },
      {
        "itemId": "collectible-15080050013",
        "weight": 26.868
      },
      {
        "itemId": "collectible-15080050191",
        "weight": 22.19
      },
      {
        "itemId": "collectible-15080050171",
        "weight": 14.707
      },
      {
        "itemId": "collectible-15200000031",
        "weight": 14.335
      },
      {
        "itemId": "collectible-15080050062",
        "weight": 13.86
      },
      {
        "itemId": "camera",
        "weight": 12.285
      },
      {
        "itemId": "collectible-15030050007",
        "weight": 12.285
      },
      {
        "itemId": "collectible-15030050008",
        "weight": 12.285
      },
      {
        "itemId": "collectible-15030050012",
        "weight": 12.285
      },
      {
        "itemId": "collectible-15030050014",
        "weight": 12.285
      },
      {
        "itemId": "collectible-15030050018",
        "weight": 12.285
      },
      {
        "itemId": "collectible-15080050030",
        "weight": 12.285
      },
      {
        "itemId": "collectible-15080050032",
        "weight": 12.285
      },
      {
        "itemId": "collectible-15080050167",
        "weight": 12.285
      },
      {
        "itemId": "collectible-15080050175",
        "weight": 12.285
      },
      {
        "itemId": "collectible-15080050186",
        "weight": 12.285
      },
      {
        "itemId": "drone",
        "weight": 12.285
      },
      {
        "itemId": "military-gpu",
        "weight": 12.285
      },
      {
        "itemId": "portable-radar",
        "weight": 12.285
      },
      {
        "itemId": "radio",
        "weight": 12.285
      },
      {
        "itemId": "collectible-15200000144",
        "weight": 9.9
      },
      {
        "itemId": "collectible-15070040003",
        "weight": 3.465
      },
      {
        "itemId": "collectible-15070050001",
        "weight": 3.465
      },
      {
        "itemId": "collectible-15080050061",
        "weight": 3.465
      },
      {
        "itemId": "collectible-15080050151",
        "weight": 3.465
      },
      {
        "itemId": "collectible-15080050161",
        "weight": 3.465
      },
      {
        "itemId": "collectible-15080050170",
        "weight": 3.465
      },
      {
        "itemId": "secret-server",
        "weight": 3.465
      }
    ]
  },
  "computer-case": {
    "name": "电脑机箱",
    "size": [
      5,
      5
    ],
    "min": 1,
    "max": 3,
    "pools": [
      {
        "itemId": "collectible-15030010009",
        "weight": 6000
      },
      {
        "itemId": "collectible-15020050007",
        "weight": 3150
      },
      {
        "itemId": "collectible-15030010002",
        "weight": 3150
      },
      {
        "itemId": "collectible-15030010007",
        "weight": 3150
      },
      {
        "itemId": "collectible-15030010011",
        "weight": 3150
      },
      {
        "itemId": "collectible-15030010013",
        "weight": 3150
      },
      {
        "itemId": "collectible-15030010014",
        "weight": 3150
      },
      {
        "itemId": "collectible-15030010018",
        "weight": 3150
      },
      {
        "itemId": "collectible-15030010019",
        "weight": 3150
      },
      {
        "itemId": "collectible-15030040011",
        "weight": 3150
      },
      {
        "itemId": "collectible-15020050008",
        "weight": 1350
      },
      {
        "itemId": "collectible-15030010001",
        "weight": 1350
      },
      {
        "itemId": "collectible-15030010008",
        "weight": 1350
      },
      {
        "itemId": "collectible-15030040002",
        "weight": 1350
      },
      {
        "itemId": "collectible-15030050016",
        "weight": 1350
      },
      {
        "itemId": "collectible-15070010001",
        "weight": 1350
      },
      {
        "itemId": "collectible-15070010002",
        "weight": 1350
      },
      {
        "itemId": "collectible-15080050039",
        "weight": 1350
      },
      {
        "itemId": "collectible-15080050194",
        "weight": 1350
      },
      {
        "itemId": "collectible-15080050217",
        "weight": 1350
      },
      {
        "itemId": "collectible-15020010001",
        "weight": 1200
      },
      {
        "itemId": "collectible-15020010002",
        "weight": 1200
      },
      {
        "itemId": "collectible-15020010003",
        "weight": 1200
      },
      {
        "itemId": "collectible-15020010004",
        "weight": 1200
      },
      {
        "itemId": "collectible-15020010006",
        "weight": 1200
      },
      {
        "itemId": "collectible-15020010010",
        "weight": 1200
      },
      {
        "itemId": "collectible-15020010014",
        "weight": 1200
      },
      {
        "itemId": "collectible-15040010016",
        "weight": 1200
      },
      {
        "itemId": "collectible-15080050085",
        "weight": 1200
      },
      {
        "itemId": "collectible-15080050086",
        "weight": 1200
      },
      {
        "itemId": "collectible-15030040010",
        "weight": 1172.354
      },
      {
        "itemId": "collectible-15080050056",
        "weight": 800
      },
      {
        "itemId": "collectible-15090010024",
        "weight": 800
      },
      {
        "itemId": "collectible-15090010026",
        "weight": 800
      },
      {
        "itemId": "collectible-15090910016",
        "weight": 800
      },
      {
        "itemId": "collectible-15090910019",
        "weight": 800
      },
      {
        "itemId": "collectible-15020010007",
        "weight": 630
      },
      {
        "itemId": "collectible-15020010008",
        "weight": 630
      },
      {
        "itemId": "collectible-15020010017",
        "weight": 630
      },
      {
        "itemId": "collectible-15020010019",
        "weight": 630
      },
      {
        "itemId": "collectible-15020010020",
        "weight": 630
      },
      {
        "itemId": "collectible-15020010021",
        "weight": 630
      },
      {
        "itemId": "collectible-15020010026",
        "weight": 630
      },
      {
        "itemId": "collectible-15020010027",
        "weight": 630
      },
      {
        "itemId": "collectible-15020010030",
        "weight": 630
      },
      {
        "itemId": "collectible-15020010032",
        "weight": 630
      },
      {
        "itemId": "collectible-15020040003",
        "weight": 630
      },
      {
        "itemId": "collectible-15020040004",
        "weight": 630
      },
      {
        "itemId": "collectible-15040010012",
        "weight": 630
      },
      {
        "itemId": "collectible-15080050084",
        "weight": 630
      },
      {
        "itemId": "collectible-15080050087",
        "weight": 630
      },
      {
        "itemId": "screwdriver",
        "weight": 630
      },
      {
        "itemId": "wire",
        "weight": 630
      },
      {
        "itemId": "collectible-15030040012",
        "weight": 450
      },
      {
        "itemId": "collectible-15030040014",
        "weight": 450
      },
      {
        "itemId": "collectible-15030050005",
        "weight": 450
      },
      {
        "itemId": "collectible-15030050011",
        "weight": 450
      },
      {
        "itemId": "collectible-15040010015",
        "weight": 450
      },
      {
        "itemId": "collectible-15040050003",
        "weight": 450
      },
      {
        "itemId": "collectible-15080050037",
        "weight": 450
      },
      {
        "itemId": "collectible-15080050038",
        "weight": 450
      },
      {
        "itemId": "collectible-15080050091",
        "weight": 450
      },
      {
        "itemId": "motherboard",
        "weight": 450
      },
      {
        "itemId": "ram",
        "weight": 450
      },
      {
        "itemId": "ssd",
        "weight": 450
      },
      {
        "itemId": "collectible-15070010005",
        "weight": 420
      },
      {
        "itemId": "collectible-15070010006",
        "weight": 420
      },
      {
        "itemId": "collectible-15070010007",
        "weight": 420
      },
      {
        "itemId": "collectible-15070010008",
        "weight": 420
      },
      {
        "itemId": "collectible-15070010009",
        "weight": 420
      },
      {
        "itemId": "collectible-15090910017",
        "weight": 420
      },
      {
        "itemId": "collectible-15090910022",
        "weight": 420
      },
      {
        "itemId": "collectible-15090910023",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050036",
        "weight": 341.524
      },
      {
        "itemId": "cement-bag",
        "weight": 270
      },
      {
        "itemId": "collectible-15020010016",
        "weight": 270
      },
      {
        "itemId": "collectible-15020010018",
        "weight": 270
      },
      {
        "itemId": "collectible-15020010023",
        "weight": 270
      },
      {
        "itemId": "collectible-15020040002",
        "weight": 270
      },
      {
        "itemId": "collectible-15040010017",
        "weight": 270
      },
      {
        "itemId": "collectible-15040010021",
        "weight": 270
      },
      {
        "itemId": "collectible-15040010022",
        "weight": 270
      },
      {
        "itemId": "fabric",
        "weight": 270
      },
      {
        "itemId": "toolbox-item",
        "weight": 270
      },
      {
        "itemId": "wireless-drill",
        "weight": 270
      },
      {
        "itemId": "collectible-15070040002",
        "weight": 180
      },
      {
        "itemId": "collectible-15070050003",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050096",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050213",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050095",
        "weight": 128.088
      },
      {
        "itemId": "collectible-15080050168",
        "weight": 126.677
      },
      {
        "itemId": "collectible-15030040013",
        "weight": 121.677
      },
      {
        "itemId": "cpu",
        "weight": 117.356
      },
      {
        "itemId": "collectible-15030050006",
        "weight": 103.586
      },
      {
        "itemId": "collectible-15080050090",
        "weight": 101.233
      },
      {
        "itemId": "collectible-15020010024",
        "weight": 90
      },
      {
        "itemId": "collectible-15020050003",
        "weight": 90
      },
      {
        "itemId": "collectible-15020050004",
        "weight": 90
      },
      {
        "itemId": "collectible-15020050006",
        "weight": 90
      },
      {
        "itemId": "collectible-15080050119",
        "weight": 90
      },
      {
        "itemId": "collectible-15080050130",
        "weight": 90
      },
      {
        "itemId": "collectible-15200000044",
        "weight": 90
      },
      {
        "itemId": "special-steel",
        "weight": 90
      },
      {
        "itemId": "wrench",
        "weight": 90
      },
      {
        "itemId": "collectible-15080050126",
        "weight": 89.907
      },
      {
        "itemId": "collectible-15030050003",
        "weight": 87.547
      },
      {
        "itemId": "ballistic-computer",
        "weight": 82.728
      },
      {
        "itemId": "collectible-15080050035",
        "weight": 78.933
      },
      {
        "itemId": "collectible-15070050002",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050045",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050064",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050172",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050181",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050206",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050207",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050208",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050209",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050216",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000074",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000148",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000149",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000150",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050034",
        "weight": 57.879
      },
      {
        "itemId": "collectible-15030040001",
        "weight": 57.105
      },
      {
        "itemId": "collectible-15080050033",
        "weight": 47.25
      },
      {
        "itemId": "collectible-15080050088",
        "weight": 47.25
      },
      {
        "itemId": "collectible-15080050189",
        "weight": 47.25
      },
      {
        "itemId": "collectible-15030050013",
        "weight": 33.75
      },
      {
        "itemId": "collectible-15080050204",
        "weight": 33.75
      },
      {
        "itemId": "collectible-15080050205",
        "weight": 33.75
      },
      {
        "itemId": "collectible-15080050174",
        "weight": 22.914
      },
      {
        "itemId": "collectible-15080050179",
        "weight": 18.376
      },
      {
        "itemId": "collectible-15080050063",
        "weight": 18
      },
      {
        "itemId": "collectible-15080050148",
        "weight": 18
      },
      {
        "itemId": "collectible-15080050149",
        "weight": 18
      },
      {
        "itemId": "collectible-15080050198",
        "weight": 18
      },
      {
        "itemId": "collectible-15090010040",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000129",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000145",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000146",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000147",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000162",
        "weight": 18
      },
      {
        "itemId": "collectible-15080050140",
        "weight": 17.72
      },
      {
        "itemId": "collectible-15070040001",
        "weight": 14.424
      },
      {
        "itemId": "collectible-15080050188",
        "weight": 13.582
      },
      {
        "itemId": "collectible-15080050150",
        "weight": 12.818
      },
      {
        "itemId": "collectible-15080050013",
        "weight": 12.213
      },
      {
        "itemId": "camera",
        "weight": 11.813
      },
      {
        "itemId": "collectible-15030050007",
        "weight": 11.813
      },
      {
        "itemId": "collectible-15030050008",
        "weight": 11.813
      },
      {
        "itemId": "collectible-15030050012",
        "weight": 11.813
      },
      {
        "itemId": "collectible-15030050014",
        "weight": 11.813
      },
      {
        "itemId": "collectible-15030050018",
        "weight": 11.813
      },
      {
        "itemId": "collectible-15080050030",
        "weight": 11.813
      },
      {
        "itemId": "collectible-15080050032",
        "weight": 11.813
      },
      {
        "itemId": "collectible-15080050167",
        "weight": 11.813
      },
      {
        "itemId": "collectible-15080050175",
        "weight": 11.813
      },
      {
        "itemId": "collectible-15080050186",
        "weight": 11.813
      },
      {
        "itemId": "drone",
        "weight": 11.813
      },
      {
        "itemId": "military-gpu",
        "weight": 11.813
      },
      {
        "itemId": "portable-radar",
        "weight": 11.813
      },
      {
        "itemId": "radio",
        "weight": 11.813
      },
      {
        "itemId": "collectible-15030050019",
        "weight": 11.347
      },
      {
        "itemId": "collectible-15080050191",
        "weight": 10.086
      },
      {
        "itemId": "collectible-15040010023",
        "weight": 9.45
      },
      {
        "itemId": "collectible-15080050144",
        "weight": 6.75
      },
      {
        "itemId": "collectible-15080050220",
        "weight": 6.75
      },
      {
        "itemId": "collectible-15080050171",
        "weight": 6.685
      },
      {
        "itemId": "collectible-15200000031",
        "weight": 6.516
      },
      {
        "itemId": "collectible-15080050062",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15200000144",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15020010031",
        "weight": 2.362
      },
      {
        "itemId": "collectible-15030050017",
        "weight": 2.362
      },
      {
        "itemId": "collectible-15080050178",
        "weight": 2.362
      },
      {
        "itemId": "collectible-15080050211",
        "weight": 2.362
      },
      {
        "itemId": "collectible-15070040003",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15070050001",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050061",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050151",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050161",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050170",
        "weight": 1.575
      },
      {
        "itemId": "secret-server",
        "weight": 1.575
      }
    ]
  },
  "server-rack": {
    "name": "服务器",
    "size": [
      8,
      7
    ],
    "min": 2,
    "max": 4,
    "pools": [
      {
        "itemId": "collectible-15030010009",
        "weight": 6720
      },
      {
        "itemId": "collectible-15020050007",
        "weight": 3528
      },
      {
        "itemId": "collectible-15030010002",
        "weight": 3528
      },
      {
        "itemId": "collectible-15030010007",
        "weight": 3528
      },
      {
        "itemId": "collectible-15030010011",
        "weight": 3528
      },
      {
        "itemId": "collectible-15030010013",
        "weight": 3528
      },
      {
        "itemId": "collectible-15030010014",
        "weight": 3528
      },
      {
        "itemId": "collectible-15030010018",
        "weight": 3528
      },
      {
        "itemId": "collectible-15030010019",
        "weight": 3528
      },
      {
        "itemId": "collectible-15030040011",
        "weight": 3528
      },
      {
        "itemId": "collectible-15020050008",
        "weight": 1512
      },
      {
        "itemId": "collectible-15030010001",
        "weight": 1512
      },
      {
        "itemId": "collectible-15030010008",
        "weight": 1512
      },
      {
        "itemId": "collectible-15030040002",
        "weight": 1512
      },
      {
        "itemId": "collectible-15030050016",
        "weight": 1512
      },
      {
        "itemId": "collectible-15070010001",
        "weight": 1512
      },
      {
        "itemId": "collectible-15070010002",
        "weight": 1512
      },
      {
        "itemId": "collectible-15080050039",
        "weight": 1512
      },
      {
        "itemId": "collectible-15080050194",
        "weight": 1512
      },
      {
        "itemId": "collectible-15080050217",
        "weight": 1512
      },
      {
        "itemId": "collectible-15030040010",
        "weight": 1313.036
      },
      {
        "itemId": "collectible-15080050056",
        "weight": 1280
      },
      {
        "itemId": "collectible-15090010024",
        "weight": 1280
      },
      {
        "itemId": "collectible-15090010026",
        "weight": 1280
      },
      {
        "itemId": "collectible-15090910016",
        "weight": 1280
      },
      {
        "itemId": "collectible-15090910019",
        "weight": 1280
      },
      {
        "itemId": "collectible-15070010005",
        "weight": 672
      },
      {
        "itemId": "collectible-15070010006",
        "weight": 672
      },
      {
        "itemId": "collectible-15070010007",
        "weight": 672
      },
      {
        "itemId": "collectible-15070010008",
        "weight": 672
      },
      {
        "itemId": "collectible-15070010009",
        "weight": 672
      },
      {
        "itemId": "collectible-15090910017",
        "weight": 672
      },
      {
        "itemId": "collectible-15090910022",
        "weight": 672
      },
      {
        "itemId": "collectible-15090910023",
        "weight": 672
      },
      {
        "itemId": "collectible-15030040012",
        "weight": 504
      },
      {
        "itemId": "collectible-15030040014",
        "weight": 504
      },
      {
        "itemId": "collectible-15030050005",
        "weight": 504
      },
      {
        "itemId": "collectible-15030050011",
        "weight": 504
      },
      {
        "itemId": "collectible-15040010015",
        "weight": 504
      },
      {
        "itemId": "collectible-15040050003",
        "weight": 504
      },
      {
        "itemId": "collectible-15080050037",
        "weight": 504
      },
      {
        "itemId": "collectible-15080050038",
        "weight": 504
      },
      {
        "itemId": "collectible-15080050091",
        "weight": 504
      },
      {
        "itemId": "motherboard",
        "weight": 504
      },
      {
        "itemId": "ram",
        "weight": 504
      },
      {
        "itemId": "ssd",
        "weight": 504
      },
      {
        "itemId": "collectible-15080050036",
        "weight": 382.507
      },
      {
        "itemId": "collectible-15070040002",
        "weight": 288
      },
      {
        "itemId": "collectible-15070050003",
        "weight": 288
      },
      {
        "itemId": "collectible-15080050096",
        "weight": 288
      },
      {
        "itemId": "collectible-15080050213",
        "weight": 288
      },
      {
        "itemId": "collectible-15080050095",
        "weight": 143.458
      },
      {
        "itemId": "collectible-15080050168",
        "weight": 141.878
      },
      {
        "itemId": "collectible-15030040013",
        "weight": 136.278
      },
      {
        "itemId": "cpu",
        "weight": 131.439
      },
      {
        "itemId": "collectible-15030050006",
        "weight": 116.016
      },
      {
        "itemId": "collectible-15080050090",
        "weight": 113.381
      },
      {
        "itemId": "collectible-15080050126",
        "weight": 100.696
      },
      {
        "itemId": "collectible-15030050003",
        "weight": 98.052
      },
      {
        "itemId": "collectible-15070050002",
        "weight": 96
      },
      {
        "itemId": "collectible-15080050045",
        "weight": 96
      },
      {
        "itemId": "collectible-15080050064",
        "weight": 96
      },
      {
        "itemId": "collectible-15080050172",
        "weight": 96
      },
      {
        "itemId": "collectible-15080050181",
        "weight": 96
      },
      {
        "itemId": "collectible-15080050206",
        "weight": 96
      },
      {
        "itemId": "collectible-15080050207",
        "weight": 96
      },
      {
        "itemId": "collectible-15080050208",
        "weight": 96
      },
      {
        "itemId": "collectible-15080050209",
        "weight": 96
      },
      {
        "itemId": "collectible-15080050216",
        "weight": 96
      },
      {
        "itemId": "collectible-15200000074",
        "weight": 96
      },
      {
        "itemId": "collectible-15200000148",
        "weight": 96
      },
      {
        "itemId": "collectible-15200000149",
        "weight": 96
      },
      {
        "itemId": "collectible-15200000150",
        "weight": 96
      },
      {
        "itemId": "ballistic-computer",
        "weight": 92.656
      },
      {
        "itemId": "collectible-15080050035",
        "weight": 88.405
      },
      {
        "itemId": "collectible-15080050034",
        "weight": 64.825
      },
      {
        "itemId": "collectible-15030040001",
        "weight": 63.957
      },
      {
        "itemId": "collectible-15080050033",
        "weight": 52.92
      },
      {
        "itemId": "collectible-15080050088",
        "weight": 52.92
      },
      {
        "itemId": "collectible-15080050189",
        "weight": 52.92
      },
      {
        "itemId": "collectible-15030050013",
        "weight": 37.8
      },
      {
        "itemId": "collectible-15080050204",
        "weight": 37.8
      },
      {
        "itemId": "collectible-15080050205",
        "weight": 37.8
      },
      {
        "itemId": "collectible-15080050063",
        "weight": 28.8
      },
      {
        "itemId": "collectible-15080050148",
        "weight": 28.8
      },
      {
        "itemId": "collectible-15080050149",
        "weight": 28.8
      },
      {
        "itemId": "collectible-15080050198",
        "weight": 28.8
      },
      {
        "itemId": "collectible-15090010040",
        "weight": 28.8
      },
      {
        "itemId": "collectible-15200000129",
        "weight": 28.8
      },
      {
        "itemId": "collectible-15200000145",
        "weight": 28.8
      },
      {
        "itemId": "collectible-15200000146",
        "weight": 28.8
      },
      {
        "itemId": "collectible-15200000147",
        "weight": 28.8
      },
      {
        "itemId": "collectible-15200000162",
        "weight": 28.8
      },
      {
        "itemId": "collectible-15080050140",
        "weight": 28.352
      },
      {
        "itemId": "collectible-15070040001",
        "weight": 23.079
      },
      {
        "itemId": "collectible-15080050188",
        "weight": 21.732
      },
      {
        "itemId": "collectible-15080050150",
        "weight": 20.508
      },
      {
        "itemId": "collectible-15080050013",
        "weight": 19.54
      },
      {
        "itemId": "collectible-15080050191",
        "weight": 16.138
      },
      {
        "itemId": "camera",
        "weight": 13.23
      },
      {
        "itemId": "collectible-15030050007",
        "weight": 13.23
      },
      {
        "itemId": "collectible-15030050008",
        "weight": 13.23
      },
      {
        "itemId": "collectible-15030050012",
        "weight": 13.23
      },
      {
        "itemId": "collectible-15030050014",
        "weight": 13.23
      },
      {
        "itemId": "collectible-15030050018",
        "weight": 13.23
      },
      {
        "itemId": "collectible-15080050030",
        "weight": 13.23
      },
      {
        "itemId": "collectible-15080050032",
        "weight": 13.23
      },
      {
        "itemId": "collectible-15080050167",
        "weight": 13.23
      },
      {
        "itemId": "collectible-15080050175",
        "weight": 13.23
      },
      {
        "itemId": "collectible-15080050186",
        "weight": 13.23
      },
      {
        "itemId": "drone",
        "weight": 13.23
      },
      {
        "itemId": "military-gpu",
        "weight": 13.23
      },
      {
        "itemId": "portable-radar",
        "weight": 13.23
      },
      {
        "itemId": "radio",
        "weight": 13.23
      },
      {
        "itemId": "collectible-15080050171",
        "weight": 10.696
      },
      {
        "itemId": "collectible-15200000031",
        "weight": 10.425
      },
      {
        "itemId": "collectible-15080050062",
        "weight": 10.08
      },
      {
        "itemId": "collectible-15200000144",
        "weight": 7.2
      },
      {
        "itemId": "collectible-15070040003",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15070050001",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080050061",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080050151",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080050161",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080050170",
        "weight": 2.52
      },
      {
        "itemId": "secret-server",
        "weight": 2.52
      }
    ]
  },
  "tool-cabinet": {
    "name": "工具柜",
    "size": [
      6,
      6
    ],
    "min": 2,
    "max": 4,
    "pools": [
      {
        "itemId": "collectible-15020010001",
        "weight": 5920
      },
      {
        "itemId": "collectible-15020010002",
        "weight": 5920
      },
      {
        "itemId": "collectible-15020010003",
        "weight": 5920
      },
      {
        "itemId": "collectible-15020010004",
        "weight": 5920
      },
      {
        "itemId": "collectible-15020010006",
        "weight": 5920
      },
      {
        "itemId": "collectible-15020010010",
        "weight": 5920
      },
      {
        "itemId": "collectible-15020010014",
        "weight": 5920
      },
      {
        "itemId": "collectible-15040010016",
        "weight": 5920
      },
      {
        "itemId": "collectible-15080050085",
        "weight": 5920
      },
      {
        "itemId": "collectible-15080050086",
        "weight": 5920
      },
      {
        "itemId": "collectible-15020010007",
        "weight": 3108
      },
      {
        "itemId": "collectible-15020010008",
        "weight": 3108
      },
      {
        "itemId": "collectible-15020010017",
        "weight": 3108
      },
      {
        "itemId": "collectible-15020010019",
        "weight": 3108
      },
      {
        "itemId": "collectible-15020010020",
        "weight": 3108
      },
      {
        "itemId": "collectible-15020010021",
        "weight": 3108
      },
      {
        "itemId": "collectible-15020010026",
        "weight": 3108
      },
      {
        "itemId": "collectible-15020010027",
        "weight": 3108
      },
      {
        "itemId": "collectible-15020010030",
        "weight": 3108
      },
      {
        "itemId": "collectible-15020010032",
        "weight": 3108
      },
      {
        "itemId": "collectible-15020040003",
        "weight": 3108
      },
      {
        "itemId": "collectible-15020040004",
        "weight": 3108
      },
      {
        "itemId": "collectible-15040010012",
        "weight": 3108
      },
      {
        "itemId": "collectible-15080050084",
        "weight": 3108
      },
      {
        "itemId": "collectible-15080050087",
        "weight": 3108
      },
      {
        "itemId": "screwdriver",
        "weight": 3108
      },
      {
        "itemId": "wire",
        "weight": 3108
      },
      {
        "itemId": "cement-bag",
        "weight": 1332
      },
      {
        "itemId": "collectible-15020010016",
        "weight": 1332
      },
      {
        "itemId": "collectible-15020010018",
        "weight": 1332
      },
      {
        "itemId": "collectible-15020010023",
        "weight": 1332
      },
      {
        "itemId": "collectible-15020040002",
        "weight": 1332
      },
      {
        "itemId": "collectible-15040010017",
        "weight": 1332
      },
      {
        "itemId": "collectible-15040010021",
        "weight": 1332
      },
      {
        "itemId": "collectible-15040010022",
        "weight": 1332
      },
      {
        "itemId": "fabric",
        "weight": 1332
      },
      {
        "itemId": "toolbox-item",
        "weight": 1332
      },
      {
        "itemId": "wireless-drill",
        "weight": 1332
      },
      {
        "itemId": "collectible-15080050112",
        "weight": 1280
      },
      {
        "itemId": "collectible-15030010009",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050110",
        "weight": 672
      },
      {
        "itemId": "collectible-15080050111",
        "weight": 672
      },
      {
        "itemId": "collectible-15020010024",
        "weight": 444
      },
      {
        "itemId": "collectible-15020050003",
        "weight": 444
      },
      {
        "itemId": "collectible-15020050004",
        "weight": 444
      },
      {
        "itemId": "collectible-15020050006",
        "weight": 444
      },
      {
        "itemId": "collectible-15080050119",
        "weight": 444
      },
      {
        "itemId": "collectible-15080050130",
        "weight": 444
      },
      {
        "itemId": "collectible-15200000044",
        "weight": 444
      },
      {
        "itemId": "special-steel",
        "weight": 444
      },
      {
        "itemId": "wrench",
        "weight": 444
      },
      {
        "itemId": "collectible-15020050007",
        "weight": 420
      },
      {
        "itemId": "collectible-15030010002",
        "weight": 420
      },
      {
        "itemId": "collectible-15030010007",
        "weight": 420
      },
      {
        "itemId": "collectible-15030010011",
        "weight": 420
      },
      {
        "itemId": "collectible-15030010013",
        "weight": 420
      },
      {
        "itemId": "collectible-15030010014",
        "weight": 420
      },
      {
        "itemId": "collectible-15030010018",
        "weight": 420
      },
      {
        "itemId": "collectible-15030010019",
        "weight": 420
      },
      {
        "itemId": "collectible-15030040011",
        "weight": 420
      },
      {
        "itemId": "collectible-15020010034",
        "weight": 288
      },
      {
        "itemId": "collectible-15080050107",
        "weight": 288
      },
      {
        "itemId": "collectible-15080050109",
        "weight": 288
      },
      {
        "itemId": "fuel",
        "weight": 288
      },
      {
        "itemId": "gas-tank",
        "weight": 288
      },
      {
        "itemId": "collectible-15080050108",
        "weight": 191.299
      },
      {
        "itemId": "collectible-15020050008",
        "weight": 180
      },
      {
        "itemId": "collectible-15030010001",
        "weight": 180
      },
      {
        "itemId": "collectible-15030010008",
        "weight": 180
      },
      {
        "itemId": "collectible-15030040002",
        "weight": 180
      },
      {
        "itemId": "collectible-15030050016",
        "weight": 180
      },
      {
        "itemId": "collectible-15070010001",
        "weight": 180
      },
      {
        "itemId": "collectible-15070010002",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050039",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050194",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050217",
        "weight": 180
      },
      {
        "itemId": "collectible-15030040010",
        "weight": 156.314
      },
      {
        "itemId": "collectible-15080050174",
        "weight": 113.045
      },
      {
        "itemId": "collectible-15020010035",
        "weight": 96
      },
      {
        "itemId": "collectible-15080050102",
        "weight": 96
      },
      {
        "itemId": "collectible-15080050103",
        "weight": 96
      },
      {
        "itemId": "collectible-15080050105",
        "weight": 96
      },
      {
        "itemId": "collectible-15080050106",
        "weight": 96
      },
      {
        "itemId": "collectible-15080050179",
        "weight": 90.653
      },
      {
        "itemId": "collectible-15040040007",
        "weight": 66.945
      },
      {
        "itemId": "collectible-15030040012",
        "weight": 60
      },
      {
        "itemId": "collectible-15030040014",
        "weight": 60
      },
      {
        "itemId": "collectible-15030050005",
        "weight": 60
      },
      {
        "itemId": "collectible-15030050011",
        "weight": 60
      },
      {
        "itemId": "collectible-15040010015",
        "weight": 60
      },
      {
        "itemId": "collectible-15040050003",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050037",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050038",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050091",
        "weight": 60
      },
      {
        "itemId": "motherboard",
        "weight": 60
      },
      {
        "itemId": "ram",
        "weight": 60
      },
      {
        "itemId": "ssd",
        "weight": 60
      },
      {
        "itemId": "collectible-15030050019",
        "weight": 55.977
      },
      {
        "itemId": "collectible-15040010023",
        "weight": 46.62
      },
      {
        "itemId": "collectible-15080050036",
        "weight": 45.537
      },
      {
        "itemId": "collectible-15080050144",
        "weight": 33.3
      },
      {
        "itemId": "collectible-15080050220",
        "weight": 33.3
      },
      {
        "itemId": "collectible-15080050101",
        "weight": 23.668
      },
      {
        "itemId": "collectible-15080050095",
        "weight": 17.078
      },
      {
        "itemId": "collectible-15080050168",
        "weight": 16.89
      },
      {
        "itemId": "collectible-15080050118",
        "weight": 16.838
      },
      {
        "itemId": "collectible-15030040013",
        "weight": 16.224
      },
      {
        "itemId": "cpu",
        "weight": 15.648
      },
      {
        "itemId": "collectible-15030050006",
        "weight": 13.811
      },
      {
        "itemId": "collectible-15080050090",
        "weight": 13.498
      },
      {
        "itemId": "collectible-15080050126",
        "weight": 11.988
      },
      {
        "itemId": "collectible-15030050003",
        "weight": 11.673
      },
      {
        "itemId": "collectible-15020010031",
        "weight": 11.655
      },
      {
        "itemId": "collectible-15030050017",
        "weight": 11.655
      },
      {
        "itemId": "collectible-15080050178",
        "weight": 11.655
      },
      {
        "itemId": "collectible-15080050211",
        "weight": 11.655
      },
      {
        "itemId": "ballistic-computer",
        "weight": 11.03
      },
      {
        "itemId": "collectible-15080050169",
        "weight": 11.022
      },
      {
        "itemId": "collectible-15080050035",
        "weight": 10.524
      },
      {
        "itemId": "collectible-15020010036",
        "weight": 10.08
      },
      {
        "itemId": "collectible-15080050190",
        "weight": 10.08
      },
      {
        "itemId": "collectible-15080050210",
        "weight": 10.08
      },
      {
        "itemId": "collectible-15080050034",
        "weight": 7.717
      },
      {
        "itemId": "collectible-15030040001",
        "weight": 7.614
      },
      {
        "itemId": "collectible-15020010033",
        "weight": 7.2
      },
      {
        "itemId": "collectible-15080050196",
        "weight": 7.2
      },
      {
        "itemId": "collectible-15080050033",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15080050088",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15080050189",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15030050013",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15080050204",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15080050205",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15080050098",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080050099",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080050100",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080050176",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080050177",
        "weight": 2.52
      },
      {
        "itemId": "camera",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15030050007",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15030050008",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15030050012",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15030050014",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15030050018",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050030",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050032",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050167",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050175",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050186",
        "weight": 1.575
      },
      {
        "itemId": "drone",
        "weight": 1.575
      },
      {
        "itemId": "military-gpu",
        "weight": 1.575
      },
      {
        "itemId": "portable-radar",
        "weight": 1.575
      },
      {
        "itemId": "radio",
        "weight": 1.575
      }
    ]
  },
  "cement-truck": {
    "name": "水泥车",
    "size": [
      8,
      6
    ],
    "min": 2,
    "max": 4,
    "pools": [
      {
        "itemId": "collectible-15020010001",
        "weight": 4800
      },
      {
        "itemId": "collectible-15020010002",
        "weight": 4800
      },
      {
        "itemId": "collectible-15020010003",
        "weight": 4800
      },
      {
        "itemId": "collectible-15020010004",
        "weight": 4800
      },
      {
        "itemId": "collectible-15020010006",
        "weight": 4800
      },
      {
        "itemId": "collectible-15020010010",
        "weight": 4800
      },
      {
        "itemId": "collectible-15020010014",
        "weight": 4800
      },
      {
        "itemId": "collectible-15040010016",
        "weight": 4800
      },
      {
        "itemId": "collectible-15080050085",
        "weight": 4800
      },
      {
        "itemId": "collectible-15080050086",
        "weight": 4800
      },
      {
        "itemId": "collectible-15020010007",
        "weight": 2520
      },
      {
        "itemId": "collectible-15020010008",
        "weight": 2520
      },
      {
        "itemId": "collectible-15020010017",
        "weight": 2520
      },
      {
        "itemId": "collectible-15020010019",
        "weight": 2520
      },
      {
        "itemId": "collectible-15020010020",
        "weight": 2520
      },
      {
        "itemId": "collectible-15020010021",
        "weight": 2520
      },
      {
        "itemId": "collectible-15020010026",
        "weight": 2520
      },
      {
        "itemId": "collectible-15020010027",
        "weight": 2520
      },
      {
        "itemId": "collectible-15020010030",
        "weight": 2520
      },
      {
        "itemId": "collectible-15020010032",
        "weight": 2520
      },
      {
        "itemId": "collectible-15020040003",
        "weight": 2520
      },
      {
        "itemId": "collectible-15020040004",
        "weight": 2520
      },
      {
        "itemId": "collectible-15040010012",
        "weight": 2520
      },
      {
        "itemId": "collectible-15080050084",
        "weight": 2520
      },
      {
        "itemId": "collectible-15080050087",
        "weight": 2520
      },
      {
        "itemId": "screwdriver",
        "weight": 2520
      },
      {
        "itemId": "wire",
        "weight": 2520
      },
      {
        "itemId": "collectible-15080050112",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050110",
        "weight": 1260
      },
      {
        "itemId": "collectible-15080050111",
        "weight": 1260
      },
      {
        "itemId": "cement-bag",
        "weight": 1080
      },
      {
        "itemId": "collectible-15020010016",
        "weight": 1080
      },
      {
        "itemId": "collectible-15020010018",
        "weight": 1080
      },
      {
        "itemId": "collectible-15020010023",
        "weight": 1080
      },
      {
        "itemId": "collectible-15020040002",
        "weight": 1080
      },
      {
        "itemId": "collectible-15040010017",
        "weight": 1080
      },
      {
        "itemId": "collectible-15040010021",
        "weight": 1080
      },
      {
        "itemId": "collectible-15040010022",
        "weight": 1080
      },
      {
        "itemId": "fabric",
        "weight": 1080
      },
      {
        "itemId": "toolbox-item",
        "weight": 1080
      },
      {
        "itemId": "wireless-drill",
        "weight": 1080
      },
      {
        "itemId": "collectible-15020010034",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050107",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050109",
        "weight": 540
      },
      {
        "itemId": "fuel",
        "weight": 540
      },
      {
        "itemId": "gas-tank",
        "weight": 540
      },
      {
        "itemId": "collectible-15040010003",
        "weight": 420
      },
      {
        "itemId": "collectible-15080010003",
        "weight": 420
      },
      {
        "itemId": "collectible-15080010004",
        "weight": 420
      },
      {
        "itemId": "collectible-15080040004",
        "weight": 420
      },
      {
        "itemId": "collectible-15080040005",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050007",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050017",
        "weight": 420
      },
      {
        "itemId": "collectible-15020010024",
        "weight": 360
      },
      {
        "itemId": "collectible-15020050003",
        "weight": 360
      },
      {
        "itemId": "collectible-15020050004",
        "weight": 360
      },
      {
        "itemId": "collectible-15020050006",
        "weight": 360
      },
      {
        "itemId": "collectible-15080050119",
        "weight": 360
      },
      {
        "itemId": "collectible-15080050130",
        "weight": 360
      },
      {
        "itemId": "collectible-15200000044",
        "weight": 360
      },
      {
        "itemId": "special-steel",
        "weight": 360
      },
      {
        "itemId": "wrench",
        "weight": 360
      },
      {
        "itemId": "collectible-15080050108",
        "weight": 358.686
      },
      {
        "itemId": "collectible-15020010035",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050008",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050011",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050012",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050023",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050102",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050103",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050105",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050106",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050193",
        "weight": 180
      },
      {
        "itemId": "collectible-15200000073",
        "weight": 180
      },
      {
        "itemId": "collectible-15040040007",
        "weight": 125.522
      },
      {
        "itemId": "collectible-15080050174",
        "weight": 91.658
      },
      {
        "itemId": "collectible-15080050179",
        "weight": 73.502
      },
      {
        "itemId": "collectible-15040010014",
        "weight": 60
      },
      {
        "itemId": "collectible-15080040002",
        "weight": 60
      },
      {
        "itemId": "collectible-15080040003",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050001",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050016",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050018",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050024",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050124",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050139",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050182",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000126",
        "weight": 60
      },
      {
        "itemId": "collectible-15030050019",
        "weight": 45.387
      },
      {
        "itemId": "collectible-15080050101",
        "weight": 44.377
      },
      {
        "itemId": "collectible-15040010023",
        "weight": 37.8
      },
      {
        "itemId": "collectible-15080050118",
        "weight": 31.572
      },
      {
        "itemId": "collectible-15080050043",
        "weight": 30.687
      },
      {
        "itemId": "collectible-15080050144",
        "weight": 27
      },
      {
        "itemId": "collectible-15080050220",
        "weight": 27
      },
      {
        "itemId": "collectible-15080050134",
        "weight": 25.985
      },
      {
        "itemId": "collectible-15080050169",
        "weight": 20.666
      },
      {
        "itemId": "collectible-15020010036",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15080050190",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15080050210",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15080050025",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000048",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000068",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000070",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000075",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000114",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000130",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000151",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000154",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000155",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000157",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000167",
        "weight": 18
      },
      {
        "itemId": "collectible-15080050143",
        "weight": 17.892
      },
      {
        "itemId": "collectible-15080050009",
        "weight": 17.439
      },
      {
        "itemId": "collectible-15080050137",
        "weight": 17.207
      },
      {
        "itemId": "collectible-15080050165",
        "weight": 16.255
      },
      {
        "itemId": "collectible-15080050015",
        "weight": 16.115
      },
      {
        "itemId": "collectible-15200000032",
        "weight": 16.021
      },
      {
        "itemId": "collectible-15020010033",
        "weight": 13.5
      },
      {
        "itemId": "collectible-15080050196",
        "weight": 13.5
      },
      {
        "itemId": "collectible-15080050004",
        "weight": 12.407
      },
      {
        "itemId": "collectible-15200000118",
        "weight": 11.999
      },
      {
        "itemId": "collectible-15080050094",
        "weight": 11.883
      },
      {
        "itemId": "collectible-15080050138",
        "weight": 11.88
      },
      {
        "itemId": "collectible-15080050093",
        "weight": 11.839
      },
      {
        "itemId": "collectible-15080050164",
        "weight": 11.578
      },
      {
        "itemId": "collectible-15080050135",
        "weight": 11.141
      },
      {
        "itemId": "collectible-15020010031",
        "weight": 9.45
      },
      {
        "itemId": "collectible-15030050017",
        "weight": 9.45
      },
      {
        "itemId": "collectible-15080050178",
        "weight": 9.45
      },
      {
        "itemId": "collectible-15080050211",
        "weight": 9.45
      },
      {
        "itemId": "collectible-15080050092",
        "weight": 8.916
      },
      {
        "itemId": "collectible-15080050133",
        "weight": 7.021
      },
      {
        "itemId": "collectible-15080050082",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15080050083",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15080050098",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15080050099",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15080050100",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15080050176",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15080050177",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15080050197",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000034",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000049",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000058",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000059",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000069",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000071",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000072",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000115",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000117",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000123",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000124",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000125",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000127",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000131",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000137",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000152",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000153",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000156",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000158",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000168",
        "weight": 4.5
      },
      {
        "itemId": "africa-heart",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15010050001",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15040050002",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080040001",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050003",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050014",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050040",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050041",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050120",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050121",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050122",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050123",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050142",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050166",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050184",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050185",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050187",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15200000060",
        "weight": 1.575
      },
      {
        "itemId": "gold-bar",
        "weight": 1.575
      },
      {
        "itemId": "watch",
        "weight": 1.575
      }
    ]
  },
  "manhole": {
    "name": "窨井盖",
    "size": [
      5,
      5
    ],
    "min": 1,
    "max": 3,
    "pools": [
      {
        "itemId": "collectible-15020010001",
        "weight": 2800
      },
      {
        "itemId": "collectible-15020010002",
        "weight": 2800
      },
      {
        "itemId": "collectible-15020010003",
        "weight": 2800
      },
      {
        "itemId": "collectible-15020010004",
        "weight": 2800
      },
      {
        "itemId": "collectible-15020010006",
        "weight": 2800
      },
      {
        "itemId": "collectible-15020010010",
        "weight": 2800
      },
      {
        "itemId": "collectible-15020010014",
        "weight": 2800
      },
      {
        "itemId": "collectible-15040010016",
        "weight": 2800
      },
      {
        "itemId": "collectible-15080050085",
        "weight": 2800
      },
      {
        "itemId": "collectible-15080050086",
        "weight": 2800
      },
      {
        "itemId": "collectible-15080050112",
        "weight": 2560
      },
      {
        "itemId": "collectible-15020010007",
        "weight": 1470
      },
      {
        "itemId": "collectible-15020010008",
        "weight": 1470
      },
      {
        "itemId": "collectible-15020010017",
        "weight": 1470
      },
      {
        "itemId": "collectible-15020010019",
        "weight": 1470
      },
      {
        "itemId": "collectible-15020010020",
        "weight": 1470
      },
      {
        "itemId": "collectible-15020010021",
        "weight": 1470
      },
      {
        "itemId": "collectible-15020010026",
        "weight": 1470
      },
      {
        "itemId": "collectible-15020010027",
        "weight": 1470
      },
      {
        "itemId": "collectible-15020010030",
        "weight": 1470
      },
      {
        "itemId": "collectible-15020010032",
        "weight": 1470
      },
      {
        "itemId": "collectible-15020040003",
        "weight": 1470
      },
      {
        "itemId": "collectible-15020040004",
        "weight": 1470
      },
      {
        "itemId": "collectible-15040010012",
        "weight": 1470
      },
      {
        "itemId": "collectible-15080050084",
        "weight": 1470
      },
      {
        "itemId": "collectible-15080050087",
        "weight": 1470
      },
      {
        "itemId": "screwdriver",
        "weight": 1470
      },
      {
        "itemId": "wire",
        "weight": 1470
      },
      {
        "itemId": "collectible-15080050110",
        "weight": 1344
      },
      {
        "itemId": "collectible-15080050111",
        "weight": 1344
      },
      {
        "itemId": "collectible-15040010003",
        "weight": 966
      },
      {
        "itemId": "collectible-15080010003",
        "weight": 966
      },
      {
        "itemId": "collectible-15080010004",
        "weight": 966
      },
      {
        "itemId": "collectible-15080040004",
        "weight": 966
      },
      {
        "itemId": "collectible-15080040005",
        "weight": 966
      },
      {
        "itemId": "collectible-15080050007",
        "weight": 966
      },
      {
        "itemId": "collectible-15080050017",
        "weight": 966
      },
      {
        "itemId": "collectible-15010010008",
        "weight": 800
      },
      {
        "itemId": "collectible-15040010007",
        "weight": 800
      },
      {
        "itemId": "collectible-15040010008",
        "weight": 800
      },
      {
        "itemId": "collectible-15040010009",
        "weight": 800
      },
      {
        "itemId": "collectible-15060080002",
        "weight": 800
      },
      {
        "itemId": "collectible-15060080003",
        "weight": 800
      },
      {
        "itemId": "collectible-15060080007",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050046",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050047",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050048",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050049",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050050",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050051",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050052",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050053",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050054",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050055",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050059",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050060",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050081",
        "weight": 800
      },
      {
        "itemId": "cement-bag",
        "weight": 630
      },
      {
        "itemId": "collectible-15020010016",
        "weight": 630
      },
      {
        "itemId": "collectible-15020010018",
        "weight": 630
      },
      {
        "itemId": "collectible-15020010023",
        "weight": 630
      },
      {
        "itemId": "collectible-15020040002",
        "weight": 630
      },
      {
        "itemId": "collectible-15040010017",
        "weight": 630
      },
      {
        "itemId": "collectible-15040010021",
        "weight": 630
      },
      {
        "itemId": "collectible-15040010022",
        "weight": 630
      },
      {
        "itemId": "fabric",
        "weight": 630
      },
      {
        "itemId": "toolbox-item",
        "weight": 630
      },
      {
        "itemId": "wireless-drill",
        "weight": 630
      },
      {
        "itemId": "collectible-15020010034",
        "weight": 576
      },
      {
        "itemId": "collectible-15080050107",
        "weight": 576
      },
      {
        "itemId": "collectible-15080050109",
        "weight": 576
      },
      {
        "itemId": "fuel",
        "weight": 576
      },
      {
        "itemId": "gas-tank",
        "weight": 576
      },
      {
        "itemId": "collectible-15010010015",
        "weight": 420
      },
      {
        "itemId": "collectible-15060080001",
        "weight": 420
      },
      {
        "itemId": "collectible-15060080004",
        "weight": 420
      },
      {
        "itemId": "collectible-15060080006",
        "weight": 420
      },
      {
        "itemId": "collectible-15060080009",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050019",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050020",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050022",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050077",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050078",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050079",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050080",
        "weight": 420
      },
      {
        "itemId": "collectible-15200000134",
        "weight": 420
      },
      {
        "itemId": "collectible-15200000138",
        "weight": 420
      },
      {
        "itemId": "lighter",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050008",
        "weight": 414
      },
      {
        "itemId": "collectible-15080050011",
        "weight": 414
      },
      {
        "itemId": "collectible-15080050012",
        "weight": 414
      },
      {
        "itemId": "collectible-15080050023",
        "weight": 414
      },
      {
        "itemId": "collectible-15080050193",
        "weight": 414
      },
      {
        "itemId": "collectible-15200000073",
        "weight": 414
      },
      {
        "itemId": "collectible-15080050108",
        "weight": 382.599
      },
      {
        "itemId": "collectible-15020010024",
        "weight": 210
      },
      {
        "itemId": "collectible-15020050003",
        "weight": 210
      },
      {
        "itemId": "collectible-15020050004",
        "weight": 210
      },
      {
        "itemId": "collectible-15020050006",
        "weight": 210
      },
      {
        "itemId": "collectible-15080050119",
        "weight": 210
      },
      {
        "itemId": "collectible-15080050130",
        "weight": 210
      },
      {
        "itemId": "collectible-15200000044",
        "weight": 210
      },
      {
        "itemId": "special-steel",
        "weight": 210
      },
      {
        "itemId": "wrench",
        "weight": 210
      },
      {
        "itemId": "collectible-15020010035",
        "weight": 192
      },
      {
        "itemId": "collectible-15080050102",
        "weight": 192
      },
      {
        "itemId": "collectible-15080050103",
        "weight": 192
      },
      {
        "itemId": "collectible-15080050105",
        "weight": 192
      },
      {
        "itemId": "collectible-15080050106",
        "weight": 192
      },
      {
        "itemId": "collectible-15060080010",
        "weight": 180
      },
      {
        "itemId": "collectible-15060080011",
        "weight": 180
      },
      {
        "itemId": "collectible-15060080013",
        "weight": 180
      },
      {
        "itemId": "collectible-15060080016",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050021",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050026",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050027",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050072",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050073",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050074",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050075",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050076",
        "weight": 180
      },
      {
        "itemId": "collectible-15200000139",
        "weight": 180
      },
      {
        "itemId": "collectible-15200000163",
        "weight": 180
      },
      {
        "itemId": "collectible-15040010014",
        "weight": 138
      },
      {
        "itemId": "collectible-15080040002",
        "weight": 138
      },
      {
        "itemId": "collectible-15080040003",
        "weight": 138
      },
      {
        "itemId": "collectible-15080050001",
        "weight": 138
      },
      {
        "itemId": "collectible-15080050016",
        "weight": 138
      },
      {
        "itemId": "collectible-15080050018",
        "weight": 138
      },
      {
        "itemId": "collectible-15080050024",
        "weight": 138
      },
      {
        "itemId": "collectible-15080050124",
        "weight": 138
      },
      {
        "itemId": "collectible-15080050139",
        "weight": 138
      },
      {
        "itemId": "collectible-15080050182",
        "weight": 138
      },
      {
        "itemId": "collectible-15200000126",
        "weight": 138
      },
      {
        "itemId": "collectible-15040040007",
        "weight": 133.89
      },
      {
        "itemId": "collectible-15080050043",
        "weight": 70.58
      },
      {
        "itemId": "collectible-15060080005",
        "weight": 60
      },
      {
        "itemId": "collectible-15060080008",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050068",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050070",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050136",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050183",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050215",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050218",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050219",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000135",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000140",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000164",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000183",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050134",
        "weight": 59.765
      },
      {
        "itemId": "collectible-15080050174",
        "weight": 53.467
      },
      {
        "itemId": "collectible-15080050101",
        "weight": 47.336
      },
      {
        "itemId": "collectible-15080050179",
        "weight": 42.876
      },
      {
        "itemId": "collectible-15080050025",
        "weight": 41.4
      },
      {
        "itemId": "collectible-15200000048",
        "weight": 41.4
      },
      {
        "itemId": "collectible-15200000068",
        "weight": 41.4
      },
      {
        "itemId": "collectible-15200000070",
        "weight": 41.4
      },
      {
        "itemId": "collectible-15200000075",
        "weight": 41.4
      },
      {
        "itemId": "collectible-15200000114",
        "weight": 41.4
      },
      {
        "itemId": "collectible-15200000130",
        "weight": 41.4
      },
      {
        "itemId": "collectible-15200000151",
        "weight": 41.4
      },
      {
        "itemId": "collectible-15200000154",
        "weight": 41.4
      },
      {
        "itemId": "collectible-15200000155",
        "weight": 41.4
      },
      {
        "itemId": "collectible-15200000157",
        "weight": 41.4
      },
      {
        "itemId": "collectible-15200000167",
        "weight": 41.4
      },
      {
        "itemId": "collectible-15080050143",
        "weight": 41.151
      },
      {
        "itemId": "collectible-15080050009",
        "weight": 40.109
      },
      {
        "itemId": "collectible-15080050137",
        "weight": 39.577
      },
      {
        "itemId": "collectible-15080050165",
        "weight": 37.386
      },
      {
        "itemId": "collectible-15080050015",
        "weight": 37.064
      },
      {
        "itemId": "collectible-15200000032",
        "weight": 36.848
      },
      {
        "itemId": "collectible-15080050118",
        "weight": 33.677
      },
      {
        "itemId": "collectible-15080050004",
        "weight": 28.536
      },
      {
        "itemId": "collectible-15200000118",
        "weight": 27.597
      },
      {
        "itemId": "collectible-15080050094",
        "weight": 27.331
      },
      {
        "itemId": "collectible-15080050138",
        "weight": 27.325
      },
      {
        "itemId": "collectible-15080050093",
        "weight": 27.23
      },
      {
        "itemId": "collectible-15080050164",
        "weight": 26.629
      },
      {
        "itemId": "collectible-15030050019",
        "weight": 26.476
      },
      {
        "itemId": "collectible-15080050135",
        "weight": 25.625
      },
      {
        "itemId": "collectible-15040010023",
        "weight": 22.05
      },
      {
        "itemId": "collectible-15080050169",
        "weight": 22.044
      },
      {
        "itemId": "collectible-15080050092",
        "weight": 20.506
      },
      {
        "itemId": "collectible-15020010036",
        "weight": 20.16
      },
      {
        "itemId": "collectible-15080050190",
        "weight": 20.16
      },
      {
        "itemId": "collectible-15080050210",
        "weight": 20.16
      },
      {
        "itemId": "collectible-15200000141",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000142",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000165",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000184",
        "weight": 18
      },
      {
        "itemId": "collectible-15080050163",
        "weight": 17.434
      },
      {
        "itemId": "collectible-15080050162",
        "weight": 17.084
      },
      {
        "itemId": "collectible-15080050002",
        "weight": 16.374
      },
      {
        "itemId": "collectible-15080050133",
        "weight": 16.148
      },
      {
        "itemId": "collectible-15080050144",
        "weight": 15.75
      },
      {
        "itemId": "collectible-15080050220",
        "weight": 15.75
      },
      {
        "itemId": "collectible-15080050082",
        "weight": 14.49
      },
      {
        "itemId": "collectible-15080050083",
        "weight": 14.49
      },
      {
        "itemId": "collectible-15060080014",
        "weight": 14.47
      },
      {
        "itemId": "collectible-15020010033",
        "weight": 14.4
      },
      {
        "itemId": "collectible-15080050196",
        "weight": 14.4
      },
      {
        "itemId": "collectible-15080050132",
        "weight": 12.515
      },
      {
        "itemId": "collectible-15080050180",
        "weight": 12.407
      },
      {
        "itemId": "collectible-15080050197",
        "weight": 10.35
      },
      {
        "itemId": "collectible-15200000034",
        "weight": 10.35
      },
      {
        "itemId": "collectible-15200000049",
        "weight": 10.35
      },
      {
        "itemId": "collectible-15200000058",
        "weight": 10.35
      },
      {
        "itemId": "collectible-15200000059",
        "weight": 10.35
      },
      {
        "itemId": "collectible-15200000069",
        "weight": 10.35
      },
      {
        "itemId": "collectible-15200000071",
        "weight": 10.35
      },
      {
        "itemId": "collectible-15200000072",
        "weight": 10.35
      },
      {
        "itemId": "collectible-15200000115",
        "weight": 10.35
      },
      {
        "itemId": "collectible-15200000117",
        "weight": 10.35
      },
      {
        "itemId": "collectible-15200000123",
        "weight": 10.35
      },
      {
        "itemId": "collectible-15200000124",
        "weight": 10.35
      },
      {
        "itemId": "collectible-15200000125",
        "weight": 10.35
      },
      {
        "itemId": "collectible-15200000127",
        "weight": 10.35
      },
      {
        "itemId": "collectible-15200000131",
        "weight": 10.35
      },
      {
        "itemId": "collectible-15200000137",
        "weight": 10.35
      },
      {
        "itemId": "collectible-15200000152",
        "weight": 10.35
      },
      {
        "itemId": "collectible-15200000153",
        "weight": 10.35
      },
      {
        "itemId": "collectible-15200000156",
        "weight": 10.35
      },
      {
        "itemId": "collectible-15200000158",
        "weight": 10.35
      },
      {
        "itemId": "collectible-15200000168",
        "weight": 10.35
      },
      {
        "itemId": "collectible-15080050071",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15020010031",
        "weight": 5.512
      },
      {
        "itemId": "collectible-15030050017",
        "weight": 5.512
      },
      {
        "itemId": "collectible-15080050178",
        "weight": 5.512
      },
      {
        "itemId": "collectible-15080050211",
        "weight": 5.512
      },
      {
        "itemId": "collectible-15080050098",
        "weight": 5.04
      },
      {
        "itemId": "collectible-15080050099",
        "weight": 5.04
      },
      {
        "itemId": "collectible-15080050100",
        "weight": 5.04
      },
      {
        "itemId": "collectible-15080050176",
        "weight": 5.04
      },
      {
        "itemId": "collectible-15080050177",
        "weight": 5.04
      },
      {
        "itemId": "collectible-15080050069",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15080050173",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000143",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000166",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000185",
        "weight": 4.5
      },
      {
        "itemId": "africa-heart",
        "weight": 3.622
      },
      {
        "itemId": "collectible-15010050001",
        "weight": 3.622
      },
      {
        "itemId": "collectible-15040050002",
        "weight": 3.622
      },
      {
        "itemId": "collectible-15080040001",
        "weight": 3.622
      },
      {
        "itemId": "collectible-15080050003",
        "weight": 3.622
      },
      {
        "itemId": "collectible-15080050014",
        "weight": 3.622
      },
      {
        "itemId": "collectible-15080050040",
        "weight": 3.622
      },
      {
        "itemId": "collectible-15080050041",
        "weight": 3.622
      },
      {
        "itemId": "collectible-15080050120",
        "weight": 3.622
      },
      {
        "itemId": "collectible-15080050121",
        "weight": 3.622
      },
      {
        "itemId": "collectible-15080050122",
        "weight": 3.622
      },
      {
        "itemId": "collectible-15080050123",
        "weight": 3.622
      },
      {
        "itemId": "collectible-15080050142",
        "weight": 3.622
      },
      {
        "itemId": "collectible-15080050166",
        "weight": 3.622
      },
      {
        "itemId": "collectible-15080050184",
        "weight": 3.622
      },
      {
        "itemId": "collectible-15080050185",
        "weight": 3.622
      },
      {
        "itemId": "collectible-15080050187",
        "weight": 3.622
      },
      {
        "itemId": "collectible-15200000060",
        "weight": 3.622
      },
      {
        "itemId": "gold-bar",
        "weight": 3.622
      },
      {
        "itemId": "watch",
        "weight": 3.622
      },
      {
        "itemId": "collectible-15060080015",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050066",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050067",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050131",
        "weight": 1.575
      }
    ]
  },
  "medical-bag": {
    "name": "医疗包",
    "size": [
      5,
      4
    ],
    "min": 1,
    "max": 3,
    "pools": [
      {
        "itemId": "bandage",
        "weight": 4960
      },
      {
        "itemId": "consumable-14020000001",
        "weight": 4960
      },
      {
        "itemId": "consumable-14030000001",
        "weight": 4960
      },
      {
        "itemId": "consumable-14040000001",
        "weight": 4960
      },
      {
        "itemId": "medkit",
        "weight": 4960
      },
      {
        "itemId": "painkiller-loot",
        "weight": 4960
      },
      {
        "itemId": "collectible-15010010004",
        "weight": 3040
      },
      {
        "itemId": "collectible-15060010008",
        "weight": 3040
      },
      {
        "itemId": "collectible-15060010009",
        "weight": 3040
      },
      {
        "itemId": "collectible-15090010077",
        "weight": 3040
      },
      {
        "itemId": "consumable-14020000003",
        "weight": 2604
      },
      {
        "itemId": "consumable-14030000002",
        "weight": 2604
      },
      {
        "itemId": "consumable-14050000002",
        "weight": 2604
      },
      {
        "itemId": "collectible-15060010001",
        "weight": 1596
      },
      {
        "itemId": "collectible-15060010002",
        "weight": 1596
      },
      {
        "itemId": "collectible-15060010003",
        "weight": 1596
      },
      {
        "itemId": "collectible-15060010010",
        "weight": 1596
      },
      {
        "itemId": "collectible-15060010012",
        "weight": 1596
      },
      {
        "itemId": "consumable-14060000007",
        "weight": 1116
      },
      {
        "itemId": "consumable-14060000008",
        "weight": 1116
      },
      {
        "itemId": "consumable-14070000001",
        "weight": 1116
      },
      {
        "itemId": "consumable-14070000004",
        "weight": 1116
      },
      {
        "itemId": "consumable-14070000006",
        "weight": 1116
      },
      {
        "itemId": "consumable-14070000008",
        "weight": 1116
      },
      {
        "itemId": "consumable-14070000009",
        "weight": 1116
      },
      {
        "itemId": "field-med",
        "weight": 1116
      },
      {
        "itemId": "collectible-15060010004",
        "weight": 684
      },
      {
        "itemId": "collectible-15060010006",
        "weight": 684
      },
      {
        "itemId": "collectible-15060010007",
        "weight": 684
      },
      {
        "itemId": "collectible-15080050065",
        "weight": 684
      },
      {
        "itemId": "collectible-15080050116",
        "weight": 684
      },
      {
        "itemId": "collectible-15090010041",
        "weight": 684
      },
      {
        "itemId": "consumable-14020000005",
        "weight": 372
      },
      {
        "itemId": "consumable-14030000003",
        "weight": 372
      },
      {
        "itemId": "consumable-14050000003",
        "weight": 372
      },
      {
        "itemId": "consumable-14060000006",
        "weight": 372
      },
      {
        "itemId": "consumable-14070000003",
        "weight": 372
      },
      {
        "itemId": "consumable-14070000005",
        "weight": 372
      },
      {
        "itemId": "consumable-14070000016",
        "weight": 372
      },
      {
        "itemId": "consumable-14070000017",
        "weight": 372
      },
      {
        "itemId": "consumable-14060000005",
        "weight": 369.582
      },
      {
        "itemId": "consumable-14070000007",
        "weight": 316.672
      },
      {
        "itemId": "collectible-15060040002",
        "weight": 228
      },
      {
        "itemId": "collectible-15080050057",
        "weight": 228
      },
      {
        "itemId": "collectible-15080050114",
        "weight": 228
      },
      {
        "itemId": "collectible-15080050214",
        "weight": 228
      },
      {
        "itemId": "collectible-15200000061",
        "weight": 228
      },
      {
        "itemId": "collectible-15080050127",
        "weight": 223.465
      },
      {
        "itemId": "collectible-15080050117",
        "weight": 209.296
      },
      {
        "itemId": "consumable-14070000018",
        "weight": 111.6
      },
      {
        "itemId": "consumable-14070000019",
        "weight": 111.6
      },
      {
        "itemId": "collectible-15080050115",
        "weight": 66.101
      },
      {
        "itemId": "collectible-15060040003",
        "weight": 61.295
      },
      {
        "itemId": "collectible-15080050129",
        "weight": 50.101
      },
      {
        "itemId": "collectible-15040010019",
        "weight": 49.977
      },
      {
        "itemId": "consumable-14060000001",
        "weight": 49.946
      },
      {
        "itemId": "collectible-15060040001",
        "weight": 47.573
      },
      {
        "itemId": "collectible-15080050195",
        "weight": 42.084
      },
      {
        "itemId": "consumable-14020000006",
        "weight": 39.06
      },
      {
        "itemId": "consumable-14060000002",
        "weight": 39.06
      },
      {
        "itemId": "collectible-15080050212",
        "weight": 33.201
      },
      {
        "itemId": "collectible-15080050192",
        "weight": 23.94
      },
      {
        "itemId": "consumable-14060000003",
        "weight": 9.765
      },
      {
        "itemId": "consumable-14060000004",
        "weight": 9.765
      },
      {
        "itemId": "collectible-15060040004",
        "weight": 5.985
      },
      {
        "itemId": "collectible-15080050058",
        "weight": 5.985
      },
      {
        "itemId": "collectible-15080050113",
        "weight": 5.985
      },
      {
        "itemId": "collectible-15080050128",
        "weight": 5.985
      },
      {
        "itemId": "resuscitator",
        "weight": 5.985
      }
    ]
  },
  "medical-box": {
    "name": "医疗箱",
    "size": [
      6,
      5
    ],
    "min": 2,
    "max": 4,
    "pools": [
      {
        "itemId": "bandage",
        "weight": 4160
      },
      {
        "itemId": "consumable-14020000001",
        "weight": 4160
      },
      {
        "itemId": "consumable-14030000001",
        "weight": 4160
      },
      {
        "itemId": "consumable-14040000001",
        "weight": 4160
      },
      {
        "itemId": "medkit",
        "weight": 4160
      },
      {
        "itemId": "painkiller-loot",
        "weight": 4160
      },
      {
        "itemId": "collectible-15010010004",
        "weight": 3840
      },
      {
        "itemId": "collectible-15060010008",
        "weight": 3840
      },
      {
        "itemId": "collectible-15060010009",
        "weight": 3840
      },
      {
        "itemId": "collectible-15090010077",
        "weight": 3840
      },
      {
        "itemId": "consumable-14020000003",
        "weight": 2184
      },
      {
        "itemId": "consumable-14030000002",
        "weight": 2184
      },
      {
        "itemId": "consumable-14050000002",
        "weight": 2184
      },
      {
        "itemId": "collectible-15060010001",
        "weight": 2016
      },
      {
        "itemId": "collectible-15060010002",
        "weight": 2016
      },
      {
        "itemId": "collectible-15060010003",
        "weight": 2016
      },
      {
        "itemId": "collectible-15060010010",
        "weight": 2016
      },
      {
        "itemId": "collectible-15060010012",
        "weight": 2016
      },
      {
        "itemId": "consumable-14060000007",
        "weight": 936
      },
      {
        "itemId": "consumable-14060000008",
        "weight": 936
      },
      {
        "itemId": "consumable-14070000001",
        "weight": 936
      },
      {
        "itemId": "consumable-14070000004",
        "weight": 936
      },
      {
        "itemId": "consumable-14070000006",
        "weight": 936
      },
      {
        "itemId": "consumable-14070000008",
        "weight": 936
      },
      {
        "itemId": "consumable-14070000009",
        "weight": 936
      },
      {
        "itemId": "field-med",
        "weight": 936
      },
      {
        "itemId": "collectible-15060010004",
        "weight": 864
      },
      {
        "itemId": "collectible-15060010006",
        "weight": 864
      },
      {
        "itemId": "collectible-15060010007",
        "weight": 864
      },
      {
        "itemId": "collectible-15080050065",
        "weight": 864
      },
      {
        "itemId": "collectible-15080050116",
        "weight": 864
      },
      {
        "itemId": "collectible-15090010041",
        "weight": 864
      },
      {
        "itemId": "consumable-14020000005",
        "weight": 312
      },
      {
        "itemId": "consumable-14030000003",
        "weight": 312
      },
      {
        "itemId": "consumable-14050000003",
        "weight": 312
      },
      {
        "itemId": "consumable-14060000006",
        "weight": 312
      },
      {
        "itemId": "consumable-14070000003",
        "weight": 312
      },
      {
        "itemId": "consumable-14070000005",
        "weight": 312
      },
      {
        "itemId": "consumable-14070000016",
        "weight": 312
      },
      {
        "itemId": "consumable-14070000017",
        "weight": 312
      },
      {
        "itemId": "consumable-14060000005",
        "weight": 309.972
      },
      {
        "itemId": "collectible-15060040002",
        "weight": 288
      },
      {
        "itemId": "collectible-15080050057",
        "weight": 288
      },
      {
        "itemId": "collectible-15080050114",
        "weight": 288
      },
      {
        "itemId": "collectible-15080050214",
        "weight": 288
      },
      {
        "itemId": "collectible-15200000061",
        "weight": 288
      },
      {
        "itemId": "collectible-15080050127",
        "weight": 282.272
      },
      {
        "itemId": "consumable-14070000007",
        "weight": 265.596
      },
      {
        "itemId": "collectible-15080050117",
        "weight": 264.374
      },
      {
        "itemId": "consumable-14070000018",
        "weight": 93.6
      },
      {
        "itemId": "consumable-14070000019",
        "weight": 93.6
      },
      {
        "itemId": "collectible-15080050115",
        "weight": 83.496
      },
      {
        "itemId": "collectible-15060040003",
        "weight": 77.425
      },
      {
        "itemId": "collectible-15080050129",
        "weight": 63.285
      },
      {
        "itemId": "collectible-15040010019",
        "weight": 63.129
      },
      {
        "itemId": "collectible-15060040001",
        "weight": 60.092
      },
      {
        "itemId": "collectible-15080050195",
        "weight": 53.159
      },
      {
        "itemId": "collectible-15080050212",
        "weight": 41.939
      },
      {
        "itemId": "consumable-14060000001",
        "weight": 41.89
      },
      {
        "itemId": "consumable-14020000006",
        "weight": 32.76
      },
      {
        "itemId": "consumable-14060000002",
        "weight": 32.76
      },
      {
        "itemId": "collectible-15080050192",
        "weight": 30.24
      },
      {
        "itemId": "consumable-14060000003",
        "weight": 8.19
      },
      {
        "itemId": "consumable-14060000004",
        "weight": 8.19
      },
      {
        "itemId": "collectible-15060040004",
        "weight": 7.56
      },
      {
        "itemId": "collectible-15080050058",
        "weight": 7.56
      },
      {
        "itemId": "collectible-15080050113",
        "weight": 7.56
      },
      {
        "itemId": "collectible-15080050128",
        "weight": 7.56
      },
      {
        "itemId": "resuscitator",
        "weight": 7.56
      }
    ]
  },
  "express-small": {
    "name": "快递盒",
    "size": [
      4,
      4
    ],
    "min": 1,
    "max": 2,
    "pools": [
      {
        "itemId": "collectible-15010010008",
        "weight": 2800
      },
      {
        "itemId": "collectible-15040010007",
        "weight": 2800
      },
      {
        "itemId": "collectible-15040010008",
        "weight": 2800
      },
      {
        "itemId": "collectible-15040010009",
        "weight": 2800
      },
      {
        "itemId": "collectible-15060080002",
        "weight": 2800
      },
      {
        "itemId": "collectible-15060080003",
        "weight": 2800
      },
      {
        "itemId": "collectible-15060080007",
        "weight": 2800
      },
      {
        "itemId": "collectible-15080050046",
        "weight": 2800
      },
      {
        "itemId": "collectible-15080050047",
        "weight": 2800
      },
      {
        "itemId": "collectible-15080050048",
        "weight": 2800
      },
      {
        "itemId": "collectible-15080050049",
        "weight": 2800
      },
      {
        "itemId": "collectible-15080050050",
        "weight": 2800
      },
      {
        "itemId": "collectible-15080050051",
        "weight": 2800
      },
      {
        "itemId": "collectible-15080050052",
        "weight": 2800
      },
      {
        "itemId": "collectible-15080050053",
        "weight": 2800
      },
      {
        "itemId": "collectible-15080050054",
        "weight": 2800
      },
      {
        "itemId": "collectible-15080050055",
        "weight": 2800
      },
      {
        "itemId": "collectible-15080050059",
        "weight": 2800
      },
      {
        "itemId": "collectible-15080050060",
        "weight": 2800
      },
      {
        "itemId": "collectible-15080050081",
        "weight": 2800
      },
      {
        "itemId": "collectible-15020010001",
        "weight": 1920
      },
      {
        "itemId": "collectible-15020010002",
        "weight": 1920
      },
      {
        "itemId": "collectible-15020010003",
        "weight": 1920
      },
      {
        "itemId": "collectible-15020010004",
        "weight": 1920
      },
      {
        "itemId": "collectible-15020010006",
        "weight": 1920
      },
      {
        "itemId": "collectible-15020010010",
        "weight": 1920
      },
      {
        "itemId": "collectible-15020010014",
        "weight": 1920
      },
      {
        "itemId": "collectible-15040010016",
        "weight": 1920
      },
      {
        "itemId": "collectible-15080050085",
        "weight": 1920
      },
      {
        "itemId": "collectible-15080050086",
        "weight": 1920
      },
      {
        "itemId": "collectible-15010010015",
        "weight": 1470
      },
      {
        "itemId": "collectible-15060080001",
        "weight": 1470
      },
      {
        "itemId": "collectible-15060080004",
        "weight": 1470
      },
      {
        "itemId": "collectible-15060080006",
        "weight": 1470
      },
      {
        "itemId": "collectible-15060080009",
        "weight": 1470
      },
      {
        "itemId": "collectible-15080050019",
        "weight": 1470
      },
      {
        "itemId": "collectible-15080050020",
        "weight": 1470
      },
      {
        "itemId": "collectible-15080050022",
        "weight": 1470
      },
      {
        "itemId": "collectible-15080050077",
        "weight": 1470
      },
      {
        "itemId": "collectible-15080050078",
        "weight": 1470
      },
      {
        "itemId": "collectible-15080050079",
        "weight": 1470
      },
      {
        "itemId": "collectible-15080050080",
        "weight": 1470
      },
      {
        "itemId": "collectible-15200000134",
        "weight": 1470
      },
      {
        "itemId": "collectible-15200000138",
        "weight": 1470
      },
      {
        "itemId": "lighter",
        "weight": 1470
      },
      {
        "itemId": "collectible-15030010009",
        "weight": 1440
      },
      {
        "itemId": "collectible-15010010004",
        "weight": 1040
      },
      {
        "itemId": "collectible-15060010008",
        "weight": 1040
      },
      {
        "itemId": "collectible-15060010009",
        "weight": 1040
      },
      {
        "itemId": "collectible-15090010077",
        "weight": 1040
      },
      {
        "itemId": "collectible-15020010007",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010008",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010017",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010019",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010020",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010021",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010026",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010027",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010030",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010032",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020040003",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020040004",
        "weight": 1008
      },
      {
        "itemId": "collectible-15040010012",
        "weight": 1008
      },
      {
        "itemId": "collectible-15080050084",
        "weight": 1008
      },
      {
        "itemId": "collectible-15080050087",
        "weight": 1008
      },
      {
        "itemId": "screwdriver",
        "weight": 1008
      },
      {
        "itemId": "wire",
        "weight": 1008
      },
      {
        "itemId": "collectible-15080050112",
        "weight": 800
      },
      {
        "itemId": "collectible-15020050007",
        "weight": 756
      },
      {
        "itemId": "collectible-15030010002",
        "weight": 756
      },
      {
        "itemId": "collectible-15030010007",
        "weight": 756
      },
      {
        "itemId": "collectible-15030010011",
        "weight": 756
      },
      {
        "itemId": "collectible-15030010013",
        "weight": 756
      },
      {
        "itemId": "collectible-15030010014",
        "weight": 756
      },
      {
        "itemId": "collectible-15030010018",
        "weight": 756
      },
      {
        "itemId": "collectible-15030010019",
        "weight": 756
      },
      {
        "itemId": "collectible-15030040011",
        "weight": 756
      },
      {
        "itemId": "collectible-15060080010",
        "weight": 630
      },
      {
        "itemId": "collectible-15060080011",
        "weight": 630
      },
      {
        "itemId": "collectible-15060080013",
        "weight": 630
      },
      {
        "itemId": "collectible-15060080016",
        "weight": 630
      },
      {
        "itemId": "collectible-15080050021",
        "weight": 630
      },
      {
        "itemId": "collectible-15080050026",
        "weight": 630
      },
      {
        "itemId": "collectible-15080050027",
        "weight": 630
      },
      {
        "itemId": "collectible-15080050072",
        "weight": 630
      },
      {
        "itemId": "collectible-15080050073",
        "weight": 630
      },
      {
        "itemId": "collectible-15080050074",
        "weight": 630
      },
      {
        "itemId": "collectible-15080050075",
        "weight": 630
      },
      {
        "itemId": "collectible-15080050076",
        "weight": 630
      },
      {
        "itemId": "collectible-15200000139",
        "weight": 630
      },
      {
        "itemId": "collectible-15200000163",
        "weight": 630
      },
      {
        "itemId": "collectible-15060010001",
        "weight": 546
      },
      {
        "itemId": "collectible-15060010002",
        "weight": 546
      },
      {
        "itemId": "collectible-15060010003",
        "weight": 546
      },
      {
        "itemId": "collectible-15060010010",
        "weight": 546
      },
      {
        "itemId": "collectible-15060010012",
        "weight": 546
      },
      {
        "itemId": "cement-bag",
        "weight": 432
      },
      {
        "itemId": "collectible-15020010016",
        "weight": 432
      },
      {
        "itemId": "collectible-15020010018",
        "weight": 432
      },
      {
        "itemId": "collectible-15020010023",
        "weight": 432
      },
      {
        "itemId": "collectible-15020040002",
        "weight": 432
      },
      {
        "itemId": "collectible-15040010017",
        "weight": 432
      },
      {
        "itemId": "collectible-15040010021",
        "weight": 432
      },
      {
        "itemId": "collectible-15040010022",
        "weight": 432
      },
      {
        "itemId": "fabric",
        "weight": 432
      },
      {
        "itemId": "toolbox-item",
        "weight": 432
      },
      {
        "itemId": "wireless-drill",
        "weight": 432
      },
      {
        "itemId": "collectible-15080050110",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050111",
        "weight": 420
      },
      {
        "itemId": "collectible-15020050008",
        "weight": 324
      },
      {
        "itemId": "collectible-15030010001",
        "weight": 324
      },
      {
        "itemId": "collectible-15030010008",
        "weight": 324
      },
      {
        "itemId": "collectible-15030040002",
        "weight": 324
      },
      {
        "itemId": "collectible-15030050016",
        "weight": 324
      },
      {
        "itemId": "collectible-15070010001",
        "weight": 324
      },
      {
        "itemId": "collectible-15070010002",
        "weight": 324
      },
      {
        "itemId": "collectible-15080050039",
        "weight": 324
      },
      {
        "itemId": "collectible-15080050194",
        "weight": 324
      },
      {
        "itemId": "collectible-15080050217",
        "weight": 324
      },
      {
        "itemId": "collectible-15030040010",
        "weight": 281.365
      },
      {
        "itemId": "collectible-15060010004",
        "weight": 234
      },
      {
        "itemId": "collectible-15060010006",
        "weight": 234
      },
      {
        "itemId": "collectible-15060010007",
        "weight": 234
      },
      {
        "itemId": "collectible-15080050065",
        "weight": 234
      },
      {
        "itemId": "collectible-15080050116",
        "weight": 234
      },
      {
        "itemId": "collectible-15090010041",
        "weight": 234
      },
      {
        "itemId": "collectible-15060080005",
        "weight": 210
      },
      {
        "itemId": "collectible-15060080008",
        "weight": 210
      },
      {
        "itemId": "collectible-15080050068",
        "weight": 210
      },
      {
        "itemId": "collectible-15080050070",
        "weight": 210
      },
      {
        "itemId": "collectible-15080050136",
        "weight": 210
      },
      {
        "itemId": "collectible-15080050183",
        "weight": 210
      },
      {
        "itemId": "collectible-15080050215",
        "weight": 210
      },
      {
        "itemId": "collectible-15080050218",
        "weight": 210
      },
      {
        "itemId": "collectible-15080050219",
        "weight": 210
      },
      {
        "itemId": "collectible-15200000135",
        "weight": 210
      },
      {
        "itemId": "collectible-15200000140",
        "weight": 210
      },
      {
        "itemId": "collectible-15200000164",
        "weight": 210
      },
      {
        "itemId": "collectible-15200000183",
        "weight": 210
      },
      {
        "itemId": "collectible-15020010034",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050107",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050109",
        "weight": 180
      },
      {
        "itemId": "fuel",
        "weight": 180
      },
      {
        "itemId": "gas-tank",
        "weight": 180
      },
      {
        "itemId": "collectible-15020010024",
        "weight": 144
      },
      {
        "itemId": "collectible-15020050003",
        "weight": 144
      },
      {
        "itemId": "collectible-15020050004",
        "weight": 144
      },
      {
        "itemId": "collectible-15020050006",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050119",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050130",
        "weight": 144
      },
      {
        "itemId": "collectible-15200000044",
        "weight": 144
      },
      {
        "itemId": "special-steel",
        "weight": 144
      },
      {
        "itemId": "wrench",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050108",
        "weight": 119.562
      },
      {
        "itemId": "collectible-15030040012",
        "weight": 108
      },
      {
        "itemId": "collectible-15030040014",
        "weight": 108
      },
      {
        "itemId": "collectible-15030050005",
        "weight": 108
      },
      {
        "itemId": "collectible-15030050011",
        "weight": 108
      },
      {
        "itemId": "collectible-15040010015",
        "weight": 108
      },
      {
        "itemId": "collectible-15040050003",
        "weight": 108
      },
      {
        "itemId": "collectible-15080050037",
        "weight": 108
      },
      {
        "itemId": "collectible-15080050038",
        "weight": 108
      },
      {
        "itemId": "collectible-15080050091",
        "weight": 108
      },
      {
        "itemId": "motherboard",
        "weight": 108
      },
      {
        "itemId": "ram",
        "weight": 108
      },
      {
        "itemId": "ssd",
        "weight": 108
      },
      {
        "itemId": "collectible-15080050036",
        "weight": 81.966
      },
      {
        "itemId": "collectible-15060040002",
        "weight": 78
      },
      {
        "itemId": "collectible-15080050057",
        "weight": 78
      },
      {
        "itemId": "collectible-15080050114",
        "weight": 78
      },
      {
        "itemId": "collectible-15080050214",
        "weight": 78
      },
      {
        "itemId": "collectible-15200000061",
        "weight": 78
      },
      {
        "itemId": "collectible-15080050127",
        "weight": 76.449
      },
      {
        "itemId": "collectible-15080050117",
        "weight": 71.601
      },
      {
        "itemId": "collectible-15200000141",
        "weight": 63
      },
      {
        "itemId": "collectible-15200000142",
        "weight": 63
      },
      {
        "itemId": "collectible-15200000165",
        "weight": 63
      },
      {
        "itemId": "collectible-15200000184",
        "weight": 63
      },
      {
        "itemId": "collectible-15080050163",
        "weight": 61.02
      },
      {
        "itemId": "collectible-15020010035",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050102",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050103",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050105",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050106",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050162",
        "weight": 59.795
      },
      {
        "itemId": "collectible-15080050002",
        "weight": 57.311
      },
      {
        "itemId": "collectible-15060080014",
        "weight": 50.645
      },
      {
        "itemId": "collectible-15080050132",
        "weight": 43.803
      },
      {
        "itemId": "collectible-15080050180",
        "weight": 43.423
      },
      {
        "itemId": "collectible-15040040007",
        "weight": 41.841
      },
      {
        "itemId": "collectible-15080050174",
        "weight": 36.663
      },
      {
        "itemId": "collectible-15080050095",
        "weight": 30.741
      },
      {
        "itemId": "collectible-15080050168",
        "weight": 30.402
      },
      {
        "itemId": "collectible-15080050179",
        "weight": 29.401
      },
      {
        "itemId": "collectible-15030040013",
        "weight": 29.202
      },
      {
        "itemId": "cpu",
        "weight": 28.166
      },
      {
        "itemId": "collectible-15030050006",
        "weight": 24.861
      },
      {
        "itemId": "collectible-15080050090",
        "weight": 24.296
      },
      {
        "itemId": "collectible-15080050115",
        "weight": 22.614
      },
      {
        "itemId": "collectible-15080050071",
        "weight": 22.05
      },
      {
        "itemId": "collectible-15080050126",
        "weight": 21.578
      },
      {
        "itemId": "collectible-15030050003",
        "weight": 21.011
      },
      {
        "itemId": "collectible-15060040003",
        "weight": 20.969
      },
      {
        "itemId": "ballistic-computer",
        "weight": 19.855
      },
      {
        "itemId": "collectible-15080050035",
        "weight": 18.944
      },
      {
        "itemId": "collectible-15030050019",
        "weight": 18.155
      },
      {
        "itemId": "collectible-15080050129",
        "weight": 17.14
      },
      {
        "itemId": "collectible-15040010019",
        "weight": 17.097
      },
      {
        "itemId": "collectible-15060040001",
        "weight": 16.275
      },
      {
        "itemId": "collectible-15080050069",
        "weight": 15.75
      },
      {
        "itemId": "collectible-15080050173",
        "weight": 15.75
      },
      {
        "itemId": "collectible-15200000143",
        "weight": 15.75
      },
      {
        "itemId": "collectible-15200000166",
        "weight": 15.75
      },
      {
        "itemId": "collectible-15200000185",
        "weight": 15.75
      },
      {
        "itemId": "collectible-15040010023",
        "weight": 15.12
      },
      {
        "itemId": "collectible-15080050101",
        "weight": 14.792
      },
      {
        "itemId": "collectible-15080050195",
        "weight": 14.397
      },
      {
        "itemId": "collectible-15080050034",
        "weight": 13.891
      },
      {
        "itemId": "collectible-15030040001",
        "weight": 13.705
      },
      {
        "itemId": "collectible-15080050212",
        "weight": 11.358
      },
      {
        "itemId": "collectible-15080050033",
        "weight": 11.34
      },
      {
        "itemId": "collectible-15080050088",
        "weight": 11.34
      },
      {
        "itemId": "collectible-15080050189",
        "weight": 11.34
      },
      {
        "itemId": "collectible-15080050144",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15080050220",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15080050118",
        "weight": 10.524
      },
      {
        "itemId": "collectible-15080050192",
        "weight": 8.19
      },
      {
        "itemId": "collectible-15030050013",
        "weight": 8.1
      },
      {
        "itemId": "collectible-15080050204",
        "weight": 8.1
      },
      {
        "itemId": "collectible-15080050205",
        "weight": 8.1
      },
      {
        "itemId": "collectible-15080050169",
        "weight": 6.889
      },
      {
        "itemId": "collectible-15020010036",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15080050190",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15080050210",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15060080015",
        "weight": 5.512
      },
      {
        "itemId": "collectible-15080050066",
        "weight": 5.512
      },
      {
        "itemId": "collectible-15080050067",
        "weight": 5.512
      },
      {
        "itemId": "collectible-15080050131",
        "weight": 5.512
      },
      {
        "itemId": "collectible-15020010033",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15080050196",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15020010031",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15030050017",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050178",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050211",
        "weight": 3.78
      },
      {
        "itemId": "camera",
        "weight": 2.835
      },
      {
        "itemId": "collectible-15030050007",
        "weight": 2.835
      },
      {
        "itemId": "collectible-15030050008",
        "weight": 2.835
      },
      {
        "itemId": "collectible-15030050012",
        "weight": 2.835
      },
      {
        "itemId": "collectible-15030050014",
        "weight": 2.835
      },
      {
        "itemId": "collectible-15030050018",
        "weight": 2.835
      },
      {
        "itemId": "collectible-15080050030",
        "weight": 2.835
      },
      {
        "itemId": "collectible-15080050032",
        "weight": 2.835
      },
      {
        "itemId": "collectible-15080050167",
        "weight": 2.835
      },
      {
        "itemId": "collectible-15080050175",
        "weight": 2.835
      },
      {
        "itemId": "collectible-15080050186",
        "weight": 2.835
      },
      {
        "itemId": "drone",
        "weight": 2.835
      },
      {
        "itemId": "military-gpu",
        "weight": 2.835
      },
      {
        "itemId": "portable-radar",
        "weight": 2.835
      },
      {
        "itemId": "radio",
        "weight": 2.835
      },
      {
        "itemId": "collectible-15060040004",
        "weight": 2.047
      },
      {
        "itemId": "collectible-15080050058",
        "weight": 2.047
      },
      {
        "itemId": "collectible-15080050113",
        "weight": 2.047
      },
      {
        "itemId": "collectible-15080050128",
        "weight": 2.047
      },
      {
        "itemId": "resuscitator",
        "weight": 2.047
      },
      {
        "itemId": "collectible-15080050098",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050099",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050100",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050176",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050177",
        "weight": 1.575
      }
    ]
  },
  "express-box": {
    "name": "快递箱",
    "size": [
      5,
      5
    ],
    "min": 1,
    "max": 3,
    "pools": [
      {
        "itemId": "collectible-15010010008",
        "weight": 2240
      },
      {
        "itemId": "collectible-15040010007",
        "weight": 2240
      },
      {
        "itemId": "collectible-15040010008",
        "weight": 2240
      },
      {
        "itemId": "collectible-15040010009",
        "weight": 2240
      },
      {
        "itemId": "collectible-15060080002",
        "weight": 2240
      },
      {
        "itemId": "collectible-15060080003",
        "weight": 2240
      },
      {
        "itemId": "collectible-15060080007",
        "weight": 2240
      },
      {
        "itemId": "collectible-15080050046",
        "weight": 2240
      },
      {
        "itemId": "collectible-15080050047",
        "weight": 2240
      },
      {
        "itemId": "collectible-15080050048",
        "weight": 2240
      },
      {
        "itemId": "collectible-15080050049",
        "weight": 2240
      },
      {
        "itemId": "collectible-15080050050",
        "weight": 2240
      },
      {
        "itemId": "collectible-15080050051",
        "weight": 2240
      },
      {
        "itemId": "collectible-15080050052",
        "weight": 2240
      },
      {
        "itemId": "collectible-15080050053",
        "weight": 2240
      },
      {
        "itemId": "collectible-15080050054",
        "weight": 2240
      },
      {
        "itemId": "collectible-15080050055",
        "weight": 2240
      },
      {
        "itemId": "collectible-15080050059",
        "weight": 2240
      },
      {
        "itemId": "collectible-15080050060",
        "weight": 2240
      },
      {
        "itemId": "collectible-15080050081",
        "weight": 2240
      },
      {
        "itemId": "collectible-15030010009",
        "weight": 1920
      },
      {
        "itemId": "collectible-15020010001",
        "weight": 1840
      },
      {
        "itemId": "collectible-15020010002",
        "weight": 1840
      },
      {
        "itemId": "collectible-15020010003",
        "weight": 1840
      },
      {
        "itemId": "collectible-15020010004",
        "weight": 1840
      },
      {
        "itemId": "collectible-15020010006",
        "weight": 1840
      },
      {
        "itemId": "collectible-15020010010",
        "weight": 1840
      },
      {
        "itemId": "collectible-15020010014",
        "weight": 1840
      },
      {
        "itemId": "collectible-15040010016",
        "weight": 1840
      },
      {
        "itemId": "collectible-15080050085",
        "weight": 1840
      },
      {
        "itemId": "collectible-15080050086",
        "weight": 1840
      },
      {
        "itemId": "collectible-15010010015",
        "weight": 1176
      },
      {
        "itemId": "collectible-15060080001",
        "weight": 1176
      },
      {
        "itemId": "collectible-15060080004",
        "weight": 1176
      },
      {
        "itemId": "collectible-15060080006",
        "weight": 1176
      },
      {
        "itemId": "collectible-15060080009",
        "weight": 1176
      },
      {
        "itemId": "collectible-15080050019",
        "weight": 1176
      },
      {
        "itemId": "collectible-15080050020",
        "weight": 1176
      },
      {
        "itemId": "collectible-15080050022",
        "weight": 1176
      },
      {
        "itemId": "collectible-15080050077",
        "weight": 1176
      },
      {
        "itemId": "collectible-15080050078",
        "weight": 1176
      },
      {
        "itemId": "collectible-15080050079",
        "weight": 1176
      },
      {
        "itemId": "collectible-15080050080",
        "weight": 1176
      },
      {
        "itemId": "collectible-15200000134",
        "weight": 1176
      },
      {
        "itemId": "collectible-15200000138",
        "weight": 1176
      },
      {
        "itemId": "lighter",
        "weight": 1176
      },
      {
        "itemId": "collectible-15080050112",
        "weight": 1040
      },
      {
        "itemId": "collectible-15020050007",
        "weight": 1008
      },
      {
        "itemId": "collectible-15030010002",
        "weight": 1008
      },
      {
        "itemId": "collectible-15030010007",
        "weight": 1008
      },
      {
        "itemId": "collectible-15030010011",
        "weight": 1008
      },
      {
        "itemId": "collectible-15030010013",
        "weight": 1008
      },
      {
        "itemId": "collectible-15030010014",
        "weight": 1008
      },
      {
        "itemId": "collectible-15030010018",
        "weight": 1008
      },
      {
        "itemId": "collectible-15030010019",
        "weight": 1008
      },
      {
        "itemId": "collectible-15030040011",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010007",
        "weight": 966
      },
      {
        "itemId": "collectible-15020010008",
        "weight": 966
      },
      {
        "itemId": "collectible-15020010017",
        "weight": 966
      },
      {
        "itemId": "collectible-15020010019",
        "weight": 966
      },
      {
        "itemId": "collectible-15020010020",
        "weight": 966
      },
      {
        "itemId": "collectible-15020010021",
        "weight": 966
      },
      {
        "itemId": "collectible-15020010026",
        "weight": 966
      },
      {
        "itemId": "collectible-15020010027",
        "weight": 966
      },
      {
        "itemId": "collectible-15020010030",
        "weight": 966
      },
      {
        "itemId": "collectible-15020010032",
        "weight": 966
      },
      {
        "itemId": "collectible-15020040003",
        "weight": 966
      },
      {
        "itemId": "collectible-15020040004",
        "weight": 966
      },
      {
        "itemId": "collectible-15040010012",
        "weight": 966
      },
      {
        "itemId": "collectible-15080050084",
        "weight": 966
      },
      {
        "itemId": "collectible-15080050087",
        "weight": 966
      },
      {
        "itemId": "screwdriver",
        "weight": 966
      },
      {
        "itemId": "wire",
        "weight": 966
      },
      {
        "itemId": "collectible-15010010004",
        "weight": 960
      },
      {
        "itemId": "collectible-15060010008",
        "weight": 960
      },
      {
        "itemId": "collectible-15060010009",
        "weight": 960
      },
      {
        "itemId": "collectible-15090010077",
        "weight": 960
      },
      {
        "itemId": "collectible-15080050110",
        "weight": 546
      },
      {
        "itemId": "collectible-15080050111",
        "weight": 546
      },
      {
        "itemId": "collectible-15060010001",
        "weight": 504
      },
      {
        "itemId": "collectible-15060010002",
        "weight": 504
      },
      {
        "itemId": "collectible-15060010003",
        "weight": 504
      },
      {
        "itemId": "collectible-15060010010",
        "weight": 504
      },
      {
        "itemId": "collectible-15060010012",
        "weight": 504
      },
      {
        "itemId": "collectible-15060080010",
        "weight": 504
      },
      {
        "itemId": "collectible-15060080011",
        "weight": 504
      },
      {
        "itemId": "collectible-15060080013",
        "weight": 504
      },
      {
        "itemId": "collectible-15060080016",
        "weight": 504
      },
      {
        "itemId": "collectible-15080050021",
        "weight": 504
      },
      {
        "itemId": "collectible-15080050026",
        "weight": 504
      },
      {
        "itemId": "collectible-15080050027",
        "weight": 504
      },
      {
        "itemId": "collectible-15080050072",
        "weight": 504
      },
      {
        "itemId": "collectible-15080050073",
        "weight": 504
      },
      {
        "itemId": "collectible-15080050074",
        "weight": 504
      },
      {
        "itemId": "collectible-15080050075",
        "weight": 504
      },
      {
        "itemId": "collectible-15080050076",
        "weight": 504
      },
      {
        "itemId": "collectible-15200000139",
        "weight": 504
      },
      {
        "itemId": "collectible-15200000163",
        "weight": 504
      },
      {
        "itemId": "collectible-15020050008",
        "weight": 432
      },
      {
        "itemId": "collectible-15030010001",
        "weight": 432
      },
      {
        "itemId": "collectible-15030010008",
        "weight": 432
      },
      {
        "itemId": "collectible-15030040002",
        "weight": 432
      },
      {
        "itemId": "collectible-15030050016",
        "weight": 432
      },
      {
        "itemId": "collectible-15070010001",
        "weight": 432
      },
      {
        "itemId": "collectible-15070010002",
        "weight": 432
      },
      {
        "itemId": "collectible-15080050039",
        "weight": 432
      },
      {
        "itemId": "collectible-15080050194",
        "weight": 432
      },
      {
        "itemId": "collectible-15080050217",
        "weight": 432
      },
      {
        "itemId": "cement-bag",
        "weight": 414
      },
      {
        "itemId": "collectible-15020010016",
        "weight": 414
      },
      {
        "itemId": "collectible-15020010018",
        "weight": 414
      },
      {
        "itemId": "collectible-15020010023",
        "weight": 414
      },
      {
        "itemId": "collectible-15020040002",
        "weight": 414
      },
      {
        "itemId": "collectible-15040010017",
        "weight": 414
      },
      {
        "itemId": "collectible-15040010021",
        "weight": 414
      },
      {
        "itemId": "collectible-15040010022",
        "weight": 414
      },
      {
        "itemId": "fabric",
        "weight": 414
      },
      {
        "itemId": "toolbox-item",
        "weight": 414
      },
      {
        "itemId": "wireless-drill",
        "weight": 414
      },
      {
        "itemId": "collectible-15030040010",
        "weight": 375.153
      },
      {
        "itemId": "collectible-15020010034",
        "weight": 234
      },
      {
        "itemId": "collectible-15080050107",
        "weight": 234
      },
      {
        "itemId": "collectible-15080050109",
        "weight": 234
      },
      {
        "itemId": "fuel",
        "weight": 234
      },
      {
        "itemId": "gas-tank",
        "weight": 234
      },
      {
        "itemId": "collectible-15060010004",
        "weight": 216
      },
      {
        "itemId": "collectible-15060010006",
        "weight": 216
      },
      {
        "itemId": "collectible-15060010007",
        "weight": 216
      },
      {
        "itemId": "collectible-15080050065",
        "weight": 216
      },
      {
        "itemId": "collectible-15080050116",
        "weight": 216
      },
      {
        "itemId": "collectible-15090010041",
        "weight": 216
      },
      {
        "itemId": "collectible-15060080005",
        "weight": 168
      },
      {
        "itemId": "collectible-15060080008",
        "weight": 168
      },
      {
        "itemId": "collectible-15080050068",
        "weight": 168
      },
      {
        "itemId": "collectible-15080050070",
        "weight": 168
      },
      {
        "itemId": "collectible-15080050136",
        "weight": 168
      },
      {
        "itemId": "collectible-15080050183",
        "weight": 168
      },
      {
        "itemId": "collectible-15080050215",
        "weight": 168
      },
      {
        "itemId": "collectible-15080050218",
        "weight": 168
      },
      {
        "itemId": "collectible-15080050219",
        "weight": 168
      },
      {
        "itemId": "collectible-15200000135",
        "weight": 168
      },
      {
        "itemId": "collectible-15200000140",
        "weight": 168
      },
      {
        "itemId": "collectible-15200000164",
        "weight": 168
      },
      {
        "itemId": "collectible-15200000183",
        "weight": 168
      },
      {
        "itemId": "collectible-15080050108",
        "weight": 155.431
      },
      {
        "itemId": "collectible-15030040012",
        "weight": 144
      },
      {
        "itemId": "collectible-15030040014",
        "weight": 144
      },
      {
        "itemId": "collectible-15030050005",
        "weight": 144
      },
      {
        "itemId": "collectible-15030050011",
        "weight": 144
      },
      {
        "itemId": "collectible-15040010015",
        "weight": 144
      },
      {
        "itemId": "collectible-15040050003",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050037",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050038",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050091",
        "weight": 144
      },
      {
        "itemId": "motherboard",
        "weight": 144
      },
      {
        "itemId": "ram",
        "weight": 144
      },
      {
        "itemId": "ssd",
        "weight": 144
      },
      {
        "itemId": "collectible-15020010024",
        "weight": 138
      },
      {
        "itemId": "collectible-15020050003",
        "weight": 138
      },
      {
        "itemId": "collectible-15020050004",
        "weight": 138
      },
      {
        "itemId": "collectible-15020050006",
        "weight": 138
      },
      {
        "itemId": "collectible-15080050119",
        "weight": 138
      },
      {
        "itemId": "collectible-15080050130",
        "weight": 138
      },
      {
        "itemId": "collectible-15200000044",
        "weight": 138
      },
      {
        "itemId": "special-steel",
        "weight": 138
      },
      {
        "itemId": "wrench",
        "weight": 138
      },
      {
        "itemId": "collectible-15080050036",
        "weight": 109.288
      },
      {
        "itemId": "collectible-15020010035",
        "weight": 78
      },
      {
        "itemId": "collectible-15080050102",
        "weight": 78
      },
      {
        "itemId": "collectible-15080050103",
        "weight": 78
      },
      {
        "itemId": "collectible-15080050105",
        "weight": 78
      },
      {
        "itemId": "collectible-15080050106",
        "weight": 78
      },
      {
        "itemId": "collectible-15060040002",
        "weight": 72
      },
      {
        "itemId": "collectible-15080050057",
        "weight": 72
      },
      {
        "itemId": "collectible-15080050114",
        "weight": 72
      },
      {
        "itemId": "collectible-15080050214",
        "weight": 72
      },
      {
        "itemId": "collectible-15200000061",
        "weight": 72
      },
      {
        "itemId": "collectible-15080050127",
        "weight": 70.568
      },
      {
        "itemId": "collectible-15080050117",
        "weight": 66.094
      },
      {
        "itemId": "collectible-15040040007",
        "weight": 54.393
      },
      {
        "itemId": "collectible-15200000141",
        "weight": 50.4
      },
      {
        "itemId": "collectible-15200000142",
        "weight": 50.4
      },
      {
        "itemId": "collectible-15200000165",
        "weight": 50.4
      },
      {
        "itemId": "collectible-15200000184",
        "weight": 50.4
      },
      {
        "itemId": "collectible-15080050163",
        "weight": 48.816
      },
      {
        "itemId": "collectible-15080050162",
        "weight": 47.836
      },
      {
        "itemId": "collectible-15080050002",
        "weight": 45.849
      },
      {
        "itemId": "collectible-15080050095",
        "weight": 40.988
      },
      {
        "itemId": "collectible-15080050168",
        "weight": 40.537
      },
      {
        "itemId": "collectible-15060080014",
        "weight": 40.516
      },
      {
        "itemId": "collectible-15030040013",
        "weight": 38.937
      },
      {
        "itemId": "cpu",
        "weight": 37.554
      },
      {
        "itemId": "collectible-15080050174",
        "weight": 35.136
      },
      {
        "itemId": "collectible-15080050132",
        "weight": 35.042
      },
      {
        "itemId": "collectible-15080050180",
        "weight": 34.739
      },
      {
        "itemId": "collectible-15030050006",
        "weight": 33.147
      },
      {
        "itemId": "collectible-15080050090",
        "weight": 32.395
      },
      {
        "itemId": "collectible-15080050126",
        "weight": 28.77
      },
      {
        "itemId": "collectible-15080050179",
        "weight": 28.176
      },
      {
        "itemId": "collectible-15030050003",
        "weight": 28.015
      },
      {
        "itemId": "ballistic-computer",
        "weight": 26.473
      },
      {
        "itemId": "collectible-15080050035",
        "weight": 25.258
      },
      {
        "itemId": "collectible-15080050115",
        "weight": 20.874
      },
      {
        "itemId": "collectible-15060040003",
        "weight": 19.356
      },
      {
        "itemId": "collectible-15080050101",
        "weight": 19.23
      },
      {
        "itemId": "collectible-15080050034",
        "weight": 18.521
      },
      {
        "itemId": "collectible-15030040001",
        "weight": 18.273
      },
      {
        "itemId": "collectible-15080050071",
        "weight": 17.64
      },
      {
        "itemId": "collectible-15030050019",
        "weight": 17.398
      },
      {
        "itemId": "collectible-15080050129",
        "weight": 15.821
      },
      {
        "itemId": "collectible-15040010019",
        "weight": 15.782
      },
      {
        "itemId": "collectible-15080050033",
        "weight": 15.12
      },
      {
        "itemId": "collectible-15080050088",
        "weight": 15.12
      },
      {
        "itemId": "collectible-15080050189",
        "weight": 15.12
      },
      {
        "itemId": "collectible-15060040001",
        "weight": 15.023
      },
      {
        "itemId": "collectible-15040010023",
        "weight": 14.49
      },
      {
        "itemId": "collectible-15080050118",
        "weight": 13.681
      },
      {
        "itemId": "collectible-15080050195",
        "weight": 13.29
      },
      {
        "itemId": "collectible-15080050069",
        "weight": 12.6
      },
      {
        "itemId": "collectible-15080050173",
        "weight": 12.6
      },
      {
        "itemId": "collectible-15200000143",
        "weight": 12.6
      },
      {
        "itemId": "collectible-15200000166",
        "weight": 12.6
      },
      {
        "itemId": "collectible-15200000185",
        "weight": 12.6
      },
      {
        "itemId": "collectible-15030050013",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15080050204",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15080050205",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15080050212",
        "weight": 10.485
      },
      {
        "itemId": "collectible-15080050144",
        "weight": 10.35
      },
      {
        "itemId": "collectible-15080050220",
        "weight": 10.35
      },
      {
        "itemId": "collectible-15080050169",
        "weight": 8.955
      },
      {
        "itemId": "collectible-15020010036",
        "weight": 8.19
      },
      {
        "itemId": "collectible-15080050190",
        "weight": 8.19
      },
      {
        "itemId": "collectible-15080050210",
        "weight": 8.19
      },
      {
        "itemId": "collectible-15080050192",
        "weight": 7.56
      },
      {
        "itemId": "collectible-15020010033",
        "weight": 5.85
      },
      {
        "itemId": "collectible-15080050196",
        "weight": 5.85
      },
      {
        "itemId": "collectible-15060080015",
        "weight": 4.41
      },
      {
        "itemId": "collectible-15080050066",
        "weight": 4.41
      },
      {
        "itemId": "collectible-15080050067",
        "weight": 4.41
      },
      {
        "itemId": "collectible-15080050131",
        "weight": 4.41
      },
      {
        "itemId": "camera",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15030050007",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15030050008",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15030050012",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15030050014",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15030050018",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050030",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050032",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050167",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050175",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050186",
        "weight": 3.78
      },
      {
        "itemId": "drone",
        "weight": 3.78
      },
      {
        "itemId": "military-gpu",
        "weight": 3.78
      },
      {
        "itemId": "portable-radar",
        "weight": 3.78
      },
      {
        "itemId": "radio",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15020010031",
        "weight": 3.622
      },
      {
        "itemId": "collectible-15030050017",
        "weight": 3.622
      },
      {
        "itemId": "collectible-15080050178",
        "weight": 3.622
      },
      {
        "itemId": "collectible-15080050211",
        "weight": 3.622
      },
      {
        "itemId": "collectible-15080050098",
        "weight": 2.047
      },
      {
        "itemId": "collectible-15080050099",
        "weight": 2.047
      },
      {
        "itemId": "collectible-15080050100",
        "weight": 2.047
      },
      {
        "itemId": "collectible-15080050176",
        "weight": 2.047
      },
      {
        "itemId": "collectible-15080050177",
        "weight": 2.047
      },
      {
        "itemId": "collectible-15060040004",
        "weight": 1.89
      },
      {
        "itemId": "collectible-15080050058",
        "weight": 1.89
      },
      {
        "itemId": "collectible-15080050113",
        "weight": 1.89
      },
      {
        "itemId": "collectible-15080050128",
        "weight": 1.89
      },
      {
        "itemId": "resuscitator",
        "weight": 1.89
      }
    ]
  },
  "supply-crate": {
    "name": "野外物资箱",
    "size": [
      7,
      6
    ],
    "min": 2,
    "max": 4,
    "pools": [
      {
        "itemId": "collectible-15020010001",
        "weight": 1920
      },
      {
        "itemId": "collectible-15020010002",
        "weight": 1920
      },
      {
        "itemId": "collectible-15020010003",
        "weight": 1920
      },
      {
        "itemId": "collectible-15020010004",
        "weight": 1920
      },
      {
        "itemId": "collectible-15020010006",
        "weight": 1920
      },
      {
        "itemId": "collectible-15020010010",
        "weight": 1920
      },
      {
        "itemId": "collectible-15020010014",
        "weight": 1920
      },
      {
        "itemId": "collectible-15040010016",
        "weight": 1920
      },
      {
        "itemId": "collectible-15080050085",
        "weight": 1920
      },
      {
        "itemId": "collectible-15080050086",
        "weight": 1920
      },
      {
        "itemId": "bandage",
        "weight": 1440
      },
      {
        "itemId": "collectible-15080050112",
        "weight": 1440
      },
      {
        "itemId": "consumable-14020000001",
        "weight": 1440
      },
      {
        "itemId": "consumable-14030000001",
        "weight": 1440
      },
      {
        "itemId": "consumable-14040000001",
        "weight": 1440
      },
      {
        "itemId": "medkit",
        "weight": 1440
      },
      {
        "itemId": "painkiller-loot",
        "weight": 1440
      },
      {
        "itemId": "ammo-556-rrlp",
        "weight": 1200
      },
      {
        "itemId": "collectible-15020010007",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010008",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010017",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010019",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010020",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010021",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010026",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010027",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010030",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010032",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020040003",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020040004",
        "weight": 1008
      },
      {
        "itemId": "collectible-15040010012",
        "weight": 1008
      },
      {
        "itemId": "collectible-15080050084",
        "weight": 1008
      },
      {
        "itemId": "collectible-15080050087",
        "weight": 1008
      },
      {
        "itemId": "screwdriver",
        "weight": 1008
      },
      {
        "itemId": "wire",
        "weight": 1008
      },
      {
        "itemId": "collectible-15010010004",
        "weight": 960
      },
      {
        "itemId": "collectible-15060010008",
        "weight": 960
      },
      {
        "itemId": "collectible-15060010009",
        "weight": 960
      },
      {
        "itemId": "collectible-15090010077",
        "weight": 960
      },
      {
        "itemId": "collectible-15080050110",
        "weight": 756
      },
      {
        "itemId": "collectible-15080050111",
        "weight": 756
      },
      {
        "itemId": "consumable-14020000003",
        "weight": 756
      },
      {
        "itemId": "consumable-14030000002",
        "weight": 756
      },
      {
        "itemId": "consumable-14050000002",
        "weight": 756
      },
      {
        "itemId": "collectible-15030010009",
        "weight": 640
      },
      {
        "itemId": "ammo-556-fmj",
        "weight": 630
      },
      {
        "itemId": "collectible-15060010001",
        "weight": 504
      },
      {
        "itemId": "collectible-15060010002",
        "weight": 504
      },
      {
        "itemId": "collectible-15060010003",
        "weight": 504
      },
      {
        "itemId": "collectible-15060010010",
        "weight": 504
      },
      {
        "itemId": "collectible-15060010012",
        "weight": 504
      },
      {
        "itemId": "cement-bag",
        "weight": 432
      },
      {
        "itemId": "collectible-15020010016",
        "weight": 432
      },
      {
        "itemId": "collectible-15020010018",
        "weight": 432
      },
      {
        "itemId": "collectible-15020010023",
        "weight": 432
      },
      {
        "itemId": "collectible-15020040002",
        "weight": 432
      },
      {
        "itemId": "collectible-15040010017",
        "weight": 432
      },
      {
        "itemId": "collectible-15040010021",
        "weight": 432
      },
      {
        "itemId": "collectible-15040010022",
        "weight": 432
      },
      {
        "itemId": "fabric",
        "weight": 432
      },
      {
        "itemId": "toolbox-item",
        "weight": 432
      },
      {
        "itemId": "wireless-drill",
        "weight": 432
      },
      {
        "itemId": "collectible-15020050007",
        "weight": 336
      },
      {
        "itemId": "collectible-15030010002",
        "weight": 336
      },
      {
        "itemId": "collectible-15030010007",
        "weight": 336
      },
      {
        "itemId": "collectible-15030010011",
        "weight": 336
      },
      {
        "itemId": "collectible-15030010013",
        "weight": 336
      },
      {
        "itemId": "collectible-15030010014",
        "weight": 336
      },
      {
        "itemId": "collectible-15030010018",
        "weight": 336
      },
      {
        "itemId": "collectible-15030010019",
        "weight": 336
      },
      {
        "itemId": "collectible-15030040011",
        "weight": 336
      },
      {
        "itemId": "collectible-15020010034",
        "weight": 324
      },
      {
        "itemId": "collectible-15080050107",
        "weight": 324
      },
      {
        "itemId": "collectible-15080050109",
        "weight": 324
      },
      {
        "itemId": "consumable-14060000007",
        "weight": 324
      },
      {
        "itemId": "consumable-14060000008",
        "weight": 324
      },
      {
        "itemId": "consumable-14070000001",
        "weight": 324
      },
      {
        "itemId": "consumable-14070000004",
        "weight": 324
      },
      {
        "itemId": "consumable-14070000006",
        "weight": 324
      },
      {
        "itemId": "consumable-14070000008",
        "weight": 324
      },
      {
        "itemId": "consumable-14070000009",
        "weight": 324
      },
      {
        "itemId": "field-med",
        "weight": 324
      },
      {
        "itemId": "fuel",
        "weight": 324
      },
      {
        "itemId": "gas-tank",
        "weight": 324
      },
      {
        "itemId": "ammo-37100300002",
        "weight": 270
      },
      {
        "itemId": "ammo-556-m855",
        "weight": 270
      },
      {
        "itemId": "collectible-15060010004",
        "weight": 216
      },
      {
        "itemId": "collectible-15060010006",
        "weight": 216
      },
      {
        "itemId": "collectible-15060010007",
        "weight": 216
      },
      {
        "itemId": "collectible-15080050065",
        "weight": 216
      },
      {
        "itemId": "collectible-15080050116",
        "weight": 216
      },
      {
        "itemId": "collectible-15090010041",
        "weight": 216
      },
      {
        "itemId": "collectible-15080050108",
        "weight": 215.212
      },
      {
        "itemId": "collectible-15020010024",
        "weight": 144
      },
      {
        "itemId": "collectible-15020050003",
        "weight": 144
      },
      {
        "itemId": "collectible-15020050004",
        "weight": 144
      },
      {
        "itemId": "collectible-15020050006",
        "weight": 144
      },
      {
        "itemId": "collectible-15020050008",
        "weight": 144
      },
      {
        "itemId": "collectible-15030010001",
        "weight": 144
      },
      {
        "itemId": "collectible-15030010008",
        "weight": 144
      },
      {
        "itemId": "collectible-15030040002",
        "weight": 144
      },
      {
        "itemId": "collectible-15030050016",
        "weight": 144
      },
      {
        "itemId": "collectible-15070010001",
        "weight": 144
      },
      {
        "itemId": "collectible-15070010002",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050039",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050119",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050130",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050194",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050217",
        "weight": 144
      },
      {
        "itemId": "collectible-15200000044",
        "weight": 144
      },
      {
        "itemId": "special-steel",
        "weight": 144
      },
      {
        "itemId": "wrench",
        "weight": 144
      },
      {
        "itemId": "collectible-15030040010",
        "weight": 125.051
      },
      {
        "itemId": "collectible-15020010035",
        "weight": 108
      },
      {
        "itemId": "collectible-15080050102",
        "weight": 108
      },
      {
        "itemId": "collectible-15080050103",
        "weight": 108
      },
      {
        "itemId": "collectible-15080050105",
        "weight": 108
      },
      {
        "itemId": "collectible-15080050106",
        "weight": 108
      },
      {
        "itemId": "consumable-14020000005",
        "weight": 108
      },
      {
        "itemId": "consumable-14030000003",
        "weight": 108
      },
      {
        "itemId": "consumable-14050000003",
        "weight": 108
      },
      {
        "itemId": "consumable-14060000006",
        "weight": 108
      },
      {
        "itemId": "consumable-14070000003",
        "weight": 108
      },
      {
        "itemId": "consumable-14070000005",
        "weight": 108
      },
      {
        "itemId": "consumable-14070000016",
        "weight": 108
      },
      {
        "itemId": "consumable-14070000017",
        "weight": 108
      },
      {
        "itemId": "consumable-14060000005",
        "weight": 107.298
      },
      {
        "itemId": "consumable-14070000007",
        "weight": 91.937
      },
      {
        "itemId": "collectible-15040040007",
        "weight": 75.313
      },
      {
        "itemId": "collectible-15060040002",
        "weight": 72
      },
      {
        "itemId": "collectible-15080050057",
        "weight": 72
      },
      {
        "itemId": "collectible-15080050114",
        "weight": 72
      },
      {
        "itemId": "collectible-15080050214",
        "weight": 72
      },
      {
        "itemId": "collectible-15200000061",
        "weight": 72
      },
      {
        "itemId": "ammo-556-m855a1",
        "weight": 71.71
      },
      {
        "itemId": "collectible-15080050127",
        "weight": 70.568
      },
      {
        "itemId": "collectible-15080050117",
        "weight": 66.094
      },
      {
        "itemId": "collectible-15030040012",
        "weight": 48
      },
      {
        "itemId": "collectible-15030040014",
        "weight": 48
      },
      {
        "itemId": "collectible-15030050005",
        "weight": 48
      },
      {
        "itemId": "collectible-15030050011",
        "weight": 48
      },
      {
        "itemId": "collectible-15040010015",
        "weight": 48
      },
      {
        "itemId": "collectible-15040050003",
        "weight": 48
      },
      {
        "itemId": "collectible-15080050037",
        "weight": 48
      },
      {
        "itemId": "collectible-15080050038",
        "weight": 48
      },
      {
        "itemId": "collectible-15080050091",
        "weight": 48
      },
      {
        "itemId": "motherboard",
        "weight": 48
      },
      {
        "itemId": "ram",
        "weight": 48
      },
      {
        "itemId": "ssd",
        "weight": 48
      },
      {
        "itemId": "ammo-37100400002",
        "weight": 47.557
      },
      {
        "itemId": "collectible-15080050174",
        "weight": 36.663
      },
      {
        "itemId": "collectible-15080050036",
        "weight": 36.429
      },
      {
        "itemId": "consumable-14070000018",
        "weight": 32.4
      },
      {
        "itemId": "consumable-14070000019",
        "weight": 32.4
      },
      {
        "itemId": "collectible-15080050179",
        "weight": 29.401
      },
      {
        "itemId": "collectible-15080050101",
        "weight": 26.626
      },
      {
        "itemId": "collectible-15080050115",
        "weight": 20.874
      },
      {
        "itemId": "collectible-15060040003",
        "weight": 19.356
      },
      {
        "itemId": "collectible-15080050118",
        "weight": 18.943
      },
      {
        "itemId": "collectible-15030050019",
        "weight": 18.155
      },
      {
        "itemId": "collectible-15080050129",
        "weight": 15.821
      },
      {
        "itemId": "collectible-15040010019",
        "weight": 15.782
      },
      {
        "itemId": "collectible-15040010023",
        "weight": 15.12
      },
      {
        "itemId": "collectible-15060040001",
        "weight": 15.023
      },
      {
        "itemId": "consumable-14060000001",
        "weight": 14.5
      },
      {
        "itemId": "collectible-15080050095",
        "weight": 13.663
      },
      {
        "itemId": "collectible-15080050168",
        "weight": 13.512
      },
      {
        "itemId": "collectible-15080050195",
        "weight": 13.29
      },
      {
        "itemId": "collectible-15030040013",
        "weight": 12.979
      },
      {
        "itemId": "cpu",
        "weight": 12.518
      },
      {
        "itemId": "collectible-15080050169",
        "weight": 12.4
      },
      {
        "itemId": "collectible-15020010036",
        "weight": 11.34
      },
      {
        "itemId": "collectible-15080050190",
        "weight": 11.34
      },
      {
        "itemId": "collectible-15080050210",
        "weight": 11.34
      },
      {
        "itemId": "consumable-14020000006",
        "weight": 11.34
      },
      {
        "itemId": "consumable-14060000002",
        "weight": 11.34
      },
      {
        "itemId": "collectible-15030050006",
        "weight": 11.049
      },
      {
        "itemId": "collectible-15080050144",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15080050220",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15080050090",
        "weight": 10.798
      },
      {
        "itemId": "collectible-15080050212",
        "weight": 10.485
      },
      {
        "itemId": "collectible-15080050126",
        "weight": 9.59
      },
      {
        "itemId": "ammo-556-m995",
        "weight": 9.45
      },
      {
        "itemId": "collectible-15030050003",
        "weight": 9.338
      },
      {
        "itemId": "ballistic-computer",
        "weight": 8.824
      },
      {
        "itemId": "collectible-15080050035",
        "weight": 8.419
      },
      {
        "itemId": "collectible-15020010033",
        "weight": 8.1
      },
      {
        "itemId": "collectible-15080050196",
        "weight": 8.1
      },
      {
        "itemId": "collectible-15080050192",
        "weight": 7.56
      },
      {
        "itemId": "collectible-15080050034",
        "weight": 6.174
      },
      {
        "itemId": "collectible-15030040001",
        "weight": 6.091
      },
      {
        "itemId": "collectible-15080050033",
        "weight": 5.04
      },
      {
        "itemId": "collectible-15080050088",
        "weight": 5.04
      },
      {
        "itemId": "collectible-15080050189",
        "weight": 5.04
      },
      {
        "itemId": "collectible-15020010031",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15030050017",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050178",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050211",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15030050013",
        "weight": 3.6
      },
      {
        "itemId": "collectible-15080050204",
        "weight": 3.6
      },
      {
        "itemId": "collectible-15080050205",
        "weight": 3.6
      },
      {
        "itemId": "collectible-15080050098",
        "weight": 2.835
      },
      {
        "itemId": "collectible-15080050099",
        "weight": 2.835
      },
      {
        "itemId": "collectible-15080050100",
        "weight": 2.835
      },
      {
        "itemId": "collectible-15080050176",
        "weight": 2.835
      },
      {
        "itemId": "collectible-15080050177",
        "weight": 2.835
      },
      {
        "itemId": "consumable-14060000003",
        "weight": 2.835
      },
      {
        "itemId": "consumable-14060000004",
        "weight": 2.835
      },
      {
        "itemId": "collectible-15060040004",
        "weight": 1.89
      },
      {
        "itemId": "collectible-15080050058",
        "weight": 1.89
      },
      {
        "itemId": "collectible-15080050113",
        "weight": 1.89
      },
      {
        "itemId": "collectible-15080050128",
        "weight": 1.89
      },
      {
        "itemId": "resuscitator",
        "weight": 1.89
      },
      {
        "itemId": "camera",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15030050007",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15030050008",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15030050012",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15030050014",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15030050018",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15080050030",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15080050032",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15080050167",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15080050175",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15080050186",
        "weight": 1.26
      },
      {
        "itemId": "drone",
        "weight": 1.26
      },
      {
        "itemId": "military-gpu",
        "weight": 1.26
      },
      {
        "itemId": "portable-radar",
        "weight": 1.26
      },
      {
        "itemId": "radio",
        "weight": 1.26
      }
    ]
  },
  "ammo-box": {
    "name": "弹药箱",
    "size": [
      6,
      5
    ],
    "min": 2,
    "max": 4,
    "pools": [
      {
        "itemId": "ammo-556-rrlp",
        "weight": 4680
      },
      {
        "itemId": "ammo-556-fmj",
        "weight": 2457
      },
      {
        "itemId": "ammo-37100300002",
        "weight": 1053
      },
      {
        "itemId": "ammo-556-m855",
        "weight": 1053
      },
      {
        "itemId": "collectible-15020010001",
        "weight": 960
      },
      {
        "itemId": "collectible-15020010002",
        "weight": 960
      },
      {
        "itemId": "collectible-15020010003",
        "weight": 960
      },
      {
        "itemId": "collectible-15020010004",
        "weight": 960
      },
      {
        "itemId": "collectible-15020010006",
        "weight": 960
      },
      {
        "itemId": "collectible-15020010010",
        "weight": 960
      },
      {
        "itemId": "collectible-15020010014",
        "weight": 960
      },
      {
        "itemId": "collectible-15040010016",
        "weight": 960
      },
      {
        "itemId": "collectible-15080050085",
        "weight": 960
      },
      {
        "itemId": "collectible-15080050086",
        "weight": 960
      },
      {
        "itemId": "collectible-15080050112",
        "weight": 800
      },
      {
        "itemId": "collectible-15020010007",
        "weight": 504
      },
      {
        "itemId": "collectible-15020010008",
        "weight": 504
      },
      {
        "itemId": "collectible-15020010017",
        "weight": 504
      },
      {
        "itemId": "collectible-15020010019",
        "weight": 504
      },
      {
        "itemId": "collectible-15020010020",
        "weight": 504
      },
      {
        "itemId": "collectible-15020010021",
        "weight": 504
      },
      {
        "itemId": "collectible-15020010026",
        "weight": 504
      },
      {
        "itemId": "collectible-15020010027",
        "weight": 504
      },
      {
        "itemId": "collectible-15020010030",
        "weight": 504
      },
      {
        "itemId": "collectible-15020010032",
        "weight": 504
      },
      {
        "itemId": "collectible-15020040003",
        "weight": 504
      },
      {
        "itemId": "collectible-15020040004",
        "weight": 504
      },
      {
        "itemId": "collectible-15040010012",
        "weight": 504
      },
      {
        "itemId": "collectible-15080050084",
        "weight": 504
      },
      {
        "itemId": "collectible-15080050087",
        "weight": 504
      },
      {
        "itemId": "screwdriver",
        "weight": 504
      },
      {
        "itemId": "wire",
        "weight": 504
      },
      {
        "itemId": "collectible-15080050110",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050111",
        "weight": 420
      },
      {
        "itemId": "ammo-556-m855a1",
        "weight": 279.668
      },
      {
        "itemId": "cement-bag",
        "weight": 216
      },
      {
        "itemId": "collectible-15020010016",
        "weight": 216
      },
      {
        "itemId": "collectible-15020010018",
        "weight": 216
      },
      {
        "itemId": "collectible-15020010023",
        "weight": 216
      },
      {
        "itemId": "collectible-15020040002",
        "weight": 216
      },
      {
        "itemId": "collectible-15040010017",
        "weight": 216
      },
      {
        "itemId": "collectible-15040010021",
        "weight": 216
      },
      {
        "itemId": "collectible-15040010022",
        "weight": 216
      },
      {
        "itemId": "fabric",
        "weight": 216
      },
      {
        "itemId": "toolbox-item",
        "weight": 216
      },
      {
        "itemId": "wireless-drill",
        "weight": 216
      },
      {
        "itemId": "ammo-37100400002",
        "weight": 185.472
      },
      {
        "itemId": "collectible-15020010034",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050107",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050109",
        "weight": 180
      },
      {
        "itemId": "fuel",
        "weight": 180
      },
      {
        "itemId": "gas-tank",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050108",
        "weight": 119.562
      },
      {
        "itemId": "collectible-15020010024",
        "weight": 72
      },
      {
        "itemId": "collectible-15020050003",
        "weight": 72
      },
      {
        "itemId": "collectible-15020050004",
        "weight": 72
      },
      {
        "itemId": "collectible-15020050006",
        "weight": 72
      },
      {
        "itemId": "collectible-15080050119",
        "weight": 72
      },
      {
        "itemId": "collectible-15080050130",
        "weight": 72
      },
      {
        "itemId": "collectible-15200000044",
        "weight": 72
      },
      {
        "itemId": "special-steel",
        "weight": 72
      },
      {
        "itemId": "wrench",
        "weight": 72
      },
      {
        "itemId": "collectible-15020010035",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050102",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050103",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050105",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050106",
        "weight": 60
      },
      {
        "itemId": "collectible-15040040007",
        "weight": 41.841
      },
      {
        "itemId": "ammo-556-m995",
        "weight": 36.855
      },
      {
        "itemId": "collectible-15080050174",
        "weight": 18.332
      },
      {
        "itemId": "collectible-15080050101",
        "weight": 14.792
      },
      {
        "itemId": "collectible-15080050179",
        "weight": 14.7
      },
      {
        "itemId": "collectible-15080050118",
        "weight": 10.524
      },
      {
        "itemId": "collectible-15030050019",
        "weight": 9.077
      },
      {
        "itemId": "collectible-15040010023",
        "weight": 7.56
      },
      {
        "itemId": "collectible-15080050169",
        "weight": 6.889
      },
      {
        "itemId": "collectible-15020010036",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15080050190",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15080050210",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15080050144",
        "weight": 5.4
      },
      {
        "itemId": "collectible-15080050220",
        "weight": 5.4
      },
      {
        "itemId": "collectible-15020010033",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15080050196",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15020010031",
        "weight": 1.89
      },
      {
        "itemId": "collectible-15030050017",
        "weight": 1.89
      },
      {
        "itemId": "collectible-15080050178",
        "weight": 1.89
      },
      {
        "itemId": "collectible-15080050211",
        "weight": 1.89
      },
      {
        "itemId": "collectible-15080050098",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050099",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050100",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050176",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050177",
        "weight": 1.575
      }
    ]
  },
  "weapon-box": {
    "name": "武器箱",
    "size": [
      8,
      5
    ],
    "min": 2,
    "max": 4,
    "pools": [
      {
        "itemId": "ammo-556-rrlp",
        "weight": 4200
      },
      {
        "itemId": "ammo-556-fmj",
        "weight": 2205
      },
      {
        "itemId": "collectible-15020010001",
        "weight": 1120
      },
      {
        "itemId": "collectible-15020010002",
        "weight": 1120
      },
      {
        "itemId": "collectible-15020010003",
        "weight": 1120
      },
      {
        "itemId": "collectible-15020010004",
        "weight": 1120
      },
      {
        "itemId": "collectible-15020010006",
        "weight": 1120
      },
      {
        "itemId": "collectible-15020010010",
        "weight": 1120
      },
      {
        "itemId": "collectible-15020010014",
        "weight": 1120
      },
      {
        "itemId": "collectible-15040010016",
        "weight": 1120
      },
      {
        "itemId": "collectible-15080050085",
        "weight": 1120
      },
      {
        "itemId": "collectible-15080050086",
        "weight": 1120
      },
      {
        "itemId": "ammo-37100300002",
        "weight": 945
      },
      {
        "itemId": "ammo-556-m855",
        "weight": 945
      },
      {
        "itemId": "collectible-15030010009",
        "weight": 800
      },
      {
        "itemId": "collectible-15020010007",
        "weight": 588
      },
      {
        "itemId": "collectible-15020010008",
        "weight": 588
      },
      {
        "itemId": "collectible-15020010017",
        "weight": 588
      },
      {
        "itemId": "collectible-15020010019",
        "weight": 588
      },
      {
        "itemId": "collectible-15020010020",
        "weight": 588
      },
      {
        "itemId": "collectible-15020010021",
        "weight": 588
      },
      {
        "itemId": "collectible-15020010026",
        "weight": 588
      },
      {
        "itemId": "collectible-15020010027",
        "weight": 588
      },
      {
        "itemId": "collectible-15020010030",
        "weight": 588
      },
      {
        "itemId": "collectible-15020010032",
        "weight": 588
      },
      {
        "itemId": "collectible-15020040003",
        "weight": 588
      },
      {
        "itemId": "collectible-15020040004",
        "weight": 588
      },
      {
        "itemId": "collectible-15040010012",
        "weight": 588
      },
      {
        "itemId": "collectible-15080050084",
        "weight": 588
      },
      {
        "itemId": "collectible-15080050087",
        "weight": 588
      },
      {
        "itemId": "screwdriver",
        "weight": 588
      },
      {
        "itemId": "wire",
        "weight": 588
      },
      {
        "itemId": "bandage",
        "weight": 480
      },
      {
        "itemId": "consumable-14020000001",
        "weight": 480
      },
      {
        "itemId": "consumable-14030000001",
        "weight": 480
      },
      {
        "itemId": "consumable-14040000001",
        "weight": 480
      },
      {
        "itemId": "medkit",
        "weight": 480
      },
      {
        "itemId": "painkiller-loot",
        "weight": 480
      },
      {
        "itemId": "collectible-15020050007",
        "weight": 420
      },
      {
        "itemId": "collectible-15030010002",
        "weight": 420
      },
      {
        "itemId": "collectible-15030010007",
        "weight": 420
      },
      {
        "itemId": "collectible-15030010011",
        "weight": 420
      },
      {
        "itemId": "collectible-15030010013",
        "weight": 420
      },
      {
        "itemId": "collectible-15030010014",
        "weight": 420
      },
      {
        "itemId": "collectible-15030010018",
        "weight": 420
      },
      {
        "itemId": "collectible-15030010019",
        "weight": 420
      },
      {
        "itemId": "collectible-15030040011",
        "weight": 420
      },
      {
        "itemId": "cement-bag",
        "weight": 252
      },
      {
        "itemId": "collectible-15020010016",
        "weight": 252
      },
      {
        "itemId": "collectible-15020010018",
        "weight": 252
      },
      {
        "itemId": "collectible-15020010023",
        "weight": 252
      },
      {
        "itemId": "collectible-15020040002",
        "weight": 252
      },
      {
        "itemId": "collectible-15040010017",
        "weight": 252
      },
      {
        "itemId": "collectible-15040010021",
        "weight": 252
      },
      {
        "itemId": "collectible-15040010022",
        "weight": 252
      },
      {
        "itemId": "consumable-14020000003",
        "weight": 252
      },
      {
        "itemId": "consumable-14030000002",
        "weight": 252
      },
      {
        "itemId": "consumable-14050000002",
        "weight": 252
      },
      {
        "itemId": "fabric",
        "weight": 252
      },
      {
        "itemId": "toolbox-item",
        "weight": 252
      },
      {
        "itemId": "wireless-drill",
        "weight": 252
      },
      {
        "itemId": "ammo-556-m855a1",
        "weight": 250.984
      },
      {
        "itemId": "collectible-15020050008",
        "weight": 180
      },
      {
        "itemId": "collectible-15030010001",
        "weight": 180
      },
      {
        "itemId": "collectible-15030010008",
        "weight": 180
      },
      {
        "itemId": "collectible-15030040002",
        "weight": 180
      },
      {
        "itemId": "collectible-15030050016",
        "weight": 180
      },
      {
        "itemId": "collectible-15070010001",
        "weight": 180
      },
      {
        "itemId": "collectible-15070010002",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050039",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050194",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050217",
        "weight": 180
      },
      {
        "itemId": "ammo-37100400002",
        "weight": 166.449
      },
      {
        "itemId": "collectible-15030040010",
        "weight": 156.314
      },
      {
        "itemId": "consumable-14060000007",
        "weight": 108
      },
      {
        "itemId": "consumable-14060000008",
        "weight": 108
      },
      {
        "itemId": "consumable-14070000001",
        "weight": 108
      },
      {
        "itemId": "consumable-14070000004",
        "weight": 108
      },
      {
        "itemId": "consumable-14070000006",
        "weight": 108
      },
      {
        "itemId": "consumable-14070000008",
        "weight": 108
      },
      {
        "itemId": "consumable-14070000009",
        "weight": 108
      },
      {
        "itemId": "field-med",
        "weight": 108
      },
      {
        "itemId": "collectible-15020010024",
        "weight": 84
      },
      {
        "itemId": "collectible-15020050003",
        "weight": 84
      },
      {
        "itemId": "collectible-15020050004",
        "weight": 84
      },
      {
        "itemId": "collectible-15020050006",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050119",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050130",
        "weight": 84
      },
      {
        "itemId": "collectible-15200000044",
        "weight": 84
      },
      {
        "itemId": "special-steel",
        "weight": 84
      },
      {
        "itemId": "wrench",
        "weight": 84
      },
      {
        "itemId": "collectible-15030040012",
        "weight": 60
      },
      {
        "itemId": "collectible-15030040014",
        "weight": 60
      },
      {
        "itemId": "collectible-15030050005",
        "weight": 60
      },
      {
        "itemId": "collectible-15030050011",
        "weight": 60
      },
      {
        "itemId": "collectible-15040010015",
        "weight": 60
      },
      {
        "itemId": "collectible-15040050003",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050037",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050038",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050091",
        "weight": 60
      },
      {
        "itemId": "motherboard",
        "weight": 60
      },
      {
        "itemId": "ram",
        "weight": 60
      },
      {
        "itemId": "ssd",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050036",
        "weight": 45.537
      },
      {
        "itemId": "consumable-14020000005",
        "weight": 36
      },
      {
        "itemId": "consumable-14030000003",
        "weight": 36
      },
      {
        "itemId": "consumable-14050000003",
        "weight": 36
      },
      {
        "itemId": "consumable-14060000006",
        "weight": 36
      },
      {
        "itemId": "consumable-14070000003",
        "weight": 36
      },
      {
        "itemId": "consumable-14070000005",
        "weight": 36
      },
      {
        "itemId": "consumable-14070000016",
        "weight": 36
      },
      {
        "itemId": "consumable-14070000017",
        "weight": 36
      },
      {
        "itemId": "consumable-14060000005",
        "weight": 35.766
      },
      {
        "itemId": "ammo-556-m995",
        "weight": 33.075
      },
      {
        "itemId": "consumable-14070000007",
        "weight": 30.646
      },
      {
        "itemId": "collectible-15080050174",
        "weight": 21.387
      },
      {
        "itemId": "collectible-15080050179",
        "weight": 17.151
      },
      {
        "itemId": "collectible-15080050095",
        "weight": 17.078
      },
      {
        "itemId": "collectible-15080050168",
        "weight": 16.89
      },
      {
        "itemId": "collectible-15030040013",
        "weight": 16.224
      },
      {
        "itemId": "cpu",
        "weight": 15.648
      },
      {
        "itemId": "collectible-15030050006",
        "weight": 13.811
      },
      {
        "itemId": "collectible-15080050090",
        "weight": 13.498
      },
      {
        "itemId": "collectible-15080050126",
        "weight": 11.988
      },
      {
        "itemId": "collectible-15030050003",
        "weight": 11.673
      },
      {
        "itemId": "ballistic-computer",
        "weight": 11.03
      },
      {
        "itemId": "consumable-14070000018",
        "weight": 10.8
      },
      {
        "itemId": "consumable-14070000019",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15030050019",
        "weight": 10.59
      },
      {
        "itemId": "collectible-15080050035",
        "weight": 10.524
      },
      {
        "itemId": "collectible-15040010023",
        "weight": 8.82
      },
      {
        "itemId": "collectible-15080050034",
        "weight": 7.717
      },
      {
        "itemId": "collectible-15030040001",
        "weight": 7.614
      },
      {
        "itemId": "collectible-15080050033",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15080050088",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15080050144",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15080050189",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15080050220",
        "weight": 6.3
      },
      {
        "itemId": "consumable-14060000001",
        "weight": 4.833
      },
      {
        "itemId": "collectible-15030050013",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15080050204",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15080050205",
        "weight": 4.5
      },
      {
        "itemId": "consumable-14020000006",
        "weight": 3.78
      },
      {
        "itemId": "consumable-14060000002",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15020010031",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15030050017",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15080050178",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15080050211",
        "weight": 2.205
      },
      {
        "itemId": "camera",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15030050007",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15030050008",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15030050012",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15030050014",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15030050018",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050030",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050032",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050167",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050175",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050186",
        "weight": 1.575
      },
      {
        "itemId": "drone",
        "weight": 1.575
      },
      {
        "itemId": "military-gpu",
        "weight": 1.575
      },
      {
        "itemId": "portable-radar",
        "weight": 1.575
      },
      {
        "itemId": "radio",
        "weight": 1.575
      },
      {
        "itemId": "consumable-14060000003",
        "weight": 0.945
      },
      {
        "itemId": "consumable-14060000004",
        "weight": 0.945
      }
    ]
  },
  "weapon-box-large": {
    "name": "大武器箱",
    "size": [
      9,
      6
    ],
    "min": 3,
    "max": 5,
    "pools": [
      {
        "itemId": "ammo-556-rrlp",
        "weight": 3000
      },
      {
        "itemId": "collectible-15020010001",
        "weight": 1920
      },
      {
        "itemId": "collectible-15020010002",
        "weight": 1920
      },
      {
        "itemId": "collectible-15020010003",
        "weight": 1920
      },
      {
        "itemId": "collectible-15020010004",
        "weight": 1920
      },
      {
        "itemId": "collectible-15020010006",
        "weight": 1920
      },
      {
        "itemId": "collectible-15020010010",
        "weight": 1920
      },
      {
        "itemId": "collectible-15020010014",
        "weight": 1920
      },
      {
        "itemId": "collectible-15040010016",
        "weight": 1920
      },
      {
        "itemId": "collectible-15080050085",
        "weight": 1920
      },
      {
        "itemId": "collectible-15080050086",
        "weight": 1920
      },
      {
        "itemId": "ammo-556-fmj",
        "weight": 1575
      },
      {
        "itemId": "collectible-15030010009",
        "weight": 1280
      },
      {
        "itemId": "collectible-15020010007",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010008",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010017",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010019",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010020",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010021",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010026",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010027",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010030",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010032",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020040003",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020040004",
        "weight": 1008
      },
      {
        "itemId": "collectible-15040010012",
        "weight": 1008
      },
      {
        "itemId": "collectible-15080050084",
        "weight": 1008
      },
      {
        "itemId": "collectible-15080050087",
        "weight": 1008
      },
      {
        "itemId": "screwdriver",
        "weight": 1008
      },
      {
        "itemId": "wire",
        "weight": 1008
      },
      {
        "itemId": "bandage",
        "weight": 800
      },
      {
        "itemId": "consumable-14020000001",
        "weight": 800
      },
      {
        "itemId": "consumable-14030000001",
        "weight": 800
      },
      {
        "itemId": "consumable-14040000001",
        "weight": 800
      },
      {
        "itemId": "medkit",
        "weight": 800
      },
      {
        "itemId": "painkiller-loot",
        "weight": 800
      },
      {
        "itemId": "ammo-37100300002",
        "weight": 675
      },
      {
        "itemId": "ammo-556-m855",
        "weight": 675
      },
      {
        "itemId": "collectible-15020050007",
        "weight": 672
      },
      {
        "itemId": "collectible-15030010002",
        "weight": 672
      },
      {
        "itemId": "collectible-15030010007",
        "weight": 672
      },
      {
        "itemId": "collectible-15030010011",
        "weight": 672
      },
      {
        "itemId": "collectible-15030010013",
        "weight": 672
      },
      {
        "itemId": "collectible-15030010014",
        "weight": 672
      },
      {
        "itemId": "collectible-15030010018",
        "weight": 672
      },
      {
        "itemId": "collectible-15030010019",
        "weight": 672
      },
      {
        "itemId": "collectible-15030040011",
        "weight": 672
      },
      {
        "itemId": "cement-bag",
        "weight": 432
      },
      {
        "itemId": "collectible-15020010016",
        "weight": 432
      },
      {
        "itemId": "collectible-15020010018",
        "weight": 432
      },
      {
        "itemId": "collectible-15020010023",
        "weight": 432
      },
      {
        "itemId": "collectible-15020040002",
        "weight": 432
      },
      {
        "itemId": "collectible-15040010017",
        "weight": 432
      },
      {
        "itemId": "collectible-15040010021",
        "weight": 432
      },
      {
        "itemId": "collectible-15040010022",
        "weight": 432
      },
      {
        "itemId": "fabric",
        "weight": 432
      },
      {
        "itemId": "toolbox-item",
        "weight": 432
      },
      {
        "itemId": "wireless-drill",
        "weight": 432
      },
      {
        "itemId": "consumable-14020000003",
        "weight": 420
      },
      {
        "itemId": "consumable-14030000002",
        "weight": 420
      },
      {
        "itemId": "consumable-14050000002",
        "weight": 420
      },
      {
        "itemId": "collectible-15020050008",
        "weight": 288
      },
      {
        "itemId": "collectible-15030010001",
        "weight": 288
      },
      {
        "itemId": "collectible-15030010008",
        "weight": 288
      },
      {
        "itemId": "collectible-15030040002",
        "weight": 288
      },
      {
        "itemId": "collectible-15030050016",
        "weight": 288
      },
      {
        "itemId": "collectible-15070010001",
        "weight": 288
      },
      {
        "itemId": "collectible-15070010002",
        "weight": 288
      },
      {
        "itemId": "collectible-15080050039",
        "weight": 288
      },
      {
        "itemId": "collectible-15080050194",
        "weight": 288
      },
      {
        "itemId": "collectible-15080050217",
        "weight": 288
      },
      {
        "itemId": "collectible-15030040010",
        "weight": 250.102
      },
      {
        "itemId": "consumable-14060000007",
        "weight": 180
      },
      {
        "itemId": "consumable-14060000008",
        "weight": 180
      },
      {
        "itemId": "consumable-14070000001",
        "weight": 180
      },
      {
        "itemId": "consumable-14070000004",
        "weight": 180
      },
      {
        "itemId": "consumable-14070000006",
        "weight": 180
      },
      {
        "itemId": "consumable-14070000008",
        "weight": 180
      },
      {
        "itemId": "consumable-14070000009",
        "weight": 180
      },
      {
        "itemId": "field-med",
        "weight": 180
      },
      {
        "itemId": "ammo-556-m855a1",
        "weight": 179.274
      },
      {
        "itemId": "collectible-15020010024",
        "weight": 144
      },
      {
        "itemId": "collectible-15020050003",
        "weight": 144
      },
      {
        "itemId": "collectible-15020050004",
        "weight": 144
      },
      {
        "itemId": "collectible-15020050006",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050119",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050130",
        "weight": 144
      },
      {
        "itemId": "collectible-15200000044",
        "weight": 144
      },
      {
        "itemId": "special-steel",
        "weight": 144
      },
      {
        "itemId": "wrench",
        "weight": 144
      },
      {
        "itemId": "ammo-37100400002",
        "weight": 118.892
      },
      {
        "itemId": "collectible-15030040012",
        "weight": 96
      },
      {
        "itemId": "collectible-15030040014",
        "weight": 96
      },
      {
        "itemId": "collectible-15030050005",
        "weight": 96
      },
      {
        "itemId": "collectible-15030050011",
        "weight": 96
      },
      {
        "itemId": "collectible-15040010015",
        "weight": 96
      },
      {
        "itemId": "collectible-15040050003",
        "weight": 96
      },
      {
        "itemId": "collectible-15080050037",
        "weight": 96
      },
      {
        "itemId": "collectible-15080050038",
        "weight": 96
      },
      {
        "itemId": "collectible-15080050091",
        "weight": 96
      },
      {
        "itemId": "motherboard",
        "weight": 96
      },
      {
        "itemId": "ram",
        "weight": 96
      },
      {
        "itemId": "ssd",
        "weight": 96
      },
      {
        "itemId": "collectible-15080050036",
        "weight": 72.858
      },
      {
        "itemId": "consumable-14020000005",
        "weight": 60
      },
      {
        "itemId": "consumable-14030000003",
        "weight": 60
      },
      {
        "itemId": "consumable-14050000003",
        "weight": 60
      },
      {
        "itemId": "consumable-14060000006",
        "weight": 60
      },
      {
        "itemId": "consumable-14070000003",
        "weight": 60
      },
      {
        "itemId": "consumable-14070000005",
        "weight": 60
      },
      {
        "itemId": "consumable-14070000016",
        "weight": 60
      },
      {
        "itemId": "consumable-14070000017",
        "weight": 60
      },
      {
        "itemId": "consumable-14060000005",
        "weight": 59.61
      },
      {
        "itemId": "consumable-14070000007",
        "weight": 51.076
      },
      {
        "itemId": "collectible-15080050174",
        "weight": 36.663
      },
      {
        "itemId": "collectible-15080050179",
        "weight": 29.401
      },
      {
        "itemId": "collectible-15080050095",
        "weight": 27.325
      },
      {
        "itemId": "collectible-15080050168",
        "weight": 27.024
      },
      {
        "itemId": "collectible-15030040013",
        "weight": 25.958
      },
      {
        "itemId": "cpu",
        "weight": 25.036
      },
      {
        "itemId": "ammo-556-m995",
        "weight": 23.625
      },
      {
        "itemId": "collectible-15030050006",
        "weight": 22.098
      },
      {
        "itemId": "collectible-15080050090",
        "weight": 21.596
      },
      {
        "itemId": "collectible-15080050126",
        "weight": 19.18
      },
      {
        "itemId": "collectible-15030050003",
        "weight": 18.677
      },
      {
        "itemId": "collectible-15030050019",
        "weight": 18.155
      },
      {
        "itemId": "consumable-14070000018",
        "weight": 18
      },
      {
        "itemId": "consumable-14070000019",
        "weight": 18
      },
      {
        "itemId": "ballistic-computer",
        "weight": 17.649
      },
      {
        "itemId": "collectible-15080050035",
        "weight": 16.839
      },
      {
        "itemId": "collectible-15040010023",
        "weight": 15.12
      },
      {
        "itemId": "collectible-15080050034",
        "weight": 12.348
      },
      {
        "itemId": "collectible-15030040001",
        "weight": 12.182
      },
      {
        "itemId": "collectible-15080050144",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15080050220",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15080050033",
        "weight": 10.08
      },
      {
        "itemId": "collectible-15080050088",
        "weight": 10.08
      },
      {
        "itemId": "collectible-15080050189",
        "weight": 10.08
      },
      {
        "itemId": "consumable-14060000001",
        "weight": 8.056
      },
      {
        "itemId": "collectible-15030050013",
        "weight": 7.2
      },
      {
        "itemId": "collectible-15080050204",
        "weight": 7.2
      },
      {
        "itemId": "collectible-15080050205",
        "weight": 7.2
      },
      {
        "itemId": "consumable-14020000006",
        "weight": 6.3
      },
      {
        "itemId": "consumable-14060000002",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15020010031",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15030050017",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050178",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050211",
        "weight": 3.78
      },
      {
        "itemId": "camera",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15030050007",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15030050008",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15030050012",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15030050014",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15030050018",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080050030",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080050032",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080050167",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080050175",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080050186",
        "weight": 2.52
      },
      {
        "itemId": "drone",
        "weight": 2.52
      },
      {
        "itemId": "military-gpu",
        "weight": 2.52
      },
      {
        "itemId": "portable-radar",
        "weight": 2.52
      },
      {
        "itemId": "radio",
        "weight": 2.52
      },
      {
        "itemId": "consumable-14060000003",
        "weight": 1.575
      },
      {
        "itemId": "consumable-14060000004",
        "weight": 1.575
      }
    ]
  },
  "aviation-box": {
    "name": "航空箱",
    "size": [
      9,
      7
    ],
    "min": 3,
    "max": 5,
    "pools": [
      {
        "itemId": "collectible-15030010009",
        "weight": 1920
      },
      {
        "itemId": "collectible-15020010001",
        "weight": 1760
      },
      {
        "itemId": "collectible-15020010002",
        "weight": 1760
      },
      {
        "itemId": "collectible-15020010003",
        "weight": 1760
      },
      {
        "itemId": "collectible-15020010004",
        "weight": 1760
      },
      {
        "itemId": "collectible-15020010006",
        "weight": 1760
      },
      {
        "itemId": "collectible-15020010010",
        "weight": 1760
      },
      {
        "itemId": "collectible-15020010014",
        "weight": 1760
      },
      {
        "itemId": "collectible-15040010016",
        "weight": 1760
      },
      {
        "itemId": "collectible-15080050085",
        "weight": 1760
      },
      {
        "itemId": "collectible-15080050086",
        "weight": 1760
      },
      {
        "itemId": "collectible-15020050007",
        "weight": 1008
      },
      {
        "itemId": "collectible-15030010002",
        "weight": 1008
      },
      {
        "itemId": "collectible-15030010007",
        "weight": 1008
      },
      {
        "itemId": "collectible-15030010011",
        "weight": 1008
      },
      {
        "itemId": "collectible-15030010013",
        "weight": 1008
      },
      {
        "itemId": "collectible-15030010014",
        "weight": 1008
      },
      {
        "itemId": "collectible-15030010018",
        "weight": 1008
      },
      {
        "itemId": "collectible-15030010019",
        "weight": 1008
      },
      {
        "itemId": "collectible-15030040011",
        "weight": 1008
      },
      {
        "itemId": "bandage",
        "weight": 960
      },
      {
        "itemId": "collectible-15080050112",
        "weight": 960
      },
      {
        "itemId": "consumable-14020000001",
        "weight": 960
      },
      {
        "itemId": "consumable-14030000001",
        "weight": 960
      },
      {
        "itemId": "consumable-14040000001",
        "weight": 960
      },
      {
        "itemId": "medkit",
        "weight": 960
      },
      {
        "itemId": "painkiller-loot",
        "weight": 960
      },
      {
        "itemId": "collectible-15020010007",
        "weight": 924
      },
      {
        "itemId": "collectible-15020010008",
        "weight": 924
      },
      {
        "itemId": "collectible-15020010017",
        "weight": 924
      },
      {
        "itemId": "collectible-15020010019",
        "weight": 924
      },
      {
        "itemId": "collectible-15020010020",
        "weight": 924
      },
      {
        "itemId": "collectible-15020010021",
        "weight": 924
      },
      {
        "itemId": "collectible-15020010026",
        "weight": 924
      },
      {
        "itemId": "collectible-15020010027",
        "weight": 924
      },
      {
        "itemId": "collectible-15020010030",
        "weight": 924
      },
      {
        "itemId": "collectible-15020010032",
        "weight": 924
      },
      {
        "itemId": "collectible-15020040003",
        "weight": 924
      },
      {
        "itemId": "collectible-15020040004",
        "weight": 924
      },
      {
        "itemId": "collectible-15040010012",
        "weight": 924
      },
      {
        "itemId": "collectible-15080050084",
        "weight": 924
      },
      {
        "itemId": "collectible-15080050087",
        "weight": 924
      },
      {
        "itemId": "screwdriver",
        "weight": 924
      },
      {
        "itemId": "wire",
        "weight": 924
      },
      {
        "itemId": "ammo-556-rrlp",
        "weight": 840
      },
      {
        "itemId": "collectible-15010010004",
        "weight": 800
      },
      {
        "itemId": "collectible-15060010008",
        "weight": 800
      },
      {
        "itemId": "collectible-15060010009",
        "weight": 800
      },
      {
        "itemId": "collectible-15090010077",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050110",
        "weight": 504
      },
      {
        "itemId": "collectible-15080050111",
        "weight": 504
      },
      {
        "itemId": "consumable-14020000003",
        "weight": 504
      },
      {
        "itemId": "consumable-14030000002",
        "weight": 504
      },
      {
        "itemId": "consumable-14050000002",
        "weight": 504
      },
      {
        "itemId": "ammo-556-fmj",
        "weight": 441
      },
      {
        "itemId": "collectible-15020050008",
        "weight": 432
      },
      {
        "itemId": "collectible-15030010001",
        "weight": 432
      },
      {
        "itemId": "collectible-15030010008",
        "weight": 432
      },
      {
        "itemId": "collectible-15030040002",
        "weight": 432
      },
      {
        "itemId": "collectible-15030050016",
        "weight": 432
      },
      {
        "itemId": "collectible-15070010001",
        "weight": 432
      },
      {
        "itemId": "collectible-15070010002",
        "weight": 432
      },
      {
        "itemId": "collectible-15080050039",
        "weight": 432
      },
      {
        "itemId": "collectible-15080050194",
        "weight": 432
      },
      {
        "itemId": "collectible-15080050217",
        "weight": 432
      },
      {
        "itemId": "collectible-15060010001",
        "weight": 420
      },
      {
        "itemId": "collectible-15060010002",
        "weight": 420
      },
      {
        "itemId": "collectible-15060010003",
        "weight": 420
      },
      {
        "itemId": "collectible-15060010010",
        "weight": 420
      },
      {
        "itemId": "collectible-15060010012",
        "weight": 420
      },
      {
        "itemId": "cement-bag",
        "weight": 396
      },
      {
        "itemId": "collectible-15020010016",
        "weight": 396
      },
      {
        "itemId": "collectible-15020010018",
        "weight": 396
      },
      {
        "itemId": "collectible-15020010023",
        "weight": 396
      },
      {
        "itemId": "collectible-15020040002",
        "weight": 396
      },
      {
        "itemId": "collectible-15040010017",
        "weight": 396
      },
      {
        "itemId": "collectible-15040010021",
        "weight": 396
      },
      {
        "itemId": "collectible-15040010022",
        "weight": 396
      },
      {
        "itemId": "fabric",
        "weight": 396
      },
      {
        "itemId": "toolbox-item",
        "weight": 396
      },
      {
        "itemId": "wireless-drill",
        "weight": 396
      },
      {
        "itemId": "collectible-15030040010",
        "weight": 375.153
      },
      {
        "itemId": "collectible-15040010003",
        "weight": 252
      },
      {
        "itemId": "collectible-15080010003",
        "weight": 252
      },
      {
        "itemId": "collectible-15080010004",
        "weight": 252
      },
      {
        "itemId": "collectible-15080040004",
        "weight": 252
      },
      {
        "itemId": "collectible-15080040005",
        "weight": 252
      },
      {
        "itemId": "collectible-15080050007",
        "weight": 252
      },
      {
        "itemId": "collectible-15080050017",
        "weight": 252
      },
      {
        "itemId": "collectible-15020010034",
        "weight": 216
      },
      {
        "itemId": "collectible-15080050107",
        "weight": 216
      },
      {
        "itemId": "collectible-15080050109",
        "weight": 216
      },
      {
        "itemId": "consumable-14060000007",
        "weight": 216
      },
      {
        "itemId": "consumable-14060000008",
        "weight": 216
      },
      {
        "itemId": "consumable-14070000001",
        "weight": 216
      },
      {
        "itemId": "consumable-14070000004",
        "weight": 216
      },
      {
        "itemId": "consumable-14070000006",
        "weight": 216
      },
      {
        "itemId": "consumable-14070000008",
        "weight": 216
      },
      {
        "itemId": "consumable-14070000009",
        "weight": 216
      },
      {
        "itemId": "field-med",
        "weight": 216
      },
      {
        "itemId": "fuel",
        "weight": 216
      },
      {
        "itemId": "gas-tank",
        "weight": 216
      },
      {
        "itemId": "ammo-37100300002",
        "weight": 189
      },
      {
        "itemId": "ammo-556-m855",
        "weight": 189
      },
      {
        "itemId": "collectible-15060010004",
        "weight": 180
      },
      {
        "itemId": "collectible-15060010006",
        "weight": 180
      },
      {
        "itemId": "collectible-15060010007",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050065",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050116",
        "weight": 180
      },
      {
        "itemId": "collectible-15090010041",
        "weight": 180
      },
      {
        "itemId": "collectible-15030040012",
        "weight": 144
      },
      {
        "itemId": "collectible-15030040014",
        "weight": 144
      },
      {
        "itemId": "collectible-15030050005",
        "weight": 144
      },
      {
        "itemId": "collectible-15030050011",
        "weight": 144
      },
      {
        "itemId": "collectible-15040010015",
        "weight": 144
      },
      {
        "itemId": "collectible-15040050003",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050037",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050038",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050091",
        "weight": 144
      },
      {
        "itemId": "motherboard",
        "weight": 144
      },
      {
        "itemId": "ram",
        "weight": 144
      },
      {
        "itemId": "ssd",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050108",
        "weight": 143.474
      },
      {
        "itemId": "collectible-15020010024",
        "weight": 132
      },
      {
        "itemId": "collectible-15020050003",
        "weight": 132
      },
      {
        "itemId": "collectible-15020050004",
        "weight": 132
      },
      {
        "itemId": "collectible-15020050006",
        "weight": 132
      },
      {
        "itemId": "collectible-15080050119",
        "weight": 132
      },
      {
        "itemId": "collectible-15080050130",
        "weight": 132
      },
      {
        "itemId": "collectible-15200000044",
        "weight": 132
      },
      {
        "itemId": "special-steel",
        "weight": 132
      },
      {
        "itemId": "wrench",
        "weight": 132
      },
      {
        "itemId": "collectible-15080050036",
        "weight": 109.288
      },
      {
        "itemId": "collectible-15080050008",
        "weight": 108
      },
      {
        "itemId": "collectible-15080050011",
        "weight": 108
      },
      {
        "itemId": "collectible-15080050012",
        "weight": 108
      },
      {
        "itemId": "collectible-15080050023",
        "weight": 108
      },
      {
        "itemId": "collectible-15080050193",
        "weight": 108
      },
      {
        "itemId": "collectible-15200000073",
        "weight": 108
      },
      {
        "itemId": "collectible-15020010035",
        "weight": 72
      },
      {
        "itemId": "collectible-15080050102",
        "weight": 72
      },
      {
        "itemId": "collectible-15080050103",
        "weight": 72
      },
      {
        "itemId": "collectible-15080050105",
        "weight": 72
      },
      {
        "itemId": "collectible-15080050106",
        "weight": 72
      },
      {
        "itemId": "consumable-14020000005",
        "weight": 72
      },
      {
        "itemId": "consumable-14030000003",
        "weight": 72
      },
      {
        "itemId": "consumable-14050000003",
        "weight": 72
      },
      {
        "itemId": "consumable-14060000006",
        "weight": 72
      },
      {
        "itemId": "consumable-14070000003",
        "weight": 72
      },
      {
        "itemId": "consumable-14070000005",
        "weight": 72
      },
      {
        "itemId": "consumable-14070000016",
        "weight": 72
      },
      {
        "itemId": "consumable-14070000017",
        "weight": 72
      },
      {
        "itemId": "consumable-14060000005",
        "weight": 71.532
      },
      {
        "itemId": "consumable-14070000007",
        "weight": 61.291
      },
      {
        "itemId": "collectible-15060040002",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050057",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050114",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050214",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000061",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050127",
        "weight": 58.807
      },
      {
        "itemId": "collectible-15080050117",
        "weight": 55.078
      },
      {
        "itemId": "collectible-15040040007",
        "weight": 50.209
      },
      {
        "itemId": "ammo-556-m855a1",
        "weight": 50.197
      },
      {
        "itemId": "collectible-15080050095",
        "weight": 40.988
      },
      {
        "itemId": "collectible-15080050168",
        "weight": 40.537
      },
      {
        "itemId": "collectible-15030040013",
        "weight": 38.937
      },
      {
        "itemId": "cpu",
        "weight": 37.554
      },
      {
        "itemId": "collectible-15040010014",
        "weight": 36
      },
      {
        "itemId": "collectible-15080040002",
        "weight": 36
      },
      {
        "itemId": "collectible-15080040003",
        "weight": 36
      },
      {
        "itemId": "collectible-15080050001",
        "weight": 36
      },
      {
        "itemId": "collectible-15080050016",
        "weight": 36
      },
      {
        "itemId": "collectible-15080050018",
        "weight": 36
      },
      {
        "itemId": "collectible-15080050024",
        "weight": 36
      },
      {
        "itemId": "collectible-15080050124",
        "weight": 36
      },
      {
        "itemId": "collectible-15080050139",
        "weight": 36
      },
      {
        "itemId": "collectible-15080050182",
        "weight": 36
      },
      {
        "itemId": "collectible-15200000126",
        "weight": 36
      },
      {
        "itemId": "collectible-15080050174",
        "weight": 33.608
      },
      {
        "itemId": "ammo-37100400002",
        "weight": 33.29
      },
      {
        "itemId": "collectible-15030050006",
        "weight": 33.147
      },
      {
        "itemId": "collectible-15080050090",
        "weight": 32.395
      },
      {
        "itemId": "collectible-15080050126",
        "weight": 28.77
      },
      {
        "itemId": "collectible-15030050003",
        "weight": 28.015
      },
      {
        "itemId": "collectible-15080050179",
        "weight": 26.951
      },
      {
        "itemId": "ballistic-computer",
        "weight": 26.473
      },
      {
        "itemId": "collectible-15080050035",
        "weight": 25.258
      },
      {
        "itemId": "consumable-14070000018",
        "weight": 21.6
      },
      {
        "itemId": "consumable-14070000019",
        "weight": 21.6
      },
      {
        "itemId": "collectible-15080050034",
        "weight": 18.521
      },
      {
        "itemId": "collectible-15080050043",
        "weight": 18.412
      },
      {
        "itemId": "collectible-15030040001",
        "weight": 18.273
      },
      {
        "itemId": "collectible-15080050101",
        "weight": 17.751
      },
      {
        "itemId": "collectible-15080050115",
        "weight": 17.395
      },
      {
        "itemId": "collectible-15030050019",
        "weight": 16.642
      },
      {
        "itemId": "collectible-15060040003",
        "weight": 16.13
      },
      {
        "itemId": "collectible-15080050134",
        "weight": 15.591
      },
      {
        "itemId": "collectible-15080050033",
        "weight": 15.12
      },
      {
        "itemId": "collectible-15080050088",
        "weight": 15.12
      },
      {
        "itemId": "collectible-15080050189",
        "weight": 15.12
      },
      {
        "itemId": "collectible-15040010023",
        "weight": 13.86
      },
      {
        "itemId": "collectible-15080050129",
        "weight": 13.184
      },
      {
        "itemId": "collectible-15040010019",
        "weight": 13.152
      },
      {
        "itemId": "collectible-15080050118",
        "weight": 12.629
      },
      {
        "itemId": "collectible-15060040001",
        "weight": 12.519
      },
      {
        "itemId": "collectible-15080050195",
        "weight": 11.075
      },
      {
        "itemId": "collectible-15030050013",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15080050025",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15080050204",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15080050205",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000048",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000068",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000070",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000075",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000114",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000130",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000151",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000154",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000155",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000157",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000167",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15080050143",
        "weight": 10.735
      },
      {
        "itemId": "collectible-15080050009",
        "weight": 10.463
      },
      {
        "itemId": "collectible-15080050137",
        "weight": 10.324
      },
      {
        "itemId": "collectible-15080050144",
        "weight": 9.9
      },
      {
        "itemId": "collectible-15080050220",
        "weight": 9.9
      },
      {
        "itemId": "collectible-15080050165",
        "weight": 9.753
      },
      {
        "itemId": "collectible-15080050015",
        "weight": 9.669
      },
      {
        "itemId": "consumable-14060000001",
        "weight": 9.667
      },
      {
        "itemId": "collectible-15200000032",
        "weight": 9.613
      },
      {
        "itemId": "collectible-15080050212",
        "weight": 8.737
      },
      {
        "itemId": "collectible-15080050169",
        "weight": 8.266
      },
      {
        "itemId": "collectible-15020010036",
        "weight": 7.56
      },
      {
        "itemId": "collectible-15080050190",
        "weight": 7.56
      },
      {
        "itemId": "collectible-15080050210",
        "weight": 7.56
      },
      {
        "itemId": "consumable-14020000006",
        "weight": 7.56
      },
      {
        "itemId": "consumable-14060000002",
        "weight": 7.56
      },
      {
        "itemId": "collectible-15080050004",
        "weight": 7.444
      },
      {
        "itemId": "collectible-15200000118",
        "weight": 7.199
      },
      {
        "itemId": "collectible-15080050094",
        "weight": 7.13
      },
      {
        "itemId": "collectible-15080050138",
        "weight": 7.128
      },
      {
        "itemId": "collectible-15080050093",
        "weight": 7.104
      },
      {
        "itemId": "collectible-15080050164",
        "weight": 6.947
      },
      {
        "itemId": "collectible-15080050135",
        "weight": 6.685
      },
      {
        "itemId": "ammo-556-m995",
        "weight": 6.615
      },
      {
        "itemId": "collectible-15080050192",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15020010033",
        "weight": 5.4
      },
      {
        "itemId": "collectible-15080050196",
        "weight": 5.4
      },
      {
        "itemId": "collectible-15080050092",
        "weight": 5.349
      },
      {
        "itemId": "collectible-15080050133",
        "weight": 4.212
      },
      {
        "itemId": "camera",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15030050007",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15030050008",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15030050012",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15030050014",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15030050018",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050030",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050032",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050082",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050083",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050167",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050175",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050186",
        "weight": 3.78
      },
      {
        "itemId": "drone",
        "weight": 3.78
      },
      {
        "itemId": "military-gpu",
        "weight": 3.78
      },
      {
        "itemId": "portable-radar",
        "weight": 3.78
      },
      {
        "itemId": "radio",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15020010031",
        "weight": 3.465
      },
      {
        "itemId": "collectible-15030050017",
        "weight": 3.465
      },
      {
        "itemId": "collectible-15080050178",
        "weight": 3.465
      },
      {
        "itemId": "collectible-15080050211",
        "weight": 3.465
      },
      {
        "itemId": "collectible-15080050197",
        "weight": 2.7
      },
      {
        "itemId": "collectible-15200000034",
        "weight": 2.7
      },
      {
        "itemId": "collectible-15200000049",
        "weight": 2.7
      },
      {
        "itemId": "collectible-15200000058",
        "weight": 2.7
      },
      {
        "itemId": "collectible-15200000059",
        "weight": 2.7
      },
      {
        "itemId": "collectible-15200000069",
        "weight": 2.7
      },
      {
        "itemId": "collectible-15200000071",
        "weight": 2.7
      },
      {
        "itemId": "collectible-15200000072",
        "weight": 2.7
      },
      {
        "itemId": "collectible-15200000115",
        "weight": 2.7
      },
      {
        "itemId": "collectible-15200000117",
        "weight": 2.7
      },
      {
        "itemId": "collectible-15200000123",
        "weight": 2.7
      },
      {
        "itemId": "collectible-15200000124",
        "weight": 2.7
      },
      {
        "itemId": "collectible-15200000125",
        "weight": 2.7
      },
      {
        "itemId": "collectible-15200000127",
        "weight": 2.7
      },
      {
        "itemId": "collectible-15200000131",
        "weight": 2.7
      },
      {
        "itemId": "collectible-15200000137",
        "weight": 2.7
      },
      {
        "itemId": "collectible-15200000152",
        "weight": 2.7
      },
      {
        "itemId": "collectible-15200000153",
        "weight": 2.7
      },
      {
        "itemId": "collectible-15200000156",
        "weight": 2.7
      },
      {
        "itemId": "collectible-15200000158",
        "weight": 2.7
      },
      {
        "itemId": "collectible-15200000168",
        "weight": 2.7
      },
      {
        "itemId": "collectible-15080050098",
        "weight": 1.89
      },
      {
        "itemId": "collectible-15080050099",
        "weight": 1.89
      },
      {
        "itemId": "collectible-15080050100",
        "weight": 1.89
      },
      {
        "itemId": "collectible-15080050176",
        "weight": 1.89
      },
      {
        "itemId": "collectible-15080050177",
        "weight": 1.89
      },
      {
        "itemId": "consumable-14060000003",
        "weight": 1.89
      },
      {
        "itemId": "consumable-14060000004",
        "weight": 1.89
      },
      {
        "itemId": "collectible-15060040004",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050058",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050113",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050128",
        "weight": 1.575
      },
      {
        "itemId": "resuscitator",
        "weight": 1.575
      },
      {
        "itemId": "africa-heart",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15010050001",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15040050002",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15080040001",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15080050003",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15080050014",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15080050040",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15080050041",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15080050120",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15080050121",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15080050122",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15080050123",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15080050142",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15080050166",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15080050184",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15080050185",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15080050187",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15200000060",
        "weight": 0.945
      },
      {
        "itemId": "gold-bar",
        "weight": 0.945
      },
      {
        "itemId": "watch",
        "weight": 0.945
      }
    ]
  },
  "file-cabinet": {
    "name": "文件柜",
    "size": [
      5,
      5
    ],
    "min": 1,
    "max": 3,
    "pools": [
      {
        "itemId": "collectible-15080050056",
        "weight": 4000
      },
      {
        "itemId": "collectible-15090010024",
        "weight": 4000
      },
      {
        "itemId": "collectible-15090010026",
        "weight": 4000
      },
      {
        "itemId": "collectible-15090910016",
        "weight": 4000
      },
      {
        "itemId": "collectible-15090910019",
        "weight": 4000
      },
      {
        "itemId": "collectible-15070010005",
        "weight": 2100
      },
      {
        "itemId": "collectible-15070010006",
        "weight": 2100
      },
      {
        "itemId": "collectible-15070010007",
        "weight": 2100
      },
      {
        "itemId": "collectible-15070010008",
        "weight": 2100
      },
      {
        "itemId": "collectible-15070010009",
        "weight": 2100
      },
      {
        "itemId": "collectible-15090910017",
        "weight": 2100
      },
      {
        "itemId": "collectible-15090910022",
        "weight": 2100
      },
      {
        "itemId": "collectible-15090910023",
        "weight": 2100
      },
      {
        "itemId": "collectible-15030010009",
        "weight": 1600
      },
      {
        "itemId": "collectible-15010010008",
        "weight": 1120
      },
      {
        "itemId": "collectible-15040010007",
        "weight": 1120
      },
      {
        "itemId": "collectible-15040010008",
        "weight": 1120
      },
      {
        "itemId": "collectible-15040010009",
        "weight": 1120
      },
      {
        "itemId": "collectible-15060080002",
        "weight": 1120
      },
      {
        "itemId": "collectible-15060080003",
        "weight": 1120
      },
      {
        "itemId": "collectible-15060080007",
        "weight": 1120
      },
      {
        "itemId": "collectible-15080050046",
        "weight": 1120
      },
      {
        "itemId": "collectible-15080050047",
        "weight": 1120
      },
      {
        "itemId": "collectible-15080050048",
        "weight": 1120
      },
      {
        "itemId": "collectible-15080050049",
        "weight": 1120
      },
      {
        "itemId": "collectible-15080050050",
        "weight": 1120
      },
      {
        "itemId": "collectible-15080050051",
        "weight": 1120
      },
      {
        "itemId": "collectible-15080050052",
        "weight": 1120
      },
      {
        "itemId": "collectible-15080050053",
        "weight": 1120
      },
      {
        "itemId": "collectible-15080050054",
        "weight": 1120
      },
      {
        "itemId": "collectible-15080050055",
        "weight": 1120
      },
      {
        "itemId": "collectible-15080050059",
        "weight": 1120
      },
      {
        "itemId": "collectible-15080050060",
        "weight": 1120
      },
      {
        "itemId": "collectible-15080050081",
        "weight": 1120
      },
      {
        "itemId": "collectible-15070040002",
        "weight": 900
      },
      {
        "itemId": "collectible-15070050003",
        "weight": 900
      },
      {
        "itemId": "collectible-15080050096",
        "weight": 900
      },
      {
        "itemId": "collectible-15080050213",
        "weight": 900
      },
      {
        "itemId": "collectible-15020050007",
        "weight": 840
      },
      {
        "itemId": "collectible-15030010002",
        "weight": 840
      },
      {
        "itemId": "collectible-15030010007",
        "weight": 840
      },
      {
        "itemId": "collectible-15030010011",
        "weight": 840
      },
      {
        "itemId": "collectible-15030010013",
        "weight": 840
      },
      {
        "itemId": "collectible-15030010014",
        "weight": 840
      },
      {
        "itemId": "collectible-15030010018",
        "weight": 840
      },
      {
        "itemId": "collectible-15030010019",
        "weight": 840
      },
      {
        "itemId": "collectible-15030040011",
        "weight": 840
      },
      {
        "itemId": "collectible-15040010003",
        "weight": 672
      },
      {
        "itemId": "collectible-15080010003",
        "weight": 672
      },
      {
        "itemId": "collectible-15080010004",
        "weight": 672
      },
      {
        "itemId": "collectible-15080040004",
        "weight": 672
      },
      {
        "itemId": "collectible-15080040005",
        "weight": 672
      },
      {
        "itemId": "collectible-15080050007",
        "weight": 672
      },
      {
        "itemId": "collectible-15080050017",
        "weight": 672
      },
      {
        "itemId": "collectible-15010010015",
        "weight": 588
      },
      {
        "itemId": "collectible-15060080001",
        "weight": 588
      },
      {
        "itemId": "collectible-15060080004",
        "weight": 588
      },
      {
        "itemId": "collectible-15060080006",
        "weight": 588
      },
      {
        "itemId": "collectible-15060080009",
        "weight": 588
      },
      {
        "itemId": "collectible-15080050019",
        "weight": 588
      },
      {
        "itemId": "collectible-15080050020",
        "weight": 588
      },
      {
        "itemId": "collectible-15080050022",
        "weight": 588
      },
      {
        "itemId": "collectible-15080050077",
        "weight": 588
      },
      {
        "itemId": "collectible-15080050078",
        "weight": 588
      },
      {
        "itemId": "collectible-15080050079",
        "weight": 588
      },
      {
        "itemId": "collectible-15080050080",
        "weight": 588
      },
      {
        "itemId": "collectible-15200000134",
        "weight": 588
      },
      {
        "itemId": "collectible-15200000138",
        "weight": 588
      },
      {
        "itemId": "lighter",
        "weight": 588
      },
      {
        "itemId": "collectible-15020050008",
        "weight": 360
      },
      {
        "itemId": "collectible-15030010001",
        "weight": 360
      },
      {
        "itemId": "collectible-15030010008",
        "weight": 360
      },
      {
        "itemId": "collectible-15030040002",
        "weight": 360
      },
      {
        "itemId": "collectible-15030050016",
        "weight": 360
      },
      {
        "itemId": "collectible-15070010001",
        "weight": 360
      },
      {
        "itemId": "collectible-15070010002",
        "weight": 360
      },
      {
        "itemId": "collectible-15080050039",
        "weight": 360
      },
      {
        "itemId": "collectible-15080050194",
        "weight": 360
      },
      {
        "itemId": "collectible-15080050217",
        "weight": 360
      },
      {
        "itemId": "collectible-15030040010",
        "weight": 312.628
      },
      {
        "itemId": "collectible-15070050002",
        "weight": 300
      },
      {
        "itemId": "collectible-15080050045",
        "weight": 300
      },
      {
        "itemId": "collectible-15080050064",
        "weight": 300
      },
      {
        "itemId": "collectible-15080050172",
        "weight": 300
      },
      {
        "itemId": "collectible-15080050181",
        "weight": 300
      },
      {
        "itemId": "collectible-15080050206",
        "weight": 300
      },
      {
        "itemId": "collectible-15080050207",
        "weight": 300
      },
      {
        "itemId": "collectible-15080050208",
        "weight": 300
      },
      {
        "itemId": "collectible-15080050209",
        "weight": 300
      },
      {
        "itemId": "collectible-15080050216",
        "weight": 300
      },
      {
        "itemId": "collectible-15200000074",
        "weight": 300
      },
      {
        "itemId": "collectible-15200000148",
        "weight": 300
      },
      {
        "itemId": "collectible-15200000149",
        "weight": 300
      },
      {
        "itemId": "collectible-15200000150",
        "weight": 300
      },
      {
        "itemId": "collectible-15080050008",
        "weight": 288
      },
      {
        "itemId": "collectible-15080050011",
        "weight": 288
      },
      {
        "itemId": "collectible-15080050012",
        "weight": 288
      },
      {
        "itemId": "collectible-15080050023",
        "weight": 288
      },
      {
        "itemId": "collectible-15080050193",
        "weight": 288
      },
      {
        "itemId": "collectible-15200000073",
        "weight": 288
      },
      {
        "itemId": "collectible-15060080010",
        "weight": 252
      },
      {
        "itemId": "collectible-15060080011",
        "weight": 252
      },
      {
        "itemId": "collectible-15060080013",
        "weight": 252
      },
      {
        "itemId": "collectible-15060080016",
        "weight": 252
      },
      {
        "itemId": "collectible-15080050021",
        "weight": 252
      },
      {
        "itemId": "collectible-15080050026",
        "weight": 252
      },
      {
        "itemId": "collectible-15080050027",
        "weight": 252
      },
      {
        "itemId": "collectible-15080050072",
        "weight": 252
      },
      {
        "itemId": "collectible-15080050073",
        "weight": 252
      },
      {
        "itemId": "collectible-15080050074",
        "weight": 252
      },
      {
        "itemId": "collectible-15080050075",
        "weight": 252
      },
      {
        "itemId": "collectible-15080050076",
        "weight": 252
      },
      {
        "itemId": "collectible-15200000139",
        "weight": 252
      },
      {
        "itemId": "collectible-15200000163",
        "weight": 252
      },
      {
        "itemId": "collectible-15030040012",
        "weight": 120
      },
      {
        "itemId": "collectible-15030040014",
        "weight": 120
      },
      {
        "itemId": "collectible-15030050005",
        "weight": 120
      },
      {
        "itemId": "collectible-15030050011",
        "weight": 120
      },
      {
        "itemId": "collectible-15040010015",
        "weight": 120
      },
      {
        "itemId": "collectible-15040050003",
        "weight": 120
      },
      {
        "itemId": "collectible-15080050037",
        "weight": 120
      },
      {
        "itemId": "collectible-15080050038",
        "weight": 120
      },
      {
        "itemId": "collectible-15080050091",
        "weight": 120
      },
      {
        "itemId": "motherboard",
        "weight": 120
      },
      {
        "itemId": "ram",
        "weight": 120
      },
      {
        "itemId": "ssd",
        "weight": 120
      },
      {
        "itemId": "collectible-15040010014",
        "weight": 96
      },
      {
        "itemId": "collectible-15080040002",
        "weight": 96
      },
      {
        "itemId": "collectible-15080040003",
        "weight": 96
      },
      {
        "itemId": "collectible-15080050001",
        "weight": 96
      },
      {
        "itemId": "collectible-15080050016",
        "weight": 96
      },
      {
        "itemId": "collectible-15080050018",
        "weight": 96
      },
      {
        "itemId": "collectible-15080050024",
        "weight": 96
      },
      {
        "itemId": "collectible-15080050124",
        "weight": 96
      },
      {
        "itemId": "collectible-15080050139",
        "weight": 96
      },
      {
        "itemId": "collectible-15080050182",
        "weight": 96
      },
      {
        "itemId": "collectible-15200000126",
        "weight": 96
      },
      {
        "itemId": "collectible-15080050036",
        "weight": 91.073
      },
      {
        "itemId": "collectible-15080050063",
        "weight": 90
      },
      {
        "itemId": "collectible-15080050148",
        "weight": 90
      },
      {
        "itemId": "collectible-15080050149",
        "weight": 90
      },
      {
        "itemId": "collectible-15080050198",
        "weight": 90
      },
      {
        "itemId": "collectible-15090010040",
        "weight": 90
      },
      {
        "itemId": "collectible-15200000129",
        "weight": 90
      },
      {
        "itemId": "collectible-15200000145",
        "weight": 90
      },
      {
        "itemId": "collectible-15200000146",
        "weight": 90
      },
      {
        "itemId": "collectible-15200000147",
        "weight": 90
      },
      {
        "itemId": "collectible-15200000162",
        "weight": 90
      },
      {
        "itemId": "collectible-15080050140",
        "weight": 88.6
      },
      {
        "itemId": "collectible-15060080005",
        "weight": 84
      },
      {
        "itemId": "collectible-15060080008",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050068",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050070",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050136",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050183",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050215",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050218",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050219",
        "weight": 84
      },
      {
        "itemId": "collectible-15200000135",
        "weight": 84
      },
      {
        "itemId": "collectible-15200000140",
        "weight": 84
      },
      {
        "itemId": "collectible-15200000164",
        "weight": 84
      },
      {
        "itemId": "collectible-15200000183",
        "weight": 84
      },
      {
        "itemId": "collectible-15070040001",
        "weight": 72.121
      },
      {
        "itemId": "collectible-15080050188",
        "weight": 67.911
      },
      {
        "itemId": "collectible-15080050150",
        "weight": 64.089
      },
      {
        "itemId": "collectible-15080050013",
        "weight": 61.064
      },
      {
        "itemId": "collectible-15080050191",
        "weight": 50.431
      },
      {
        "itemId": "collectible-15080050043",
        "weight": 49.099
      },
      {
        "itemId": "collectible-15080050134",
        "weight": 41.576
      },
      {
        "itemId": "collectible-15080050095",
        "weight": 34.157
      },
      {
        "itemId": "collectible-15080050168",
        "weight": 33.78
      },
      {
        "itemId": "collectible-15080050171",
        "weight": 33.426
      },
      {
        "itemId": "collectible-15200000031",
        "weight": 32.579
      },
      {
        "itemId": "collectible-15030040013",
        "weight": 32.447
      },
      {
        "itemId": "collectible-15080050062",
        "weight": 31.5
      },
      {
        "itemId": "cpu",
        "weight": 31.295
      },
      {
        "itemId": "collectible-15080050025",
        "weight": 28.8
      },
      {
        "itemId": "collectible-15200000048",
        "weight": 28.8
      },
      {
        "itemId": "collectible-15200000068",
        "weight": 28.8
      },
      {
        "itemId": "collectible-15200000070",
        "weight": 28.8
      },
      {
        "itemId": "collectible-15200000075",
        "weight": 28.8
      },
      {
        "itemId": "collectible-15200000114",
        "weight": 28.8
      },
      {
        "itemId": "collectible-15200000130",
        "weight": 28.8
      },
      {
        "itemId": "collectible-15200000151",
        "weight": 28.8
      },
      {
        "itemId": "collectible-15200000154",
        "weight": 28.8
      },
      {
        "itemId": "collectible-15200000155",
        "weight": 28.8
      },
      {
        "itemId": "collectible-15200000157",
        "weight": 28.8
      },
      {
        "itemId": "collectible-15200000167",
        "weight": 28.8
      },
      {
        "itemId": "collectible-15080050143",
        "weight": 28.627
      },
      {
        "itemId": "collectible-15080050009",
        "weight": 27.902
      },
      {
        "itemId": "collectible-15030050006",
        "weight": 27.623
      },
      {
        "itemId": "collectible-15080050137",
        "weight": 27.532
      },
      {
        "itemId": "collectible-15080050090",
        "weight": 26.996
      },
      {
        "itemId": "collectible-15080050165",
        "weight": 26.008
      },
      {
        "itemId": "collectible-15080050015",
        "weight": 25.784
      },
      {
        "itemId": "collectible-15200000032",
        "weight": 25.634
      },
      {
        "itemId": "collectible-15200000141",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15200000142",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15200000165",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15200000184",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15080050163",
        "weight": 24.408
      },
      {
        "itemId": "collectible-15080050126",
        "weight": 23.975
      },
      {
        "itemId": "collectible-15080050162",
        "weight": 23.918
      },
      {
        "itemId": "collectible-15030050003",
        "weight": 23.346
      },
      {
        "itemId": "collectible-15080050002",
        "weight": 22.924
      },
      {
        "itemId": "collectible-15200000144",
        "weight": 22.5
      },
      {
        "itemId": "ballistic-computer",
        "weight": 22.061
      },
      {
        "itemId": "collectible-15080050035",
        "weight": 21.049
      },
      {
        "itemId": "collectible-15060080014",
        "weight": 20.258
      },
      {
        "itemId": "collectible-15080050004",
        "weight": 19.851
      },
      {
        "itemId": "collectible-15200000118",
        "weight": 19.198
      },
      {
        "itemId": "collectible-15080050094",
        "weight": 19.013
      },
      {
        "itemId": "collectible-15080050138",
        "weight": 19.009
      },
      {
        "itemId": "collectible-15080050093",
        "weight": 18.943
      },
      {
        "itemId": "collectible-15080050164",
        "weight": 18.525
      },
      {
        "itemId": "collectible-15080050135",
        "weight": 17.826
      },
      {
        "itemId": "collectible-15080050132",
        "weight": 17.521
      },
      {
        "itemId": "collectible-15080050180",
        "weight": 17.369
      },
      {
        "itemId": "collectible-15080050034",
        "weight": 15.435
      },
      {
        "itemId": "collectible-15030040001",
        "weight": 15.228
      },
      {
        "itemId": "collectible-15080050092",
        "weight": 14.265
      },
      {
        "itemId": "collectible-15080050033",
        "weight": 12.6
      },
      {
        "itemId": "collectible-15080050088",
        "weight": 12.6
      },
      {
        "itemId": "collectible-15080050189",
        "weight": 12.6
      },
      {
        "itemId": "collectible-15080050133",
        "weight": 11.233
      },
      {
        "itemId": "collectible-15080050082",
        "weight": 10.08
      },
      {
        "itemId": "collectible-15080050083",
        "weight": 10.08
      },
      {
        "itemId": "collectible-15030050013",
        "weight": 9
      },
      {
        "itemId": "collectible-15080050204",
        "weight": 9
      },
      {
        "itemId": "collectible-15080050205",
        "weight": 9
      },
      {
        "itemId": "collectible-15080050071",
        "weight": 8.82
      },
      {
        "itemId": "collectible-15070040003",
        "weight": 7.875
      },
      {
        "itemId": "collectible-15070050001",
        "weight": 7.875
      },
      {
        "itemId": "collectible-15080050061",
        "weight": 7.875
      },
      {
        "itemId": "collectible-15080050151",
        "weight": 7.875
      },
      {
        "itemId": "collectible-15080050161",
        "weight": 7.875
      },
      {
        "itemId": "collectible-15080050170",
        "weight": 7.875
      },
      {
        "itemId": "secret-server",
        "weight": 7.875
      },
      {
        "itemId": "collectible-15080050197",
        "weight": 7.2
      },
      {
        "itemId": "collectible-15200000034",
        "weight": 7.2
      },
      {
        "itemId": "collectible-15200000049",
        "weight": 7.2
      },
      {
        "itemId": "collectible-15200000058",
        "weight": 7.2
      },
      {
        "itemId": "collectible-15200000059",
        "weight": 7.2
      },
      {
        "itemId": "collectible-15200000069",
        "weight": 7.2
      },
      {
        "itemId": "collectible-15200000071",
        "weight": 7.2
      },
      {
        "itemId": "collectible-15200000072",
        "weight": 7.2
      },
      {
        "itemId": "collectible-15200000115",
        "weight": 7.2
      },
      {
        "itemId": "collectible-15200000117",
        "weight": 7.2
      },
      {
        "itemId": "collectible-15200000123",
        "weight": 7.2
      },
      {
        "itemId": "collectible-15200000124",
        "weight": 7.2
      },
      {
        "itemId": "collectible-15200000125",
        "weight": 7.2
      },
      {
        "itemId": "collectible-15200000127",
        "weight": 7.2
      },
      {
        "itemId": "collectible-15200000131",
        "weight": 7.2
      },
      {
        "itemId": "collectible-15200000137",
        "weight": 7.2
      },
      {
        "itemId": "collectible-15200000152",
        "weight": 7.2
      },
      {
        "itemId": "collectible-15200000153",
        "weight": 7.2
      },
      {
        "itemId": "collectible-15200000156",
        "weight": 7.2
      },
      {
        "itemId": "collectible-15200000158",
        "weight": 7.2
      },
      {
        "itemId": "collectible-15200000168",
        "weight": 7.2
      },
      {
        "itemId": "collectible-15080050069",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15080050173",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15200000143",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15200000166",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15200000185",
        "weight": 6.3
      },
      {
        "itemId": "camera",
        "weight": 3.15
      },
      {
        "itemId": "collectible-15030050007",
        "weight": 3.15
      },
      {
        "itemId": "collectible-15030050008",
        "weight": 3.15
      },
      {
        "itemId": "collectible-15030050012",
        "weight": 3.15
      },
      {
        "itemId": "collectible-15030050014",
        "weight": 3.15
      },
      {
        "itemId": "collectible-15030050018",
        "weight": 3.15
      },
      {
        "itemId": "collectible-15080050030",
        "weight": 3.15
      },
      {
        "itemId": "collectible-15080050032",
        "weight": 3.15
      },
      {
        "itemId": "collectible-15080050167",
        "weight": 3.15
      },
      {
        "itemId": "collectible-15080050175",
        "weight": 3.15
      },
      {
        "itemId": "collectible-15080050186",
        "weight": 3.15
      },
      {
        "itemId": "drone",
        "weight": 3.15
      },
      {
        "itemId": "military-gpu",
        "weight": 3.15
      },
      {
        "itemId": "portable-radar",
        "weight": 3.15
      },
      {
        "itemId": "radio",
        "weight": 3.15
      },
      {
        "itemId": "africa-heart",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15010050001",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15040050002",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080040001",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080050003",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080050014",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080050040",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080050041",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080050120",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080050121",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080050122",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080050123",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080050142",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080050166",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080050184",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080050185",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080050187",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15200000060",
        "weight": 2.52
      },
      {
        "itemId": "gold-bar",
        "weight": 2.52
      },
      {
        "itemId": "watch",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15060080015",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15080050066",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15080050067",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15080050131",
        "weight": 2.205
      }
    ]
  },
  "clothes": {
    "name": "衣服",
    "size": [
      4,
      4
    ],
    "min": 1,
    "max": 2,
    "pools": [
      {
        "itemId": "collectible-15010010008",
        "weight": 3200
      },
      {
        "itemId": "collectible-15040010007",
        "weight": 3200
      },
      {
        "itemId": "collectible-15040010008",
        "weight": 3200
      },
      {
        "itemId": "collectible-15040010009",
        "weight": 3200
      },
      {
        "itemId": "collectible-15060080002",
        "weight": 3200
      },
      {
        "itemId": "collectible-15060080003",
        "weight": 3200
      },
      {
        "itemId": "collectible-15060080007",
        "weight": 3200
      },
      {
        "itemId": "collectible-15080050046",
        "weight": 3200
      },
      {
        "itemId": "collectible-15080050047",
        "weight": 3200
      },
      {
        "itemId": "collectible-15080050048",
        "weight": 3200
      },
      {
        "itemId": "collectible-15080050049",
        "weight": 3200
      },
      {
        "itemId": "collectible-15080050050",
        "weight": 3200
      },
      {
        "itemId": "collectible-15080050051",
        "weight": 3200
      },
      {
        "itemId": "collectible-15080050052",
        "weight": 3200
      },
      {
        "itemId": "collectible-15080050053",
        "weight": 3200
      },
      {
        "itemId": "collectible-15080050054",
        "weight": 3200
      },
      {
        "itemId": "collectible-15080050055",
        "weight": 3200
      },
      {
        "itemId": "collectible-15080050059",
        "weight": 3200
      },
      {
        "itemId": "collectible-15080050060",
        "weight": 3200
      },
      {
        "itemId": "collectible-15080050081",
        "weight": 3200
      },
      {
        "itemId": "collectible-15010010015",
        "weight": 1680
      },
      {
        "itemId": "collectible-15060080001",
        "weight": 1680
      },
      {
        "itemId": "collectible-15060080004",
        "weight": 1680
      },
      {
        "itemId": "collectible-15060080006",
        "weight": 1680
      },
      {
        "itemId": "collectible-15060080009",
        "weight": 1680
      },
      {
        "itemId": "collectible-15080050019",
        "weight": 1680
      },
      {
        "itemId": "collectible-15080050020",
        "weight": 1680
      },
      {
        "itemId": "collectible-15080050022",
        "weight": 1680
      },
      {
        "itemId": "collectible-15080050077",
        "weight": 1680
      },
      {
        "itemId": "collectible-15080050078",
        "weight": 1680
      },
      {
        "itemId": "collectible-15080050079",
        "weight": 1680
      },
      {
        "itemId": "collectible-15080050080",
        "weight": 1680
      },
      {
        "itemId": "collectible-15200000134",
        "weight": 1680
      },
      {
        "itemId": "collectible-15200000138",
        "weight": 1680
      },
      {
        "itemId": "lighter",
        "weight": 1680
      },
      {
        "itemId": "bandage",
        "weight": 1440
      },
      {
        "itemId": "collectible-15080050056",
        "weight": 1440
      },
      {
        "itemId": "collectible-15090010024",
        "weight": 1440
      },
      {
        "itemId": "collectible-15090010026",
        "weight": 1440
      },
      {
        "itemId": "collectible-15090910016",
        "weight": 1440
      },
      {
        "itemId": "collectible-15090910019",
        "weight": 1440
      },
      {
        "itemId": "consumable-14020000001",
        "weight": 1440
      },
      {
        "itemId": "consumable-14030000001",
        "weight": 1440
      },
      {
        "itemId": "consumable-14040000001",
        "weight": 1440
      },
      {
        "itemId": "medkit",
        "weight": 1440
      },
      {
        "itemId": "painkiller-loot",
        "weight": 1440
      },
      {
        "itemId": "collectible-15020010001",
        "weight": 800
      },
      {
        "itemId": "collectible-15020010002",
        "weight": 800
      },
      {
        "itemId": "collectible-15020010003",
        "weight": 800
      },
      {
        "itemId": "collectible-15020010004",
        "weight": 800
      },
      {
        "itemId": "collectible-15020010006",
        "weight": 800
      },
      {
        "itemId": "collectible-15020010010",
        "weight": 800
      },
      {
        "itemId": "collectible-15020010014",
        "weight": 800
      },
      {
        "itemId": "collectible-15040010016",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050085",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050086",
        "weight": 800
      },
      {
        "itemId": "collectible-15070010005",
        "weight": 756
      },
      {
        "itemId": "collectible-15070010006",
        "weight": 756
      },
      {
        "itemId": "collectible-15070010007",
        "weight": 756
      },
      {
        "itemId": "collectible-15070010008",
        "weight": 756
      },
      {
        "itemId": "collectible-15070010009",
        "weight": 756
      },
      {
        "itemId": "collectible-15090910017",
        "weight": 756
      },
      {
        "itemId": "collectible-15090910022",
        "weight": 756
      },
      {
        "itemId": "collectible-15090910023",
        "weight": 756
      },
      {
        "itemId": "consumable-14020000003",
        "weight": 756
      },
      {
        "itemId": "consumable-14030000002",
        "weight": 756
      },
      {
        "itemId": "consumable-14050000002",
        "weight": 756
      },
      {
        "itemId": "collectible-15060080010",
        "weight": 720
      },
      {
        "itemId": "collectible-15060080011",
        "weight": 720
      },
      {
        "itemId": "collectible-15060080013",
        "weight": 720
      },
      {
        "itemId": "collectible-15060080016",
        "weight": 720
      },
      {
        "itemId": "collectible-15080050021",
        "weight": 720
      },
      {
        "itemId": "collectible-15080050026",
        "weight": 720
      },
      {
        "itemId": "collectible-15080050027",
        "weight": 720
      },
      {
        "itemId": "collectible-15080050072",
        "weight": 720
      },
      {
        "itemId": "collectible-15080050073",
        "weight": 720
      },
      {
        "itemId": "collectible-15080050074",
        "weight": 720
      },
      {
        "itemId": "collectible-15080050075",
        "weight": 720
      },
      {
        "itemId": "collectible-15080050076",
        "weight": 720
      },
      {
        "itemId": "collectible-15200000139",
        "weight": 720
      },
      {
        "itemId": "collectible-15200000163",
        "weight": 720
      },
      {
        "itemId": "collectible-15040010003",
        "weight": 588
      },
      {
        "itemId": "collectible-15080010003",
        "weight": 588
      },
      {
        "itemId": "collectible-15080010004",
        "weight": 588
      },
      {
        "itemId": "collectible-15080040004",
        "weight": 588
      },
      {
        "itemId": "collectible-15080040005",
        "weight": 588
      },
      {
        "itemId": "collectible-15080050007",
        "weight": 588
      },
      {
        "itemId": "collectible-15080050017",
        "weight": 588
      },
      {
        "itemId": "collectible-15020010007",
        "weight": 420
      },
      {
        "itemId": "collectible-15020010008",
        "weight": 420
      },
      {
        "itemId": "collectible-15020010017",
        "weight": 420
      },
      {
        "itemId": "collectible-15020010019",
        "weight": 420
      },
      {
        "itemId": "collectible-15020010020",
        "weight": 420
      },
      {
        "itemId": "collectible-15020010021",
        "weight": 420
      },
      {
        "itemId": "collectible-15020010026",
        "weight": 420
      },
      {
        "itemId": "collectible-15020010027",
        "weight": 420
      },
      {
        "itemId": "collectible-15020010030",
        "weight": 420
      },
      {
        "itemId": "collectible-15020010032",
        "weight": 420
      },
      {
        "itemId": "collectible-15020040003",
        "weight": 420
      },
      {
        "itemId": "collectible-15020040004",
        "weight": 420
      },
      {
        "itemId": "collectible-15040010012",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050084",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050087",
        "weight": 420
      },
      {
        "itemId": "screwdriver",
        "weight": 420
      },
      {
        "itemId": "wire",
        "weight": 420
      },
      {
        "itemId": "collectible-15070040002",
        "weight": 324
      },
      {
        "itemId": "collectible-15070050003",
        "weight": 324
      },
      {
        "itemId": "collectible-15080050096",
        "weight": 324
      },
      {
        "itemId": "collectible-15080050213",
        "weight": 324
      },
      {
        "itemId": "consumable-14060000007",
        "weight": 324
      },
      {
        "itemId": "consumable-14060000008",
        "weight": 324
      },
      {
        "itemId": "consumable-14070000001",
        "weight": 324
      },
      {
        "itemId": "consumable-14070000004",
        "weight": 324
      },
      {
        "itemId": "consumable-14070000006",
        "weight": 324
      },
      {
        "itemId": "consumable-14070000008",
        "weight": 324
      },
      {
        "itemId": "consumable-14070000009",
        "weight": 324
      },
      {
        "itemId": "field-med",
        "weight": 324
      },
      {
        "itemId": "collectible-15080050008",
        "weight": 252
      },
      {
        "itemId": "collectible-15080050011",
        "weight": 252
      },
      {
        "itemId": "collectible-15080050012",
        "weight": 252
      },
      {
        "itemId": "collectible-15080050023",
        "weight": 252
      },
      {
        "itemId": "collectible-15080050193",
        "weight": 252
      },
      {
        "itemId": "collectible-15200000073",
        "weight": 252
      },
      {
        "itemId": "collectible-15060080005",
        "weight": 240
      },
      {
        "itemId": "collectible-15060080008",
        "weight": 240
      },
      {
        "itemId": "collectible-15080050068",
        "weight": 240
      },
      {
        "itemId": "collectible-15080050070",
        "weight": 240
      },
      {
        "itemId": "collectible-15080050136",
        "weight": 240
      },
      {
        "itemId": "collectible-15080050183",
        "weight": 240
      },
      {
        "itemId": "collectible-15080050215",
        "weight": 240
      },
      {
        "itemId": "collectible-15080050218",
        "weight": 240
      },
      {
        "itemId": "collectible-15080050219",
        "weight": 240
      },
      {
        "itemId": "collectible-15200000135",
        "weight": 240
      },
      {
        "itemId": "collectible-15200000140",
        "weight": 240
      },
      {
        "itemId": "collectible-15200000164",
        "weight": 240
      },
      {
        "itemId": "collectible-15200000183",
        "weight": 240
      },
      {
        "itemId": "cement-bag",
        "weight": 180
      },
      {
        "itemId": "collectible-15020010016",
        "weight": 180
      },
      {
        "itemId": "collectible-15020010018",
        "weight": 180
      },
      {
        "itemId": "collectible-15020010023",
        "weight": 180
      },
      {
        "itemId": "collectible-15020040002",
        "weight": 180
      },
      {
        "itemId": "collectible-15040010017",
        "weight": 180
      },
      {
        "itemId": "collectible-15040010021",
        "weight": 180
      },
      {
        "itemId": "collectible-15040010022",
        "weight": 180
      },
      {
        "itemId": "fabric",
        "weight": 180
      },
      {
        "itemId": "toolbox-item",
        "weight": 180
      },
      {
        "itemId": "wireless-drill",
        "weight": 180
      },
      {
        "itemId": "collectible-15070050002",
        "weight": 108
      },
      {
        "itemId": "collectible-15080050045",
        "weight": 108
      },
      {
        "itemId": "collectible-15080050064",
        "weight": 108
      },
      {
        "itemId": "collectible-15080050172",
        "weight": 108
      },
      {
        "itemId": "collectible-15080050181",
        "weight": 108
      },
      {
        "itemId": "collectible-15080050206",
        "weight": 108
      },
      {
        "itemId": "collectible-15080050207",
        "weight": 108
      },
      {
        "itemId": "collectible-15080050208",
        "weight": 108
      },
      {
        "itemId": "collectible-15080050209",
        "weight": 108
      },
      {
        "itemId": "collectible-15080050216",
        "weight": 108
      },
      {
        "itemId": "collectible-15200000074",
        "weight": 108
      },
      {
        "itemId": "collectible-15200000148",
        "weight": 108
      },
      {
        "itemId": "collectible-15200000149",
        "weight": 108
      },
      {
        "itemId": "collectible-15200000150",
        "weight": 108
      },
      {
        "itemId": "consumable-14020000005",
        "weight": 108
      },
      {
        "itemId": "consumable-14030000003",
        "weight": 108
      },
      {
        "itemId": "consumable-14050000003",
        "weight": 108
      },
      {
        "itemId": "consumable-14060000006",
        "weight": 108
      },
      {
        "itemId": "consumable-14070000003",
        "weight": 108
      },
      {
        "itemId": "consumable-14070000005",
        "weight": 108
      },
      {
        "itemId": "consumable-14070000016",
        "weight": 108
      },
      {
        "itemId": "consumable-14070000017",
        "weight": 108
      },
      {
        "itemId": "consumable-14060000005",
        "weight": 107.298
      },
      {
        "itemId": "consumable-14070000007",
        "weight": 91.937
      },
      {
        "itemId": "collectible-15040010014",
        "weight": 84
      },
      {
        "itemId": "collectible-15080040002",
        "weight": 84
      },
      {
        "itemId": "collectible-15080040003",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050001",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050016",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050018",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050024",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050124",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050139",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050182",
        "weight": 84
      },
      {
        "itemId": "collectible-15200000126",
        "weight": 84
      },
      {
        "itemId": "collectible-15200000141",
        "weight": 72
      },
      {
        "itemId": "collectible-15200000142",
        "weight": 72
      },
      {
        "itemId": "collectible-15200000165",
        "weight": 72
      },
      {
        "itemId": "collectible-15200000184",
        "weight": 72
      },
      {
        "itemId": "collectible-15080050163",
        "weight": 69.737
      },
      {
        "itemId": "collectible-15080050162",
        "weight": 68.337
      },
      {
        "itemId": "collectible-15080050002",
        "weight": 65.498
      },
      {
        "itemId": "collectible-15020010024",
        "weight": 60
      },
      {
        "itemId": "collectible-15020050003",
        "weight": 60
      },
      {
        "itemId": "collectible-15020050004",
        "weight": 60
      },
      {
        "itemId": "collectible-15020050006",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050119",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050130",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000044",
        "weight": 60
      },
      {
        "itemId": "special-steel",
        "weight": 60
      },
      {
        "itemId": "wrench",
        "weight": 60
      },
      {
        "itemId": "collectible-15060080014",
        "weight": 57.879
      },
      {
        "itemId": "collectible-15080050132",
        "weight": 50.06
      },
      {
        "itemId": "collectible-15080050180",
        "weight": 49.627
      },
      {
        "itemId": "collectible-15080050043",
        "weight": 42.962
      },
      {
        "itemId": "collectible-15080050134",
        "weight": 36.379
      },
      {
        "itemId": "collectible-15080050063",
        "weight": 32.4
      },
      {
        "itemId": "collectible-15080050148",
        "weight": 32.4
      },
      {
        "itemId": "collectible-15080050149",
        "weight": 32.4
      },
      {
        "itemId": "collectible-15080050198",
        "weight": 32.4
      },
      {
        "itemId": "collectible-15090010040",
        "weight": 32.4
      },
      {
        "itemId": "collectible-15200000129",
        "weight": 32.4
      },
      {
        "itemId": "collectible-15200000145",
        "weight": 32.4
      },
      {
        "itemId": "collectible-15200000146",
        "weight": 32.4
      },
      {
        "itemId": "collectible-15200000147",
        "weight": 32.4
      },
      {
        "itemId": "collectible-15200000162",
        "weight": 32.4
      },
      {
        "itemId": "consumable-14070000018",
        "weight": 32.4
      },
      {
        "itemId": "consumable-14070000019",
        "weight": 32.4
      },
      {
        "itemId": "collectible-15080050140",
        "weight": 31.896
      },
      {
        "itemId": "collectible-15070040001",
        "weight": 25.963
      },
      {
        "itemId": "collectible-15080050025",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15080050071",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15200000048",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15200000068",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15200000070",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15200000075",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15200000114",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15200000130",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15200000151",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15200000154",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15200000155",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15200000157",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15200000167",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15080050143",
        "weight": 25.049
      },
      {
        "itemId": "collectible-15080050188",
        "weight": 24.448
      },
      {
        "itemId": "collectible-15080050009",
        "weight": 24.414
      },
      {
        "itemId": "collectible-15080050137",
        "weight": 24.09
      },
      {
        "itemId": "collectible-15080050150",
        "weight": 23.072
      },
      {
        "itemId": "collectible-15080050165",
        "weight": 22.757
      },
      {
        "itemId": "collectible-15080050015",
        "weight": 22.561
      },
      {
        "itemId": "collectible-15200000032",
        "weight": 22.429
      },
      {
        "itemId": "collectible-15080050013",
        "weight": 21.983
      },
      {
        "itemId": "collectible-15080050191",
        "weight": 18.155
      },
      {
        "itemId": "collectible-15080050069",
        "weight": 18
      },
      {
        "itemId": "collectible-15080050173",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000143",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000166",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000185",
        "weight": 18
      },
      {
        "itemId": "collectible-15080050004",
        "weight": 17.369
      },
      {
        "itemId": "collectible-15200000118",
        "weight": 16.798
      },
      {
        "itemId": "collectible-15080050094",
        "weight": 16.636
      },
      {
        "itemId": "collectible-15080050138",
        "weight": 16.633
      },
      {
        "itemId": "collectible-15080050093",
        "weight": 16.575
      },
      {
        "itemId": "collectible-15080050164",
        "weight": 16.209
      },
      {
        "itemId": "collectible-15080050135",
        "weight": 15.598
      },
      {
        "itemId": "collectible-15080050174",
        "weight": 15.276
      },
      {
        "itemId": "consumable-14060000001",
        "weight": 14.5
      },
      {
        "itemId": "collectible-15080050092",
        "weight": 12.482
      },
      {
        "itemId": "collectible-15080050179",
        "weight": 12.25
      },
      {
        "itemId": "collectible-15080050171",
        "weight": 12.033
      },
      {
        "itemId": "collectible-15200000031",
        "weight": 11.729
      },
      {
        "itemId": "collectible-15080050062",
        "weight": 11.34
      },
      {
        "itemId": "consumable-14020000006",
        "weight": 11.34
      },
      {
        "itemId": "consumable-14060000002",
        "weight": 11.34
      },
      {
        "itemId": "collectible-15080050133",
        "weight": 9.829
      },
      {
        "itemId": "collectible-15080050082",
        "weight": 8.82
      },
      {
        "itemId": "collectible-15080050083",
        "weight": 8.82
      },
      {
        "itemId": "collectible-15200000144",
        "weight": 8.1
      },
      {
        "itemId": "collectible-15030050019",
        "weight": 7.564
      },
      {
        "itemId": "collectible-15040010023",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15060080015",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15080050066",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15080050067",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15080050131",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15080050197",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15200000034",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15200000049",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15200000058",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15200000059",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15200000069",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15200000071",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15200000072",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15200000115",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15200000117",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15200000123",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15200000124",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15200000125",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15200000127",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15200000131",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15200000137",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15200000152",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15200000153",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15200000156",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15200000158",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15200000168",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15080050144",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15080050220",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15070040003",
        "weight": 2.835
      },
      {
        "itemId": "collectible-15070050001",
        "weight": 2.835
      },
      {
        "itemId": "collectible-15080050061",
        "weight": 2.835
      },
      {
        "itemId": "collectible-15080050151",
        "weight": 2.835
      },
      {
        "itemId": "collectible-15080050161",
        "weight": 2.835
      },
      {
        "itemId": "collectible-15080050170",
        "weight": 2.835
      },
      {
        "itemId": "consumable-14060000003",
        "weight": 2.835
      },
      {
        "itemId": "consumable-14060000004",
        "weight": 2.835
      },
      {
        "itemId": "secret-server",
        "weight": 2.835
      },
      {
        "itemId": "africa-heart",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15010050001",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15040050002",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15080040001",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15080050003",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15080050014",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15080050040",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15080050041",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15080050120",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15080050121",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15080050122",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15080050123",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15080050142",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15080050166",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15080050184",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15080050185",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15080050187",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15200000060",
        "weight": 2.205
      },
      {
        "itemId": "gold-bar",
        "weight": 2.205
      },
      {
        "itemId": "watch",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15020010031",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15030050017",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050178",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050211",
        "weight": 1.575
      }
    ]
  },
  "travel-bag": {
    "name": "遗留背包",
    "size": [
      5,
      4
    ],
    "min": 1,
    "max": 3,
    "pools": [
      {
        "itemId": "collectible-15010010008",
        "weight": 2400
      },
      {
        "itemId": "collectible-15040010007",
        "weight": 2400
      },
      {
        "itemId": "collectible-15040010008",
        "weight": 2400
      },
      {
        "itemId": "collectible-15040010009",
        "weight": 2400
      },
      {
        "itemId": "collectible-15060080002",
        "weight": 2400
      },
      {
        "itemId": "collectible-15060080003",
        "weight": 2400
      },
      {
        "itemId": "collectible-15060080007",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050046",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050047",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050048",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050049",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050050",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050051",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050052",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050053",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050054",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050055",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050059",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050060",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050081",
        "weight": 2400
      },
      {
        "itemId": "collectible-15020010001",
        "weight": 1920
      },
      {
        "itemId": "collectible-15020010002",
        "weight": 1920
      },
      {
        "itemId": "collectible-15020010003",
        "weight": 1920
      },
      {
        "itemId": "collectible-15020010004",
        "weight": 1920
      },
      {
        "itemId": "collectible-15020010006",
        "weight": 1920
      },
      {
        "itemId": "collectible-15020010010",
        "weight": 1920
      },
      {
        "itemId": "collectible-15020010014",
        "weight": 1920
      },
      {
        "itemId": "collectible-15040010016",
        "weight": 1920
      },
      {
        "itemId": "collectible-15080050085",
        "weight": 1920
      },
      {
        "itemId": "collectible-15080050086",
        "weight": 1920
      },
      {
        "itemId": "bandage",
        "weight": 1280
      },
      {
        "itemId": "consumable-14020000001",
        "weight": 1280
      },
      {
        "itemId": "consumable-14030000001",
        "weight": 1280
      },
      {
        "itemId": "consumable-14040000001",
        "weight": 1280
      },
      {
        "itemId": "medkit",
        "weight": 1280
      },
      {
        "itemId": "painkiller-loot",
        "weight": 1280
      },
      {
        "itemId": "collectible-15010010015",
        "weight": 1260
      },
      {
        "itemId": "collectible-15060080001",
        "weight": 1260
      },
      {
        "itemId": "collectible-15060080004",
        "weight": 1260
      },
      {
        "itemId": "collectible-15060080006",
        "weight": 1260
      },
      {
        "itemId": "collectible-15060080009",
        "weight": 1260
      },
      {
        "itemId": "collectible-15080050019",
        "weight": 1260
      },
      {
        "itemId": "collectible-15080050020",
        "weight": 1260
      },
      {
        "itemId": "collectible-15080050022",
        "weight": 1260
      },
      {
        "itemId": "collectible-15080050077",
        "weight": 1260
      },
      {
        "itemId": "collectible-15080050078",
        "weight": 1260
      },
      {
        "itemId": "collectible-15080050079",
        "weight": 1260
      },
      {
        "itemId": "collectible-15080050080",
        "weight": 1260
      },
      {
        "itemId": "collectible-15200000134",
        "weight": 1260
      },
      {
        "itemId": "collectible-15200000138",
        "weight": 1260
      },
      {
        "itemId": "lighter",
        "weight": 1260
      },
      {
        "itemId": "collectible-15080050056",
        "weight": 1120
      },
      {
        "itemId": "collectible-15090010024",
        "weight": 1120
      },
      {
        "itemId": "collectible-15090010026",
        "weight": 1120
      },
      {
        "itemId": "collectible-15090910016",
        "weight": 1120
      },
      {
        "itemId": "collectible-15090910019",
        "weight": 1120
      },
      {
        "itemId": "collectible-15020010007",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010008",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010017",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010019",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010020",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010021",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010026",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010027",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010030",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020010032",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020040003",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020040004",
        "weight": 1008
      },
      {
        "itemId": "collectible-15040010012",
        "weight": 1008
      },
      {
        "itemId": "collectible-15080050084",
        "weight": 1008
      },
      {
        "itemId": "collectible-15080050087",
        "weight": 1008
      },
      {
        "itemId": "screwdriver",
        "weight": 1008
      },
      {
        "itemId": "wire",
        "weight": 1008
      },
      {
        "itemId": "consumable-14020000003",
        "weight": 672
      },
      {
        "itemId": "consumable-14030000002",
        "weight": 672
      },
      {
        "itemId": "consumable-14050000002",
        "weight": 672
      },
      {
        "itemId": "collectible-15010010004",
        "weight": 640
      },
      {
        "itemId": "collectible-15060010008",
        "weight": 640
      },
      {
        "itemId": "collectible-15060010009",
        "weight": 640
      },
      {
        "itemId": "collectible-15090010077",
        "weight": 640
      },
      {
        "itemId": "collectible-15070010005",
        "weight": 588
      },
      {
        "itemId": "collectible-15070010006",
        "weight": 588
      },
      {
        "itemId": "collectible-15070010007",
        "weight": 588
      },
      {
        "itemId": "collectible-15070010008",
        "weight": 588
      },
      {
        "itemId": "collectible-15070010009",
        "weight": 588
      },
      {
        "itemId": "collectible-15090910017",
        "weight": 588
      },
      {
        "itemId": "collectible-15090910022",
        "weight": 588
      },
      {
        "itemId": "collectible-15090910023",
        "weight": 588
      },
      {
        "itemId": "collectible-15060080010",
        "weight": 540
      },
      {
        "itemId": "collectible-15060080011",
        "weight": 540
      },
      {
        "itemId": "collectible-15060080013",
        "weight": 540
      },
      {
        "itemId": "collectible-15060080016",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050021",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050026",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050027",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050072",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050073",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050074",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050075",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050076",
        "weight": 540
      },
      {
        "itemId": "collectible-15200000139",
        "weight": 540
      },
      {
        "itemId": "collectible-15200000163",
        "weight": 540
      },
      {
        "itemId": "cement-bag",
        "weight": 432
      },
      {
        "itemId": "collectible-15020010016",
        "weight": 432
      },
      {
        "itemId": "collectible-15020010018",
        "weight": 432
      },
      {
        "itemId": "collectible-15020010023",
        "weight": 432
      },
      {
        "itemId": "collectible-15020040002",
        "weight": 432
      },
      {
        "itemId": "collectible-15040010017",
        "weight": 432
      },
      {
        "itemId": "collectible-15040010021",
        "weight": 432
      },
      {
        "itemId": "collectible-15040010022",
        "weight": 432
      },
      {
        "itemId": "fabric",
        "weight": 432
      },
      {
        "itemId": "toolbox-item",
        "weight": 432
      },
      {
        "itemId": "wireless-drill",
        "weight": 432
      },
      {
        "itemId": "collectible-15040010003",
        "weight": 336
      },
      {
        "itemId": "collectible-15060010001",
        "weight": 336
      },
      {
        "itemId": "collectible-15060010002",
        "weight": 336
      },
      {
        "itemId": "collectible-15060010003",
        "weight": 336
      },
      {
        "itemId": "collectible-15060010010",
        "weight": 336
      },
      {
        "itemId": "collectible-15060010012",
        "weight": 336
      },
      {
        "itemId": "collectible-15080010003",
        "weight": 336
      },
      {
        "itemId": "collectible-15080010004",
        "weight": 336
      },
      {
        "itemId": "collectible-15080040004",
        "weight": 336
      },
      {
        "itemId": "collectible-15080040005",
        "weight": 336
      },
      {
        "itemId": "collectible-15080050007",
        "weight": 336
      },
      {
        "itemId": "collectible-15080050017",
        "weight": 336
      },
      {
        "itemId": "consumable-14060000007",
        "weight": 288
      },
      {
        "itemId": "consumable-14060000008",
        "weight": 288
      },
      {
        "itemId": "consumable-14070000001",
        "weight": 288
      },
      {
        "itemId": "consumable-14070000004",
        "weight": 288
      },
      {
        "itemId": "consumable-14070000006",
        "weight": 288
      },
      {
        "itemId": "consumable-14070000008",
        "weight": 288
      },
      {
        "itemId": "consumable-14070000009",
        "weight": 288
      },
      {
        "itemId": "field-med",
        "weight": 288
      },
      {
        "itemId": "collectible-15070040002",
        "weight": 252
      },
      {
        "itemId": "collectible-15070050003",
        "weight": 252
      },
      {
        "itemId": "collectible-15080050096",
        "weight": 252
      },
      {
        "itemId": "collectible-15080050213",
        "weight": 252
      },
      {
        "itemId": "collectible-15060080005",
        "weight": 180
      },
      {
        "itemId": "collectible-15060080008",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050068",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050070",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050136",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050183",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050215",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050218",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050219",
        "weight": 180
      },
      {
        "itemId": "collectible-15200000135",
        "weight": 180
      },
      {
        "itemId": "collectible-15200000140",
        "weight": 180
      },
      {
        "itemId": "collectible-15200000164",
        "weight": 180
      },
      {
        "itemId": "collectible-15200000183",
        "weight": 180
      },
      {
        "itemId": "collectible-15020010024",
        "weight": 144
      },
      {
        "itemId": "collectible-15020050003",
        "weight": 144
      },
      {
        "itemId": "collectible-15020050004",
        "weight": 144
      },
      {
        "itemId": "collectible-15020050006",
        "weight": 144
      },
      {
        "itemId": "collectible-15060010004",
        "weight": 144
      },
      {
        "itemId": "collectible-15060010006",
        "weight": 144
      },
      {
        "itemId": "collectible-15060010007",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050008",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050011",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050012",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050023",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050065",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050116",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050119",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050130",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050193",
        "weight": 144
      },
      {
        "itemId": "collectible-15090010041",
        "weight": 144
      },
      {
        "itemId": "collectible-15200000044",
        "weight": 144
      },
      {
        "itemId": "collectible-15200000073",
        "weight": 144
      },
      {
        "itemId": "special-steel",
        "weight": 144
      },
      {
        "itemId": "wrench",
        "weight": 144
      },
      {
        "itemId": "consumable-14020000005",
        "weight": 96
      },
      {
        "itemId": "consumable-14030000003",
        "weight": 96
      },
      {
        "itemId": "consumable-14050000003",
        "weight": 96
      },
      {
        "itemId": "consumable-14060000006",
        "weight": 96
      },
      {
        "itemId": "consumable-14070000003",
        "weight": 96
      },
      {
        "itemId": "consumable-14070000005",
        "weight": 96
      },
      {
        "itemId": "consumable-14070000016",
        "weight": 96
      },
      {
        "itemId": "consumable-14070000017",
        "weight": 96
      },
      {
        "itemId": "consumable-14060000005",
        "weight": 95.376
      },
      {
        "itemId": "collectible-15070050002",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050045",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050064",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050172",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050181",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050206",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050207",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050208",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050209",
        "weight": 84
      },
      {
        "itemId": "collectible-15080050216",
        "weight": 84
      },
      {
        "itemId": "collectible-15200000074",
        "weight": 84
      },
      {
        "itemId": "collectible-15200000148",
        "weight": 84
      },
      {
        "itemId": "collectible-15200000149",
        "weight": 84
      },
      {
        "itemId": "collectible-15200000150",
        "weight": 84
      },
      {
        "itemId": "consumable-14070000007",
        "weight": 81.722
      },
      {
        "itemId": "collectible-15200000141",
        "weight": 54
      },
      {
        "itemId": "collectible-15200000142",
        "weight": 54
      },
      {
        "itemId": "collectible-15200000165",
        "weight": 54
      },
      {
        "itemId": "collectible-15200000184",
        "weight": 54
      },
      {
        "itemId": "collectible-15080050163",
        "weight": 52.303
      },
      {
        "itemId": "collectible-15080050162",
        "weight": 51.253
      },
      {
        "itemId": "collectible-15080050002",
        "weight": 49.123
      },
      {
        "itemId": "collectible-15040010014",
        "weight": 48
      },
      {
        "itemId": "collectible-15060040002",
        "weight": 48
      },
      {
        "itemId": "collectible-15080040002",
        "weight": 48
      },
      {
        "itemId": "collectible-15080040003",
        "weight": 48
      },
      {
        "itemId": "collectible-15080050001",
        "weight": 48
      },
      {
        "itemId": "collectible-15080050016",
        "weight": 48
      },
      {
        "itemId": "collectible-15080050018",
        "weight": 48
      },
      {
        "itemId": "collectible-15080050024",
        "weight": 48
      },
      {
        "itemId": "collectible-15080050057",
        "weight": 48
      },
      {
        "itemId": "collectible-15080050114",
        "weight": 48
      },
      {
        "itemId": "collectible-15080050124",
        "weight": 48
      },
      {
        "itemId": "collectible-15080050139",
        "weight": 48
      },
      {
        "itemId": "collectible-15080050182",
        "weight": 48
      },
      {
        "itemId": "collectible-15080050214",
        "weight": 48
      },
      {
        "itemId": "collectible-15200000061",
        "weight": 48
      },
      {
        "itemId": "collectible-15200000126",
        "weight": 48
      },
      {
        "itemId": "collectible-15080050127",
        "weight": 47.045
      },
      {
        "itemId": "collectible-15080050117",
        "weight": 44.062
      },
      {
        "itemId": "collectible-15060080014",
        "weight": 43.41
      },
      {
        "itemId": "collectible-15080050132",
        "weight": 37.545
      },
      {
        "itemId": "collectible-15080050180",
        "weight": 37.22
      },
      {
        "itemId": "collectible-15080050174",
        "weight": 36.663
      },
      {
        "itemId": "collectible-15080050179",
        "weight": 29.401
      },
      {
        "itemId": "consumable-14070000018",
        "weight": 28.8
      },
      {
        "itemId": "consumable-14070000019",
        "weight": 28.8
      },
      {
        "itemId": "collectible-15080050063",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15080050148",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15080050149",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15080050198",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15090010040",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15200000129",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15200000145",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15200000146",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15200000147",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15200000162",
        "weight": 25.2
      },
      {
        "itemId": "collectible-15080050140",
        "weight": 24.808
      },
      {
        "itemId": "collectible-15080050043",
        "weight": 24.55
      },
      {
        "itemId": "collectible-15080050134",
        "weight": 20.788
      },
      {
        "itemId": "collectible-15070040001",
        "weight": 20.194
      },
      {
        "itemId": "collectible-15080050188",
        "weight": 19.015
      },
      {
        "itemId": "collectible-15080050071",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15030050019",
        "weight": 18.155
      },
      {
        "itemId": "collectible-15080050150",
        "weight": 17.945
      },
      {
        "itemId": "collectible-15080050013",
        "weight": 17.098
      },
      {
        "itemId": "collectible-15040010023",
        "weight": 15.12
      },
      {
        "itemId": "collectible-15080050025",
        "weight": 14.4
      },
      {
        "itemId": "collectible-15200000048",
        "weight": 14.4
      },
      {
        "itemId": "collectible-15200000068",
        "weight": 14.4
      },
      {
        "itemId": "collectible-15200000070",
        "weight": 14.4
      },
      {
        "itemId": "collectible-15200000075",
        "weight": 14.4
      },
      {
        "itemId": "collectible-15200000114",
        "weight": 14.4
      },
      {
        "itemId": "collectible-15200000130",
        "weight": 14.4
      },
      {
        "itemId": "collectible-15200000151",
        "weight": 14.4
      },
      {
        "itemId": "collectible-15200000154",
        "weight": 14.4
      },
      {
        "itemId": "collectible-15200000155",
        "weight": 14.4
      },
      {
        "itemId": "collectible-15200000157",
        "weight": 14.4
      },
      {
        "itemId": "collectible-15200000167",
        "weight": 14.4
      },
      {
        "itemId": "collectible-15080050143",
        "weight": 14.313
      },
      {
        "itemId": "collectible-15080050191",
        "weight": 14.121
      },
      {
        "itemId": "collectible-15080050009",
        "weight": 13.951
      },
      {
        "itemId": "collectible-15080050115",
        "weight": 13.916
      },
      {
        "itemId": "collectible-15080050137",
        "weight": 13.766
      },
      {
        "itemId": "collectible-15080050069",
        "weight": 13.5
      },
      {
        "itemId": "collectible-15080050173",
        "weight": 13.5
      },
      {
        "itemId": "collectible-15200000143",
        "weight": 13.5
      },
      {
        "itemId": "collectible-15200000166",
        "weight": 13.5
      },
      {
        "itemId": "collectible-15200000185",
        "weight": 13.5
      },
      {
        "itemId": "collectible-15080050165",
        "weight": 13.004
      },
      {
        "itemId": "collectible-15060040003",
        "weight": 12.904
      },
      {
        "itemId": "collectible-15080050015",
        "weight": 12.892
      },
      {
        "itemId": "consumable-14060000001",
        "weight": 12.889
      },
      {
        "itemId": "collectible-15200000032",
        "weight": 12.817
      },
      {
        "itemId": "collectible-15080050144",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15080050220",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15080050129",
        "weight": 10.548
      },
      {
        "itemId": "collectible-15040010019",
        "weight": 10.522
      },
      {
        "itemId": "consumable-14020000006",
        "weight": 10.08
      },
      {
        "itemId": "consumable-14060000002",
        "weight": 10.08
      },
      {
        "itemId": "collectible-15060040001",
        "weight": 10.015
      },
      {
        "itemId": "collectible-15080050004",
        "weight": 9.925
      },
      {
        "itemId": "collectible-15200000118",
        "weight": 9.599
      },
      {
        "itemId": "collectible-15080050094",
        "weight": 9.506
      },
      {
        "itemId": "collectible-15080050138",
        "weight": 9.504
      },
      {
        "itemId": "collectible-15080050093",
        "weight": 9.471
      },
      {
        "itemId": "collectible-15080050171",
        "weight": 9.359
      },
      {
        "itemId": "collectible-15080050164",
        "weight": 9.262
      },
      {
        "itemId": "collectible-15200000031",
        "weight": 9.122
      },
      {
        "itemId": "collectible-15080050135",
        "weight": 8.913
      },
      {
        "itemId": "collectible-15080050195",
        "weight": 8.86
      },
      {
        "itemId": "collectible-15080050062",
        "weight": 8.82
      },
      {
        "itemId": "collectible-15080050092",
        "weight": 7.133
      },
      {
        "itemId": "collectible-15080050212",
        "weight": 6.99
      },
      {
        "itemId": "collectible-15200000144",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15080050133",
        "weight": 5.617
      },
      {
        "itemId": "collectible-15080050082",
        "weight": 5.04
      },
      {
        "itemId": "collectible-15080050083",
        "weight": 5.04
      },
      {
        "itemId": "collectible-15080050192",
        "weight": 5.04
      },
      {
        "itemId": "collectible-15060080015",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15080050066",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15080050067",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15080050131",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15020010031",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15030050017",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050178",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050211",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050197",
        "weight": 3.6
      },
      {
        "itemId": "collectible-15200000034",
        "weight": 3.6
      },
      {
        "itemId": "collectible-15200000049",
        "weight": 3.6
      },
      {
        "itemId": "collectible-15200000058",
        "weight": 3.6
      },
      {
        "itemId": "collectible-15200000059",
        "weight": 3.6
      },
      {
        "itemId": "collectible-15200000069",
        "weight": 3.6
      },
      {
        "itemId": "collectible-15200000071",
        "weight": 3.6
      },
      {
        "itemId": "collectible-15200000072",
        "weight": 3.6
      },
      {
        "itemId": "collectible-15200000115",
        "weight": 3.6
      },
      {
        "itemId": "collectible-15200000117",
        "weight": 3.6
      },
      {
        "itemId": "collectible-15200000123",
        "weight": 3.6
      },
      {
        "itemId": "collectible-15200000124",
        "weight": 3.6
      },
      {
        "itemId": "collectible-15200000125",
        "weight": 3.6
      },
      {
        "itemId": "collectible-15200000127",
        "weight": 3.6
      },
      {
        "itemId": "collectible-15200000131",
        "weight": 3.6
      },
      {
        "itemId": "collectible-15200000137",
        "weight": 3.6
      },
      {
        "itemId": "collectible-15200000152",
        "weight": 3.6
      },
      {
        "itemId": "collectible-15200000153",
        "weight": 3.6
      },
      {
        "itemId": "collectible-15200000156",
        "weight": 3.6
      },
      {
        "itemId": "collectible-15200000158",
        "weight": 3.6
      },
      {
        "itemId": "collectible-15200000168",
        "weight": 3.6
      },
      {
        "itemId": "consumable-14060000003",
        "weight": 2.52
      },
      {
        "itemId": "consumable-14060000004",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15070040003",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15070050001",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15080050061",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15080050151",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15080050161",
        "weight": 2.205
      },
      {
        "itemId": "collectible-15080050170",
        "weight": 2.205
      },
      {
        "itemId": "secret-server",
        "weight": 2.205
      },
      {
        "itemId": "africa-heart",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15010050001",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15040050002",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15060040004",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15080040001",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15080050003",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15080050014",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15080050040",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15080050041",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15080050058",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15080050113",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15080050120",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15080050121",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15080050122",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15080050123",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15080050128",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15080050142",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15080050166",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15080050184",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15080050185",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15080050187",
        "weight": 1.26
      },
      {
        "itemId": "collectible-15200000060",
        "weight": 1.26
      },
      {
        "itemId": "gold-bar",
        "weight": 1.26
      },
      {
        "itemId": "resuscitator",
        "weight": 1.26
      },
      {
        "itemId": "watch",
        "weight": 1.26
      }
    ]
  },
  "travel-case": {
    "name": "旅行箱",
    "size": [
      6,
      6
    ],
    "min": 2,
    "max": 4,
    "pools": [
      {
        "itemId": "collectible-15010010008",
        "weight": 2400
      },
      {
        "itemId": "collectible-15040010007",
        "weight": 2400
      },
      {
        "itemId": "collectible-15040010008",
        "weight": 2400
      },
      {
        "itemId": "collectible-15040010009",
        "weight": 2400
      },
      {
        "itemId": "collectible-15060080002",
        "weight": 2400
      },
      {
        "itemId": "collectible-15060080003",
        "weight": 2400
      },
      {
        "itemId": "collectible-15060080007",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050046",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050047",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050048",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050049",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050050",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050051",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050052",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050053",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050054",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050055",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050059",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050060",
        "weight": 2400
      },
      {
        "itemId": "collectible-15080050081",
        "weight": 2400
      },
      {
        "itemId": "collectible-15030010009",
        "weight": 1600
      },
      {
        "itemId": "collectible-15010010015",
        "weight": 1260
      },
      {
        "itemId": "collectible-15060080001",
        "weight": 1260
      },
      {
        "itemId": "collectible-15060080004",
        "weight": 1260
      },
      {
        "itemId": "collectible-15060080006",
        "weight": 1260
      },
      {
        "itemId": "collectible-15060080009",
        "weight": 1260
      },
      {
        "itemId": "collectible-15080050019",
        "weight": 1260
      },
      {
        "itemId": "collectible-15080050020",
        "weight": 1260
      },
      {
        "itemId": "collectible-15080050022",
        "weight": 1260
      },
      {
        "itemId": "collectible-15080050077",
        "weight": 1260
      },
      {
        "itemId": "collectible-15080050078",
        "weight": 1260
      },
      {
        "itemId": "collectible-15080050079",
        "weight": 1260
      },
      {
        "itemId": "collectible-15080050080",
        "weight": 1260
      },
      {
        "itemId": "collectible-15200000134",
        "weight": 1260
      },
      {
        "itemId": "collectible-15200000138",
        "weight": 1260
      },
      {
        "itemId": "lighter",
        "weight": 1260
      },
      {
        "itemId": "collectible-15040010003",
        "weight": 1008
      },
      {
        "itemId": "collectible-15080010003",
        "weight": 1008
      },
      {
        "itemId": "collectible-15080010004",
        "weight": 1008
      },
      {
        "itemId": "collectible-15080040004",
        "weight": 1008
      },
      {
        "itemId": "collectible-15080040005",
        "weight": 1008
      },
      {
        "itemId": "collectible-15080050007",
        "weight": 1008
      },
      {
        "itemId": "collectible-15080050017",
        "weight": 1008
      },
      {
        "itemId": "collectible-15020050007",
        "weight": 840
      },
      {
        "itemId": "collectible-15030010002",
        "weight": 840
      },
      {
        "itemId": "collectible-15030010007",
        "weight": 840
      },
      {
        "itemId": "collectible-15030010011",
        "weight": 840
      },
      {
        "itemId": "collectible-15030010013",
        "weight": 840
      },
      {
        "itemId": "collectible-15030010014",
        "weight": 840
      },
      {
        "itemId": "collectible-15030010018",
        "weight": 840
      },
      {
        "itemId": "collectible-15030010019",
        "weight": 840
      },
      {
        "itemId": "collectible-15030040011",
        "weight": 840
      },
      {
        "itemId": "bandage",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050056",
        "weight": 800
      },
      {
        "itemId": "collectible-15090010024",
        "weight": 800
      },
      {
        "itemId": "collectible-15090010026",
        "weight": 800
      },
      {
        "itemId": "collectible-15090910016",
        "weight": 800
      },
      {
        "itemId": "collectible-15090910019",
        "weight": 800
      },
      {
        "itemId": "consumable-14020000001",
        "weight": 800
      },
      {
        "itemId": "consumable-14030000001",
        "weight": 800
      },
      {
        "itemId": "consumable-14040000001",
        "weight": 800
      },
      {
        "itemId": "medkit",
        "weight": 800
      },
      {
        "itemId": "painkiller-loot",
        "weight": 800
      },
      {
        "itemId": "collectible-15060080010",
        "weight": 540
      },
      {
        "itemId": "collectible-15060080011",
        "weight": 540
      },
      {
        "itemId": "collectible-15060080013",
        "weight": 540
      },
      {
        "itemId": "collectible-15060080016",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050021",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050026",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050027",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050072",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050073",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050074",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050075",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050076",
        "weight": 540
      },
      {
        "itemId": "collectible-15200000139",
        "weight": 540
      },
      {
        "itemId": "collectible-15200000163",
        "weight": 540
      },
      {
        "itemId": "collectible-15020010001",
        "weight": 480
      },
      {
        "itemId": "collectible-15020010002",
        "weight": 480
      },
      {
        "itemId": "collectible-15020010003",
        "weight": 480
      },
      {
        "itemId": "collectible-15020010004",
        "weight": 480
      },
      {
        "itemId": "collectible-15020010006",
        "weight": 480
      },
      {
        "itemId": "collectible-15020010010",
        "weight": 480
      },
      {
        "itemId": "collectible-15020010014",
        "weight": 480
      },
      {
        "itemId": "collectible-15040010016",
        "weight": 480
      },
      {
        "itemId": "collectible-15080050085",
        "weight": 480
      },
      {
        "itemId": "collectible-15080050086",
        "weight": 480
      },
      {
        "itemId": "collectible-15080050008",
        "weight": 432
      },
      {
        "itemId": "collectible-15080050011",
        "weight": 432
      },
      {
        "itemId": "collectible-15080050012",
        "weight": 432
      },
      {
        "itemId": "collectible-15080050023",
        "weight": 432
      },
      {
        "itemId": "collectible-15080050193",
        "weight": 432
      },
      {
        "itemId": "collectible-15200000073",
        "weight": 432
      },
      {
        "itemId": "collectible-15070010005",
        "weight": 420
      },
      {
        "itemId": "collectible-15070010006",
        "weight": 420
      },
      {
        "itemId": "collectible-15070010007",
        "weight": 420
      },
      {
        "itemId": "collectible-15070010008",
        "weight": 420
      },
      {
        "itemId": "collectible-15070010009",
        "weight": 420
      },
      {
        "itemId": "collectible-15090910017",
        "weight": 420
      },
      {
        "itemId": "collectible-15090910022",
        "weight": 420
      },
      {
        "itemId": "collectible-15090910023",
        "weight": 420
      },
      {
        "itemId": "consumable-14020000003",
        "weight": 420
      },
      {
        "itemId": "consumable-14030000002",
        "weight": 420
      },
      {
        "itemId": "consumable-14050000002",
        "weight": 420
      },
      {
        "itemId": "collectible-15020050008",
        "weight": 360
      },
      {
        "itemId": "collectible-15030010001",
        "weight": 360
      },
      {
        "itemId": "collectible-15030010008",
        "weight": 360
      },
      {
        "itemId": "collectible-15030040002",
        "weight": 360
      },
      {
        "itemId": "collectible-15030050016",
        "weight": 360
      },
      {
        "itemId": "collectible-15070010001",
        "weight": 360
      },
      {
        "itemId": "collectible-15070010002",
        "weight": 360
      },
      {
        "itemId": "collectible-15080050039",
        "weight": 360
      },
      {
        "itemId": "collectible-15080050194",
        "weight": 360
      },
      {
        "itemId": "collectible-15080050217",
        "weight": 360
      },
      {
        "itemId": "collectible-15030040010",
        "weight": 312.628
      },
      {
        "itemId": "collectible-15020010007",
        "weight": 252
      },
      {
        "itemId": "collectible-15020010008",
        "weight": 252
      },
      {
        "itemId": "collectible-15020010017",
        "weight": 252
      },
      {
        "itemId": "collectible-15020010019",
        "weight": 252
      },
      {
        "itemId": "collectible-15020010020",
        "weight": 252
      },
      {
        "itemId": "collectible-15020010021",
        "weight": 252
      },
      {
        "itemId": "collectible-15020010026",
        "weight": 252
      },
      {
        "itemId": "collectible-15020010027",
        "weight": 252
      },
      {
        "itemId": "collectible-15020010030",
        "weight": 252
      },
      {
        "itemId": "collectible-15020010032",
        "weight": 252
      },
      {
        "itemId": "collectible-15020040003",
        "weight": 252
      },
      {
        "itemId": "collectible-15020040004",
        "weight": 252
      },
      {
        "itemId": "collectible-15040010012",
        "weight": 252
      },
      {
        "itemId": "collectible-15080050084",
        "weight": 252
      },
      {
        "itemId": "collectible-15080050087",
        "weight": 252
      },
      {
        "itemId": "screwdriver",
        "weight": 252
      },
      {
        "itemId": "wire",
        "weight": 252
      },
      {
        "itemId": "collectible-15060080005",
        "weight": 180
      },
      {
        "itemId": "collectible-15060080008",
        "weight": 180
      },
      {
        "itemId": "collectible-15070040002",
        "weight": 180
      },
      {
        "itemId": "collectible-15070050003",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050068",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050070",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050096",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050136",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050183",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050213",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050215",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050218",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050219",
        "weight": 180
      },
      {
        "itemId": "collectible-15200000135",
        "weight": 180
      },
      {
        "itemId": "collectible-15200000140",
        "weight": 180
      },
      {
        "itemId": "collectible-15200000164",
        "weight": 180
      },
      {
        "itemId": "collectible-15200000183",
        "weight": 180
      },
      {
        "itemId": "consumable-14060000007",
        "weight": 180
      },
      {
        "itemId": "consumable-14060000008",
        "weight": 180
      },
      {
        "itemId": "consumable-14070000001",
        "weight": 180
      },
      {
        "itemId": "consumable-14070000004",
        "weight": 180
      },
      {
        "itemId": "consumable-14070000006",
        "weight": 180
      },
      {
        "itemId": "consumable-14070000008",
        "weight": 180
      },
      {
        "itemId": "consumable-14070000009",
        "weight": 180
      },
      {
        "itemId": "field-med",
        "weight": 180
      },
      {
        "itemId": "collectible-15040010014",
        "weight": 144
      },
      {
        "itemId": "collectible-15080040002",
        "weight": 144
      },
      {
        "itemId": "collectible-15080040003",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050001",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050016",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050018",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050024",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050124",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050139",
        "weight": 144
      },
      {
        "itemId": "collectible-15080050182",
        "weight": 144
      },
      {
        "itemId": "collectible-15200000126",
        "weight": 144
      },
      {
        "itemId": "collectible-15030040012",
        "weight": 120
      },
      {
        "itemId": "collectible-15030040014",
        "weight": 120
      },
      {
        "itemId": "collectible-15030050005",
        "weight": 120
      },
      {
        "itemId": "collectible-15030050011",
        "weight": 120
      },
      {
        "itemId": "collectible-15040010015",
        "weight": 120
      },
      {
        "itemId": "collectible-15040050003",
        "weight": 120
      },
      {
        "itemId": "collectible-15080050037",
        "weight": 120
      },
      {
        "itemId": "collectible-15080050038",
        "weight": 120
      },
      {
        "itemId": "collectible-15080050091",
        "weight": 120
      },
      {
        "itemId": "motherboard",
        "weight": 120
      },
      {
        "itemId": "ram",
        "weight": 120
      },
      {
        "itemId": "ssd",
        "weight": 120
      },
      {
        "itemId": "cement-bag",
        "weight": 108
      },
      {
        "itemId": "collectible-15020010016",
        "weight": 108
      },
      {
        "itemId": "collectible-15020010018",
        "weight": 108
      },
      {
        "itemId": "collectible-15020010023",
        "weight": 108
      },
      {
        "itemId": "collectible-15020040002",
        "weight": 108
      },
      {
        "itemId": "collectible-15040010017",
        "weight": 108
      },
      {
        "itemId": "collectible-15040010021",
        "weight": 108
      },
      {
        "itemId": "collectible-15040010022",
        "weight": 108
      },
      {
        "itemId": "fabric",
        "weight": 108
      },
      {
        "itemId": "toolbox-item",
        "weight": 108
      },
      {
        "itemId": "wireless-drill",
        "weight": 108
      },
      {
        "itemId": "collectible-15080050036",
        "weight": 91.073
      },
      {
        "itemId": "collectible-15080050043",
        "weight": 73.649
      },
      {
        "itemId": "collectible-15080050134",
        "weight": 62.364
      },
      {
        "itemId": "collectible-15070050002",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050045",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050064",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050172",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050181",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050206",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050207",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050208",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050209",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050216",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000074",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000148",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000149",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000150",
        "weight": 60
      },
      {
        "itemId": "consumable-14020000005",
        "weight": 60
      },
      {
        "itemId": "consumable-14030000003",
        "weight": 60
      },
      {
        "itemId": "consumable-14050000003",
        "weight": 60
      },
      {
        "itemId": "consumable-14060000006",
        "weight": 60
      },
      {
        "itemId": "consumable-14070000003",
        "weight": 60
      },
      {
        "itemId": "consumable-14070000005",
        "weight": 60
      },
      {
        "itemId": "consumable-14070000016",
        "weight": 60
      },
      {
        "itemId": "consumable-14070000017",
        "weight": 60
      },
      {
        "itemId": "consumable-14060000005",
        "weight": 59.61
      },
      {
        "itemId": "collectible-15200000141",
        "weight": 54
      },
      {
        "itemId": "collectible-15200000142",
        "weight": 54
      },
      {
        "itemId": "collectible-15200000165",
        "weight": 54
      },
      {
        "itemId": "collectible-15200000184",
        "weight": 54
      },
      {
        "itemId": "collectible-15080050163",
        "weight": 52.303
      },
      {
        "itemId": "collectible-15080050162",
        "weight": 51.253
      },
      {
        "itemId": "consumable-14070000007",
        "weight": 51.076
      },
      {
        "itemId": "collectible-15080050002",
        "weight": 49.123
      },
      {
        "itemId": "collectible-15060080014",
        "weight": 43.41
      },
      {
        "itemId": "collectible-15080050025",
        "weight": 43.2
      },
      {
        "itemId": "collectible-15200000048",
        "weight": 43.2
      },
      {
        "itemId": "collectible-15200000068",
        "weight": 43.2
      },
      {
        "itemId": "collectible-15200000070",
        "weight": 43.2
      },
      {
        "itemId": "collectible-15200000075",
        "weight": 43.2
      },
      {
        "itemId": "collectible-15200000114",
        "weight": 43.2
      },
      {
        "itemId": "collectible-15200000130",
        "weight": 43.2
      },
      {
        "itemId": "collectible-15200000151",
        "weight": 43.2
      },
      {
        "itemId": "collectible-15200000154",
        "weight": 43.2
      },
      {
        "itemId": "collectible-15200000155",
        "weight": 43.2
      },
      {
        "itemId": "collectible-15200000157",
        "weight": 43.2
      },
      {
        "itemId": "collectible-15200000167",
        "weight": 43.2
      },
      {
        "itemId": "collectible-15080050143",
        "weight": 42.94
      },
      {
        "itemId": "collectible-15080050009",
        "weight": 41.853
      },
      {
        "itemId": "collectible-15080050137",
        "weight": 41.297
      },
      {
        "itemId": "collectible-15080050165",
        "weight": 39.012
      },
      {
        "itemId": "collectible-15080050015",
        "weight": 38.675
      },
      {
        "itemId": "collectible-15200000032",
        "weight": 38.45
      },
      {
        "itemId": "collectible-15080050132",
        "weight": 37.545
      },
      {
        "itemId": "collectible-15080050180",
        "weight": 37.22
      },
      {
        "itemId": "collectible-15020010024",
        "weight": 36
      },
      {
        "itemId": "collectible-15020050003",
        "weight": 36
      },
      {
        "itemId": "collectible-15020050004",
        "weight": 36
      },
      {
        "itemId": "collectible-15020050006",
        "weight": 36
      },
      {
        "itemId": "collectible-15080050119",
        "weight": 36
      },
      {
        "itemId": "collectible-15080050130",
        "weight": 36
      },
      {
        "itemId": "collectible-15200000044",
        "weight": 36
      },
      {
        "itemId": "special-steel",
        "weight": 36
      },
      {
        "itemId": "wrench",
        "weight": 36
      },
      {
        "itemId": "collectible-15080050095",
        "weight": 34.157
      },
      {
        "itemId": "collectible-15080050168",
        "weight": 33.78
      },
      {
        "itemId": "collectible-15030040013",
        "weight": 32.447
      },
      {
        "itemId": "cpu",
        "weight": 31.295
      },
      {
        "itemId": "collectible-15080050004",
        "weight": 29.776
      },
      {
        "itemId": "collectible-15200000118",
        "weight": 28.797
      },
      {
        "itemId": "collectible-15080050094",
        "weight": 28.519
      },
      {
        "itemId": "collectible-15080050138",
        "weight": 28.513
      },
      {
        "itemId": "collectible-15080050093",
        "weight": 28.414
      },
      {
        "itemId": "collectible-15080050164",
        "weight": 27.787
      },
      {
        "itemId": "collectible-15030050006",
        "weight": 27.623
      },
      {
        "itemId": "collectible-15080050090",
        "weight": 26.996
      },
      {
        "itemId": "collectible-15080050135",
        "weight": 26.739
      },
      {
        "itemId": "collectible-15080050126",
        "weight": 23.975
      },
      {
        "itemId": "collectible-15030050003",
        "weight": 23.346
      },
      {
        "itemId": "ballistic-computer",
        "weight": 22.061
      },
      {
        "itemId": "collectible-15080050092",
        "weight": 21.398
      },
      {
        "itemId": "collectible-15080050035",
        "weight": 21.049
      },
      {
        "itemId": "collectible-15080050071",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15080050063",
        "weight": 18
      },
      {
        "itemId": "collectible-15080050148",
        "weight": 18
      },
      {
        "itemId": "collectible-15080050149",
        "weight": 18
      },
      {
        "itemId": "collectible-15080050198",
        "weight": 18
      },
      {
        "itemId": "collectible-15090010040",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000129",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000145",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000146",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000147",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000162",
        "weight": 18
      },
      {
        "itemId": "consumable-14070000018",
        "weight": 18
      },
      {
        "itemId": "consumable-14070000019",
        "weight": 18
      },
      {
        "itemId": "collectible-15080050140",
        "weight": 17.72
      },
      {
        "itemId": "collectible-15080050133",
        "weight": 16.85
      },
      {
        "itemId": "collectible-15080050034",
        "weight": 15.435
      },
      {
        "itemId": "collectible-15030040001",
        "weight": 15.228
      },
      {
        "itemId": "collectible-15080050082",
        "weight": 15.12
      },
      {
        "itemId": "collectible-15080050083",
        "weight": 15.12
      },
      {
        "itemId": "collectible-15070040001",
        "weight": 14.424
      },
      {
        "itemId": "collectible-15080050188",
        "weight": 13.582
      },
      {
        "itemId": "collectible-15080050069",
        "weight": 13.5
      },
      {
        "itemId": "collectible-15080050173",
        "weight": 13.5
      },
      {
        "itemId": "collectible-15200000143",
        "weight": 13.5
      },
      {
        "itemId": "collectible-15200000166",
        "weight": 13.5
      },
      {
        "itemId": "collectible-15200000185",
        "weight": 13.5
      },
      {
        "itemId": "collectible-15080050150",
        "weight": 12.818
      },
      {
        "itemId": "collectible-15080050033",
        "weight": 12.6
      },
      {
        "itemId": "collectible-15080050088",
        "weight": 12.6
      },
      {
        "itemId": "collectible-15080050189",
        "weight": 12.6
      },
      {
        "itemId": "collectible-15080050013",
        "weight": 12.213
      },
      {
        "itemId": "collectible-15080050197",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000034",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000049",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000058",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000059",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000069",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000071",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000072",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000115",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000117",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000123",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000124",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000125",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000127",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000131",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000137",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000152",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000153",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000156",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000158",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000168",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15080050191",
        "weight": 10.086
      },
      {
        "itemId": "collectible-15080050174",
        "weight": 9.166
      },
      {
        "itemId": "collectible-15030050013",
        "weight": 9
      },
      {
        "itemId": "collectible-15080050204",
        "weight": 9
      },
      {
        "itemId": "collectible-15080050205",
        "weight": 9
      },
      {
        "itemId": "consumable-14060000001",
        "weight": 8.056
      },
      {
        "itemId": "collectible-15080050179",
        "weight": 7.35
      },
      {
        "itemId": "collectible-15080050171",
        "weight": 6.685
      },
      {
        "itemId": "collectible-15200000031",
        "weight": 6.516
      },
      {
        "itemId": "collectible-15080050062",
        "weight": 6.3
      },
      {
        "itemId": "consumable-14020000006",
        "weight": 6.3
      },
      {
        "itemId": "consumable-14060000002",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15060080015",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15080050066",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15080050067",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15080050131",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15030050019",
        "weight": 4.539
      },
      {
        "itemId": "collectible-15200000144",
        "weight": 4.5
      },
      {
        "itemId": "africa-heart",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15010050001",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15040010023",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15040050002",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080040001",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050003",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050014",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050040",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050041",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050120",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050121",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050122",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050123",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050142",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050166",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050184",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050185",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050187",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15200000060",
        "weight": 3.78
      },
      {
        "itemId": "gold-bar",
        "weight": 3.78
      },
      {
        "itemId": "watch",
        "weight": 3.78
      },
      {
        "itemId": "camera",
        "weight": 3.15
      },
      {
        "itemId": "collectible-15030050007",
        "weight": 3.15
      },
      {
        "itemId": "collectible-15030050008",
        "weight": 3.15
      },
      {
        "itemId": "collectible-15030050012",
        "weight": 3.15
      },
      {
        "itemId": "collectible-15030050014",
        "weight": 3.15
      },
      {
        "itemId": "collectible-15030050018",
        "weight": 3.15
      },
      {
        "itemId": "collectible-15080050030",
        "weight": 3.15
      },
      {
        "itemId": "collectible-15080050032",
        "weight": 3.15
      },
      {
        "itemId": "collectible-15080050167",
        "weight": 3.15
      },
      {
        "itemId": "collectible-15080050175",
        "weight": 3.15
      },
      {
        "itemId": "collectible-15080050186",
        "weight": 3.15
      },
      {
        "itemId": "drone",
        "weight": 3.15
      },
      {
        "itemId": "military-gpu",
        "weight": 3.15
      },
      {
        "itemId": "portable-radar",
        "weight": 3.15
      },
      {
        "itemId": "radio",
        "weight": 3.15
      },
      {
        "itemId": "collectible-15080050144",
        "weight": 2.7
      },
      {
        "itemId": "collectible-15080050220",
        "weight": 2.7
      },
      {
        "itemId": "collectible-15070040003",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15070050001",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050061",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050151",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050161",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050170",
        "weight": 1.575
      },
      {
        "itemId": "consumable-14060000003",
        "weight": 1.575
      },
      {
        "itemId": "consumable-14060000004",
        "weight": 1.575
      },
      {
        "itemId": "secret-server",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15020010031",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15030050017",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15080050178",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15080050211",
        "weight": 0.945
      }
    ]
  },
  "travel-case-large": {
    "name": "大旅行箱",
    "size": [
      8,
      7
    ],
    "min": 3,
    "max": 5,
    "pools": [
      {
        "itemId": "collectible-15010010008",
        "weight": 2080
      },
      {
        "itemId": "collectible-15040010007",
        "weight": 2080
      },
      {
        "itemId": "collectible-15040010008",
        "weight": 2080
      },
      {
        "itemId": "collectible-15040010009",
        "weight": 2080
      },
      {
        "itemId": "collectible-15060080002",
        "weight": 2080
      },
      {
        "itemId": "collectible-15060080003",
        "weight": 2080
      },
      {
        "itemId": "collectible-15060080007",
        "weight": 2080
      },
      {
        "itemId": "collectible-15080050046",
        "weight": 2080
      },
      {
        "itemId": "collectible-15080050047",
        "weight": 2080
      },
      {
        "itemId": "collectible-15080050048",
        "weight": 2080
      },
      {
        "itemId": "collectible-15080050049",
        "weight": 2080
      },
      {
        "itemId": "collectible-15080050050",
        "weight": 2080
      },
      {
        "itemId": "collectible-15080050051",
        "weight": 2080
      },
      {
        "itemId": "collectible-15080050052",
        "weight": 2080
      },
      {
        "itemId": "collectible-15080050053",
        "weight": 2080
      },
      {
        "itemId": "collectible-15080050054",
        "weight": 2080
      },
      {
        "itemId": "collectible-15080050055",
        "weight": 2080
      },
      {
        "itemId": "collectible-15080050059",
        "weight": 2080
      },
      {
        "itemId": "collectible-15080050060",
        "weight": 2080
      },
      {
        "itemId": "collectible-15080050081",
        "weight": 2080
      },
      {
        "itemId": "collectible-15030010009",
        "weight": 1760
      },
      {
        "itemId": "collectible-15010010015",
        "weight": 1092
      },
      {
        "itemId": "collectible-15040010003",
        "weight": 1092
      },
      {
        "itemId": "collectible-15060080001",
        "weight": 1092
      },
      {
        "itemId": "collectible-15060080004",
        "weight": 1092
      },
      {
        "itemId": "collectible-15060080006",
        "weight": 1092
      },
      {
        "itemId": "collectible-15060080009",
        "weight": 1092
      },
      {
        "itemId": "collectible-15080010003",
        "weight": 1092
      },
      {
        "itemId": "collectible-15080010004",
        "weight": 1092
      },
      {
        "itemId": "collectible-15080040004",
        "weight": 1092
      },
      {
        "itemId": "collectible-15080040005",
        "weight": 1092
      },
      {
        "itemId": "collectible-15080050007",
        "weight": 1092
      },
      {
        "itemId": "collectible-15080050017",
        "weight": 1092
      },
      {
        "itemId": "collectible-15080050019",
        "weight": 1092
      },
      {
        "itemId": "collectible-15080050020",
        "weight": 1092
      },
      {
        "itemId": "collectible-15080050022",
        "weight": 1092
      },
      {
        "itemId": "collectible-15080050077",
        "weight": 1092
      },
      {
        "itemId": "collectible-15080050078",
        "weight": 1092
      },
      {
        "itemId": "collectible-15080050079",
        "weight": 1092
      },
      {
        "itemId": "collectible-15080050080",
        "weight": 1092
      },
      {
        "itemId": "collectible-15200000134",
        "weight": 1092
      },
      {
        "itemId": "collectible-15200000138",
        "weight": 1092
      },
      {
        "itemId": "lighter",
        "weight": 1092
      },
      {
        "itemId": "collectible-15020050007",
        "weight": 924
      },
      {
        "itemId": "collectible-15030010002",
        "weight": 924
      },
      {
        "itemId": "collectible-15030010007",
        "weight": 924
      },
      {
        "itemId": "collectible-15030010011",
        "weight": 924
      },
      {
        "itemId": "collectible-15030010013",
        "weight": 924
      },
      {
        "itemId": "collectible-15030010014",
        "weight": 924
      },
      {
        "itemId": "collectible-15030010018",
        "weight": 924
      },
      {
        "itemId": "collectible-15030010019",
        "weight": 924
      },
      {
        "itemId": "collectible-15030040011",
        "weight": 924
      },
      {
        "itemId": "bandage",
        "weight": 800
      },
      {
        "itemId": "consumable-14020000001",
        "weight": 800
      },
      {
        "itemId": "consumable-14030000001",
        "weight": 800
      },
      {
        "itemId": "consumable-14040000001",
        "weight": 800
      },
      {
        "itemId": "medkit",
        "weight": 800
      },
      {
        "itemId": "painkiller-loot",
        "weight": 800
      },
      {
        "itemId": "collectible-15010010004",
        "weight": 480
      },
      {
        "itemId": "collectible-15060010008",
        "weight": 480
      },
      {
        "itemId": "collectible-15060010009",
        "weight": 480
      },
      {
        "itemId": "collectible-15080050056",
        "weight": 480
      },
      {
        "itemId": "collectible-15090010024",
        "weight": 480
      },
      {
        "itemId": "collectible-15090010026",
        "weight": 480
      },
      {
        "itemId": "collectible-15090010077",
        "weight": 480
      },
      {
        "itemId": "collectible-15090910016",
        "weight": 480
      },
      {
        "itemId": "collectible-15090910019",
        "weight": 480
      },
      {
        "itemId": "collectible-15060080010",
        "weight": 468
      },
      {
        "itemId": "collectible-15060080011",
        "weight": 468
      },
      {
        "itemId": "collectible-15060080013",
        "weight": 468
      },
      {
        "itemId": "collectible-15060080016",
        "weight": 468
      },
      {
        "itemId": "collectible-15080050008",
        "weight": 468
      },
      {
        "itemId": "collectible-15080050011",
        "weight": 468
      },
      {
        "itemId": "collectible-15080050012",
        "weight": 468
      },
      {
        "itemId": "collectible-15080050021",
        "weight": 468
      },
      {
        "itemId": "collectible-15080050023",
        "weight": 468
      },
      {
        "itemId": "collectible-15080050026",
        "weight": 468
      },
      {
        "itemId": "collectible-15080050027",
        "weight": 468
      },
      {
        "itemId": "collectible-15080050072",
        "weight": 468
      },
      {
        "itemId": "collectible-15080050073",
        "weight": 468
      },
      {
        "itemId": "collectible-15080050074",
        "weight": 468
      },
      {
        "itemId": "collectible-15080050075",
        "weight": 468
      },
      {
        "itemId": "collectible-15080050076",
        "weight": 468
      },
      {
        "itemId": "collectible-15080050193",
        "weight": 468
      },
      {
        "itemId": "collectible-15200000073",
        "weight": 468
      },
      {
        "itemId": "collectible-15200000139",
        "weight": 468
      },
      {
        "itemId": "collectible-15200000163",
        "weight": 468
      },
      {
        "itemId": "consumable-14020000003",
        "weight": 420
      },
      {
        "itemId": "consumable-14030000002",
        "weight": 420
      },
      {
        "itemId": "consumable-14050000002",
        "weight": 420
      },
      {
        "itemId": "collectible-15020050008",
        "weight": 396
      },
      {
        "itemId": "collectible-15030010001",
        "weight": 396
      },
      {
        "itemId": "collectible-15030010008",
        "weight": 396
      },
      {
        "itemId": "collectible-15030040002",
        "weight": 396
      },
      {
        "itemId": "collectible-15030050016",
        "weight": 396
      },
      {
        "itemId": "collectible-15070010001",
        "weight": 396
      },
      {
        "itemId": "collectible-15070010002",
        "weight": 396
      },
      {
        "itemId": "collectible-15080050039",
        "weight": 396
      },
      {
        "itemId": "collectible-15080050194",
        "weight": 396
      },
      {
        "itemId": "collectible-15080050217",
        "weight": 396
      },
      {
        "itemId": "collectible-15030040010",
        "weight": 343.89
      },
      {
        "itemId": "collectible-15020010001",
        "weight": 320
      },
      {
        "itemId": "collectible-15020010002",
        "weight": 320
      },
      {
        "itemId": "collectible-15020010003",
        "weight": 320
      },
      {
        "itemId": "collectible-15020010004",
        "weight": 320
      },
      {
        "itemId": "collectible-15020010006",
        "weight": 320
      },
      {
        "itemId": "collectible-15020010010",
        "weight": 320
      },
      {
        "itemId": "collectible-15020010014",
        "weight": 320
      },
      {
        "itemId": "collectible-15040010016",
        "weight": 320
      },
      {
        "itemId": "collectible-15080050085",
        "weight": 320
      },
      {
        "itemId": "collectible-15080050086",
        "weight": 320
      },
      {
        "itemId": "collectible-15060010001",
        "weight": 252
      },
      {
        "itemId": "collectible-15060010002",
        "weight": 252
      },
      {
        "itemId": "collectible-15060010003",
        "weight": 252
      },
      {
        "itemId": "collectible-15060010010",
        "weight": 252
      },
      {
        "itemId": "collectible-15060010012",
        "weight": 252
      },
      {
        "itemId": "collectible-15070010005",
        "weight": 252
      },
      {
        "itemId": "collectible-15070010006",
        "weight": 252
      },
      {
        "itemId": "collectible-15070010007",
        "weight": 252
      },
      {
        "itemId": "collectible-15070010008",
        "weight": 252
      },
      {
        "itemId": "collectible-15070010009",
        "weight": 252
      },
      {
        "itemId": "collectible-15090910017",
        "weight": 252
      },
      {
        "itemId": "collectible-15090910022",
        "weight": 252
      },
      {
        "itemId": "collectible-15090910023",
        "weight": 252
      },
      {
        "itemId": "consumable-14060000007",
        "weight": 180
      },
      {
        "itemId": "consumable-14060000008",
        "weight": 180
      },
      {
        "itemId": "consumable-14070000001",
        "weight": 180
      },
      {
        "itemId": "consumable-14070000004",
        "weight": 180
      },
      {
        "itemId": "consumable-14070000006",
        "weight": 180
      },
      {
        "itemId": "consumable-14070000008",
        "weight": 180
      },
      {
        "itemId": "consumable-14070000009",
        "weight": 180
      },
      {
        "itemId": "field-med",
        "weight": 180
      },
      {
        "itemId": "collectible-15020010007",
        "weight": 168
      },
      {
        "itemId": "collectible-15020010008",
        "weight": 168
      },
      {
        "itemId": "collectible-15020010017",
        "weight": 168
      },
      {
        "itemId": "collectible-15020010019",
        "weight": 168
      },
      {
        "itemId": "collectible-15020010020",
        "weight": 168
      },
      {
        "itemId": "collectible-15020010021",
        "weight": 168
      },
      {
        "itemId": "collectible-15020010026",
        "weight": 168
      },
      {
        "itemId": "collectible-15020010027",
        "weight": 168
      },
      {
        "itemId": "collectible-15020010030",
        "weight": 168
      },
      {
        "itemId": "collectible-15020010032",
        "weight": 168
      },
      {
        "itemId": "collectible-15020040003",
        "weight": 168
      },
      {
        "itemId": "collectible-15020040004",
        "weight": 168
      },
      {
        "itemId": "collectible-15040010012",
        "weight": 168
      },
      {
        "itemId": "collectible-15080050084",
        "weight": 168
      },
      {
        "itemId": "collectible-15080050087",
        "weight": 168
      },
      {
        "itemId": "screwdriver",
        "weight": 168
      },
      {
        "itemId": "wire",
        "weight": 168
      },
      {
        "itemId": "collectible-15040010014",
        "weight": 156
      },
      {
        "itemId": "collectible-15060080005",
        "weight": 156
      },
      {
        "itemId": "collectible-15060080008",
        "weight": 156
      },
      {
        "itemId": "collectible-15080040002",
        "weight": 156
      },
      {
        "itemId": "collectible-15080040003",
        "weight": 156
      },
      {
        "itemId": "collectible-15080050001",
        "weight": 156
      },
      {
        "itemId": "collectible-15080050016",
        "weight": 156
      },
      {
        "itemId": "collectible-15080050018",
        "weight": 156
      },
      {
        "itemId": "collectible-15080050024",
        "weight": 156
      },
      {
        "itemId": "collectible-15080050068",
        "weight": 156
      },
      {
        "itemId": "collectible-15080050070",
        "weight": 156
      },
      {
        "itemId": "collectible-15080050124",
        "weight": 156
      },
      {
        "itemId": "collectible-15080050136",
        "weight": 156
      },
      {
        "itemId": "collectible-15080050139",
        "weight": 156
      },
      {
        "itemId": "collectible-15080050182",
        "weight": 156
      },
      {
        "itemId": "collectible-15080050183",
        "weight": 156
      },
      {
        "itemId": "collectible-15080050215",
        "weight": 156
      },
      {
        "itemId": "collectible-15080050218",
        "weight": 156
      },
      {
        "itemId": "collectible-15080050219",
        "weight": 156
      },
      {
        "itemId": "collectible-15200000126",
        "weight": 156
      },
      {
        "itemId": "collectible-15200000135",
        "weight": 156
      },
      {
        "itemId": "collectible-15200000140",
        "weight": 156
      },
      {
        "itemId": "collectible-15200000164",
        "weight": 156
      },
      {
        "itemId": "collectible-15200000183",
        "weight": 156
      },
      {
        "itemId": "collectible-15030040012",
        "weight": 132
      },
      {
        "itemId": "collectible-15030040014",
        "weight": 132
      },
      {
        "itemId": "collectible-15030050005",
        "weight": 132
      },
      {
        "itemId": "collectible-15030050011",
        "weight": 132
      },
      {
        "itemId": "collectible-15040010015",
        "weight": 132
      },
      {
        "itemId": "collectible-15040050003",
        "weight": 132
      },
      {
        "itemId": "collectible-15080050037",
        "weight": 132
      },
      {
        "itemId": "collectible-15080050038",
        "weight": 132
      },
      {
        "itemId": "collectible-15080050091",
        "weight": 132
      },
      {
        "itemId": "motherboard",
        "weight": 132
      },
      {
        "itemId": "ram",
        "weight": 132
      },
      {
        "itemId": "ssd",
        "weight": 132
      },
      {
        "itemId": "collectible-15060010004",
        "weight": 108
      },
      {
        "itemId": "collectible-15060010006",
        "weight": 108
      },
      {
        "itemId": "collectible-15060010007",
        "weight": 108
      },
      {
        "itemId": "collectible-15070040002",
        "weight": 108
      },
      {
        "itemId": "collectible-15070050003",
        "weight": 108
      },
      {
        "itemId": "collectible-15080050065",
        "weight": 108
      },
      {
        "itemId": "collectible-15080050096",
        "weight": 108
      },
      {
        "itemId": "collectible-15080050116",
        "weight": 108
      },
      {
        "itemId": "collectible-15080050213",
        "weight": 108
      },
      {
        "itemId": "collectible-15090010041",
        "weight": 108
      },
      {
        "itemId": "collectible-15080050036",
        "weight": 100.18
      },
      {
        "itemId": "collectible-15080050043",
        "weight": 79.786
      },
      {
        "itemId": "cement-bag",
        "weight": 72
      },
      {
        "itemId": "collectible-15020010016",
        "weight": 72
      },
      {
        "itemId": "collectible-15020010018",
        "weight": 72
      },
      {
        "itemId": "collectible-15020010023",
        "weight": 72
      },
      {
        "itemId": "collectible-15020040002",
        "weight": 72
      },
      {
        "itemId": "collectible-15040010017",
        "weight": 72
      },
      {
        "itemId": "collectible-15040010021",
        "weight": 72
      },
      {
        "itemId": "collectible-15040010022",
        "weight": 72
      },
      {
        "itemId": "fabric",
        "weight": 72
      },
      {
        "itemId": "toolbox-item",
        "weight": 72
      },
      {
        "itemId": "wireless-drill",
        "weight": 72
      },
      {
        "itemId": "collectible-15080050134",
        "weight": 67.561
      },
      {
        "itemId": "consumable-14020000005",
        "weight": 60
      },
      {
        "itemId": "consumable-14030000003",
        "weight": 60
      },
      {
        "itemId": "consumable-14050000003",
        "weight": 60
      },
      {
        "itemId": "consumable-14060000006",
        "weight": 60
      },
      {
        "itemId": "consumable-14070000003",
        "weight": 60
      },
      {
        "itemId": "consumable-14070000005",
        "weight": 60
      },
      {
        "itemId": "consumable-14070000016",
        "weight": 60
      },
      {
        "itemId": "consumable-14070000017",
        "weight": 60
      },
      {
        "itemId": "consumable-14060000005",
        "weight": 59.61
      },
      {
        "itemId": "consumable-14070000007",
        "weight": 51.076
      },
      {
        "itemId": "collectible-15080050025",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15200000048",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15200000068",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15200000070",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15200000075",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15200000114",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15200000130",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15200000141",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15200000142",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15200000151",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15200000154",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15200000155",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15200000157",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15200000165",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15200000167",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15200000184",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15080050143",
        "weight": 46.519
      },
      {
        "itemId": "collectible-15080050009",
        "weight": 45.341
      },
      {
        "itemId": "collectible-15080050163",
        "weight": 45.329
      },
      {
        "itemId": "collectible-15080050137",
        "weight": 44.739
      },
      {
        "itemId": "collectible-15080050162",
        "weight": 44.419
      },
      {
        "itemId": "collectible-15080050002",
        "weight": 42.574
      },
      {
        "itemId": "collectible-15080050165",
        "weight": 42.262
      },
      {
        "itemId": "collectible-15080050015",
        "weight": 41.898
      },
      {
        "itemId": "collectible-15200000032",
        "weight": 41.654
      },
      {
        "itemId": "collectible-15060080014",
        "weight": 37.622
      },
      {
        "itemId": "collectible-15080050095",
        "weight": 37.572
      },
      {
        "itemId": "collectible-15080050168",
        "weight": 37.158
      },
      {
        "itemId": "collectible-15060040002",
        "weight": 36
      },
      {
        "itemId": "collectible-15070050002",
        "weight": 36
      },
      {
        "itemId": "collectible-15080050045",
        "weight": 36
      },
      {
        "itemId": "collectible-15080050057",
        "weight": 36
      },
      {
        "itemId": "collectible-15080050064",
        "weight": 36
      },
      {
        "itemId": "collectible-15080050114",
        "weight": 36
      },
      {
        "itemId": "collectible-15080050172",
        "weight": 36
      },
      {
        "itemId": "collectible-15080050181",
        "weight": 36
      },
      {
        "itemId": "collectible-15080050206",
        "weight": 36
      },
      {
        "itemId": "collectible-15080050207",
        "weight": 36
      },
      {
        "itemId": "collectible-15080050208",
        "weight": 36
      },
      {
        "itemId": "collectible-15080050209",
        "weight": 36
      },
      {
        "itemId": "collectible-15080050214",
        "weight": 36
      },
      {
        "itemId": "collectible-15080050216",
        "weight": 36
      },
      {
        "itemId": "collectible-15200000061",
        "weight": 36
      },
      {
        "itemId": "collectible-15200000074",
        "weight": 36
      },
      {
        "itemId": "collectible-15200000148",
        "weight": 36
      },
      {
        "itemId": "collectible-15200000149",
        "weight": 36
      },
      {
        "itemId": "collectible-15200000150",
        "weight": 36
      },
      {
        "itemId": "collectible-15030040013",
        "weight": 35.692
      },
      {
        "itemId": "collectible-15080050127",
        "weight": 35.284
      },
      {
        "itemId": "cpu",
        "weight": 34.425
      },
      {
        "itemId": "collectible-15080050117",
        "weight": 33.047
      },
      {
        "itemId": "collectible-15080050132",
        "weight": 32.539
      },
      {
        "itemId": "collectible-15080050004",
        "weight": 32.258
      },
      {
        "itemId": "collectible-15080050180",
        "weight": 32.257
      },
      {
        "itemId": "collectible-15200000118",
        "weight": 31.197
      },
      {
        "itemId": "collectible-15080050094",
        "weight": 30.896
      },
      {
        "itemId": "collectible-15080050138",
        "weight": 30.889
      },
      {
        "itemId": "collectible-15080050093",
        "weight": 30.782
      },
      {
        "itemId": "collectible-15030050006",
        "weight": 30.385
      },
      {
        "itemId": "collectible-15080050164",
        "weight": 30.102
      },
      {
        "itemId": "collectible-15080050090",
        "weight": 29.695
      },
      {
        "itemId": "collectible-15080050135",
        "weight": 28.968
      },
      {
        "itemId": "collectible-15080050126",
        "weight": 26.373
      },
      {
        "itemId": "collectible-15030050003",
        "weight": 25.68
      },
      {
        "itemId": "ballistic-computer",
        "weight": 24.267
      },
      {
        "itemId": "collectible-15020010024",
        "weight": 24
      },
      {
        "itemId": "collectible-15020050003",
        "weight": 24
      },
      {
        "itemId": "collectible-15020050004",
        "weight": 24
      },
      {
        "itemId": "collectible-15020050006",
        "weight": 24
      },
      {
        "itemId": "collectible-15080050119",
        "weight": 24
      },
      {
        "itemId": "collectible-15080050130",
        "weight": 24
      },
      {
        "itemId": "collectible-15200000044",
        "weight": 24
      },
      {
        "itemId": "special-steel",
        "weight": 24
      },
      {
        "itemId": "wrench",
        "weight": 24
      },
      {
        "itemId": "collectible-15080050092",
        "weight": 23.181
      },
      {
        "itemId": "collectible-15080050035",
        "weight": 23.154
      },
      {
        "itemId": "collectible-15080050133",
        "weight": 18.254
      },
      {
        "itemId": "consumable-14070000018",
        "weight": 18
      },
      {
        "itemId": "consumable-14070000019",
        "weight": 18
      },
      {
        "itemId": "collectible-15080050034",
        "weight": 16.978
      },
      {
        "itemId": "collectible-15030040001",
        "weight": 16.751
      },
      {
        "itemId": "collectible-15080050071",
        "weight": 16.38
      },
      {
        "itemId": "collectible-15080050082",
        "weight": 16.38
      },
      {
        "itemId": "collectible-15080050083",
        "weight": 16.38
      },
      {
        "itemId": "collectible-15080050033",
        "weight": 13.86
      },
      {
        "itemId": "collectible-15080050088",
        "weight": 13.86
      },
      {
        "itemId": "collectible-15080050189",
        "weight": 13.86
      },
      {
        "itemId": "collectible-15080050069",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15080050173",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15080050197",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000034",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000049",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000058",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000059",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000069",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000071",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000072",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000115",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000117",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000123",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000124",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000125",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000127",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000131",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000137",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000143",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000152",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000153",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000156",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000158",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000166",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000168",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000185",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15080050063",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15080050148",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15080050149",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15080050198",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15090010040",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000129",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000145",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000146",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000147",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15200000162",
        "weight": 10.8
      },
      {
        "itemId": "collectible-15080050140",
        "weight": 10.632
      },
      {
        "itemId": "collectible-15080050115",
        "weight": 10.437
      },
      {
        "itemId": "collectible-15030050013",
        "weight": 9.9
      },
      {
        "itemId": "collectible-15080050204",
        "weight": 9.9
      },
      {
        "itemId": "collectible-15080050205",
        "weight": 9.9
      },
      {
        "itemId": "collectible-15060040003",
        "weight": 9.678
      },
      {
        "itemId": "collectible-15070040001",
        "weight": 8.654
      },
      {
        "itemId": "collectible-15080050188",
        "weight": 8.149
      },
      {
        "itemId": "consumable-14060000001",
        "weight": 8.056
      },
      {
        "itemId": "collectible-15080050129",
        "weight": 7.911
      },
      {
        "itemId": "collectible-15040010019",
        "weight": 7.891
      },
      {
        "itemId": "collectible-15080050150",
        "weight": 7.691
      },
      {
        "itemId": "collectible-15060040001",
        "weight": 7.512
      },
      {
        "itemId": "collectible-15080050013",
        "weight": 7.328
      },
      {
        "itemId": "collectible-15080050195",
        "weight": 6.645
      },
      {
        "itemId": "consumable-14020000006",
        "weight": 6.3
      },
      {
        "itemId": "consumable-14060000002",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15080050174",
        "weight": 6.111
      },
      {
        "itemId": "collectible-15080050191",
        "weight": 6.052
      },
      {
        "itemId": "collectible-15080050212",
        "weight": 5.242
      },
      {
        "itemId": "collectible-15080050179",
        "weight": 4.9
      },
      {
        "itemId": "africa-heart",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15010050001",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15040050002",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15060080015",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080040001",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050003",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050014",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050040",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050041",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050066",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050067",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050120",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050121",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050122",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050123",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050131",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050142",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050166",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050184",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050185",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050187",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15200000060",
        "weight": 4.095
      },
      {
        "itemId": "gold-bar",
        "weight": 4.095
      },
      {
        "itemId": "watch",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050171",
        "weight": 4.011
      },
      {
        "itemId": "collectible-15200000031",
        "weight": 3.91
      },
      {
        "itemId": "collectible-15080050062",
        "weight": 3.78
      },
      {
        "itemId": "collectible-15080050192",
        "weight": 3.78
      },
      {
        "itemId": "camera",
        "weight": 3.465
      },
      {
        "itemId": "collectible-15030050007",
        "weight": 3.465
      },
      {
        "itemId": "collectible-15030050008",
        "weight": 3.465
      },
      {
        "itemId": "collectible-15030050012",
        "weight": 3.465
      },
      {
        "itemId": "collectible-15030050014",
        "weight": 3.465
      },
      {
        "itemId": "collectible-15030050018",
        "weight": 3.465
      },
      {
        "itemId": "collectible-15080050030",
        "weight": 3.465
      },
      {
        "itemId": "collectible-15080050032",
        "weight": 3.465
      },
      {
        "itemId": "collectible-15080050167",
        "weight": 3.465
      },
      {
        "itemId": "collectible-15080050175",
        "weight": 3.465
      },
      {
        "itemId": "collectible-15080050186",
        "weight": 3.465
      },
      {
        "itemId": "drone",
        "weight": 3.465
      },
      {
        "itemId": "military-gpu",
        "weight": 3.465
      },
      {
        "itemId": "portable-radar",
        "weight": 3.465
      },
      {
        "itemId": "radio",
        "weight": 3.465
      },
      {
        "itemId": "collectible-15030050019",
        "weight": 3.026
      },
      {
        "itemId": "collectible-15200000144",
        "weight": 2.7
      },
      {
        "itemId": "collectible-15040010023",
        "weight": 2.52
      },
      {
        "itemId": "collectible-15080050144",
        "weight": 1.8
      },
      {
        "itemId": "collectible-15080050220",
        "weight": 1.8
      },
      {
        "itemId": "consumable-14060000003",
        "weight": 1.575
      },
      {
        "itemId": "consumable-14060000004",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15060040004",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15070040003",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15070050001",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15080050058",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15080050061",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15080050113",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15080050128",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15080050151",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15080050161",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15080050170",
        "weight": 0.945
      },
      {
        "itemId": "resuscitator",
        "weight": 0.945
      },
      {
        "itemId": "secret-server",
        "weight": 0.945
      },
      {
        "itemId": "collectible-15020010031",
        "weight": 0.63
      },
      {
        "itemId": "collectible-15030050017",
        "weight": 0.63
      },
      {
        "itemId": "collectible-15080050178",
        "weight": 0.63
      },
      {
        "itemId": "collectible-15080050211",
        "weight": 0.63
      }
    ]
  },
  "briefcase": {
    "name": "手提箱",
    "size": [
      5,
      4
    ],
    "min": 1,
    "max": 3,
    "pools": [
      {
        "itemId": "collectible-15080050056",
        "weight": 2720
      },
      {
        "itemId": "collectible-15090010024",
        "weight": 2720
      },
      {
        "itemId": "collectible-15090010026",
        "weight": 2720
      },
      {
        "itemId": "collectible-15090910016",
        "weight": 2720
      },
      {
        "itemId": "collectible-15090910019",
        "weight": 2720
      },
      {
        "itemId": "collectible-15030010009",
        "weight": 2400
      },
      {
        "itemId": "collectible-15070010005",
        "weight": 1428
      },
      {
        "itemId": "collectible-15070010006",
        "weight": 1428
      },
      {
        "itemId": "collectible-15070010007",
        "weight": 1428
      },
      {
        "itemId": "collectible-15070010008",
        "weight": 1428
      },
      {
        "itemId": "collectible-15070010009",
        "weight": 1428
      },
      {
        "itemId": "collectible-15090910017",
        "weight": 1428
      },
      {
        "itemId": "collectible-15090910022",
        "weight": 1428
      },
      {
        "itemId": "collectible-15090910023",
        "weight": 1428
      },
      {
        "itemId": "collectible-15020050007",
        "weight": 1260
      },
      {
        "itemId": "collectible-15030010002",
        "weight": 1260
      },
      {
        "itemId": "collectible-15030010007",
        "weight": 1260
      },
      {
        "itemId": "collectible-15030010011",
        "weight": 1260
      },
      {
        "itemId": "collectible-15030010013",
        "weight": 1260
      },
      {
        "itemId": "collectible-15030010014",
        "weight": 1260
      },
      {
        "itemId": "collectible-15030010018",
        "weight": 1260
      },
      {
        "itemId": "collectible-15030010019",
        "weight": 1260
      },
      {
        "itemId": "collectible-15030040011",
        "weight": 1260
      },
      {
        "itemId": "collectible-15040010003",
        "weight": 1092
      },
      {
        "itemId": "collectible-15080010003",
        "weight": 1092
      },
      {
        "itemId": "collectible-15080010004",
        "weight": 1092
      },
      {
        "itemId": "collectible-15080040004",
        "weight": 1092
      },
      {
        "itemId": "collectible-15080040005",
        "weight": 1092
      },
      {
        "itemId": "collectible-15080050007",
        "weight": 1092
      },
      {
        "itemId": "collectible-15080050017",
        "weight": 1092
      },
      {
        "itemId": "collectible-15010010008",
        "weight": 800
      },
      {
        "itemId": "collectible-15040010007",
        "weight": 800
      },
      {
        "itemId": "collectible-15040010008",
        "weight": 800
      },
      {
        "itemId": "collectible-15040010009",
        "weight": 800
      },
      {
        "itemId": "collectible-15060080002",
        "weight": 800
      },
      {
        "itemId": "collectible-15060080003",
        "weight": 800
      },
      {
        "itemId": "collectible-15060080007",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050046",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050047",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050048",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050049",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050050",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050051",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050052",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050053",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050054",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050055",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050059",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050060",
        "weight": 800
      },
      {
        "itemId": "collectible-15080050081",
        "weight": 800
      },
      {
        "itemId": "collectible-15070040002",
        "weight": 612
      },
      {
        "itemId": "collectible-15070050003",
        "weight": 612
      },
      {
        "itemId": "collectible-15080050096",
        "weight": 612
      },
      {
        "itemId": "collectible-15080050213",
        "weight": 612
      },
      {
        "itemId": "collectible-15020050008",
        "weight": 540
      },
      {
        "itemId": "collectible-15030010001",
        "weight": 540
      },
      {
        "itemId": "collectible-15030010008",
        "weight": 540
      },
      {
        "itemId": "collectible-15030040002",
        "weight": 540
      },
      {
        "itemId": "collectible-15030050016",
        "weight": 540
      },
      {
        "itemId": "collectible-15070010001",
        "weight": 540
      },
      {
        "itemId": "collectible-15070010002",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050039",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050194",
        "weight": 540
      },
      {
        "itemId": "collectible-15080050217",
        "weight": 540
      },
      {
        "itemId": "collectible-15030040010",
        "weight": 468.942
      },
      {
        "itemId": "collectible-15080050008",
        "weight": 468
      },
      {
        "itemId": "collectible-15080050011",
        "weight": 468
      },
      {
        "itemId": "collectible-15080050012",
        "weight": 468
      },
      {
        "itemId": "collectible-15080050023",
        "weight": 468
      },
      {
        "itemId": "collectible-15080050193",
        "weight": 468
      },
      {
        "itemId": "collectible-15200000073",
        "weight": 468
      },
      {
        "itemId": "collectible-15010010015",
        "weight": 420
      },
      {
        "itemId": "collectible-15060080001",
        "weight": 420
      },
      {
        "itemId": "collectible-15060080004",
        "weight": 420
      },
      {
        "itemId": "collectible-15060080006",
        "weight": 420
      },
      {
        "itemId": "collectible-15060080009",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050019",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050020",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050022",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050077",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050078",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050079",
        "weight": 420
      },
      {
        "itemId": "collectible-15080050080",
        "weight": 420
      },
      {
        "itemId": "collectible-15200000134",
        "weight": 420
      },
      {
        "itemId": "collectible-15200000138",
        "weight": 420
      },
      {
        "itemId": "lighter",
        "weight": 420
      },
      {
        "itemId": "collectible-15070050002",
        "weight": 204
      },
      {
        "itemId": "collectible-15080050045",
        "weight": 204
      },
      {
        "itemId": "collectible-15080050064",
        "weight": 204
      },
      {
        "itemId": "collectible-15080050172",
        "weight": 204
      },
      {
        "itemId": "collectible-15080050181",
        "weight": 204
      },
      {
        "itemId": "collectible-15080050206",
        "weight": 204
      },
      {
        "itemId": "collectible-15080050207",
        "weight": 204
      },
      {
        "itemId": "collectible-15080050208",
        "weight": 204
      },
      {
        "itemId": "collectible-15080050209",
        "weight": 204
      },
      {
        "itemId": "collectible-15080050216",
        "weight": 204
      },
      {
        "itemId": "collectible-15200000074",
        "weight": 204
      },
      {
        "itemId": "collectible-15200000148",
        "weight": 204
      },
      {
        "itemId": "collectible-15200000149",
        "weight": 204
      },
      {
        "itemId": "collectible-15200000150",
        "weight": 204
      },
      {
        "itemId": "collectible-15030040012",
        "weight": 180
      },
      {
        "itemId": "collectible-15030040014",
        "weight": 180
      },
      {
        "itemId": "collectible-15030050005",
        "weight": 180
      },
      {
        "itemId": "collectible-15030050011",
        "weight": 180
      },
      {
        "itemId": "collectible-15040010015",
        "weight": 180
      },
      {
        "itemId": "collectible-15040050003",
        "weight": 180
      },
      {
        "itemId": "collectible-15060080010",
        "weight": 180
      },
      {
        "itemId": "collectible-15060080011",
        "weight": 180
      },
      {
        "itemId": "collectible-15060080013",
        "weight": 180
      },
      {
        "itemId": "collectible-15060080016",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050021",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050026",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050027",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050037",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050038",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050072",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050073",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050074",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050075",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050076",
        "weight": 180
      },
      {
        "itemId": "collectible-15080050091",
        "weight": 180
      },
      {
        "itemId": "collectible-15200000139",
        "weight": 180
      },
      {
        "itemId": "collectible-15200000163",
        "weight": 180
      },
      {
        "itemId": "motherboard",
        "weight": 180
      },
      {
        "itemId": "ram",
        "weight": 180
      },
      {
        "itemId": "ssd",
        "weight": 180
      },
      {
        "itemId": "collectible-15040010014",
        "weight": 156
      },
      {
        "itemId": "collectible-15080040002",
        "weight": 156
      },
      {
        "itemId": "collectible-15080040003",
        "weight": 156
      },
      {
        "itemId": "collectible-15080050001",
        "weight": 156
      },
      {
        "itemId": "collectible-15080050016",
        "weight": 156
      },
      {
        "itemId": "collectible-15080050018",
        "weight": 156
      },
      {
        "itemId": "collectible-15080050024",
        "weight": 156
      },
      {
        "itemId": "collectible-15080050124",
        "weight": 156
      },
      {
        "itemId": "collectible-15080050139",
        "weight": 156
      },
      {
        "itemId": "collectible-15080050182",
        "weight": 156
      },
      {
        "itemId": "collectible-15200000126",
        "weight": 156
      },
      {
        "itemId": "collectible-15080050036",
        "weight": 136.61
      },
      {
        "itemId": "collectible-15080050043",
        "weight": 79.786
      },
      {
        "itemId": "collectible-15080050134",
        "weight": 67.561
      },
      {
        "itemId": "collectible-15080050063",
        "weight": 61.2
      },
      {
        "itemId": "collectible-15080050148",
        "weight": 61.2
      },
      {
        "itemId": "collectible-15080050149",
        "weight": 61.2
      },
      {
        "itemId": "collectible-15080050198",
        "weight": 61.2
      },
      {
        "itemId": "collectible-15090010040",
        "weight": 61.2
      },
      {
        "itemId": "collectible-15200000129",
        "weight": 61.2
      },
      {
        "itemId": "collectible-15200000145",
        "weight": 61.2
      },
      {
        "itemId": "collectible-15200000146",
        "weight": 61.2
      },
      {
        "itemId": "collectible-15200000147",
        "weight": 61.2
      },
      {
        "itemId": "collectible-15200000162",
        "weight": 61.2
      },
      {
        "itemId": "collectible-15080050140",
        "weight": 60.248
      },
      {
        "itemId": "collectible-15060080005",
        "weight": 60
      },
      {
        "itemId": "collectible-15060080008",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050068",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050070",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050136",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050183",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050215",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050218",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050219",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000135",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000140",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000164",
        "weight": 60
      },
      {
        "itemId": "collectible-15200000183",
        "weight": 60
      },
      {
        "itemId": "collectible-15080050095",
        "weight": 51.235
      },
      {
        "itemId": "collectible-15080050168",
        "weight": 50.671
      },
      {
        "itemId": "collectible-15070040001",
        "weight": 49.042
      },
      {
        "itemId": "collectible-15030040013",
        "weight": 48.671
      },
      {
        "itemId": "cpu",
        "weight": 46.943
      },
      {
        "itemId": "collectible-15080050025",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15200000048",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15200000068",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15200000070",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15200000075",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15200000114",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15200000130",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15200000151",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15200000154",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15200000155",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15200000157",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15200000167",
        "weight": 46.8
      },
      {
        "itemId": "collectible-15080050143",
        "weight": 46.519
      },
      {
        "itemId": "collectible-15080050188",
        "weight": 46.18
      },
      {
        "itemId": "collectible-15080050009",
        "weight": 45.341
      },
      {
        "itemId": "collectible-15080050137",
        "weight": 44.739
      },
      {
        "itemId": "collectible-15080050150",
        "weight": 43.58
      },
      {
        "itemId": "collectible-15080050165",
        "weight": 42.262
      },
      {
        "itemId": "collectible-15080050015",
        "weight": 41.898
      },
      {
        "itemId": "collectible-15200000032",
        "weight": 41.654
      },
      {
        "itemId": "collectible-15080050013",
        "weight": 41.523
      },
      {
        "itemId": "collectible-15030050006",
        "weight": 41.434
      },
      {
        "itemId": "collectible-15080050090",
        "weight": 40.493
      },
      {
        "itemId": "collectible-15080050126",
        "weight": 35.963
      },
      {
        "itemId": "collectible-15030050003",
        "weight": 35.019
      },
      {
        "itemId": "collectible-15080050191",
        "weight": 34.293
      },
      {
        "itemId": "ballistic-computer",
        "weight": 33.091
      },
      {
        "itemId": "collectible-15080050004",
        "weight": 32.258
      },
      {
        "itemId": "collectible-15080050035",
        "weight": 31.573
      },
      {
        "itemId": "collectible-15200000118",
        "weight": 31.197
      },
      {
        "itemId": "collectible-15080050094",
        "weight": 30.896
      },
      {
        "itemId": "collectible-15080050138",
        "weight": 30.889
      },
      {
        "itemId": "collectible-15080050093",
        "weight": 30.782
      },
      {
        "itemId": "collectible-15080050164",
        "weight": 30.102
      },
      {
        "itemId": "collectible-15080050135",
        "weight": 28.968
      },
      {
        "itemId": "collectible-15080050092",
        "weight": 23.181
      },
      {
        "itemId": "collectible-15080050034",
        "weight": 23.152
      },
      {
        "itemId": "collectible-15030040001",
        "weight": 22.842
      },
      {
        "itemId": "collectible-15080050171",
        "weight": 22.729
      },
      {
        "itemId": "collectible-15200000031",
        "weight": 22.154
      },
      {
        "itemId": "collectible-15080050062",
        "weight": 21.42
      },
      {
        "itemId": "collectible-15080050033",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15080050088",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15080050189",
        "weight": 18.9
      },
      {
        "itemId": "collectible-15080050133",
        "weight": 18.254
      },
      {
        "itemId": "collectible-15200000141",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000142",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000165",
        "weight": 18
      },
      {
        "itemId": "collectible-15200000184",
        "weight": 18
      },
      {
        "itemId": "collectible-15080050163",
        "weight": 17.434
      },
      {
        "itemId": "collectible-15080050162",
        "weight": 17.084
      },
      {
        "itemId": "collectible-15080050082",
        "weight": 16.38
      },
      {
        "itemId": "collectible-15080050083",
        "weight": 16.38
      },
      {
        "itemId": "collectible-15080050002",
        "weight": 16.374
      },
      {
        "itemId": "collectible-15200000144",
        "weight": 15.3
      },
      {
        "itemId": "collectible-15060080014",
        "weight": 14.47
      },
      {
        "itemId": "collectible-15030050013",
        "weight": 13.5
      },
      {
        "itemId": "collectible-15080050204",
        "weight": 13.5
      },
      {
        "itemId": "collectible-15080050205",
        "weight": 13.5
      },
      {
        "itemId": "collectible-15080050132",
        "weight": 12.515
      },
      {
        "itemId": "collectible-15080050180",
        "weight": 12.407
      },
      {
        "itemId": "collectible-15080050197",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000034",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000049",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000058",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000059",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000069",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000071",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000072",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000115",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000117",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000123",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000124",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000125",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000127",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000131",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000137",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000152",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000153",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000156",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000158",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15200000168",
        "weight": 11.7
      },
      {
        "itemId": "collectible-15080050071",
        "weight": 6.3
      },
      {
        "itemId": "collectible-15070040003",
        "weight": 5.355
      },
      {
        "itemId": "collectible-15070050001",
        "weight": 5.355
      },
      {
        "itemId": "collectible-15080050061",
        "weight": 5.355
      },
      {
        "itemId": "collectible-15080050151",
        "weight": 5.355
      },
      {
        "itemId": "collectible-15080050161",
        "weight": 5.355
      },
      {
        "itemId": "collectible-15080050170",
        "weight": 5.355
      },
      {
        "itemId": "secret-server",
        "weight": 5.355
      },
      {
        "itemId": "camera",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15030050007",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15030050008",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15030050012",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15030050014",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15030050018",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15080050030",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15080050032",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15080050167",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15080050175",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15080050186",
        "weight": 4.725
      },
      {
        "itemId": "drone",
        "weight": 4.725
      },
      {
        "itemId": "military-gpu",
        "weight": 4.725
      },
      {
        "itemId": "portable-radar",
        "weight": 4.725
      },
      {
        "itemId": "radio",
        "weight": 4.725
      },
      {
        "itemId": "collectible-15080050069",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15080050173",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000143",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000166",
        "weight": 4.5
      },
      {
        "itemId": "collectible-15200000185",
        "weight": 4.5
      },
      {
        "itemId": "africa-heart",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15010050001",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15040050002",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080040001",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050003",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050014",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050040",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050041",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050120",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050121",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050122",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050123",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050142",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050166",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050184",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050185",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15080050187",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15200000060",
        "weight": 4.095
      },
      {
        "itemId": "gold-bar",
        "weight": 4.095
      },
      {
        "itemId": "watch",
        "weight": 4.095
      },
      {
        "itemId": "collectible-15060080015",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050066",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050067",
        "weight": 1.575
      },
      {
        "itemId": "collectible-15080050131",
        "weight": 1.575
      }
    ]
  }
};
