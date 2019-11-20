export interface FlightData {
    search_id:             string;
    data:                  Datum[];
    connections:           any[];
    time:                  number;
    currency:              string;
    currency_rate:         number;
    fx_rate:               number;
    refresh:               any[];
    del:                   number;
    ref_tasks:             any[];
    search_params:         SearchParams;
    all_stopover_airports: any[];
    all_airlines:          any[];
}

export interface Datum {
    id:                            string;
    bags_price:                    { [key: string]: number };
    baglimit:                      Baglimit;
    p1:                            number;
    p2:                            number;
    p3:                            number;
    price:                         number;
    route:                         Route[];
    airlines:                      Airline[];
    pnr_count:                     number;
    transfers:                     any[];
    has_airport_change:            boolean;
    technical_stops:               number;
    availability:                  Availability;
    dTime:                         number;
    dTimeUTC:                      number;
    aTime:                         number;
    aTimeUTC:                      number;
    nightsInDest:                  number;
    flyFrom:                       CityCodeFrom;
    flyTo:                         CityCodeFrom;
    cityFrom:                      City;
    cityTo:                        City;
    cityCodeFrom:                  CityCodeFrom;
    cityCodeTo:                    CityCodeFrom;
    countryFrom:                   Country;
    countryTo:                     Country;
    mapIdfrom:                     MapID;
    mapIdto:                       MapID;
    distance:                      number;
    routes:                        Array<CityCodeFrom[]>;
    virtual_interlining:           boolean;
    fly_duration:                  FlyDuration;
    duration:                      Duration;
    return_duration:               ReturnDuration;
    facilitated_booking_available: boolean;
    type_flights:                  TypeFlight[];
    found_on:                      FoundOn[];
    conversion:                    Conversion;
    booking_token:                 string;
    quality:                       number;
    deep_link:                     string;
}

export enum Airline {
    El = "EL",
    Fr = "FR",
    Gq = "GQ",
    OS = "OS",
    Oa = "OA",
    Oe = "OE",
    W6 = "W6",
}

export interface Availability {
    seats: number | null;
}

export interface Baglimit {
    hand_width:          number;
    hand_height:         number;
    hand_length:         number;
    hand_weight:         number;
    hold_width:          number;
    hold_height:         number;
    hold_length:         number;
    hold_dimensions_sum: number;
    hold_weight:         number;
}

export enum CityCodeFrom {
    Ath = "ATH",
    BER = "BER",
    Bgy = "BGY",
    Blq = "BLQ",
    Bts = "BTS",
    Bud = "BUD",
    Bva = "BVA",
    Chq = "CHQ",
    Cia = "CIA",
    Cph = "CPH",
    Dtm = "DTM",
    Dus = "DUS",
    Ein = "EIN",
    Fkb = "FKB",
    Fmm = "FMM",
    Fra = "FRA",
    Her = "HER",
    Hhn = "HHN",
    Iev = "IEV",
    Jkh = "JKH",
    Krk = "KRK",
    Kut = "KUT",
    Lon = "LON",
    Man = "MAN",
    Mil = "MIL",
    Mjt = "MJT",
    Mla = "MLA",
    Nrn = "NRN",
    Nue = "NUE",
    Nyo = "NYO",
    Par = "PAR",
    Pfo = "PFO",
    ROM = "ROM",
    Rho = "RHO",
    Skg = "SKG",
    Stn = "STN",
    Sto = "STO",
    Sxf = "SXF",
    TLV = "TLV",
    Vie = "VIE",
}

