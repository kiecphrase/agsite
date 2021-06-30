// Resource site: https://www.worldometers.info/geography/how-many-countries-in-europe/

var countries = ["Latvia", "United States", "Canada", "United Kingdom", "Russia", "Germany", "France", "Italy", "Spain", "Ukraine", "Poland", "Romania", "Netherlands", "Belgium", "Czech Republic", "Greece", "Portugal", "Sweden", "Hungary", "Belarus", "Austria", "Serbia", "Switzerland", "Bulgaria", "Denmark", "Finland", "Slovak Republic", "Norway", "Ireland", "Croatia", "Moldova", "Bosnia and Herzegovina", "Albania", "Lithuania", "North Macedonia", "Slovenia", "Estonia", "Montenegro", "Luxembourg", "Malta", "Iceland", "Andorra", "Monaco", "Liechtenstein", "San Marino"];
var cosrcs = ["https://www.zm.gov.lv/en/", "https://www.usda.gov/", "https://agriculture.canada.ca/en", "https://www.gov.uk/government/organisations/department-for-environment-food-rural-affairs", "https://mcx.gov.ru/en/", "https://www.bmel.de/EN/Home/home_node.html", "https://agriculture.gouv.fr/french-ministry-agriculture-and-food", "https://www.politicheagricole.it/flex/cm/pages/ServeBLOB.php/L/IT/IDPagina/202", "https://www.mapa.gob.es/en/", "https://minagro.gov.ua/en", "https://www.gov.pl/web/agriculture/ministry-of-agriculture-and-rural-development", "https://www.madr.ro/en/", "https://www.government.nl/ministries/ministry-of-agriculture-nature-and-food-quality", "https://lv.vlaanderen.be/nl", "http://eagri.cz/public/web/en/mze/", "http://www.minagric.gr/index.php/en/", "https://www.portugal.gov.pt/pt/gc21", "https://www.government.se/government-agencies/swedish-board-of-agriculture/", "https://www.fvm.hu/", "https://www.mshp.gov.by/en/", "https://info.bmlrt.gv.at/en", "http://www.minpolj.gov.rs/", "https://www.blw.admin.ch/blw/en/home.html", "https://www.mzh.government.bg/en/", "https://eng.lbst.dk/footer/the-ministry/", "https://mmm.fi/en/frontpage?p_p_id=fi_yja_language_version_tool_web_portlet_LanguageVersionToolMissingNotificationPortlet&_fi_yja_language_version_tool_web_portlet_LanguageVersionToolMissingNotificationPortlet_missingLanguageVersion=1", "https://www.mpsr.sk/en/", "https://www.regjeringen.no/en/dep/lmd/id627/", "https://www.gov.ie/en/organisation/department-of-agriculture-food-and-the-marine/#", "https://poljoprivreda.gov.hr/", "https://gov.md/en/content/ministry-agriculture-regional-development-and-environment", "http://www.fbihvlada.gov.ba/english/ministarstva/poljoprivreda.php", "https://bujqesia.gov.al/", "https://zum.lrv.lt/en/", "https://vlada.mk/node/17974?ln=en-gb", "https://www.gov.si/en/state-authorities/ministries/ministry-of-agriculture-forestry-and-food/", "https://www.agri.ee/en", "www.minpolj.gov.me/", "https://ma.gouvernement.lu/en.html", "https://meae.gov.mt/en/Public_Consultations/MAFA/Pages/Home.aspx", "https://www.government.is/ministries/ministry-of-industries-and-innovation/minister-of-fisheries-and-agriculture/", "https://www.agricultura.ad/", "https://en.gouv.mc/Government-Institutions/The-Government/Ministry-of-Interior", "https://www.liechtenstein.li/en/economy/economic-sectors/agriculture-and-forestry/", "http://www.territorio.sm/on-line/home.html"];


function getCountry(countries,cosrcs){
    let c = Math.floor(Math.random() * (countries.length)) - 1;
    let country_name = countries[c];
    let country_website = cosrcs[c];

    $("#yeeyee").text(country_name);
    $("#yeeyee").attr("href", country_website);
    $("#ag_holder").attr("src", country_website);
}


// Actual Functions
$(window).on('load', getCountry(countries,cosrcs));

$("#refresh").click(function() {
    location.reload();
});