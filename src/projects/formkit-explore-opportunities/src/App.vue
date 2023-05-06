<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import type { FormKitSchemaNode } from "@formkit/core";
import { onMounted, reactive, ref, watch } from "vue";
import io from "socket.io-client";
import groupArray from "group-array";
import { computed } from "vue";
import JsonEditorVue from "json-editor-vue";

const model = ref({
  contact: {
    new_hasaustraliannationality: false,
    new_hasnewzealandnationality: false,
    new_hasbritishnationality: false,
    new_hasirishnationality: false,
    new_hasbritishoririshnationality: false,
    new_hasportugesecitizenship: false,
    new_haseuropeancitizenship: false,
    new_gender: 1,
    new_maritalstatus: 2,
    new_dateofbirth: "1964-12-30",
    new_dobless1: 18,
    new_wealthinbasecurrency: 1001,
    new_wealthinusdollars: 500001,
    new_wealthineuros: 270000,
    new_wealthinaustraliandollars: 1240001,
    new_overallworth: 1001,
    new_nationality: 5478,
    new_nationality2: -1,
    new_nationality3: -1,
    new_passport: 5478,
    new_passport2: -1,
    new_passport3: -1,
    new_countryvocationshortage: 100000000,
    new_region: 100000005,
    new_countryoforigin: 5553,
  },

  /**/
  dependent: {
    new_dependenttype: 100000005,
    new_dateofbirth: "1964-12-30",
    new_dateofmarriage: "1981-12-30",
    new_hasbritishnationality: 0,
    new_hasaustraliannationality: 0,
    new_hasnewzealandnationality: 0,
    new_hasirishnationality: 0,
    new_hasbritishoririshnationality: 0,
    new_hasportugesecitizenship: 0,
    new_haseuropeancitizenship: 1,
    new_maritalstatus: 2,
    new_nationality: 5478,
    new_nationality2: -1,
    new_nationality3: -1,
    new_passport: 5478,
    new_passport2: -1,
    new_passport3: -1,
  },

  ancestry: {
    new_fathercountryofbirth: 5478,
    new_mothercountryofbirth: 5477,
    new_mothersfathercountryofbirth: 5477,
    new_mothersmothercountryofbirth: 5477,
    new_fathersfathercountryofbirth: 5477,
    new_fathersmothercountryofbirth: 5477,
    new_applicantplaceofbirth: 5477,
    new_clientplaceofbirth: 3953,
    new_clientbornineurope: 1,
    new_fatherbornineurope: 1,
    new_motherbornineurope: 1,
    new_fathersfatherbornineurope: 1,
    new_fathersmotherbornineurope: 1,
    new_mothersfatherbornineurope: 1,
    new_mothersmotherbornineurope: 1,
  },
});

// dev-exploresocket.1stcontact.com/api/v1/solution.service

