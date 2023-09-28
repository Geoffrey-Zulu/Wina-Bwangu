// Load your JSON data from the file (you need to load this data first)
const historicalData = [
     {
        "TransactionID": "WB0000001",
        "MobileBooth": "Wina1",
        "Location": "Lusaka CPD",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 964
      },
      {
        "TransactionID": "WB0000002",
        "MobileBooth": "Wina1",
        "Location": "Lusaka CPD",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 220
      },
      {
        "TransactionID": "WB0000003",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 582
      },
      {
        "TransactionID": "WB0000004",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zamtel Money",
        "RevenuePerKwacha": 0.045,
        "TransactionAmount": 349
      },
      {
        "TransactionID": "WB0000005",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 328
      },
      {
        "TransactionID": "WB0000006",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 192
      },
      {
        "TransactionID": "WB0000007",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zanaco",
        "RevenuePerKwacha": 0.035,
        "TransactionAmount": 1519
      },
      {
        "TransactionID": "WB0000008",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Zamtel Money",
        "RevenuePerKwacha": 0.045,
        "TransactionAmount": 1113
      },
      {
        "TransactionID": "WB0000009",
        "MobileBooth": "Wina1",
        "Location": "Lusaka CPD",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 1999
      },
      {
        "TransactionID": "WB0000010",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 3810
      },
      {
        "TransactionID": "WB0000011",
        "MobileBooth": "Wina6",
        "Location": "Matero East",
        "Service": "Zamtel Money",
        "RevenuePerKwacha": 0.045,
        "TransactionAmount": 3270
      },
      {
        "TransactionID": "WB0000012",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zanaco",
        "RevenuePerKwacha": 0.035,
        "TransactionAmount": 1092
      },
      {
        "TransactionID": "WB0000013",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 1056
      },
      {
        "TransactionID": "WB0000014",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 509
      },
      {
        "TransactionID": "WB0000015",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 34
      },
      {
        "TransactionID": "WB0000016",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 1658
      },
      {
        "TransactionID": "WB0000017",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "Zamtel Money",
        "RevenuePerKwacha": 0.045,
        "TransactionAmount": 2167
      },
      {
        "TransactionID": "WB0000018",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 2594
      },
      {
        "TransactionID": "WB0000019",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 3656
      },
      {
        "TransactionID": "WB0000020",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 4030
      },
      {
        "TransactionID": "WB0000021",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zanaco",
        "RevenuePerKwacha": 0.035,
        "TransactionAmount": 989
      },
      {
        "TransactionID": "WB0000022",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 4081
      },
      {
        "TransactionID": "WB0000023",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 925
      },
      {
        "TransactionID": "WB0000024",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 2312
      },
      {
        "TransactionID": "WB0000025",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zanaco",
        "RevenuePerKwacha": 0.035,
        "TransactionAmount": 3280
      },
      {
        "TransactionID": "WB0000026",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 90
      },
      {
        "TransactionID": "WB0000027",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 2556
      },
      {
        "TransactionID": "WB0000028",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zanaco",
        "RevenuePerKwacha": 0.035,
        "TransactionAmount": 673
      },
      {
        "TransactionID": "WB0000029",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 4185
      },
      {
        "TransactionID": "WB0000030",
        "MobileBooth": "Wina1",
        "Location": "Lusaka CPD",
        "Service": "Zanaco",
        "RevenuePerKwacha": 0.035,
        "TransactionAmount": 412
      },
      {
        "TransactionID": "WB0000031",
        "MobileBooth": "Wina1",
        "Location": "Lusaka CPD",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 310
      },
      {
        "TransactionID": "WB0000032",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 4248
      },
      {
        "TransactionID": "WB0000033",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 4105
      },
      {
        "TransactionID": "WB0000034",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 1147
      },
          {
            "TransactionID": "WB0000035",
            "MobileBooth": "Wina3",
            "Location": "Kabwata",
            "Service": "Zamtel Money",
            "RevenuePerKwacha": 0.045,
            "TransactionAmount": 1815
          },
          {
            "TransactionID": "WB0000036",
            "MobileBooth": "Wina3",
            "Location": "Kabwata",
            "Service": "Zanaco",
            "RevenuePerKwacha": 0.035,
            "TransactionAmount": 1653
          },
          {
            "TransactionID": "WB0000037",
            "MobileBooth": "Wina4",
            "Location": "Mandevu",
            "Service": "Airtel Money",
            "RevenuePerKwacha": 0.05,
            "TransactionAmount": 1045
          },
          {
            "TransactionID": "WB0000038",
            "MobileBooth": "Wina1",
            "Location": "Lusaka CPD",
            "Service": "FNB",
            "RevenuePerKwacha": 0.04,
            "TransactionAmount": 4364
          },
          {
            "TransactionID": "WB0000039",
            "MobileBooth": "Wina3",
            "Location": "Kabwata",
            "Service": "MTN Money",
            "RevenuePerKwacha": 0.06,
            "TransactionAmount": 2822
          },
          {
            "TransactionID": "WB0000040",
            "MobileBooth": "Wina6",
            "Location": "Matero East",
            "Service": "Airtel Money",
            "RevenuePerKwacha": 0.05,
            "TransactionAmount": 2046
          },
          {
            "TransactionID": "WB0000041",
            "MobileBooth": "Wina3",
            "Location": "Kabwata",
            "Service": "Zamtel Money",
            "RevenuePerKwacha": 0.045,
            "TransactionAmount": 1985
          },
          {
            "TransactionID": "WB0000042",
            "MobileBooth": "Wina2",
            "Location": "Libala",
            "Service": "MTN Money",
            "RevenuePerKwacha": 0.06,
            "TransactionAmount": 3023
          },
          {
            "TransactionID": "WB0000043",
            "MobileBooth": "Wina3",
            "Location": "Kabwata",
            "Service": "Airtel Money",
            "RevenuePerKwacha": 0.05,
            "TransactionAmount": 3728
          },
          {
            "TransactionID": "WB0000044",
            "MobileBooth": "Wina5",
            "Location": "Woodlands",
            "Service": "MTN Money",
            "RevenuePerKwacha": 0.06,
            "TransactionAmount": 58
          },
          {
            "TransactionID": "WB0000045",
            "MobileBooth": "Wina2",
            "Location": "Libala",
            "Service": "Airtel Money",
            "RevenuePerKwacha": 0.05,
            "TransactionAmount": 2744
          },
          {
            "TransactionID": "WB0000046",
            "MobileBooth": "Wina5",
            "Location": "Woodlands",
            "Service": "FNB",
            "RevenuePerKwacha": 0.04,
            "TransactionAmount": 1654
          },
          {
            "TransactionID": "WB0000047",
            "MobileBooth": "Wina3",
            "Location": "Kabwata",
            "Service": "Airtel Money",
            "RevenuePerKwacha": 0.05,
            "TransactionAmount": 1331
          },
          {
            "TransactionID": "WB0000048",
            "MobileBooth": "Wina4",
            "Location": "Mandevu",
            "Service": "Airtel Money",
            "RevenuePerKwacha": 0.05,
            "TransactionAmount": 801
          },
          {
            "TransactionID": "WB0000049",
            "MobileBooth": "Wina3",
            "Location": "Kabwata",
            "Service": "MTN Money",
            "RevenuePerKwacha": 0.06,
            "TransactionAmount": 967
          },
          {
            "TransactionID": "WB0000050",
            "MobileBooth": "Wina3",
            "Location": "Kabwata",
            "Service": "MTN Money",
            "RevenuePerKwacha": 0.06,
            "TransactionAmount": 1988
          },      
      {
        "TransactionID": "WB0000051",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 3646
      },
      {
        "TransactionID": "WB0000052",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 54
      },
      {
        "TransactionID": "WB0000053",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "Zamtel Money",
        "RevenuePerKwacha": 0.045,
        "TransactionAmount": 2121
      },
      {
        "TransactionID": "WB0000054",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zanaco",
        "RevenuePerKwacha": 0.035,
        "TransactionAmount": 564
      },
      {
        "TransactionID": "WB0000055",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 1011
      },
      {
        "TransactionID": "WB0000056",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 2950
      },
      {
        "TransactionID": "WB0000057",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zanaco",
        "RevenuePerKwacha": 0.035,
        "TransactionAmount": 57
      },
      {
        "TransactionID": "WB0000058",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 2382
      },
      {
        "TransactionID": "WB0000059",
        "MobileBooth": "Wina1",
        "Location": "Lusaka CPD",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 349
      },
      {
        "TransactionID": "WB0000060",
        "MobileBooth": "Wina1",
        "Location": "Lusaka CPD",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 2479
      },
      {
        "TransactionID": "WB0000061",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 1537
      },
      {
        "TransactionID": "WB0000062",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zamtel Money",
        "RevenuePerKwacha": 0.045,
        "TransactionAmount": 2802
      },
      {
        "TransactionID": "WB0000063",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 1290
      },
      {
        "TransactionID": "WB0000064",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 4331
      },
      {
        "TransactionID": "WB0000065",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zanaco",
        "RevenuePerKwacha": 0.035,
        "TransactionAmount": 1338
      },
      {
        "TransactionID": "WB0000066",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 1477
      },
      {
        "TransactionID": "WB0000067",
        "MobileBooth": "Wina1",
        "Location": "Lusaka CPD",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 3430
      },
      {
        "TransactionID": "WB0000068",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 451
      },
      {
        "TransactionID": "WB0000069",
        "MobileBooth": "Wina6",
        "Location": "Matero East",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 80
      },
      {
        "TransactionID": "WB0000070",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zanaco",
        "RevenuePerKwacha": 0.035,
        "TransactionAmount": 2002
      },
      {
        "TransactionID": "WB0000071",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 3235
      },
      {
        "TransactionID": "WB0000072",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 4156
      },
      {
        "TransactionID": "WB0000073",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 22
      },
      {
        "TransactionID": "WB0000074",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 2156
      },
      {
        "TransactionID": "WB0000075",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 2267
      },
      {
        "TransactionID": "WB0000076",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zamtel Money",
        "RevenuePerKwacha": 0.045,
        "TransactionAmount": 2419
      },
      {
        "TransactionID": "WB0000077",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 1691
      },
    {
        "TransactionID": "WB0000078",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 2736
      },
      {
        "TransactionID": "WB0000079",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 4282
      },
      {
        "TransactionID": "WB0000080",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zamtel Money",
        "RevenuePerKwacha": 0.045,
        "TransactionAmount": 2331
      },
      {
        "TransactionID": "WB0000081",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 1405
      },
      {
        "TransactionID": "WB0000082",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 945
      },
      {
        "TransactionID": "WB0000083",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zanaco",
        "RevenuePerKwacha": 0.035,
        "TransactionAmount": 688
      },
      {
        "TransactionID": "WB0000084",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 189
      },
      {
        "TransactionID": "WB0000085",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 3787
      },
      {
        "TransactionID": "WB0000086",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zanaco",
        "RevenuePerKwacha": 0.035,
        "TransactionAmount": 3407
      },
      {
        "TransactionID": "WB0000087",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 1105
      },
      {
        "TransactionID": "WB0000088",
        "MobileBooth": "Wina6",
        "Location": "Matero East",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 174
      },
      {
        "TransactionID": "WB0000089",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 1440
      },
      {
        "TransactionID": "WB0000090",
        "MobileBooth": "Wina6",
        "Location": "Matero East",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 3344
      },
      {
        "TransactionID": "WB0000091",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 2676
      },
      {
        "TransactionID": "WB0000092",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 812
      },
      {
        "TransactionID": "WB0000093",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zanaco",
        "RevenuePerKwacha": 0.035,
        "TransactionAmount": 4224
      },
      {
        "TransactionID": "WB0000094",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 592
      },
      {
        "TransactionID": "WB0000095",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 1662
      },
      {
        "TransactionID": "WB0000096",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 1915
      },
      {
        "TransactionID": "WB0000097",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 1866
      },
      {
        "TransactionID": "WB0000098",
        "MobileBooth": "Wina6",
        "Location": "Matero East",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 4320
      },
      {
        "TransactionID": "WB0000099",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 228
      },
      {
        "TransactionID": "WB0000100",
        "MobileBooth": "Wina6",
        "Location": "Matero East",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 3318
      },
    {
        "TransactionID": "WB0000101",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 3615
      },
      {
        "TransactionID": "WB0000102",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 4156
      },
      {
        "TransactionID": "WB0000103",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zamtel Money",
        "RevenuePerKwacha": 0.045,
        "TransactionAmount": 1401
      },
      {
        "TransactionID": "WB0000104",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 2014
      },
      {
        "TransactionID": "WB0000105",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 3475
      },
      {
        "TransactionID": "WB0000106",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 2452
      },
      {
        "TransactionID": "WB0000107",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zanaco",
        "RevenuePerKwacha": 0.035,
        "TransactionAmount": 1720
      },
      {
        "TransactionID": "WB0000108",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 118
      },
      {
        "TransactionID": "WB0000109",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 779
      },
      {
        "TransactionID": "WB0000110",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 1623
      },
      {
        "TransactionID": "WB0000111",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 2679
      },
      {
        "TransactionID": "WB0000112",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zanaco",
        "RevenuePerKwacha": 0.035,
        "TransactionAmount": 1976
      },
      {
        "TransactionID": "WB0000113",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 974
      },
      {
        "TransactionID": "WB0000114",
        "MobileBooth": "Wina1",
        "Location": "Lusaka CPD",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 2911
      },
      {
        "TransactionID": "WB0000115",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zanaco",
        "RevenuePerKwacha": 0.035,
        "TransactionAmount": 279
      },
      {
        "TransactionID": "WB0000116",
        "MobileBooth": "Wina6",
        "Location": "Matero East",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 3646
      },
      {
        "TransactionID": "WB0000117",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 855
      },
      {
        "TransactionID": "WB0000118",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 1412
      },
      {
        "TransactionID": "WB0000119",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 2137
      },
      {
        "TransactionID": "WB0000120",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 1800
      },
      {
        "TransactionID": "WB0000121",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 1219
      },
      {
        "TransactionID": "WB0000122",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 3582
      },
      {
        "TransactionID": "WB0000123",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 760
      },
      {
        "TransactionID": "WB0000124",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 2308
      },
      {
        "TransactionID": "WB0000125",
        "MobileBooth": "Wina1",
        "Location": "Lusaka CPD",
        "Service": "Zamtel Money",
        "RevenuePerKwacha": 0.045,
        "TransactionAmount": 1941
      },
      {
        "TransactionID": "WB0000126",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 2068
      },
     {
        "TransactionID": "WB0000127",
        "MobileBooth": "Wina6",
        "Location": "Matero East",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 4242
      },
      {
        "TransactionID": "WB0000128",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 2587
      },
      {
        "TransactionID": "WB0000129",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "Zamtel Money",
        "RevenuePerKwacha": 0.045,
        "TransactionAmount": 4196
      },
      {
        "TransactionID": "WB0000130",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 1463
      },
      {
        "TransactionID": "WB0000131",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 2199
      },
      {
        "TransactionID": "WB0000132",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 2956
      },
      {
        "TransactionID": "WB0000133",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 1663
      },
      {
        "TransactionID": "WB0000134",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 2525
      },
      {
        "TransactionID": "WB0000135",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 4404
      },
      {
        "TransactionID": "WB0000136",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 1012
      },
      {
        "TransactionID": "WB0000137",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 69
      },
      {
        "TransactionID": "WB0000138",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 4241
      },
      {
        "TransactionID": "WB0000139",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 3379
      },
      {
        "TransactionID": "WB0000140",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 3255
      },
      {
        "TransactionID": "WB0000141",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zanaco",
        "RevenuePerKwacha": 0.035,
        "TransactionAmount": 1705
      },
      {
        "TransactionID": "WB0000142",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 1039
      },
      {
        "TransactionID": "WB0000143",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 254
      },
      {
        "TransactionID": "WB0000144",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 870
      },
      {
        "TransactionID": "WB0000145",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 772
      },
      {
        "TransactionID": "WB0000146",
        "MobileBooth": "Wina1",
        "Location": "Lusaka CPD",
        "Service": "Zamtel Money",
        "RevenuePerKwacha": 0.045,
        "TransactionAmount": 1791
      },
      {
        "TransactionID": "WB0000147",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 3320
      },
      {
        "TransactionID": "WB0000148",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 4185
      },
      {
        "TransactionID": "WB0000149",
        "MobileBooth": "Wina1",
        "Location": "Lusaka CPD",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 100
      },
      {
        "TransactionID": "WB0000150",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 3794
      },
      {
        "TransactionID": "WB0000151",
        "MobileBooth": "Wina6",
        "Location": "Matero East",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 498
      },
      {
        "TransactionID": "WB0000152",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 2566
      },
      {
        "TransactionID": "WB0000153",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 4459
      },
      {
        "TransactionID": "WB0000154",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 3916
      },
      {
        "TransactionID": "WB0000155",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 528
      },
      {
        "TransactionID": "WB0000156",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 2067
      },
      {
        "TransactionID": "WB0000157",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 1119
      },
      {
        "TransactionID": "WB0000158",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 1209
      },
      {
        "TransactionID": "WB0000159",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 1950
      },
      {
        "TransactionID": "WB0000160",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 1268
      },
      {
        "TransactionID": "WB0000161",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zanaco",
        "RevenuePerKwacha": 0.035,
        "TransactionAmount": 1066
      },
      {
        "TransactionID": "WB0000162",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 4419
      },
      {
        "TransactionID": "WB0000163",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 2065
      },
      {
        "TransactionID": "WB0000164",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 2663
      },
      {
        "TransactionID": "WB0000165",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 2075
      },
      {
        "TransactionID": "WB0000166",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Zamtel Money",
        "RevenuePerKwacha": 0.045,
        "TransactionAmount": 3284
      },
      {
        "TransactionID": "WB0000167",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 425
      },
      {
        "TransactionID": "WB0000168",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zanaco",
        "RevenuePerKwacha": 0.035,
        "TransactionAmount": 1856
      },
      {
        "TransactionID": "WB0000169",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 405
      },
      {
        "TransactionID": "WB0000170",
        "MobileBooth": "Wina1",
        "Location": "Lusaka CPD",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 608
      },
      {
        "TransactionID": "WB0000171",
        "MobileBooth": "Wina1",
        "Location": "Lusaka CPD",
        "Service": "Zamtel Money",
        "RevenuePerKwacha": 0.045,
        "TransactionAmount": 4143
      },
      {
        "TransactionID": "WB0000172",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 681
      },
      {
        "TransactionID": "WB0000173",
        "MobileBooth": "Wina6",
        "Location": "Matero East",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 4405
      },
      {
        "TransactionID": "WB0000174",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 3980
      },
      {
        "TransactionID": "WB0000175",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "Zamtel Money",
        "RevenuePerKwacha": 0.045,
        "TransactionAmount": 2510
      },
      {
        "TransactionID": "WB0000176",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 2807
      },
      {
        "TransactionID": "WB0000177",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 474
      },
      {
        "TransactionID": "WB0000178",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 75
      },
      {
        "TransactionID": "WB0000179",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 2581
      },
      {
        "TransactionID": "WB0000180",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 3938
      },
      {
        "TransactionID": "WB0000181",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 3419
      },
      {
        "TransactionID": "WB0000182",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 1047
      },
      {
        "TransactionID": "WB0000183",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 205
      },
      {
        "TransactionID": "WB0000184",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 495
      },
      {
        "TransactionID": "WB0000185",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 3107
      },
      {
        "TransactionID": "WB0000171",
        "MobileBooth": "Wina1",
        "Location": "Lusaka CPD",
        "Service": "Zamtel Money",
        "RevenuePerKwacha": 0.045,
        "TransactionAmount": 4143
      },
      {
        "TransactionID": "WB0000172",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 681
      },
      {
        "TransactionID": "WB0000173",
        "MobileBooth": "Wina6",
        "Location": "Matero East",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 4405
      },
      {
        "TransactionID": "WB0000174",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 3980
      },
      {
        "TransactionID": "WB0000175",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "Zamtel Money",
        "RevenuePerKwacha": 0.045,
        "TransactionAmount": 2510
      },
      {
        "TransactionID": "WB0000176",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 2807
      },
      {
        "TransactionID": "WB0000177",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 474
      },
      {
        "TransactionID": "WB0000178",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 75
      },
      {
        "TransactionID": "WB0000179",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 2581
      },
      {
        "TransactionID": "WB0000180",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 3938
      },
      {
        "TransactionID": "WB0000181",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 3419
      },
      {
        "TransactionID": "WB0000182",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 1047
      },
      {
        "TransactionID": "WB0000183",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 205
      },
      {
        "TransactionID": "WB0000184",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 495
      },
      {
        "TransactionID": "WB0000185",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 3107
      },
      {
            "TransactionID": "WB0000186",
            "MobileBooth": "Wina2",
            "Location": "Libala",
            "Service": "MTN Money",
            "RevenuePerKwacha": 0.06,
            "TransactionAmount": 2597
          },
          {
            "TransactionID": "WB0000187",
            "MobileBooth": "Wina3",
            "Location": "Kabwata",
            "Service": "Zanaco",
            "RevenuePerKwacha": 0.035,
            "TransactionAmount": 3049
          },
          {
            "TransactionID": "WB0000188",
            "MobileBooth": "Wina4",
            "Location": "Mandevu",
            "Service": "Airtel Money",
            "RevenuePerKwacha": 0.05,
            "TransactionAmount": 2713
          },
          {
            "TransactionID": "WB0000189",
            "MobileBooth": "Wina5",
            "Location": "Woodlands",
            "Service": "FNB",
            "RevenuePerKwacha": 0.04,
            "TransactionAmount": 1727
          },
          {
            "TransactionID": "WB0000190",
            "MobileBooth": "Wina3",
            "Location": "Kabwata",
            "Service": "MTN Money",
            "RevenuePerKwacha": 0.06,
            "TransactionAmount": 2060
          },
          {
            "TransactionID": "WB0000191",
            "MobileBooth": "Wina4",
            "Location": "Mandevu",
            "Service": "MTN Money",
            "RevenuePerKwacha": 0.06,
            "TransactionAmount": 268
          },
          {
            "TransactionID": "WB0000192",
            "MobileBooth": "Wina1",
            "Location": "Lusaka CPD",
            "Service": "Zamtel Money",
            "RevenuePerKwacha": 0.045,
            "TransactionAmount": 2327
          },
          {
            "TransactionID": "WB0000193",
            "MobileBooth": "Wina3",
            "Location": "Kabwata",
            "Service": "Airtel Money",
            "RevenuePerKwacha": 0.05,
            "TransactionAmount": 3027
          },
          {
            "TransactionID": "WB0000194",
            "MobileBooth": "Wina4",
            "Location": "Mandevu",
            "Service": "Airtel Money",
            "RevenuePerKwacha": 0.05,
            "TransactionAmount": 897
          },
          {
            "TransactionID": "WB0000195",
            "MobileBooth": "Wina1",
            "Location": "Lusaka CPD",
            "Service": "MTN Money",
            "RevenuePerKwacha": 0.06,
            "TransactionAmount": 2275
          },
          {
            "TransactionID": "WB0000196",
            "MobileBooth": "Wina3",
            "Location": "Kabwata",
            "Service": "MTN Money",
            "RevenuePerKwacha": 0.06,
            "TransactionAmount": 1246
          },
          {
            "TransactionID": "WB0000197",
            "MobileBooth": "Wina6",
            "Location": "Matero East",
            "Service": "Airtel Money",
            "RevenuePerKwacha": 0.05,
            "TransactionAmount": 2768
          },
          {
            "TransactionID": "WB0000198",
            "MobileBooth": "Wina3",
            "Location": "Kabwata",
            "Service": "Airtel Money",
            "RevenuePerKwacha": 0.05,
            "TransactionAmount": 3082
          },
          {
            "TransactionID": "WB0000199",
            "MobileBooth": "Wina2",
            "Location": "Libala",
            "Service": "Airtel Money",
            "RevenuePerKwacha": 0.05,
            "TransactionAmount": 4307
          },
          {
            "TransactionID": "WB0000200",
            "MobileBooth": "Wina3",
            "Location": "Kabwata",
            "Service": "Airtel Money",
            "RevenuePerKwacha": 0.05,
            "TransactionAmount": 3664
          },
          {
        "TransactionID": "WB0000201",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 3274
      },
      {
        "TransactionID": "WB0000202",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 2854
      },
      {
        "TransactionID": "WB0000203",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 1253
      },
      {
        "TransactionID": "WB0000204",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 812
      },
      {
        "TransactionID": "WB0000205",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 962
      },
      {
        "TransactionID": "WB0000206",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 2219
      },
      {
        "TransactionID": "WB0000207",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zanaco",
        "RevenuePerKwacha": 0.035,
        "TransactionAmount": 4407
      },
      {
        "TransactionID": "WB0000208",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 3825
      },
      {
        "TransactionID": "WB0000209",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 2162
      },
      {
        "TransactionID": "WB0000210",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 883
      },
      {
        "TransactionID": "WB0000211",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 1506
      },
      {
        "TransactionID": "WB0000212",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Zamtel Money",
        "RevenuePerKwacha": 0.045,
        "TransactionAmount": 394
      },
      {
        "TransactionID": "WB0000213",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 4272
      },
      {
        "TransactionID": "WB0000214",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zanaco",
        "RevenuePerKwacha": 0.035,
        "TransactionAmount": 4187
      },
      {
        "TransactionID": "WB0000215",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 913
      },
      {
        "TransactionID": "WB0000216",
        "MobileBooth": "Wina1",
        "Location": "Lusaka CPD",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 3651
      },
      {
        "TransactionID": "WB0000217",
        "MobileBooth": "Wina1",
        "Location": "Lusaka CPD",
        "Service": "Zamtel Money",
        "RevenuePerKwacha": 0.045,
        "TransactionAmount": 1000
      },
      {
        "TransactionID": "WB0000218",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 839
      },
      {
        "TransactionID": "WB0000219",
        "MobileBooth": "Wina6",
        "Location": "Matero East",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 1851
      },
      {
        "TransactionID": "WB0000220",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 1341
      },
      {
        "TransactionID": "WB0000221",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "Zamtel Money",
        "RevenuePerKwacha": 0.045,
        "TransactionAmount": 3150
      },
      {
        "TransactionID": "WB0000222",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 3050
      },
      {
        "TransactionID": "WB0000223",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 4489
      },
      {
        "TransactionID": "WB0000224",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 3432
      },
      {
        "TransactionID": "WB0000225",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 136
      },
      {
        "TransactionID": "WB0000226",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 2318
      },
      {
        "TransactionID": "WB0000227",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 4327
      },
      {
        "TransactionID": "WB0000228",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 1653
      },
      {
        "TransactionID": "WB0000229",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 20
      },
      {
        "TransactionID": "WB0000230",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 1219
      },
      {
        "TransactionID": "WB0000231",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 1508
      },
      {
        "TransactionID": "WB0000232",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 1205
      },
      {
        "TransactionID": "WB0000233",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zanaco",
        "RevenuePerKwacha": 0.035,
        "TransactionAmount": 1589
      },
      {
        "TransactionID": "WB0000234",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 1280
      },
      {
        "TransactionID": "WB0000235",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 335
      },
      {
        "TransactionID": "WB0000236",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 2268
      },
      {
        "TransactionID": "WB0000237",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 2815
      },
      {
        "TransactionID": "WB0000238",
        "MobileBooth": "Wina1",
        "Location": "Lusaka CPD",
        "Service": "Zamtel Money",
        "RevenuePerKwacha": 0.045,
        "TransactionAmount": 4414
      },
      {
        "TransactionID": "WB0000239",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 654
      },
      {
        "TransactionID": "WB0000240",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 2180
      },
      {
        "TransactionID": "WB0000241",
        "MobileBooth": "Wina1",
        "Location": "Lusaka CPD",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 2869
      },
      {
        "TransactionID": "WB0000242",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 3757
      },
      {
        "TransactionID": "WB0000243",
        "MobileBooth": "Wina6",
        "Location": "Matero East",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 2038
      },
      {
        "TransactionID": "WB0000244",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 1344
      },
      {
        "TransactionID": "WB0000245",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 526
      },
      {
        "TransactionID": "WB0000246",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 192
      },
      {
        "TransactionID": "WB0000247",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 866
      },
      {
        "TransactionID": "WB0000248",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 3568
      },
      {
        "TransactionID": "WB0000249",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 729
      },
      {
        "TransactionID": "WB0000250",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 3331
      },
      {
        "TransactionID": "WB0000251",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 336
      },
      {
        "TransactionID": "WB0000252",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "MTN Money",
        "RevenuePerKwacha": 0.06,
        "TransactionAmount": 976
      },
      {
        "TransactionID": "WB0000253",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zanaco",
        "RevenuePerKwacha": 0.035,
        "TransactionAmount": 89
      },
      {
        "TransactionID": "WB0000254",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 630
      },
      {
        "TransactionID": "WB0000255",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 3161
      },
      {
        "TransactionID": "WB0000256",
        "MobileBooth": "Wina2",
        "Location": "Libala",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 4200
      },
      {
        "TransactionID": "WB0000257",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 3887
      },
      {
        "TransactionID": "WB0000258",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Zamtel Money",
        "RevenuePerKwacha": 0.045,
        "TransactionAmount": 4421
      },
      {
        "TransactionID": "WB0000259",
        "MobileBooth": "Wina5",
        "Location": "Woodlands",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 1863
      },
      {
        "TransactionID": "WB0000260",
        "MobileBooth": "Wina3",
        "Location": "Kabwata",
        "Service": "Zanaco",
        "RevenuePerKwacha": 0.035,
        "TransactionAmount": 2465
      },
      {
        "TransactionID": "WB0000261",
        "MobileBooth": "Wina4",
        "Location": "Mandevu",
        "Service": "Airtel Money",
        "RevenuePerKwacha": 0.05,
        "TransactionAmount": 3775
      },
      {
        "TransactionID": "WB0000262",
        "MobileBooth": "Wina1",
        "Location": "Lusaka CPD",
        "Service": "FNB",
        "RevenuePerKwacha": 0.04,
        "TransactionAmount": 2897
      },
      {
          "TransactionID": "WB0000263",
          "MobileBooth": "Wina1",
          "Location": "Lusaka CPD",
          "Service": "Zamtel Money",
          "RevenuePerKwacha": 0.045,
          "TransactionAmount": 3994
      },
      {
          "TransactionID": "WB0000264",
          "MobileBooth": "Wina3",
          "Location": "Kabwata",
          "Service": "Airtel Money",
          "RevenuePerKwacha": 0.05,
          "TransactionAmount": 586
      },
      {
          "TransactionID": "WB0000265",
          "MobileBooth": "Wina6",
          "Location": "Matero East",
          "Service": "MTN Money",
          "RevenuePerKwacha": 0.06,
          "TransactionAmount": 2562
      },
      {
          "TransactionID": "WB0000266",
          "MobileBooth": "Wina3",
          "Location": "Kabwata",
          "Service": "Airtel Money",
          "RevenuePerKwacha": 0.05,
          "TransactionAmount": 3867
      },
      {
          "TransactionID": "WB0000267",
          "MobileBooth": "Wina2",
          "Location": "Libala",
          "Service": "Zamtel Money",
          "RevenuePerKwacha": 0.045,
          "TransactionAmount": 4208
      },
      {
          "TransactionID": "WB0000268",
          "MobileBooth": "Wina3",
          "Location": "Kabwata",
          "Service": "Airtel Money",
          "RevenuePerKwacha": 0.05,
          "TransactionAmount": 4471
      },
      {
          "TransactionID": "WB0000269",
          "MobileBooth": "Wina5",
          "Location": "Woodlands",
          "Service": "FNB",
          "RevenuePerKwacha": 0.04,
          "TransactionAmount": 303
      },
      {
          "TransactionID": "WB0000270",
          "MobileBooth": "Wina2",
          "Location": "Libala",
          "Service": "Airtel Money",
          "RevenuePerKwacha": 0.05,
          "TransactionAmount": 4261
      },
      {
          "TransactionID": "WB0000271",
          "MobileBooth": "Wina5",
          "Location": "Woodlands",
          "Service": "FNB",
          "RevenuePerKwacha": 0.04,
          "TransactionAmount": 1122
      },
      {
          "TransactionID": "WB0000272",
          "MobileBooth": "Wina3",
          "Location": "Kabwata",
          "Service": "Airtel Money",
          "RevenuePerKwacha": 0.05,
          "TransactionAmount": 1396
      },
      {
          "TransactionID": "WB0000273",
          "MobileBooth": "Wina4",
          "Location": "Mandevu",
          "Service": "Airtel Money",
          "RevenuePerKwacha": 0.05,
          "TransactionAmount": 905
      },
      {
          "TransactionID": "WB0000274",
          "MobileBooth": "Wina3",
          "Location": "Kabwata",
          "Service": "MTN Money",
          "RevenuePerKwacha": 0.06,
          "TransactionAmount": 4002
      },
      {
          "TransactionID": "WB0000275",
          "MobileBooth": "Wina3",
          "Location": "Kabwata",
          "Service": "Airtel Money",
          "RevenuePerKwacha": 0.05,
          "TransactionAmount": 1591
      },
      {
          "TransactionID": "WB0000276",
          "MobileBooth": "Wina3",
          "Location": "Kabwata",
          "Service": "Airtel Money",
          "RevenuePerKwacha": 0.05,
          "TransactionAmount": 3353
      },
      {
          "TransactionID": "WB0000277",
          "MobileBooth": "Wina4",
          "Location": "Mandevu",
          "Service": "MTN Money",
          "RevenuePerKwacha": 0.06,
          "TransactionAmount": 3364
      },
      {
          "TransactionID": "WB0000278",
          "MobileBooth": "Wina2",
          "Location": "Libala",
          "Service": "MTN Money",
          "RevenuePerKwacha": 0.06,
          "TransactionAmount": 4129
      },
      {
          "TransactionID": "WB0000279",
          "MobileBooth": "Wina3",
          "Location": "Kabwata",
          "Service": "Zanaco",
          "RevenuePerKwacha": 0.035,
          "TransactionAmount": 1003
      },
      {
          "TransactionID": "WB0000280",
          "MobileBooth": "Wina4",
          "Location": "Mandevu",
          "Service": "Airtel Money",
          "RevenuePerKwacha": 0.05,
          "TransactionAmount": 2475
      },
      {
          "TransactionID": "WB0000281",
          "MobileBooth": "Wina5",
          "Location": "Woodlands",
          "Service": "FNB",
          "RevenuePerKwacha": 0.04,
          "TransactionAmount": 3597
      },
      {
          "TransactionID": "WB0000282",
          "MobileBooth": "Wina3",
          "Location": "Kabwata",
          "Service": "MTN Money",
          "RevenuePerKwacha": 0.06,
          "TransactionAmount": 1659
      },
      {
          "TransactionID": "WB0000283",
          "MobileBooth": "Wina4",
          "Location": "Mandevu",
          "Service": "MTN Money",
          "RevenuePerKwacha": 0.06,
          "TransactionAmount": 4163
      },
      {
          "TransactionID": "WB0000284",
          "MobileBooth": "Wina1",
          "Location": "Lusaka CPD",
          "Service": "Zamtel Money",
          "RevenuePerKwacha": 0.045,
          "TransactionAmount": 487
      },
      {
          "TransactionID": "WB0000285",
          "MobileBooth": "Wina3",
          "Location": "Kabwata",
          "Service": "Airtel Money",
          "RevenuePerKwacha": 0.05,
          "TransactionAmount": 3790
      },
      {
          "TransactionID": "WB0000286",
          "MobileBooth": "Wina4",
          "Location": "Mandevu",
          "Service": "Airtel Money",
          "RevenuePerKwacha": 0.05,
          "TransactionAmount": 2186
      },
      {
          "TransactionID": "WB0000287",
          "MobileBooth": "Wina1",
          "Location": "Lusaka CPD",
          "Service": "MTN Money",
          "RevenuePerKwacha": 0.06,
          "TransactionAmount": 1894
      },
      {
          "TransactionID": "WB0000288",
          "MobileBooth": "Wina3",
          "Location": "Kabwata",
          "Service": "MTN Money",
          "RevenuePerKwacha": 0.06,
          "TransactionAmount": 1458
      },
      {
          "TransactionID": "WB0000289",
          "MobileBooth": "Wina6",
          "Location": "Matero East",
          "Service": "Airtel Money",
          "RevenuePerKwacha": 0.05,
          "TransactionAmount": 875
      },
      {
          "TransactionID": "WB0000290",
          "MobileBooth": "Wina3",
          "Location": "Kabwata",
          "Service": "Airtel Money",
          "RevenuePerKwacha": 0.05,
          "TransactionAmount": 189
      },
      {
          "TransactionID": "WB0000291",
          "MobileBooth": "Wina2",
          "Location": "Libala",
          "Service": "Airtel Money",
          "RevenuePerKwacha": 0.05,
          "TransactionAmount": 4479
      },
      {
          "TransactionID": "WB0000292",
          "MobileBooth": "Wina3",
          "Location": "Kabwata",
          "Service": "Airtel Money",
          "RevenuePerKwacha": 0.05,
          "TransactionAmount": 3733
      },
      {
          "TransactionID": "WB0000293",
          "MobileBooth": "Wina5",
          "Location": "Woodlands",
          "Service": "FNB",
          "RevenuePerKwacha": 0.04,
          "TransactionAmount": 640
      },
      {
          "TransactionID": "WB0000294",
          "MobileBooth": "Wina2",
          "Location": "Libala",
          "Service": "FNB",
          "RevenuePerKwacha": 0.04,
          "TransactionAmount": 413
      },
      {
          "TransactionID": "WB0000295",
          "MobileBooth": "Wina5",
          "Location": "Woodlands",
          "Service": "FNB",
          "RevenuePerKwacha": 0.04,
          "TransactionAmount": 880
      },
      {
          "TransactionID": "WB0000296",
          "MobileBooth": "Wina3",
          "Location": "Kabwata",
          "Service": "Airtel Money",
          "RevenuePerKwacha": 0.05,
          "TransactionAmount": 2921
      },
      {
          "TransactionID": "WB0000297",
          "MobileBooth": "Wina4",
          "Location": "Mandevu",
          "Service": "Airtel Money",
          "RevenuePerKwacha": 0.05,
          "TransactionAmount": 3428
      },
      {
          "TransactionID": "WB0000298",
          "MobileBooth": "Wina3",
          "Location": "Kabwata",
          "Service": "MTN Money",
          "RevenuePerKwacha": 0.06,
          "TransactionAmount": 4103
      },
      {
          "TransactionID": "WB0000299",
          "MobileBooth": "Wina3",
          "Location": "Kabwata",
          "Service": "Zanaco",
          "RevenuePerKwacha": 0.035,
          "TransactionAmount": 2610
      },
      {
          "TransactionID": "WB0000300",
          "MobileBooth": "Wina3",
          "Location": "Kabwata",
          "Service": "Airtel Money",
          "RevenuePerKwacha": 0.05,
          "TransactionAmount": 3813
      },
      {
          "TransactionID": "WB0000301",
          "MobileBooth": "Wina4",
          "Location": "Mandevu",
          "Service": "Airtel Money",
          "RevenuePerKwacha": 0.05,
          "TransactionAmount": 1899
      },
      {
          "TransactionID": "WB0000302",
          "MobileBooth": "Wina2",
          "Location": "Libala",
          "Service": "FNB",
          "RevenuePerKwacha": 0.04,
          "TransactionAmount": 1284
      },
      {
          "TransactionID": "WB0000303",
          "MobileBooth": "Wina3",
          "Location": "Kabwata",
          "Service": "Airtel Money",
          "RevenuePerKwacha": 0.05,
          "TransactionAmount": 2928
      },
      {
          "TransactionID": "WB0000304",
          "MobileBooth": "Wina4",
          "Location": "Mandevu",
          "Service": "Zamtel Money",
          "RevenuePerKwacha": 0.045,
          "TransactionAmount": 301
      },
      {
          "TransactionID": "WB0000305",
          "MobileBooth": "Wina5",
          "Location": "Woodlands",
          "Service": "Airtel Money",
          "RevenuePerKwacha": 0.05,
          "TransactionAmount": 3672
      },
      {
          "TransactionID": "WB0000306",
          "MobileBooth": "Wina3",
          "Location": "Kabwata",
          "Service": "Zanaco",
          "RevenuePerKwacha": 0.035,
          "TransactionAmount": 1542
      },
      {
          "TransactionID": "WB0000307",
          "MobileBooth": "Wina4",
          "Location": "Mandevu",
          "Service": "Airtel Money",
          "RevenuePerKwacha": 0.05,
          "TransactionAmount": 2001
      },
      {
          "TransactionID": "WB0000308",
          "MobileBooth": "Wina1",
          "Location": "Lusaka CPD",
          "Service": "FNB",
          "RevenuePerKwacha": 0.04,
          "TransactionAmount": 3166
      }
    
    
    
    
    
  ];
  