export enum City {
    Athens = "Athens",
    Berlin = "Berlin",
    Bologna = "Bologna",
    Bratislava = "Bratislava",
    Budapest = "Budapest",
    Chania = "Chania",
    Chios = "Chios",
    Copenhagen = "Copenhagen",
    Dortmund = "Dortmund",
    Düsseldorf = "Düsseldorf",
    Eindhoven = "Eindhoven",
    Frankfurt = "Frankfurt",
    Heraklion = "Heraklion",
    Karlsruhe = "Karlsruhe",
    Kraków = "Kraków",
    Kutaisi = "Kutaisi",
    Kyiv = "Kyiv",
    London = "London",
    Malta = "Malta",
    Manchester = "Manchester",
    Memmingen = "Memmingen",
    Milan = "Milan",
    Mytilene = "Mytilene",
    Nuremberg = "Nuremberg",
    Paphos = "Paphos",
    Paris = "Paris",
    Rhodes = "Rhodes",
    Rome = "Rome",
    Stockholm = "Stockholm",
    TelAviv = "Tel Aviv",
    Thessaloniki = "Thessaloniki",
    Vienna = "Vienna",
}

export interface Conversion {
    EUR: number;
}

export interface Country {
    code: Code;
    name: Name;
}

export enum Code {
    At = "AT",
    Cy = "CY",
    De = "DE",
    Dk = "DK",
    Fr = "FR",
    GB = "GB",
    Ge = "GE",
    Gr = "GR",
    Hu = "HU",
    IL = "IL",
    It = "IT",
    MT = "MT",
    Nl = "NL",
    SE = "SE",
    Sk = "SK",
    Ua = "UA",
}

export enum Name {
    Austria = "Austria",
    Cyprus = "Cyprus",
    Denmark = "Denmark",
    France = "France",
    Georgia = "Georgia",
    Germany = "Germany",
    Greece = "Greece",
    Hungary = "Hungary",
    Israel = "Israel",
    Italy = "Italy",
    Malta = "Malta",
    Netherlands = "Netherlands",
    Slovakia = "Slovakia",
    Sweden = "Sweden",
    Ukraine = "Ukraine",
    UnitedKingdom = "United Kingdom",
}

export interface Duration {
    departure: number;
    return:    number;
    total:     number;
}

export enum FlyDuration {
    The0H50M = "0h 50m",
    The0H55M = "0h 55m",
    The1H0M = "1h 0m",
    The1H10M = "1h 10m",
    The1H15M = "1h 15m",
    The1H40M = "1h 40m",
    The1H45M = "1h 45m",
    The1H50M = "1h 50m",
    The1H55M = "1h 55m",
    The2H0M = "2h 0m",
    The2H10M = "2h 10m",
    The2H15M = "2h 15m",
    The2H25M = "2h 25m",
    The2H30M = "2h 30m",
    The2H45M = "2h 45m",
    The2H55M = "2h 55m",
    The2H5M = "2h 5m",
    The3H10M = "3h 10m",
    The3H25M = "3h 25m",
    The3H35M = "3h 35m",
    The3H5M = "3h 5m",
}

export enum FoundOn {
    Deprecated = "deprecated",
}

export enum MapID {
    AthensGr = "athens_gr",
    BerlinDe = "berlin_de",
    BolognaIt = "bologna_it",
    BratislavaSk = "bratislava_sk",
    BudapestHu = "budapest_hu",
    ChaniaGr = "chania_gr",
    ChiosGr = "chios_gr",
    CopenhagenDk = "copenhagen_dk",
    DortmundDe = "dortmund_de",
    DusseldorfDe = "dusseldorf_de",
    EindhovenNl = "eindhoven_nl",
    FrankfurtDe = "frankfurt_de",
    HeraklionGr = "heraklion_gr",
    KarlsruheDe = "karlsruhe_de",
    KievUa = "kiev_ua",
    KrakowPl = "krakow_pl",
    KutaisiGe = "kutaisi_ge",
    LondonGB = "london_gb",
    MaltaMT = "malta_mt",
    ManchesterGB = "manchester_gb",
    MemmingenDe = "memmingen_de",
    MilanIt = "milan_it",
    MytileneGr = "mytilene_gr",
    NurembergDe = "nuremberg_de",
    PaphosCy = "paphos_cy",
    ParisFr = "paris_fr",
    RhodesGr = "rhodes_gr",
    RomeIt = "rome_it",
    StockholmSE = "stockholm_se",
    TelAvivIL = "tel-aviv_il",
    ThessalonikiGr = "thessaloniki_gr",
    ViennaAt = "vienna_at",
}

