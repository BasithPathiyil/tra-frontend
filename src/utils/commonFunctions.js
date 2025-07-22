let allSymbols = [
  "RELIANCE",
  "TCS",
  "HDFCBANK",
  "BHARTIARTL",
  "ICICIBANK",
  "INFY",
  "SBIN",
  "LICI",
  "ITC",
  "HINDUNILVR",
  "LT",
  "HCLTECH",
  "SUNPHARMA",
  "BAJFINANCE",
  "AXISBANK",
  "NTPC",
  "KOTAKBANK",
  "MARUTI",
  "M&M",
  "ULTRACEMCO",
  "ONGC",
  "WIPRO",
  "TITAN",
  "POWERGRID",
  "HAL",
  "TATAMOTORS",
  "ADANIENT",
  "SIEMENS",
  "ADANIPORTS",
  "ZOMATO",
  "BAJAJFINSV",
  "COALINDIA",
  "TRENT",
  "DMART",
  "JSWSTEEL",
  "ASIANPAINT",
  "BEL",
  "NESTLEIND",
  "VBL",
  "HINDZINC",
  "JIOFIN",
  "DLF",
  "ADANIPOWER",
  "IRFC",
  "VEDL",
  "IOC",
  "ADANIGREEN",
  "LTIM",
  "TATASTEEL",
  "GRASIM",
  "PFC",
  "INDIGO",
  "DIVISLAB",
  "PIDILITIND",
  "ABB",
  "TECHM",
  "HINDALCO",
  "RECLTD",
  "SBILIFE",
  "TATAPOWER",
  "AMBUJACEM",
  "HDFCLIFE",
  "GAIL",
  "BANKBARODA",
  "LODHA",
  "EICHERMOT",
  "BPCL",
  "PNB",
  "GODREJCP",
  "BAJAJHFL",
  "MOTHERSON",
  "TVSMOTOR",
  "CGPOWER",
  "CIPLA",
  "BAJAJHLDNG",
  "JSWENERGY",
  "SHRIRAMFIN",
  "BRITANNIA",
  "INDHOTEL",
  "TORNTPHARM",
  "POLYCAB",
  "NAUKRI",
  "IOB",
  "OFSS",
  "HAVELLS",
  "UNITDSPR",
  "CHOLAFIN",
  "BOSCHLTD",
  "MAXHEALTH",
  "DIXON",
  "APOLLOHOSP",
  "MANKIND",
  "DRREDDY",
  "MAZDOCK",
  "ZYDUSLIFE",
  "CANBK",
  "SOLARINDS",
  "POLICYBZR",
  "SHREECEM",
  "UNIONBANK",
  "ICICIPRULI",
  "ADANIENSOL",
  "LUPIN",
  "RVNL",
  "TATACONSUM",
  "INDUSTOWER",
  "CUMMINSIND",
  "ICICIGI",
  "JINDALSTEL",
  "HDFCAMC",
  "SUZLON",
  "DABUR",
  "HEROMOTOCO",
  "IDBI",
  "PERSISTENT",
  "GMRINFRA",
  "BHEL",
  "GODREJPROP",
  "NHPC",
  "HINDPETRO",
  "MARICO",
  "INDIANB",
  "ATGL",
  "TORNTPOWER",
  "COLPAL",
  "MUTHOOTFIN",
  "OBEROIRLTY",
  "OIL",
  "INDUSINDBK",
  "KALYANKJIL",
  "PRESTIGE",
  "BSE",
  "GICRE",
  "AUROPHARMA",
  "TIINDIA",
  "BHARTIHEXA",
  "NMDC",
  "SBICARD",
  "ASHOKLEY",
  "SRF",
  "PATANJALI",
  "ALKEM",
  "YESBANK",
  "JSWINFRA",
  "FACT",
  "IRCTC",
  "PHOENIXLTD",
  "BHARATFORG",
  "PIIND",
  "UNOMINDA",
  "PAYTM",
  "ABBOTINDIA",
  "JSL",
  "SUPREMEIND",
  "IREDA",
  "UCOBANK",
  "COFORGE",
  "LINDEINDIA",
  "MOTILALOFS",
  "MPHASIS",
  "IDEA",
  "SCHAEFFLER",
  "LTTS",
  "BERGEPAINT",
  "MRF",
  "VOLTAS",
  "LLOYDSME",
  "BALKRISIND",
  "FORTIS",
  "BANKINDIA",
  "THERMAX",
  "FEDERALBNK",
  "UBL",
  "COROMANDEL",
  "CENTRALBK",
  "ABCAPITAL",
  "CONCOR",
  "PGHH",
  "PAGEIND",
  "SAIL",
  "TATACOMM",
  "POWERINDIA",
  "PETRONET",
  "HUDCO",
  "ASTRAL",
  "GET&D",
  "IDFCFIRSTB",
  "FLUOROCHEM",
  "NYKAA",
  "SJVN",
  "SUNDARMFIN",
  "TATAELXSI",
  "JUBLFOOD",
  "NATIONALUM",
  "BIOCON",
  "BDL",
  "COCHINSHIP",
  "MAHABANK",
  "APLAPOLLO",
  "AUBANK",
  "360ONE",
  "GLENMARK",
  "BLUESTARCO",
  "ACC",
  "OLAELEC",
  "SONACOMS",
  "UPL",
  "KEI",
  "AWL",
  "GLAXO",
  "APARINDS",
  "KPITTECH",
  "MFSL",
  "KAYNES",
  "EXIDEIND",
  "CRISIL",
  "IPCALAB",
  "CDSL",
  "TATATECH",
  "ESCORTS",
  "NLCINDIA",
  "SYNGENE",
  "DEEPAKNTR",
  "LTF",
  "PSB",
  "HONAUT",
  "GODREJIND",
  "DALBHARAT",
  "AJANTPHARM",
  "JKCEMENT",
  "EMBASSY",
  "PPLPHARMA",
  "MCX",
  "3MINDIA",
  "LICHSGFIN",
  "TATAINVEST",
  "GUJGASLTD",
  "IRB",
  "M&MFIN",
  "APOLLOTYRE",
  "NIACL",
  "KPRMILL",
  "METROBRAND",
  "SUVENPHAR",
  "ENDURANCE",
  "MANYAVAR",
  "ABFRL",
  "GILLETTE",
  "KEC",
  "AIAENG",
  "BRIGADE",
  "GODIGIT",
  "ABREL",
  "LAURUSLABS",
  "MEDANTA",
  "RADICO",
  "ITI",
  "JYOTICNC",
  "SUNTV",
  "GLAND",
  "ANGELONE",
  "GODFRYPHLP",
  "ISEC",
  "STARHEALTH",
  "AEGISLOG",
  "POLYMED",
  "TATACHEM",
  "BANDHANBNK",
  "CHOLAHLDNG",
  "HSCL",
  "AIIL",
  "PEL",
  "MSUMI",
  "HINDCOPPER",
  "SUMICHEM",
  "NBCC",
  "JBCHEPHARM",
  "EMAMILTD",
  "POONAWALLA",
  "NH",
  "BAYERCROP",
  "MRPL",
  "IGL",
  "INOXWIND",
  "CARBORUNIV",
  "CESC",
  "DELHIVERY",
  "CROMPTON",
  "EMCURE",
  "NATCOPHARM",
  "FSL",
  "EIHOTEL",
  "LALPATHLAB",
  "TIMKEN",
  "AFFLE",
  "SKFINDIA",
  "CAMS",
  "ANANTRAJ",
  "KIMS",
  "NUVAMA",
  "PNBHOUSING",
  "ABSLAMC",
  "ASTERDM",
  "ARE&M",
  "BASF",
  "HATSUN",
  "WHIRLPOOL",
  "TRITURBINE",
  "GRINDWELL",
  "PFIZER",
  "RAMCOCEM",
  "TEJASNET",
  "SHYAMMETL",
  "SUNDRMFAST",
  "TVSHLTD",
  "ZFCVINDIA",
  "RATNAMANI",
  "WOCKPHARMA",
  "CONCORDBIO",
  "KIOCL",
  "SWANENERGY",
  "NEULANDLAB",
  "KANSAINER",
  "CYIENT",
  "KFINTECH",
  "MINDSPACE",
  "CHAMBLFERT",
  "CASTROLIND",
  "ATUL",
  "NXST",
  "APLLTD",
  "PGEL",
  "GSPL",
  "JWL",
  "WELCORP",
  "KPIL",
  "IRCON",
  "ELGIEQUIP",
  "BIKAJI",
  "GRSE",
  "DEVYANI",
  "JINDALSAW",
  "FINCABLES",
  "SCHNEIDER",
  "ERIS",
  "AMBER",
  "NCC",
  "CHALET",
  "KARURVYSYA",
  "VINATIORGA",
  "JUBLPHARMA",
  "JBMA",
  "FIVESTAR",
  "SIGNATURE",
  "VGUARD",
  "NEWGEN",
  "KAJARIACER",
  "HFCL",
  "SONATSOFTW",
  "JAIBALAJI",
  "AADHARHFC",
  "CIEINDIA",
  "IIFL",
  "BATAINDIA",
  "CELLO",
  "KIRLOSBROS",
  "BLUEDART",
  "ANANDRATHI",
  "ASAHIINDIA",
  "BEML",
  "CAPLIPOINT",
  "DEEPAKFERT",
  "RPOWER",
  "NAVINFLUOR",
  "LMW",
  "SOHBA",
  "BLS",
  "DOMS",
  "PCBL",
  "HBLPOWER",
  "IFCI",
  "ZENSARTECH",
  "RKFORGE",
  "DCMSHRIRAM",
  "PTCIL",
  "IDFC",
  "TRIDENT",
  "ECLERX",
  "CGCL",
  "ZENTEC",
  "FINPIPE",
  "ACE",
  "CENTURYPLY",
  "UTIAMC",
  "SARDAEN",
  "RRKABEL",
  "BSOFT",
  "AKZOINDIA",
  "RELAXO",
  "RAINBOW",
  "ASTRAZEN",
  "ETERNAL",
];