const data = reactive({
  socket: io("dev-exploresocket.1stcontact.com/api/v1/solution.service", {
    // path: "/apis/explore-solutions/socket.io/",
    transportOptions: {
      polling: {
        extraHeaders: {
          "just-in-case": "insidealready",
        },
      },
    },
    withCredentials: true,
    extraHeaders: {
      "my-custom-header": "abcd",
    },
  }),
  stringify: (value: unknown) => JSON.stringify(value, null, 2),
  countries: [
    {
      label: "-- Select --",
      value: null,
    },
    {
      label: "Australia",
      value: 5428,
    },
    {
      label: "Ireland",
      value: 5553,
    },
    {
      label: "New Zealand",
      value: 5578,
    },
    {
      label: "South Africa",
      value: 5453,
    },
    {
      label: "United Kingdom",
      value: 5478,
    },
    {
      label: "United States of America",
      value: 728,
    },
    {
      label: "Afghanistan",
      value: 803,
    },
    {
      label: "Albania",
      value: 2328,
    },
    {
      label: "Algeria",
      value: 4203,
    },
    {
      label: "Andorra",
      value: 2853,
    },
    {
      label: "Angola",
      value: 2003,
    },
    {
      label: "Anguilla",
      value: 2203,
    },
    {
      label: "Antigua and Barbuda",
      value: 4703,
    },
    {
      label: "Argentina",
      value: 3128,
    },
    {
      label: "Armenia",
      value: 4328,
    },
    {
      label: "Aruba",
      value: 378,
    },
    {
      label: "Austria",
      value: 5228,
    },
    {
      label: "Azerbaijan",
      value: 1278,
    },
    {
      label: "Bahamas",
      value: 4978,
    },
    {
      label: "Bahrain",
      value: 2703,
    },
    {
      label: "Bangladesh",
      value: 3703,
    },
    {
      label: "Barbados",
      value: 4153,
    },
    {
      label: "Barbuda",
      value: 4303,
    },
    {
      label: "Belarus",
      value: 2728,
    },
    {
      label: "Belgium",
      value: 1803,
    },
    {
      label: "Belize",
      value: 1828,
    },
    {
      label: "Benin",
      value: 1753,
    },
    {
      label: "Bermuda",
      value: 4928,
    },
    {
      label: "Bhutan",
      value: 2253,
    },
    {
      label: "Bolivia",
      value: 453,
    },
    {
      label: "Bonaire",
      value: 4828,
    },
    {
      label: "Borneo",
      value: 5903,
    },
    {
      label: "Bosnia and Herzogovina",
      value: 3528,
    },
    {
      label: "Botswana",
      value: 2678,
    },
    {
      label: "Brazil",
      value: 2878,
    },
    {
      label: "British Antarctic",
      value: 5028,
    },
    {
      label: "British National Overseas",
      value: 1653,
    },
    {
      label: "British Overseas Citizen",
      value: 978,
    },
    {
      label: "British Protected Person",
      value: 3753,
    },
    {
      label: "British Subject w/o Citizenship",
      value: 5128,
    },
    {
      label: "British Virgin Islands",
      value: 878,
    },
    {
      label: "Brunei Darussalam",
      value: 228,
    },
    {
      label: "Bulgaria",
      value: 503,
    },
    {
      label: "Burkina Faso",
      value: 628,
    },
    {
      label: "Burundi",
      value: 1603,
    },
    {
      label: "Cambodia",
      value: 1528,
    },
    {
      label: "Cameroon",
      value: 2578,
    },
    {
      label: "Canada",
      value: 5503,
    },
    {
      label: "Canary Islands",
      value: 5328,
    },
    {
      label: "Cape Verde",
      value: 478,
    },
    {
      label: "Cayman Islands",
      value: 2903,
    },
    {
      label: "Central African Republic",
      value: 5053,
    },
    {
      label: "Chad",
      value: 653,
    },
    {
      label: "Chile",
      value: 3578,
    },
    {
      label: "China",
      value: 1578,
    },
    {
      label: "Christmas Island",
      value: 5928,
    },
    {
      label: "Cocos (Keeling) Islands",
      value: 5953,
    },
    {
      label: "Colombia",
      value: 1403,
    },
    {
      label: "Comoros",
      value: 4903,
    },
    {
      label: "Congo",
      value: 3603,
    },
    {
      label: "Cook Islands",
      value: 3353,
    },
    {
      label: "Costa Rica",
      value: 4053,
    },
    {
      label: "Croatia",
      value: 4453,
    },
    {
      label: "Cuba",
      value: 3253,
    },
    {
      label: "Curacao",
      value: 603,
    },
    {
      label: "Cyprus",
      value: 2603,
    },
    {
      label: "Czech Republic",
      value: 2378,
    },
    {
      label: "Denmark",
      value: 3653,
    },
    {
      label: "Djibouti",
      value: 428,
    },
    {
      label: "Dominica",
      value: 4353,
    },
    {
      label: "Dominican Republic",
      value: 4128,
    },
    {
      label: "Ecuador",
      value: 678,
    },
    {
      label: "Egypt",
      value: 2803,
    },
    {
      label: "El Salvador",
      value: 4778,
    },
    {
      label: "Equatorial Guinea",
      value: 1928,
    },
    {
      label: "Eritrea",
      value: 2278,
    },
    {
      label: "Estonia",
      value: 53,
    },
    {
      label: "Ethiopia",
      value: 5278,
    },
    {
      label: "Falkland Islands (Malvinas)",
      value: 4878,
    },
    {
      label: "Faroe Islands",
      value: 2403,
    },
    {
      label: "Fiji",
      value: 2828,
    },
    {
      label: "Finland",
      value: 5178,
    },
    {
      label: "France",
      value: 5403,
    },
    {
      label: "Fujariah",
      value: 28,
    },
    {
      label: "Gabon",
      value: 578,
    },
    {
      label: "Gambia",
      value: 3478,
    },
    {
      label: "Gamoia",
      value: 2753,
    },
    {
      label: "Georgia",
      value: 5203,
    },
    {
      label: "Germany",
      value: 3278,
    },
    {
      label: "Ghana",
      value: 1103,
    },
    {
      label: "Gibraltar",
      value: 1553,
    },
    {
      label: "Greece",
      value: 5078,
    },
    {
      label: "Greenland",
      value: 5978,
    },
    {
      label: "Grenada",
      value: 4628,
    },
    {
      label: "Guadeloupe",
      value: 1478,
    },
    {
      label: "Guam",
      value: 703,
    },
    {
      label: "Guatemala",
      value: 3303,
    },
    {
      label: "Guernsey",
      value: 6103,
    },
    {
      label: "Guinea",
      value: 5753,
    },
    {
      label: "Guinea-Bissau",
      value: 1228,
    },
    {
      label: "Guyana",
      value: 2178,
    },
    {
      label: "Haiti",
      value: 2128,
    },
    {
      label: "Honduras",
      value: 553,
    },
    {
      label: "Hong Kong",
      value: 928,
    },
    {
      label: "Hungary",
      value: 5853,
    },
    {
      label: "Iceland",
      value: 903,
    },
    {
      label: "India",
      value: 1853,
    },
    {
      label: "Indonesia",
      value: 528,
    },
    {
      label: "Iran, Islamic Republic Of",
      value: 5303,
    },
    {
      label: "Iraq",
      value: 3628,
    },
    {
      label: "Isle of Man",
      value: 6078,
    },
    {
      label: "Israel",
      value: 2428,
    },
    {
      label: "Italy",
      value: 4728,
    },
    {
      label: "Ivory Coast",
      value: 4553,
    },
    {
      label: "Jamaica",
      value: 3453,
    },
    {
      label: "Japan",
      value: 3,
    },
    {
      label: "Jersey",
      value: 2528,
    },
    {
      label: "Jordan",
      value: 2553,
    },
    {
      label: "Kamaran",
      value: 2778,
    },
    {
      label: "Kampuchea",
      value: 3153,
    },
    {
      label: "Kazakhstan",
      value: 3178,
    },
    {
      label: "Kenya",
      value: 2078,
    },
    {
      label: "Kirghizistan",
      value: 3028,
    },
    {
      label: "Kiribati",
      value: 5728,
    },
    {
      label: "Korea, DPR",
      value: 4753,
    },
    {
      label: "Korea, Rep",
      value: 5603,
    },
    {
      label: "Kosovo",
      value: 5878,
    },
    {
      label: "Kuwait",
      value: 1678,
    },
    {
      label: "Kyrgyzstan",
      value: 1253,
    },
    {
      label: "Lao People's DR",
      value: 4678,
    },
    {
      label: "Latvia",
      value: 4953,
    },
    {
      label: "Lebanon",
      value: 3403,
    },
    {
      label: "Lesotho",
      value: 3903,
    },
    {
      label: "Liberia",
      value: 2478,
    },
    {
      label: "Libya",
      value: 303,
    },
    {
      label: "Liechtenstein",
      value: 4503,
    },
    {
      label: "Lithuania",
      value: 5628,
    },
    {
      label: "Luxembourg",
      value: 1003,
    },
    {
      label: "Macao",
      value: 5353,
    },
    {
      label: "Macedonia",
      value: 3503,
    },
    {
      label: "Madagascar",
      value: 4403,
    },
    {
      label: "Malagasy Republic",
      value: 5703,
    },
    {
      label: "Malawi",
      value: 2503,
    },
    {
      label: "Malaysia",
      value: 753,
    },
    {
      label: "Maldives",
      value: 3878,
    },
    {
      label: "Mali",
      value: 353,
    },
    {
      label: "Malta",
      value: 2653,
    },
    {
      label: "Martinique",
      value: 403,
    },
    {
      label: "Mauritania",
      value: 1153,
    },
    {
      label: "Mauritius",
      value: 3378,
    },
    {
      label: "Mexico",
      value: 5378,
    },
    {
      label: "Micronesia",
      value: 6003,
    },
    {
      label: "Moldavia",
      value: 6028,
    },
    {
      label: "Moldova",
      value: 3778,
    },
    {
      label: "Monaco",
      value: 1028,
    },
    {
      label: "Mongolia",
      value: 2153,
    },
    {
      label: "Montenegro",
      value: 5003,
    },
    {
      label: "Montserrat",
      value: 1628,
    },
    {
      label: "Morocco",
      value: 3728,
    },
    {
      label: "Mozambique",
      value: 4228,
    },
    {
      label: "Myanmar",
      value: 4078,
    },
    {
      label: "Namibia",
      value: 203,
    },
    {
      label: "Nauru",
      value: 3228,
    },
    {
      label: "Nepal",
      value: 5153,
    },
    {
      label: "Netherlands",
      value: 3853,
    },
    {
      label: "Nevis",
      value: 328,
    },
    {
      label: "New Caledonia",
      value: 128,
    },
    {
      label: "Nicaragua",
      value: 253,
    },
    {
      label: "Niger",
      value: 3678,
    },
    {
      label: "Nigeria",
      value: 103,
    },
    {
      label: "Niue",
      value: 1503,
    },
    {
      label: "Norway",
      value: 2028,
    },
    {
      label: "Oman",
      value: 2978,
    },
    {
      label: "Pakistan",
      value: 78,
    },
    {
      label: "Palestine, State of",
      value: 6178,
    },
    {
      label: "Panama",
      value: 4103,
    },
    {
      label: "Papua New Guinea",
      value: 1428,
    },
    {
      label: "Paraguay",
      value: 5103,
    },
    {
      label: "Peru",
      value: 5653,
    },
    {
      label: "Philippines",
      value: 1778,
    },
    {
      label: "Pitcairn",
      value: 2103,
    },
    {
      label: "Poland",
      value: 3103,
    },
    {
      label: "Portugal",
      value: 1903,
    },
    {
      label: "Puerto Rico",
      value: 3428,
    },
    {
      label: "Qatar",
      value: 1053,
    },
    {
      label: "Reunion",
      value: 1978,
    },
    {
      label: "Romania",
      value: 278,
    },
    {
      label: "Russia",
      value: 1728,
    },
    {
      label: "Rwanda",
      value: 5678,
    },
    {
      label: "Saba",
      value: 4003,
    },
    {
      label: "Saint Christopher",
      value: 153,
    },
    {
      label: "Saint Eustatius",
      value: 3328,
    },
    {
      label: "Saint Helena",
      value: 2303,
    },
    {
      label: "Saint Kitts and Nevis",
      value: 828,
    },
    {
      label: "Saint Lucia",
      value: 5778,
    },
    {
      label: "Saint Vincent & Grenadines",
      value: 2453,
    },
    {
      label: "San Marino",
      value: 3203,
    },
    {
      label: "Samoa",
      value: 6128,
    },
    {
      label: "Sao Tome and Principe",
      value: 4428,
    },
    {
      label: "Saudi Arabia",
      value: 3053,
    },
    {
      label: "Senegal",
      value: 4028,
    },
    {
      label: "Serbia and Montenegro",
      value: 1328,
    },
    {
      label: "Seychelles",
      value: 1078,
    },
    {
      label: "Sierra Leone",
      value: 4178,
    },
    {
      label: "Singapore",
      value: 3978,
    },
    {
      label: "Slovakia",
      value: 4803,
    },
    {
      label: "Slovenia",
      value: 3003,
    },
    {
      label: "Solomon Islands",
      value: 178,
    },
    {
      label: "Somalia",
      value: 2928,
    },
    {
      label: "Spain",
      value: 3553,
    },
    {
      label: "Sri Lanka",
      value: 778,
    },
    {
      label: "Sudan",
      value: 4278,
    },
    {
      label: "Suriname",
      value: 2953,
    },
    {
      label: "Swaziland",
      value: 953,
    },
    {
      label: "Sweden",
      value: 4603,
    },
    {
      label: "Switzerland",
      value: 2228,
    },
    {
      label: "Syrian Arab Republic",
      value: 1353,
    },
    {
      label: "Tahiti",
      value: 5803,
    },
    {
      label: "Taiwan",
      value: 1303,
    },
    {
      label: "Tajikistan",
      value: 4528,
    },
    {
      label: "Tanzania",
      value: 4478,
    },
    {
      label: "Thailand",
      value: 5253,
    },
    {
      label: "Tibet",
      value: 6053,
    },
    {
      label: "Togo",
      value: 3078,
    },
    {
      label: "Tonga",
      value: 1703,
    },
    {
      label: "Trinidad and Tobago",
      value: 1378,
    },
    {
      label: "Tunisia",
      value: 4578,
    },
    {
      label: "Turkey",
      value: 2628,
    },
    {
      label: "Turkmenistan",
      value: 4653,
    },
    {
      label: "Turks and Caicos Islands",
      value: 5828,
    },
    {
      label: "Tuvalu",
      value: 1878,
    },
    {
      label: "Uganda",
      value: 4853,
    },
    {
      label: "Ukraine",
      value: 3928,
    },
    {
      label: "United Arab Emirates",
      value: 1453,
    },
    {
      label: "Uruguay",
      value: 1203,
    },
    {
      label: "Uzbekistan",
      value: 1178,
    },
    {
      label: "Vanuatu",
      value: 3828,
    },
    {
      label: "Vatican City State",
      value: 4378,
    },
    {
      label: "Venezuela",
      value: 2053,
    },
    {
      label: "Vietnam",
      value: 1953,
    },
    {
      label: "West Indies Associated States",
      value: 853,
    },
    {
      label: "Western Sahara",
      value: 2353,
    },
    {
      label: "Yemen",
      value: 3803,
    },
    {
      label: "Yugoslavia",
      value: 4253,
    },
    {
      label: "Democratic Republic of the Congo",
      value: 1128,
    },
    {
      label: "Zambia",
      value: 3953,
    },
    {
      label: "Zimbabwe",
      value: 5528,
    },
    {
      label: "Other",
      value: 6153,
    },
  ],
  boolean: [
    {
      label: "-- Select --",
      value: null,
    },
    {
      label: "Yes",
      value: true,
    },
    {
      label: "No",
      value: false,
    },
  ],
  new_dependenttype: [
    {
      label: "-- Select --",
      value: null,
    },
    {
      value: 100000004,
      label: "Main Applicant",
    },
    {
      value: 100000000,
      label: "Spouse",
    },
    {
      value: 100000005,
      label: "Partner",
    },
    {
      value: 100000001,
      label: "Child",
    },
    {
      value: 100000002,
      label: "Parent",
    },
    {
      value: 100000003,
      label: "Adult Dependent",
    },
  ],
  new_maritalstatus: [
    {
      label: "-- Select --",
      value: null,
    },
    {
      value: 1,
      label: "Single",
    },
    {
      value: 2,
      label: "Married",
    },
    {
      value: 3,
      label: "Divorced",
    },
    {
      value: 4,
      label: "Widowed",
    },
    {
      value: 200000,
      label: "Separated",
    },
    {
      value: 100000000,
      label: "Cohabiting",
    },
  ],
  new_gender: [
    {
      label: "-- Select --",
      value: null,
    },
    {
      value: 100000000,
      label: "Male",
    },
    {
      value: 100000001,
      label: "Female",
    },
  ],
  opportunities: {
    collection: [],
    collapsed: false,
  },
  grouped: [],
});