// Function to calculate and display cumulative revenue
function calculateAndDisplayCumulativeRevenue() {
    // Create an object to store cumulative revenue for each booth
    const cumulativeRevenue = {};

    // Loop through the historicalData array
    historicalData.forEach((transaction) => {
        const booth = transaction.MobileBooth;
        const revenue = transaction.RevenuePerKwacha * transaction.TransactionAmount;

        // Check if the booth exists in the cumulativeRevenue object
        if (!cumulativeRevenue[booth]) {
            cumulativeRevenue[booth] = 0; // Initialize cumulative revenue to 0
        }

        // Add the revenue for the current transaction to the cumulative revenue of the booth
        cumulativeRevenue[booth] += revenue;
    });

    // Display the cumulative revenue for each booth in the "totalsResult" div
    const cumulativeRevenueResultElement = document.getElementById("totalsResult");

    cumulativeRevenueResultElement.innerHTML = ""; // Clear existing content

    for (const booth in cumulativeRevenue) {
        if (cumulativeRevenue.hasOwnProperty(booth)) {
            const boothTotal = cumulativeRevenue[booth].toFixed(2);
            cumulativeRevenueResultElement.innerHTML += `<p>Booth ${booth}: Cumulative Revenue ${boothTotal} Kwacha</p>`;
        }
    }
}