export enum ReturnDuration {
    The0H45M = "0h 45m",
    The0H55M = "0h 55m",
    The1H0M = "1h 0m",
    The1H10M = "1h 10m",
    The1H15M = "1h 15m",
    The1H20M = "1h 20m",
    The1H35M = "1h 35m",
    The1H40M = "1h 40m",
    The1H45M = "1h 45m",
    The1H50M = "1h 50m",
    The1H55M = "1h 55m",
    The2H0M = "2h 0m",
    The2H10M = "2h 10m",
    The2H20M = "2h 20m",
    The2H25M = "2h 25m",
    The2H30M = "2h 30m",
    The2H35M = "2h 35m",
    The2H45M = "2h 45m",
    The2H50M = "2h 50m",
    The2H55M = "2h 55m",
    The2H5M = "2h 5m",
}

export interface Route {
    id:                    string;
    combination_id:        string;
    return:                number;
    original_return:       number;
    source:                FoundOn;
    found_on:              FoundOn;
    price:                 number;
    aTime:                 number;
    dTime:                 number;
    aTimeUTC:              number;
    dTimeUTC:              number;
    mapIdfrom:             MapID;
    mapIdto:               MapID;
    cityTo:                City;
    cityFrom:              City;
    cityCodeFrom:          CityCodeFrom;
    cityCodeTo:            CityCodeFrom;
    flyTo:                 CityCodeFrom;
    airline:               Airline;
    operating_carrier:     OperatingCarrier;
    equipment:             null | string;
    flyFrom:               CityCodeFrom;
    latFrom:               number;
    lngFrom:               number;
    latTo:                 number;
    lngTo:                 number;
    flight_no:             number;
    vehicle_type:          VehicleType;
    refresh_timestamp:     number;
    bags_recheck_required: boolean;
    guarantee:             boolean;
    fare_classes:          FareClasses;
    fare_basis:            FareBasis;
    fare_family:           string;
    fare_category:         FareCategory;
    last_seen:             number;
    operating_flight_no:   string;
}

export enum FareBasis {
    Boreg = "BOREG",
    Empty = "",
    Jbsicpow = "JBSICPOW",
    Jflyow = "JFLYOW",
    Kbsicpow = "KBSICPOW",
    Opreg = "OPREG",
    Oreg = "OREG",
    Pflyow = "PFLYOW",
    Powbsc = "POWBSC",
    Preg = "PREG",
    Prreg = "PRREG",
    Rreg = "RREG",
    Rsreg = "RSREG",
    Sbsicpow = "SBSICPOW",
    Sflyow = "SFLYOW",
    Sowbsc = "SOWBSC",
    Sreg = "SREG",
    Tflyow = "TFLYOW",
    Towbsc = "TOWBSC",
    Uowbsc = "UOWBSC",
    Zreg = "ZREG",
}

export enum FareCategory {
    M = "M",
}

export enum FareClasses {
    B = "B",
    Empty = "",
    J = "J",
    K = "K",
    O = "O",
    P = "P",
    R = "R",
    S = "S",
    T = "T",
    U = "U",
    Z = "Z",
}

export enum OperatingCarrier {
    A3 = "A3",
    El = "EL",
    Empty = "",
    Gq = "GQ",
    OS = "OS",
    Oa = "OA",
}

export enum VehicleType {
    Aircraft = "aircraft",
}

export enum TypeFlight {
    Gds = "GDS",
    LccA3 = "lcc-A3",
    LccEL = "lcc-EL",
    LccFR = "lcc-FR",
    LccGQ = "lcc-GQ",
    LccOS = "lcc-OS",
    LccW6 = "lcc-W6",
}

export interface SearchParams {
    flyFrom_type: string;
    to_type:      string;
    seats:        Seats;
}

export interface Seats {
    passengers: number;
    adults:     number;
    children:   number;
    infants:    number;
}
