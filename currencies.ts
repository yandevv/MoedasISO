export type CurrencyType = {
  symbol: string
  name: string
  symbol_native: string
  decimal_digits: number
  rounding: number
  code: string
  name_plural: string
}

type CurrenciesType = {
  [key: string]: CurrencyType
}

export const currencies: CurrenciesType = {
  USD: {
    symbol: "$",
    name: "Dólar Americano",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "USD",
    name_plural: "Dólares americanos",
  },
  CAD: {
    symbol: "CA$",
    name: "Dólar Canadense",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "CAD",
    name_plural: "Dólares canadenses",
  },
  EUR: {
    symbol: "€",
    name: "Euro",
    symbol_native: "€",
    decimal_digits: 2,
    rounding: 0,
    code: "EUR",
    name_plural: "Euros",
  },
  AED: {
    symbol: "AED",
    name: "Dirame dos Emirados Árabes Unidos",
    symbol_native: "د.إ.‏",
    decimal_digits: 2,
    rounding: 0,
    code: "AED",
    name_plural: "EAU Dirames",
  },
  AFN: {
    symbol: "Af",
    name: "Afegane afegão",
    symbol_native: "؋",
    decimal_digits: 0,
    rounding: 0,
    code: "AFN",
    name_plural: "Afeganes afegãos",
  },
  ALL: {
    symbol: "ALL",
    name: "Lek Albânes",
    symbol_native: "Lek",
    decimal_digits: 2,
    rounding: 0,
    code: "ALL",
    name_plural: "Lekes albânes",
  },
  AMD: {
    symbol: "AMD",
    name: "Dram Arménio",
    symbol_native: "դր.",
    decimal_digits: 2,
    rounding: 0,
    code: "AMD",
    name_plural: "Drames arménios",
  },
  ARS: {
    symbol: "AR$",
    name: "Peso Argentino",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "ARS",
    name_plural: "Pesos argentinos",
  },
  AUD: {
    symbol: "AU$",
    name: "Dólar Australiano",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "AUD",
    name_plural: "Dólares australianos",
  },
  AZN: {
    symbol: "man.",
    name: "Manat Azerbaijano",
    symbol_native: "ман.",
    decimal_digits: 2,
    rounding: 0,
    code: "AZN",
    name_plural: "Manates azerbaijanos",
  },
  BAM: {
    symbol: "KM",
    name: "Marco Convertível da Bósnia e Herzegovina",
    symbol_native: "KM",
    decimal_digits: 2,
    rounding: 0,
    code: "BAM",
    name_plural: "Marcos convertíveis da Bósnia e Herzegovina",
  },
  BDT: {
    symbol: "Tk",
    name: "Taka Bangladexense",
    symbol_native: "৳",
    decimal_digits: 2,
    rounding: 0,
    code: "BDT",
    name_plural: "Takas bangladexenses",
  },
  BGN: {
    symbol: "BGN",
    name: "Lev Búlgaro",
    symbol_native: "лв.",
    decimal_digits: 2,
    rounding: 0,
    code: "BGN",
    name_plural: "Leves búlgaros",
  },
  BHD: {
    symbol: "BD",
    name: "Dinar Berenita",
    symbol_native: "د.ب.‏",
    decimal_digits: 3,
    rounding: 0,
    code: "BHD",
    name_plural: "Dinares berenitas",
  },
  BIF: {
    symbol: "FBu",
    name: "Franco Burundiano",
    symbol_native: "FBu",
    decimal_digits: 0,
    rounding: 0,
    code: "BIF",
    name_plural: "Francos burundianos",
  },
  BND: {
    symbol: "BN$",
    name: "Dólar do Brunei",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "BND",
    name_plural: "Dólares do Brunei",
  },
  BOB: {
    symbol: "Bs",
    name: "Boliviano",
    symbol_native: "Bs",
    decimal_digits: 2,
    rounding: 0,
    code: "BOB",
    name_plural: "Bolivianos",
  },
  BRL: {
    symbol: "R$",
    name: "Real",
    symbol_native: "R$",
    decimal_digits: 2,
    rounding: 0,
    code: "BRL",
    name_plural: "Reais",
  },
  BWP: {
    symbol: "BWP",
    name: "Pula do Botsuana",
    symbol_native: "P",
    decimal_digits: 2,
    rounding: 0,
    code: "BWP",
    name_plural: "Pulas do Botsuana",
  },
  BYN: {
    symbol: "Br",
    name: "Rublo Bielorrusso",
    symbol_native: "руб.",
    decimal_digits: 2,
    rounding: 0,
    code: "BYN",
    name_plural: "Rublos bielorrussos",
  },
  BZD: {
    symbol: "BZ$",
    name: "Dólar do Belize",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "BZD",
    name_plural: "Dólares do Belize",
  },
  CDF: {
    symbol: "CDF",
    name: "Franco Congolês",
    symbol_native: "FrCD",
    decimal_digits: 2,
    rounding: 0,
    code: "CDF",
    name_plural: "Francos congolês",
  },
  CHF: {
    symbol: "CHF",
    name: "Franco Suíço",
    symbol_native: "CHF",
    decimal_digits: 2,
    rounding: 0.05,
    code: "CHF",
    name_plural: "Francos suíços",
  },
  CLP: {
    symbol: "CL$",
    name: "Peso Chileno",
    symbol_native: "$",
    decimal_digits: 0,
    rounding: 0,
    code: "CLP",
    name_plural: "Pesos chilenos",
  },
  CNY: {
    symbol: "CN¥",
    name: "Iuane Chinês",
    symbol_native: "CN¥",
    decimal_digits: 2,
    rounding: 0,
    code: "CNY",
    name_plural: "Iuanes chineses",
  },
  COP: {
    symbol: "CO$",
    name: "Peso Colombiano",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "COP",
    name_plural: "Pesos colombianos",
  },
  CRC: {
    symbol: "₡",
    name: "Colones Costarriquenho",
    symbol_native: "₡",
    decimal_digits: 2,
    rounding: 0,
    code: "CRC",
    name_plural: "Colones costarriquenhos",
  },
  CVE: {
    symbol: "CV$",
    name: "Escudo cabo-verdiano",
    symbol_native: "CV$",
    decimal_digits: 2,
    rounding: 0,
    code: "CVE",
    name_plural: "Escudos cabo-verdianos",
  },
  CZK: {
    symbol: "Kč",
    name: "Coroa checa",
    symbol_native: "Kč",
    decimal_digits: 2,
    rounding: 0,
    code: "CZK",
    name_plural: "Coroas checas",
  },
  DJF: {
    symbol: "Fdj",
    name: "Franco Jibutiano",
    symbol_native: "Fdj",
    decimal_digits: 0,
    rounding: 0,
    code: "DJF",
    name_plural: "Francos jibutianos",
  },
  DKK: {
    symbol: "Dkr",
    name: "Coroa Dinamarquesa",
    symbol_native: "kr",
    decimal_digits: 2,
    rounding: 0,
    code: "DKK",
    name_plural: "Coroas dinamarquesas",
  },
  DOP: {
    symbol: "RD$",
    name: "Peso Dominicano",
    symbol_native: "RD$",
    decimal_digits: 2,
    rounding: 0,
    code: "DOP",
    name_plural: "Pesos dominicanos",
  },
  DZD: {
    symbol: "DA",
    name: "Dinar Argelino",
    symbol_native: "د.ج.‏",
    decimal_digits: 2,
    rounding: 0,
    code: "DZD",
    name_plural: "Dinares argelinos",
  },
  EEK: {
    symbol: "Ekr",
    name: "Coroa Estoniana",
    symbol_native: "kr",
    decimal_digits: 2,
    rounding: 0,
    code: "EEK",
    name_plural: "Coroas estonianas",
  },
  EGP: {
    symbol: "EGP",
    name: "Libra Egípcia",
    symbol_native: "ج.م.‏",
    decimal_digits: 2,
    rounding: 0,
    code: "EGP",
    name_plural: "Libras egípcias",
  },
  ERN: {
    symbol: "Nfk",
    name: "Nakfa Eritreia",
    symbol_native: "Nfk",
    decimal_digits: 2,
    rounding: 0,
    code: "ERN",
    name_plural: "Nakfas eritreias",
  },
  ETB: {
    symbol: "Br",
    name: "Birre Etíope",
    symbol_native: "Br",
    decimal_digits: 2,
    rounding: 0,
    code: "ETB",
    name_plural: "Birres etíopes",
  },
  GBP: {
    symbol: "£",
    name: "Libra Esterlina",
    symbol_native: "£",
    decimal_digits: 2,
    rounding: 0,
    code: "GBP",
    name_plural: "Libras esterlinas",
  },
  GEL: {
    symbol: "GEL",
    name: "Lári Georgiano",
    symbol_native: "GEL",
    decimal_digits: 2,
    rounding: 0,
    code: "GEL",
    name_plural: "Láris georgianos",
  },
  GHS: {
    symbol: "GH₵",
    name: "Cedi do Gana",
    symbol_native: "GH₵",
    decimal_digits: 2,
    rounding: 0,
    code: "GHS",
    name_plural: "Cedis do Gana",
  },
  GNF: {
    symbol: "FG",
    name: "Franco Guineense",
    symbol_native: "FG",
    decimal_digits: 0,
    rounding: 0,
    code: "GNF",
    name_plural: "Francos guineenses",
  },
  GTQ: {
    symbol: "GTQ",
    name: "Quetzal Guatemalteco",
    symbol_native: "Q",
    decimal_digits: 2,
    rounding: 0,
    code: "GTQ",
    name_plural: "Quetzais guatemaltecos",
  },
  HKD: {
    symbol: "HK$",
    name: "Dólar do Hong Kong",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "HKD",
    name_plural: "Dólares do Hong Kong",
  },
  HNL: {
    symbol: "HNL",
    name: "Lempira Hondurenha",
    symbol_native: "L",
    decimal_digits: 2,
    rounding: 0,
    code: "HNL",
    name_plural: "Lempiras hondurenhas",
  },
  HRK: {
    symbol: "kn",
    name: "Kuna Croata",
    symbol_native: "kn",
    decimal_digits: 2,
    rounding: 0,
    code: "HRK",
    name_plural: "Kunas croatas",
  },
  HUF: {
    symbol: "Ft",
    name: "Florim Húngaro",
    symbol_native: "Ft",
    decimal_digits: 2,
    rounding: 0,
    code: "HUF",
    name_plural: "Florins húngaros",
  },
  IDR: {
    symbol: "Rp",
    name: "Rupia Indonésia",
    symbol_native: "Rp",
    decimal_digits: 2,
    rounding: 0,
    code: "IDR",
    name_plural: "Rupias indonésias",
  },
  ILS: {
    symbol: "₪",
    name: "Novo Shekel Israelita",
    symbol_native: "₪",
    decimal_digits: 2,
    rounding: 0,
    code: "ILS",
    name_plural: "Novos shekeles israelitas",
  },
  INR: {
    symbol: "Rs",
    name: "Rupia Indiana",
    symbol_native: "টকা",
    decimal_digits: 2,
    rounding: 0,
    code: "INR",
    name_plural: "Rupias indianas",
  },
  IQD: {
    symbol: "IQD",
    name: "Dinar Iraquiano",
    symbol_native: "د.ع.‏",
    decimal_digits: 0,
    rounding: 0,
    code: "IQD",
    name_plural: "Dinares iraquianos",
  },
  IRR: {
    symbol: "IRR",
    name: "Rial Iraniano",
    symbol_native: "﷼",
    decimal_digits: 0,
    rounding: 0,
    code: "IRR",
    name_plural: "Riais iranianos",
  },
  ISK: {
    symbol: "Ikr",
    name: "Coroa Islandesa",
    symbol_native: "kr",
    decimal_digits: 2,
    rounding: 0,
    code: "ISK",
    name_plural: "Coroas islandesas",
  },
  JMD: {
    symbol: "J$",
    name: "Dólar Jamaicano",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "JMD",
    name_plural: "Dólares jamaicanos",
  },
  JOD: {
    symbol: "JD",
    name: "Dinar Jordano",
    symbol_native: "د.أ.‏",
    decimal_digits: 3,
    rounding: 0,
    code: "JOD",
    name_plural: "Dinares jordanos",
  },
  JPY: {
    symbol: "¥",
    name: "Iene Japonês",
    symbol_native: "￥",
    decimal_digits: 0,
    rounding: 0,
    code: "JPY",
    name_plural: "Ienes japoneses",
  },
  KES: {
    symbol: "Ksh",
    name: "Xelim Queniano",
    symbol_native: "Ksh",
    decimal_digits: 2,
    rounding: 0,
    code: "KES",
    name_plural: "Xelins quenianos",
  },
  KHR: {
    symbol: "KHR",
    name: "Riel Cambojano",
    symbol_native: "៛",
    decimal_digits: 2,
    rounding: 0,
    code: "KHR",
    name_plural: "Rieis cambojanos",
  },
  KMF: {
    symbol: "CF",
    name: "Franco Comorense",
    symbol_native: "FC",
    decimal_digits: 0,
    rounding: 0,
    code: "KMF",
    name_plural: "Francos comorenses",
  },
  KRW: {
    symbol: "₩",
    name: "Won Sul-Coreano",
    symbol_native: "₩",
    decimal_digits: 0,
    rounding: 0,
    code: "KRW",
    name_plural: "Wones sul-coreanos",
  },
  KWD: {
    symbol: "KD",
    name: "Dinar Cuaitiano",
    symbol_native: "د.ك.‏",
    decimal_digits: 3,
    rounding: 0,
    code: "KWD",
    name_plural: "Dinares cuaitianos",
  },
  KZT: {
    symbol: "KZT",
    name: "Tengue Cazaque",
    symbol_native: "тңг.",
    decimal_digits: 2,
    rounding: 0,
    code: "KZT",
    name_plural: "Tengues cazaques",
  },
  LBP: {
    symbol: "LB£",
    name: "Libra Libanesa",
    symbol_native: "ل.ل.‏",
    decimal_digits: 2,
    rounding: 0,
    code: "LBP",
    name_plural: "Libras libanesas",
  },
  LKR: {
    symbol: "SLRs",
    name: "Rupia do Sri Lanka",
    symbol_native: "SL Re",
    decimal_digits: 2,
    rounding: 0,
    code: "LKR",
    name_plural: "Rupias do Sri Lanka",
  },
  LTL: {
    symbol: "Lt",
    name: "Lithuanian Litas",
    symbol_native: "Lt",
    decimal_digits: 2,
    rounding: 0,
    code: "LTL",
    name_plural: "Lithuanian litai",
  },
  LVL: {
    symbol: "Ls",
    name: "Latvian Lats",
    symbol_native: "Ls",
    decimal_digits: 2,
    rounding: 0,
    code: "LVL",
    name_plural: "Latvian lati",
  },
  LYD: {
    symbol: "LD",
    name: "Dinar Líbio",
    symbol_native: "د.ل.‏",
    decimal_digits: 3,
    rounding: 0,
    code: "LYD",
    name_plural: "Dinares líbios",
  },
  MAD: {
    symbol: "MAD",
    name: "Dirame marroquino",
    symbol_native: "د.م.‏",
    decimal_digits: 2,
    rounding: 0,
    code: "MAD",
    name_plural: "Dirames marroquinos",
  },
  MDL: {
    symbol: "MDL",
    name: "Leu moldávio",
    symbol_native: "MDL",
    decimal_digits: 2,
    rounding: 0,
    code: "MDL",
    name_plural: "Léis moldávios",
  },
  MGA: {
    symbol: "MGA",
    name: "Ariari malgaxe",
    symbol_native: "MGA",
    decimal_digits: 0,
    rounding: 0,
    code: "MGA",
    name_plural: "Ariarias malgaxes",
  },
  MKD: {
    symbol: "MKD",
    name: "Dinar Macedônio",
    symbol_native: "MKD",
    decimal_digits: 2,
    rounding: 0,
    code: "MKD",
    name_plural: "Dinares macedônios",
  },
  MMK: {
    symbol: "MMK",
    name: "Kyat de Mianmar",
    symbol_native: "K",
    decimal_digits: 2,
    rounding: 0,
    code: "MMK",
    name_plural: "Kyats de Mianmar",
  },
  MOP: {
    symbol: "MOP$",
    name: "Macanese Pataca",
    symbol_native: "MOP$",
    decimal_digits: 2,
    rounding: 0,
    code: "MOP",
    name_plural: "Macanese patacas",
  },
  MUR: {
    symbol: "MURs",
    name: "Rupia Maurícia",
    symbol_native: "MURs",
    decimal_digits: 2,
    rounding: 0,
    code: "MUR",
    name_plural: "Rupias maurícias",
  },
  MXN: {
    symbol: "MX$",
    name: "Peso Mexicano",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "MXN",
    name_plural: "Pesos mexicanos",
  },
  MYR: {
    symbol: "RM",
    name: "Ringuite Malaio",
    symbol_native: "RM",
    decimal_digits: 2,
    rounding: 0,
    code: "MYR",
    name_plural: "Ringuites malaios",
  },
  MZN: {
    symbol: "MTn",
    name: "Metical Moçambicano",
    symbol_native: "MTn",
    decimal_digits: 2,
    rounding: 0,
    code: "MZN",
    name_plural: "Meticais moçambicanos",
  },
  NAD: {
    symbol: "N$",
    name: "Dólar Namibiano",
    symbol_native: "N$",
    decimal_digits: 2,
    rounding: 0,
    code: "NAD",
    name_plural: "Dólares namibianos",
  },
  NGN: {
    symbol: "₦",
    name: "Naira Nigeriano",
    symbol_native: "₦",
    decimal_digits: 2,
    rounding: 0,
    code: "NGN",
    name_plural: "Nairas nigerianos",
  },
  NIO: {
    symbol: "C$",
    name: "Córdoba Nicaraguano",
    symbol_native: "C$",
    decimal_digits: 2,
    rounding: 0,
    code: "NIO",
    name_plural: "Córdobas nicaraguanos",
  },
  NOK: {
    symbol: "Nkr",
    name: "Coroa Norueguesa",
    symbol_native: "kr",
    decimal_digits: 2,
    rounding: 0,
    code: "NOK",
    name_plural: "Coroas norueguesas",
  },
  NPR: {
    symbol: "NPRs",
    name: "Rupia Nepalesa",
    symbol_native: "नेरू",
    decimal_digits: 2,
    rounding: 0,
    code: "NPR",
    name_plural: "Rupias nepalesas",
  },
  NZD: {
    symbol: "NZ$",
    name: "Dólar da Nova Zelândia",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "NZD",
    name_plural: "Dólares da Nova Zelândia",
  },
  OMR: {
    symbol: "OMR",
    name: "	Rial Omanense",
    symbol_native: "ر.ع.‏",
    decimal_digits: 3,
    rounding: 0,
    code: "OMR",
    name_plural: "Riais omanenses",
  },
  PAB: {
    symbol: "B/.",
    name: "Balboa Panamense",
    symbol_native: "B/.",
    decimal_digits: 2,
    rounding: 0,
    code: "PAB",
    name_plural: "Balboas panamense",
  },
  PEN: {
    symbol: "S/.",
    name: "Novo Sol Peruano",
    symbol_native: "S/.",
    decimal_digits: 2,
    rounding: 0,
    code: "PEN",
    name_plural: "Novos sóis peruanos",
  },
  PHP: {
    symbol: "₱",
    name: "Peso filipino",
    symbol_native: "₱",
    decimal_digits: 2,
    rounding: 0,
    code: "PHP",
    name_plural: "Pesos filipinos",
  },
  PKR: {
    symbol: "PKRs",
    name: "Rupia Paquistanesa",
    symbol_native: "₨",
    decimal_digits: 0,
    rounding: 0,
    code: "PKR",
    name_plural: "Rupias paquistanesas",
  },
  PLN: {
    symbol: "zł",
    name: "Zlóti polaco",
    symbol_native: "zł",
    decimal_digits: 2,
    rounding: 0,
    code: "PLN",
    name_plural: "Zlótis polacos",
  },
  PYG: {
    symbol: "₲",
    name: "Guarani Paraguaio",
    symbol_native: "₲",
    decimal_digits: 0,
    rounding: 0,
    code: "PYG",
    name_plural: "Guaranis paraguaios",
  },
  QAR: {
    symbol: "QR",
    name: "Rial Catarense",
    symbol_native: "ر.ق.‏",
    decimal_digits: 2,
    rounding: 0,
    code: "QAR",
    name_plural: "Riais catarenses",
  },
  RON: {
    symbol: "RON",
    name: "Leu Romeno",
    symbol_native: "RON",
    decimal_digits: 2,
    rounding: 0,
    code: "RON",
    name_plural: "Léis romenos",
  },
  RSD: {
    symbol: "din.",
    name: "Dinar Sérvio",
    symbol_native: "дин.",
    decimal_digits: 0,
    rounding: 0,
    code: "RSD",
    name_plural: "Dinares sérvios",
  },
  RUB: {
    symbol: "RUB",
    name: "Rublo Russo",
    symbol_native: "₽.",
    decimal_digits: 2,
    rounding: 0,
    code: "RUB",
    name_plural: "Rublos russos",
  },
  RWF: {
    symbol: "RWF",
    name: "Franco ruandês",
    symbol_native: "FR",
    decimal_digits: 0,
    rounding: 0,
    code: "RWF",
    name_plural: "Francos ruandeses",
  },
  SAR: {
    symbol: "SR",
    name: "Rial Saudita",
    symbol_native: "ر.س.‏",
    decimal_digits: 2,
    rounding: 0,
    code: "SAR",
    name_plural: "Riais sauditas",
  },
  SDG: {
    symbol: "SDG",
    name: "Libra Sudanesa",
    symbol_native: "SDG",
    decimal_digits: 2,
    rounding: 0,
    code: "SDG",
    name_plural: "Libras sudanesas",
  },
  SEK: {
    symbol: "Skr",
    name: "Coroa Sueca",
    symbol_native: "kr",
    decimal_digits: 2,
    rounding: 0,
    code: "SEK",
    name_plural: "Coroas suecas",
  },
  SGD: {
    symbol: "S$",
    name: "Dólar de Singapura",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "SGD",
    name_plural: "Dólares de Singapura",
  },
  SOS: {
    symbol: "Ssh",
    name: "Xelim somaliano",
    symbol_native: "Ssh",
    decimal_digits: 0,
    rounding: 0,
    code: "SOS",
    name_plural: "Xelins somalianos",
  },
  SYP: {
    symbol: "SY£",
    name: "Libra Síria",
    symbol_native: "ل.س.‏",
    decimal_digits: 0,
    rounding: 0,
    code: "SYP",
    name_plural: "Libras sírias",
  },
  THB: {
    symbol: "฿",
    name: "Baht Tailandês",
    symbol_native: "฿",
    decimal_digits: 2,
    rounding: 0,
    code: "THB",
    name_plural: "Bahtes tailandeses",
  },
  TND: {
    symbol: "DT",
    name: "Dinar Tunisino",
    symbol_native: "د.ت.‏",
    decimal_digits: 3,
    rounding: 0,
    code: "TND",
    name_plural: "Dinares tunisinos",
  },
  TOP: {
    symbol: "T$",
    name: "Paʻanga tonganesa",
    symbol_native: "T$",
    decimal_digits: 2,
    rounding: 0,
    code: "TOP",
    name_plural: "Paʻangas tonganesas",
  },
  TRY: {
    symbol: "TL",
    name: "Lira Turca",
    symbol_native: "TL",
    decimal_digits: 2,
    rounding: 0,
    code: "TRY",
    name_plural: "Liras turcas",
  },
  TTD: {
    symbol: "TT$",
    name: "Dólar de Trindade e Tobago",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "TTD",
    name_plural: "Dólares de Trindade e Tobago",
  },
  TWD: {
    symbol: "NT$",
    name: "Novo Dólar de Taiuã",
    symbol_native: "NT$",
    decimal_digits: 2,
    rounding: 0,
    code: "TWD",
    name_plural: "Novos dólares de Taiuã",
  },
  TZS: {
    symbol: "TSh",
    name: "Xelim Tanzaniano",
    symbol_native: "TSh",
    decimal_digits: 2,
    rounding: 0,
    code: "TZS",
    name_plural: "Xelins tanzanianos",
  },
  UAH: {
    symbol: "₴",
    name: "Grívnia Ucraniana",
    symbol_native: "₴",
    decimal_digits: 2,
    rounding: 0,
    code: "UAH",
    name_plural: "Grívnias ucranianas",
  },
  UGX: {
    symbol: "USh",
    name: "Xelim ugandês",
    symbol_native: "USh",
    decimal_digits: 2,
    rounding: 0,
    code: "UGX",
    name_plural: "Xelins ugandeses",
  },
  UYU: {
    symbol: "$U",
    name: "Peso Uruguaio",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "UYU",
    name_plural: "Pesos uruguaios",
  },
  UZS: {
    symbol: "UZS",
    name: "Som usbeque",
    symbol_native: "UZS",
    decimal_digits: 2,
    rounding: 0,
    code: "UZS",
    name_plural: "Sons usbeques ",
  },
  VEF: {
    symbol: "Bs.F.",
    name: "	Bolívar Venezuelano",
    symbol_native: "Bs.F.",
    decimal_digits: 2,
    rounding: 0,
    code: "VEF",
    name_plural: "Bolívares venezuelanos",
  },
  VND: {
    symbol: "₫",
    name: "Dongue Vietnamita",
    symbol_native: "₫",
    decimal_digits: 0,
    rounding: 0,
    code: "VND",
    name_plural: "Dongues vietnamitas",
  },
  XAF: {
    symbol: "FCFA",
    name: "Franco CFA BEAC",
    symbol_native: "FCFA",
    decimal_digits: 0,
    rounding: 0,
    code: "XAF",
    name_plural: "Francos CFA BEAC",
  },
  XOF: {
    symbol: "CFA",
    name: "Franco CFA BCEAO",
    symbol_native: "CFA",
    decimal_digits: 0,
    rounding: 0,
    code: "XOF",
    name_plural: "Francos CFA BCEAO",
  },
  YER: {
    symbol: "YR",
    name: "Rial Iemenita",
    symbol_native: "ر.ي.‏",
    decimal_digits: 2,
    rounding: 0,
    code: "YER",
    name_plural: "Riais iemenitas",
  },
  ZAR: {
    symbol: "R",
    name: "Rand Sul-Africano",
    symbol_native: "R",
    decimal_digits: 2,
    rounding: 0,
    code: "ZAR",
    name_plural: "Randes sul-africanos",
  },
  ZMW: {
    symbol: "ZK",
    name: "Kwacha Zambiano",
    symbol_native: "ZK",
    decimal_digits: 0,
    rounding: 0,
    code: "ZMW",
    name_plural: "Kwachas zambianos",
  },
  ZWL: {
    symbol: "ZWL$",
    name: "Dólar do Zimbábue",
    symbol_native: "ZWL$",
    decimal_digits: 0,
    rounding: 0,
    code: "ZWL",
    name_plural: "Dólares do Zimbábue",
  },
}