// Add an event listener to the "commulativeRevenue" button
document.getElementById("cumulativeRevenue").addEventListener("click", calculateAndDisplayCumulativeRevenue);


function calculateAndDisplayTotals() {
    let totalRevenue = 0;
    let totalCapital = 0;
    let totalTransactionAfterTax = 0; // Initialize the total transaction after tax

    historicalData.forEach((transaction) => {
        const revenue = transaction.RevenuePerKwacha * transaction.TransactionAmount;
        totalRevenue += revenue;
        totalCapital += transaction.TransactionAmount;

        // Calculate tax (you can replace 0.1 with your actual tax rate)
        const tax = 0.1 * transaction.TransactionAmount;

        // Calculate the transaction amount after tax
        const transactionAfterTax = transaction.TransactionAmount - tax;

        // Add the transaction amount after tax to the total
        totalTransactionAfterTax += transactionAfterTax;
    });

    // Display Total Revenue, Total Capital, and Total Transaction Amount After Tax in the new results box
    const totalsResultElement = document.getElementById("totalsResult");

    totalsResultElement.innerHTML = `
        <p>Total Capital: ${totalRevenue.toFixed(2)} Kwacha</p>
        <p>Total Revenue: ${totalCapital.toFixed(2)} Kwacha</p>
        <p>Total Transaction Amount After Tax: ${totalTransactionAfterTax.toFixed(2)} Kwacha</p>
    `;
}