const request = {
  contact: {
    new_hasaustraliannationality: false,
    new_hasnewzealandnationality: false,
    new_hasbritishnationality: false,
    new_hasirishnationality: false,
    new_hasbritishoririshnationality: false,
    new_hasportugesecitizenship: false,
    new_haseuropeancitizenship: false,
    new_gender: 1,
    new_maritalstatus: 2,
    new_dateofbirth: "1964-12-30",
    new_dobless1: 18,
    new_wealthinbasecurrency: 1001,
    new_wealthinusdollars: 500001,
    new_wealthineuros: 270000,
    new_wealthinaustraliandollars: 1240001,
    new_overallworth: 1001,
    new_nationality: 5478,
    new_nationality2: -1,
    new_nationality3: -1,
    new_passport: 5478,
    new_passport2: -1,
    new_passport3: -1,
    new_countryvocationshortage: 100000000,
    new_region: 100000005,
    new_countryoforigin: 5553,
  },

  /**/
  dependent: {
    new_dependenttype: 100000005,
    new_dateofbirth: "1964-12-30",
    new_dateofmarriage: "1981-12-30",
    new_hasbritishnationality: 0,
    new_hasaustraliannationality: 0,
    new_hasnewzealandnationality: 0,
    new_hasirishnationality: 0,
    new_hasbritishoririshnationality: 0,
    new_hasportugesecitizenship: 0,
    new_haseuropeancitizenship: 1,
    new_maritalstatus: 2,
    new_nationality: 5478,
    new_nationality2: -1,
    new_nationality3: -1,
    new_passport: 5478,
    new_passport2: -1,
    new_passport3: -1,
  },

  ancestry: {
    new_fathercountryofbirth: 5478,
    new_mothercountryofbirth: 5477,
    new_mothersfathercountryofbirth: 5477,
    new_mothersmothercountryofbirth: 5477,
    new_fathersfathercountryofbirth: 5477,
    new_fathersmothercountryofbirth: 5477,
    new_applicantplaceofbirth: 5477,
    new_clientplaceofbirth: 3953,
    new_clientbornineurope: 1,
    new_fatherbornineurope: 1,
    new_motherbornineurope: 1,
    new_fathersfatherbornineurope: 1,
    new_fathersmotherbornineurope: 1,
    new_mothersfatherbornineurope: 1,
    new_mothersmotherbornineurope: 1,
  },
};