const nifty100Symbols = [
  "ETERNAL",
  "RELIANCE",
  "TCS",
  "INFY",
  "HDFCBANK",
  "ICICIBANK",
  "HINDUNILVR",
  "HDFC",
  "SBIN",
  "BHARTIARTL",
  "KOTAKBANK",
  "ITC",
  "LT",
  "ADANIENT",
  "AXISBANK",
  "ADANIGREEN",
  "ASIANPAINT",
  "BAJFINANCE",
  "TITAN",
  "MARUTI",
  "WIPRO",
  "ONGC",
  "NTPC",
  "HCLTECH",
  "POWERGRID",
  "TECHM",
  "DMART",
  "ULTRACEMCO",
  "SUNPHARMA",
  "TATAMOTORS",
  "VEDL",
  "JSWSTEEL",
  "IOC",
  "HINDALCO",
  "ADANIPORTS",
  "COALINDIA",
  "DIVISLAB",
  "BPCL",
  "CIPLA",
  "BAJAJFINSV",
  "HEROMOTOCO",
  "GRASIM",
  "UPL",
  "SHREECEM",
  "TATAPOWER",
  "BRITANNIA",
  "DRREDDY",
  "ADANITRANS",
  "SBICARD",
  "AMBUJACEM",
  "PIDILITIND",
  "M&M",
  "BEL",
  "DLF",
  "ICICIPRULI",
  "GAIL",
  "BAJAJHLDNG",
  "HDFCAMC",
  "SRF",
  "NAUKRI",
  "PNB",
  "SBILIFE",
  "LTI",
  "TATACHEM",
  "PAGEIND",
  "HAVELLS",
  "EICHERMOT",
  "ICICIGI",
  "BERGEPAINT",
  "MOTHERSON",
  "ATGL",
  "ADANIPOWER",
  "IGL",
  "BOSCHLTD",
  "PIIND",
  "AUROPHARMA",
  "TORNTPHARM",
  "GODREJCP",
  "MFSL",
  "CONCOR",
  "COLPAL",
  "TATACONSUM",
  "BIOCON",
  "NESTLEIND",
  "ABB",
  "HINDZINC",
  "CHOLAFIN",
  "INDUSINDBK",
  "BANDHANBNK",
  "LUPIN",
  "TORNTPOWER",
  "NMDC",
  "ZOMATO",
  "PFC",
  "SIEMENS",
  "PETRONET",
  "CANBK",
  "GLAND",
  "TATACOMM",
  "POLYCAB",
  "INDHOTEL",
  "HAL",
  "IREDA",
  "IRCTC",
];