document.getElementById("calculateTotals").addEventListener("click", calculateAndDisplayTotals);





function calculateAndDisplayRemaining() {
    // Define the monthly limits for each service
    const monthlyLimits = {
        "Airtel Money": 350000,
        "MTN Money": 160000,
        "Zamtel Money": 90000,
        "Zanaco": 80000,
        "FNB": 90000,
    };

    // Create an object to store remaining amounts for each service
    const remainingAmounts = {};

    // Loop through the historicalData array
    historicalData.forEach((transaction) => {
        const service = transaction.Service;

        // Check if the service exists in the remainingAmounts object
        if (!remainingAmounts[service]) {
            remainingAmounts[service] = monthlyLimits[service]; // Initialize remaining amount with monthly limit
        }

        // Subtract the transaction amount from the remaining amount
        remainingAmounts[service] -= transaction.TransactionAmount;
    });

    // Display the remaining amounts for each service in the "totalsResult" div
    const totalsResultElement = document.getElementById("totalsResult");

    totalsResultElement.innerHTML = ""; // Clear existing content

    for (const service in remainingAmounts) {
        if (remainingAmounts.hasOwnProperty(service)) {
            const remainingAmount = remainingAmounts[service].toFixed(2);
            totalsResultElement.innerHTML += `<p>${service}: Remaining Amount ${remainingAmount} Kwacha</p>`;
        }
    }
}

