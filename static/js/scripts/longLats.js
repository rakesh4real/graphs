const latLongs = {
    RUS     : [ 55.751244, 37.618423 ], 
    CAN     : [ 50.000000, -85.000000], 
    USA     : [ 44.500000, -89.500000], 
    CHN     : [ 35.861660, 104.195396], 
    BRA     : [ -14.235004, -51.925282], 
    AUS     : [ -25.274399, 133.775131], 
    IND     : [ 20.593683, 78.962883 ], 
    ARG     : [ -38.416096, -63.616673 ],
    KAZ     : [ 48.019573, 66.923683 ],
    DZA     : [ 28.033886, 1.659626 ],
    COD     : [ -4.038333, 21.758663 ],
    GRL     : [ 67.010323, 	-50.712353 ],
    SAU     : [ 24.774265, 46.738586 ],
    MEX     : [ 19.432608, -99.133209 ],
    IDN     : [ -8.409518, 	115.188919 ],
    SDN     : [ 15.564836, 	32.529831 ],
    LBY     : [ 32.885353, 13.180161 ],
    IRN     : [ 35.715298, 51.404343 ]
}

const countryName2Id = {
    "Afghanistan": "AFG",
    "Angola": "AGO",
    "Albania": "ALB",
    "United Arab Emirates": "ARE",
    "Argentina": "ARG",
    "Armenia": "ARM",
    "Antarctica": "ATA",
    "French Southern and Antarctic Lands": "ATF",
    "Australia": "AUS",
    "Austria": "AUT",
    "Azerbaijan": "AZE",
    "Burundi": "BDI",
    "Belgium": "BEL",
    "Benin": "BEN",
    "Burkina Faso": "BFA",
    "Bangladesh": "BGD",
    "Bulgaria": "BGR",
    "The Bahamas": "BHS",
    "Bosnia and Herzegovina": "BIH",
    "Belarus": "BLR",
    "Belize": "BLZ",
    "Bolivia": "BOL",
    "Brazil": "BRA",
    "Brunei": "BRN",
    "Bhutan": "BTN",
    "Botswana": "BWA",
    "Central African Republic": "CAF",
    "Canada": "CAN",
    "Switzerland": "CHE",
    "Chile": "CHL",
    "China": "CHN",
    "Ivory Coast": "CIV",
    "Cameroon": "CMR",
    "Congo, the Democratic Republic of the": "COD",
    "Republic of the Congo": "COG",
    "Colombia": "COL",
    "Costa Rica": "CRI",
    "Cuba": "CUB",
    "Northern Cyprus": "-99",
    "Cyprus": "CYP",
    "Czech Republic": "CZE",
    "Germany": "DEU",
    "Djibouti": "DJI",
    "Denmark": "DNK",
    "Dominican Republic": "DOM",
    "Algeria": "DZA",
    "Ecuador": "ECU",
    "Egypt": "EGY",
    "Eritrea": "ERI",
    "Spain": "ESP",
    "Estonia": "EST",
    "Ethiopia": "ETH",
    "Finland": "FIN",
    "Fiji": "FJI",
    "Falkland Islands": "FLK",
    "France": "FRA",
    "French Guiana": "GUF",
    "Gabon": "GAB",
    "United Kingdom": "GBR",
    "Georgia": "GEO",
    "Ghana": "GHA",
    "Guinea": "GIN",
    "Gambia": "GMB",
    "Guinea Bissau": "GNB",
    "Equatorial Guinea": "GNQ",
    "Greece": "GRC",
    "Greenland": "GRL",
    "Guatemala": "GTM",
    "Guyana": "GUY",
    "Honduras": "HND",
    "Croatia": "HRV",
    "Haiti": "HTI",
    "Hungary": "HUN",
    "Indonesia": "IDN",
    "India": "IND",
    "Ireland": "IRL",
    "Iran, Islamic Republic of": "IRN",
    "Iraq": "IRQ",
    "Iceland": "ISL",
    "Israel": "ISR",
    "Italy": "ITA",
    "Jamaica": "JAM",
    "Jordan": "JOR",
    "Japan": "JPN",
    "Kazakhstan": "KAZ",
    "Kenya": "KEN",
    "Kyrgyzstan": "KGZ",
    "Cambodia": "KHM",
    "South Korea": "KOR",
    "Kosovo": "-99",
    "Kuwait": "KWT",
    "Laos": "LAO",
    "Lebanon": "LBN",
    "Liberia": "LBR",
    "Libya": "LBY",
    "Sri Lanka": "LKA",
    "Lesotho": "LSO",
    "Lithuania": "LTU",
    "Luxembourg": "LUX",
    "Latvia": "LVA",
    "Morocco": "MAR",
    "Moldova": "MDA",
    "Madagascar": "MDG",
    "Mexico": "MEX",
    "Macedonia": "MKD",
    "Mali": "MLI",
    "Myanmar": "MMR",
    "Montenegro": "MNE",
    "Mongolia": "MNG",
    "Mozambique": "MOZ",
    "Mauritania": "MRT",
    "Malawi": "MWI",
    "Malaysia": "MYS",
    "Namibia": "NAM",
    "New Caledonia": "NCL",
    "Niger": "NER",
    "Nigeria": "NGA",
    "Nicaragua": "NIC",
    "Netherlands": "NLD",
    "Norway": "NOR",
    "Nepal": "NPL",
    "New Zealand": "NZL",
    "Oman": "OMN",
    "Pakistan": "PAK",
    "Panama": "PAN",
    "Peru": "PER",
    "Philippines": "PHL",
    "Papua New Guinea": "PNG",
    "Poland": "POL",
    "Puerto Rico": "PRI",
    "North Korea": "PRK",
    "Portugal": "PRT",
    "Paraguay": "PRY",
    "Qatar": "QAT",
    "Romania": "ROU",
    "Russian Federation": "RUS",
    "Rwanda": "RWA",
    "Western Sahara": "ESH",
    "Saudi Arabia": "SAU",
    "Sudan": "SDN",
    "South Sudan": "SSD",
    "Senegal": "SEN",
    "Solomon Islands": "SLB",
    "Sierra Leone": "SLE",
    "El Salvador": "SLV",
    "Somaliland": "-99",
    "Somalia": "SOM",
    "Republic of Serbia": "SRB",
    "Suriname": "SUR",
    "Slovakia": "SVK",
    "Slovenia": "SVN",
    "Sweden": "SWE",
    "Swaziland": "SWZ",
    "Syria": "SYR",
    "Chad": "TCD",
    "Togo": "TGO",
    "Thailand": "THA",
    "Tajikistan": "TJK",
    "Turkmenistan": "TKM",
    "East Timor": "TLS",
    "Trinidad and Tobago": "TTO",
    "Tunisia": "TUN",
    "Turkey": "TUR",
    "Taiwan": "TWN",
    "United Republic of Tanzania": "TZA",
    "Uganda": "UGA",
    "Ukraine": "UKR",
    "Uruguay": "URY",
    "United States": "USA",
    "Uzbekistan": "UZB",
    "Venezuela": "VEN",
    "Vietnam": "VNM",
    "Vanuatu": "VUT",
    "West Bank": "PSE",
    "Yemen": "YEM",
    "South Africa": "ZAF",
    "Zambia": "ZMB",
    "Zimbabwe": "ZWE",    
}