const request2 = {
  contact: {
    new_dobless1: 18,
    new_countryoforigin: 5477,
    new_maritalstatus: 1,
    new_hasbritishoririshnationality: 0,
  },

  dependent: {
    new_dependenttype: "100000005",
    new_hasirishnationality: 1,
  },

  ancestry: {
    new_fathercountryofbirth: 5477,
    new_mothercountryofbirth: 5477,
  },
};

const solutions = ref([]);

onMounted(() => {
  data.socket.on("connect", function () {
    console.log("connect");
  });

  data.socket.on("find-solution-response", (responseData: any) => {
    console.log("New Message: ", responseData);
    data.opportunities.collection = responseData;

    data.grouped = groupArray(responseData.data, "country");

    const solutions = responseData;
    solutions.value = responseData.data;
    solutions.data.forEach(function (solution: any, index: number) {
      console.log(
        `[${index + 1}]: Country: ${solution.country}, Solution: ${
          solution.name
        }`
      );
    });
  });

  data.socket.on("disconnect", function () {
    console.log("disconnect");
  });
});

/*
watch(
  () => model,
  (v, ov) => {
    //console.log(JSON.stringify(ov.value));
    // console.log(JSON.stringify(v.value));
    const time = new Date().getTime().toString();
    console.log("...");
    console.log(`[${time}] checking opportunities...`);
    data.socket.emit("find-solution-request", {
      _id: "tester",
      data: request,
    });
  },
  { deep: true }
);
*/