export const preOpenMarketData = async (data1, query) => {
  let data = JSON.parse(data1);
  console.log("dataaaaaaaa", data);
  try {
    let n = 2;
    if (query && query.times) {
      n = query.times;
    }
    let stocks = [...allSymbols];
    if (query && query?.type === "hundred") {
      stocks = [...nifty100Symbols];
    }
    const getMARKET_DATA_PRE_OPEN = async () => {
      let butMoreStocks = [];
      let buyMoreNTimes = [];
      let buyMoreNTimesChangeUp = [];
      let sellMoreStocks = [];
      let sellMoreNTimes = [];
      let sellMoreNFinalMoreNTimes = [];
      let sellMoreNTimesChangeUp = [];
      let topSellStock;
      let num = 0;
      data.data.forEach(async (item) => {
        if (query?.type !== "all" && !stocks.includes(item?.metadata?.symbol)) {
          return;
        }
        if (
          !item.detail?.preOpenMarket?.totalSellQuantity ||
          !item.detail?.preOpenMarket?.totalBuyQuantity
        ) {
          return;
        }
        if (item.detail?.preOpenMarket?.totalSellQuantity > num) {
          topSellStock = {
            name: item?.metadata?.symbol,
            totalSellQty: item.detail?.preOpenMarket?.totalSellQuantity,
            totalBuyQty: item.detail?.preOpenMarket?.totalBuyQuantity,
            finalQuantity: item.detail?.preOpenMarket?.finalQuantity,
            atoBuyQty: item.detail?.preOpenMarket?.atoBuyQty,
            atoSellQty: item.detail?.preOpenMarket?.atoSellQty,
            change: item.detail?.preOpenMarket?.Change,
            perChange: item.detail?.preOpenMarket?.perChange,
            preopen: item.detail?.preOpenMarket.preopen.find(
              (item) => item?.iep === true
            ),
          };
          num = item.detail?.preOpenMarket?.totalSellQuantity;
        }

        if (
          item.detail?.preOpenMarket?.totalSellQuantity >
          n * item.detail?.preOpenMarket?.totalBuyQuantity
        ) {
          if (item.detail?.preOpenMarket?.Change > 0) {
            sellMoreNTimes.push({
              name: item?.metadata?.symbol,
              totalSellQty: item.detail?.preOpenMarket?.totalSellQuantity,
              totalBuyQty: item.detail?.preOpenMarket?.totalBuyQuantity,
              finalQuantity: item.detail?.preOpenMarket?.finalQuantity,
              atoBuyQty: item.detail?.preOpenMarket?.atoBuyQty,
              atoSellQty: item.detail?.preOpenMarket?.atoSellQty,
              change: item.detail?.preOpenMarket?.Change,
              perChange: item.detail?.preOpenMarket?.perChange,
              preopen: item.detail?.preOpenMarket.preopen.find(
                (item) => item?.iep === true
              ),
            });
            // item.detail?.preOpenMarket?.lastUpdateTime,
            let date = item.detail?.preOpenMarket?.lastUpdateTime.split(" ")[0];

            if (
              item.detail?.preOpenMarket?.finalQuantity >
              item.detail?.preOpenMarket?.totalSellQuantity
            ) {
              sellMoreNFinalMoreNTimes.push({
                name: item?.metadata?.symbol,
                totalSellQty: item.detail?.preOpenMarket?.totalSellQuantity,
                totalBuyQty: item.detail?.preOpenMarket?.totalBuyQuantity,
                finalQuantity: item.detail?.preOpenMarket?.finalQuantity,
                atoBuyQty: item.detail?.preOpenMarket?.atoBuyQty,
                atoSellQty: item.detail?.preOpenMarket?.atoSellQty,
                change: item.detail?.preOpenMarket?.Change,
                perChange: item.detail?.preOpenMarket?.perChange,
                preopen: item.detail?.preOpenMarket.preopen.find(
                  (item) => item?.iep === true
                ),
              });
            }
          } else {
            sellMoreNTimesChangeUp.push({
              name: item?.metadata?.symbol,
              totalSellQty: item.detail?.preOpenMarket?.totalSellQuantity,
              totalBuyQty: item.detail?.preOpenMarket?.totalBuyQuantity,
              finalQuantity: item.detail?.preOpenMarket?.finalQuantity,
              atoBuyQty: item.detail?.preOpenMarket?.atoBuyQty,
              atoSellQty: item.detail?.preOpenMarket?.atoSellQty,
              change: item.detail?.preOpenMarket?.Change,
              perChange: item.detail?.preOpenMarket?.perChange,
              preopen: item.detail?.preOpenMarket.preopen.find(
                (item) => item?.iep === true
              ),
            });
          }
        }

        if (
          item.detail?.preOpenMarket?.totalBuyQuantity >
          n * item.detail?.preOpenMarket?.totalSellQuantity
        ) {
          if (item.detail?.preOpenMarket?.Change < 0) {
            buyMoreNTimes.push({
              name: item?.metadata?.symbol,
              totalSellQty: item.detail?.preOpenMarket?.totalSellQuantity,
              totalBuyQty: item.detail?.preOpenMarket?.totalBuyQuantity,
              finalQuantity: item.detail?.preOpenMarket?.finalQuantity,
              atoBuyQty: item.detail?.preOpenMarket?.atoBuyQty,
              atoSellQty: item.detail?.preOpenMarket?.atoSellQty,
              change: item.detail?.preOpenMarket?.Change,
              perChange: item.detail?.preOpenMarket?.perChange,
              preopen: item.detail?.preOpenMarket.preopen.find(
                (item) => item?.iep === true
              ),
            });
          } else {
            buyMoreNTimesChangeUp.push({
              name: item?.metadata?.symbol,
              totalSellQty: item.detail?.preOpenMarket?.totalSellQuantity,
              totalBuyQty: item.detail?.preOpenMarket?.totalBuyQuantity,
              finalQuantity: item.detail?.preOpenMarket?.finalQuantity,
              atoBuyQty: item.detail?.preOpenMarket?.atoBuyQty,
              atoSellQty: item.detail?.preOpenMarket?.atoSellQty,
              change: item.detail?.preOpenMarket?.Change,
              perChange: item.detail?.preOpenMarket?.perChange,
              preopen: item.detail?.preOpenMarket.preopen.find(
                (item) => item?.iep === true
              ),
            });
          }
        }
      });
      return {
        topSellStock,
        sellMoreNTimes,
        buyMoreNTimes,
        sellMoreNTimesChangeUp,
        buyMoreNTimesChangeUp,
        sellMoreNFinalMoreNTimes,
      };
    };
    const a = await getMARKET_DATA_PRE_OPEN();
    return a;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export const shootUpStocks = async (data1, query) => {
  let data = JSON.parse(data1);
  console.log("dataaaaaaaa", data);
  try {
    let n = 2;
    if (query && query.times) {
      n = query.times;
    }
    let m = 1;
    if (query && query.multiplies) {
      m = query.multiplies;
    }
    let stocks = [...allSymbols];
    if (query && query?.type === "hundred") {
      stocks = [...nifty100Symbols];
    }
    const getMARKET_DATA_PRE_OPEN1 = async () => {
      let shootUpStocks = [];
      let shootDownStocks = [];
      data.data.forEach(async (item) => {
        if (query?.type !== "all" && !stocks.includes(item?.metadata?.symbol)) {
          return;
        }
        if (
          !item.detail?.preOpenMarket?.totalSellQuantity ||
          !item.detail?.preOpenMarket?.totalBuyQuantity
        ) {
          return;
        }
        if (
          item.detail?.preOpenMarket?.totalSellQuantity >
          m * item.detail?.preOpenMarket?.totalBuyQuantity
        ) {
          if (item.detail?.preOpenMarket?.perChange < -n) {
            shootDownStocks.push({
              name: item?.metadata?.symbol,
              totalSellQty: item.detail?.preOpenMarket?.totalSellQuantity,
              totalBuyQty: item.detail?.preOpenMarket?.totalBuyQuantity,
              finalQuantity: item.detail?.preOpenMarket?.finalQuantity,
              atoBuyQty: item.detail?.preOpenMarket?.atoBuyQty,
              atoSellQty: item.detail?.preOpenMarket?.atoSellQty,
              change: item.detail?.preOpenMarket?.Change,
              perChange: item.detail?.preOpenMarket?.perChange,
              preopen: item.detail?.preOpenMarket.preopen.find(
                (item) => item?.iep === true
              ),
            });
            // item.detail?.preOpenMarket?.lastUpdateTime,
          }
        }
        if (
          item.detail?.preOpenMarket?.totalBuyQuantity >
          m * item.detail?.preOpenMarket?.totalSellQuantity
        ) {
          if (item.detail?.preOpenMarket?.perChange > n) {
            shootUpStocks.push({
              name: item?.metadata?.symbol,
              totalSellQty: item.detail?.preOpenMarket?.totalSellQuantity,
              totalBuyQty: item.detail?.preOpenMarket?.totalBuyQuantity,
              finalQuantity: item.detail?.preOpenMarket?.finalQuantity,
              atoBuyQty: item.detail?.preOpenMarket?.atoBuyQty,
              atoSellQty: item.detail?.preOpenMarket?.atoSellQty,
              change: item.detail?.preOpenMarket?.Change,
              perChange: item.detail?.preOpenMarket?.perChange,
              preopen: item.detail?.preOpenMarket.preopen.find(
                (item) => item?.iep === true
              ),
            });
          }
        }
      });
      return {
        shootDownStocks,
        shootUpStocks,
      };
    };
    const a = await getMARKET_DATA_PRE_OPEN1();
    return a;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