// Add an event listener to the "calculateRemaining" button
document.getElementById("calculateRemaining").addEventListener("click", calculateAndDisplayRemaining);





google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        let totalRevenue = 0;
        let totalCapital = 0;
        let totalTransactionAfterTax = 0; // Initialize the total transaction after tax
    
        historicalData.forEach((transaction) => {
            const revenue = transaction.RevenuePerKwacha * transaction.TransactionAmount;
            totalRevenue += revenue;
            totalCapital += transaction.TransactionAmount;
    
            // Calculate tax (you can replace 0.1 with your actual tax rate)
            const tax = 0.1 * transaction.TransactionAmount;
    
            // Calculate the transaction amount after tax
            const transactionAfterTax = transaction.TransactionAmount - tax;
    
            // Add the transaction amount after tax to the total
            totalTransactionAfterTax += transactionAfterTax;
        });

        var data = google.visualization.arrayToDataTable([
            ['Category', 'Amount'],
            ['Total Revenue', totalRevenue], // Use your actual total revenue value
            ['Total Capital', totalCapital]  
        ]);
    
        // Set chart options
        var options = {
            title: 'Total Revenue and Total Capital',
            is3D: false, // Enable 3D effect (optional)
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }


      var data = google.visualization.arrayToDataTable([
       // Use your actual total capital value
    ]);