/*
    // working
      contact: {
        new_dobless1: 18,
        new_nationality: 4627,
        new_nationality2: -1,
        new_nationality3: -1,
        new_passport: 4627,
        new_passport2: -1,
        new_passport3: -1,
        new_wealthinusdollars: 185001,
      },

      dependent: {
        new_passport: 4627,
        new_passport2: -1,
        new_passport3: -1,
        new_nationality: 4627,
        new_nationality2: -1,
        new_nationality3: -1,
        new_dependenttype: 100000000,
      },
*/

const checkForOpportunities = () => {
  console.log(model.value);

  data.socket.emit("find-solution-request", {
    _id: "testerX",
    //data: model.value,
    data: {
      contact: {
        new_dobless1: 18,
        new_nationality: 4627,
        new_nationality2: -1,
        new_nationality3: -1,
        new_passport: 4627,
        new_passport2: -1,
        new_passport3: -1,
        new_wealthinusdollars: 185001,
      },

      dependent: {
        new_passport: 4627,
        new_passport2: -1,
        new_passport3: -1,
        new_nationality: 4627,
        new_nationality2: -1,
        new_nationality3: -1,
        new_dependenttype: 100000005,
      },

      ancestry: {},
    },
  });
};

const schema: FormKitSchemaNode[] = [
  /*{
    $cmp: "FormKit",
    props: {
      type: "form",
      id: "form",
      onSubmit: "$submitApp",
      plugins: "$plugins",
      actions: false,
    },
    children: [
      */
  {
    $formkit: "select",
    label: "new_applicantplaceofbirth",
    name: "new_applicantplaceofbirth",
    options: `$countries`,
  },
  {
    $formkit: "select",
    label: "new_candidatedateofbirth",
    name: "new_candidatedateofbirth",
    options: `$countries`,
  },
  {
    $formkit: "select",
    label: "new_clientbornineurope",
    name: "new_clientbornineurope",
    options: `$boolean`,
  },
  {
    $formkit: "select",
    label: "new_clientplaceofbirth",
    name: "new_clientplaceofbirth",
    options: `$countries`,
  },
  {
    $formkit: "select",
    label: "new_countryoforigin",
    name: "new_countryoforigin",
    options: `$countries`,
  },
  {
    $formkit: "date",
    label: "new_dateofbirth",
    name: "new_dateofbirth",
  },
  {
    $formkit: "date",
    label: "new_dateofmarriage",
    name: "new_dateofmarriage",
  },
  {
    $formkit: "select",
    label: "new_dependenttype",
    name: "new_dependenttype",
    options: `$new_dependenttype`,
  },
  {
    $formkit: "number",
    label: "new_dobless1",
    name: "new_dobless1",
  },
  {
    $formkit: "select",
    label: "new_fatherbornineurope",
    name: "new_fatherbornineurope",
    options: `$boolean`,
  },
  {
    $formkit: "select",
    label: "new_fathercountryofbirth",
    name: "new_fathercountryofbirth",
    options: `$countries`,
  },
  {
    $formkit: "date",
    label: "new_fatherdateofbirth",
    name: "new_fatherdateofbirth",
  },
  {
    $formkit: "select",
    label: "new_fathersfatherbornineurope",
    name: "new_fathersfatherbornineurope",
    options: `$boolean`,
  },
  {
    $formkit: "select",
    label: "new_fathersfathercountryofbirth",
    name: "new_fathersfathercountryofbirth",
    options: `$countries`,
  },
  {
    $formkit: "select",
    label: "new_fathersmotherbornineurope",
    name: "new_fathersmotherbornineurope",
    options: `$boolean`,
  },
  {
    $formkit: "select",
    label: "new_fathersmothercountryofbirth",
    name: "new_fathersmothercountryofbirth",
    options: `$countries`,
  },
  {
    $formkit: "select",
    label: "new_gender",
    name: "new_gender",
    options: `$new_gender`,
  },
  {
    $formkit: "select",
    label: "new_hasaustraliannationality",
    name: "new_hasaustraliannationality",
    options: `$boolean`,
  },
  {
    $formkit: "select",
    label: "new_hasbritishnationality",
    name: "new_hasbritishnationality",
    options: `$boolean`,
  },
  {
    $formkit: "select",
    label: "new_hasbritishoririshnationality",
    name: "new_hasbritishoririshnationality",
    options: `$boolean`,
  },
  {
    $formkit: "select",
    label: "new_hascommonwealthnationality",
    name: "new_hascommonwealthnationality",
    options: `$boolean`,
  },
  {
    $formkit: "select",
    label: "new_haseuropeancitizenship",
    name: "new_haseuropeancitizenship",
    options: `$boolean`,
  },
  {
    $formkit: "select",
    label: "new_hasirishnationality",
    name: "new_hasirishnationality",
    options: `$boolean`,
  },
  {
    $formkit: "select",
    label: "new_hasnewzealandnationality",
    name: "new_hasnewzealandnationality",
    options: `$boolean`,
  },
  {
    $formkit: "select",
    label: "new_hasportugesecitizenship",
    name: "new_hasportugesecitizenship",
    options: `$boolean`,
  },
  {
    $formkit: "select",
    label: "new_maritalstatus",
    name: "new_maritalstatus",
    options: `$new_maritalstatus`,
  },
  {
    $formkit: "select",
    label: "new_motherbornineurope",
    name: "new_motherbornineurope",
    options: `$boolean`,
  },
  {
    $formkit: "select",
    label: "new_mothercountryofbirth",
    name: "new_mothercountryofbirth",
    options: `$countries`,
  },
  {
    $formkit: "date",
    label: "new_motherdateofbirth",
    name: "new_motherdateofbirth",
  },
  {
    $formkit: "select",
    label: "new_mothersfatherbornineurope",
    name: "new_mothersfatherbornineurope",
    options: `$boolean`,
  },
  {
    $formkit: "select",
    label: "new_mothersfathercountryofbirth",
    name: "new_mothersfathercountryofbirth",
    options: `$countries`,
  },
  {
    $formkit: "select",
    label: "new_mothersmotherbornineurope",
    name: "new_mothersmotherbornineurope",
    options: `$boolean`,
  },
  {
    $formkit: "select",
    label: "new_mothersmothercountryofbirth",
    name: "new_mothersmothercountryofbirth",
    options: `$countries`,
  },
  {
    $formkit: "select",
    label: "new_nationality",
    name: "new_nationality",
    options: `$countries`,
  },
  {
    $formkit: "select",
    label: "new_nationality2",
    name: "new_nationality2",
    options: `$countries`,
  },
  {
    $formkit: "select",
    label: "new_nationality3",
    name: "new_nationality3",
    options: `$countries`,
  },
  {
    $formkit: "number",
    label: "new_overallworth",
    name: "new_overallworth",
  },
  {
    $formkit: "date",
    label: "new_parentsdateofmarriage",
    name: "new_parentsdateofmarriage",
  },
  {
    $formkit: "select",
    label: "new_passport",
    name: "new_passport",
    options: `$countries`,
  },
  {
    $formkit: "select",
    label: "new_passport2",
    name: "new_passport2",
    options: `$countries`,
  },
  {
    $formkit: "select",
    label: "new_passport3",
    name: "new_passport3",
    options: `$countries`,
  },
  {
    $formkit: "select",
    label: "new_placeofbirth",
    name: "new_placeofbirth",
    options: `$countries`,
  },
  {
    $formkit: "number",
    label: "new_wealthinaustraliandollars",
    name: "new_wealthinaustraliandollars",
  },
  {
    $formkit: "number",
    label: "new_wealthinbasecurrency",
    name: "new_wealthinbasecurrency",
  },
  {
    $formkit: "number",
    label: "new_wealthineuros",
    name: "new_wealthineuros",
  },
  {
    $formkit: "number",
    label: "new_wealthinusdollars",
    name: "new_wealthinusdollars",
  },
];

const group = () => {
  // console.log(solutions.value);
  //grouped.value = groupArray(solutions.value, "country");
};

const c = computed(() => {
  return Object.keys(data.grouped).map((key, index, array) => {
    return {
      country: key,
      options: (data.grouped[key as any] as []).length,
    };
  });
});
</script>

<template>
  <pre v-show="false">{{ model }}</pre>

  <JsonEditorVue
    v-model="model"
    v-bind="{
      /* local props & attrs */
    }"
    v-show="false"
  />

  <br />

  <button @click="checkForOpportunities">Send</button>

  <FormKit type="form" id="form" :actions="false" v-model="model">
    <FormKitSchema :schema="schema" :data="data" />
  </FormKit>
  <button @click="group">Group now!</button>

  <p>Total: {{ data?.opportunities?.collection?.data?.length }}</p>
  <p>Grouped: {{ Object.keys(data.grouped).length }}</p>
  <p>
    Unnamed:
    {{
      data?.opportunities?.collection?.data?.filter((x) => !x.country).length
    }}
  </p>

  <pre>{{ c }}</pre>

  <pre>{{ data.grouped }}</pre>
</template>

<style lang="scss">
/* Styles imported for brevity */
/* CSS for multi-step forms is not included in the default Genesis theme.
   styles were custom-written for this example and you will need to provide
   your own. */

.hidden {
  display: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.formkit-wrapper {
  display: inline-flex;
  align-items: baseline;

  label {
    padding-right: 10px;
  }
}
</style>
