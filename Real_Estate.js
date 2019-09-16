var n = document.getElementsByClassName("nav-link")
var url_list = []
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

for (i = 0; i < n.length; i++){
	if (n[i].href.includes('contact-agent') == false && n[i].href.includes('property-listing') == true){url_list.push(n[i].href)}
	else{}
}

var DOM_Array = [];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function demo() {
    // Sleep in loop
    for (let i = 0; i < url_list.length; i++) {    
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.responseText);
            DOM_Array.push(xhr.responseText);
        }}
    xhr.open('GET', url_list[i], true);
    await sleep(getRandomArbitrary(8440,15243));
    xhr.send(null)}}

  demo();


//must wait

for (i = 0; i< DOM_Array.length; i++){

    //initialization of DOMParser()
    var parser = new DOMParser();

    //listing title
    try { 
        var listing_title = parser.parseFromString(DOM_Array[i], 'text/html')
                        .querySelector("#wrapper-inner > section:nth-child(6) > div > div.listing-detail-header-bar.container.clearfix > h1")
                        .textContent;
                        console.log(listing_title);
                    }
    catch (e) {
        var listing_title = null;
                        console.log(listing_title)
            }

    //listing currency
    try {
        var listing_currency = parser.parseFromString(DOM_Array[i],'text/html')
                        .querySelector("#overview > div > div > div > section > div.price-overview-widget.clearfix > div.price-overview-row.listing-detail-summary-bar-price > div:nth-child(1) > span.element-label.symbol-unit")
                        .getAttribute('content');
                        console.log(listing_currency);
                    }

    catch (e) {
        var listing_currency = null;
                        console.log(listing_currency);
    }

    //ask price
    try {
        var listing_ask_price = parser.parseFromString(DOM_Array[i],'text/html')
                        .querySelector("#overview div.price-overview-row.listing-detail-summary-bar-price > div:nth-child(1) > span.element-label.price")
                        .getAttribute('content');
                        console.log(listing_ask_price);
                    }
    
    catch (e) {
        var listing_ask_price = null;
                        console.log(listing_ask_price);
    }

    //bedroom count
    try {
        var bedroom_count = parser.parseFromString(DOM_Array[i],'text/html')
                        .querySelector("#overview > div > div > div > section > div.price-overview-widget.clearfix > div:nth-child(2) > div.property-info-element.beds > span")
                        .textContent;
                        console.log(bedroom_count);
                    }
                    
    catch (e) {
        var bedroom_count = null;
                        console.log(bedroom_count);
    }

    //bath count
    try {
        var bath_count = parser.parseFromString(DOM_Array[i],'text/html')
                        .querySelector("#overview > div > div > div > section > div.price-overview-widget.clearfix > div:nth-child(2) > div.property-info-element.baths > span")
                        .textContent;
                        console.log(bath_count);
                    }
    
    catch(e) {
        var bath_count = null;
                        console.log(bath_count);
    }

    //living space
    try {
        var space = parser.parseFromString(DOM_Array[i],'text/html')
                        .querySelector("#overview > div > div > div > section > div.price-overview-widget.clearfix > div:nth-child(2) > div.property-info-element.area > meta:nth-child(1)")
                        .getAttribute('content');
                        console.log(space);
                    }
    catch (e) {
        var space = null;
                        console.log(space)
    }

    //unit of measurement for space
    try {
        var space_unit_measurement = parser.parseFromString(DOM_Array[i],'text/html')
                        .querySelector("#overview > div > div > div > section > div.price-overview-widget.clearfix > div:nth-child(2) > div.property-info-element.area > meta:nth-child(2)")
                        .getAttribute('content');
                        console.log(space_unit_measurement);
    }

    catch (e) {
        var space_unit_measurement = null;
                        console.log(space_unit_measurement);
    }

    //price per unit of measurement
    try {
        var price_per_unit_measurement = listing_ask_price/space;
                        console.log(price_per_unit_measurement.toFixed(2));
    }

    catch (e) {
        var price_per_unit_measurement = null;
                        console.log(price_per_unit_measurement)
    }

    //street address
    try {
        var street_address = parser.parseFromString(DOM_Array[i],'text/html')
                        .querySelector("#overview > div > div > div > section > div.price-overview-widget.clearfix > div:nth-child(3) > div > div.listing-address-areainsider > div.listing-address > span")
                        .textContent;
                        console.log(street_address)
    }

    catch (e) {
        var street_address = null;
                        console.log(street_address)
    }
    
    //type of property for sale
    try {
        var type_for_sale = parser.parseFromString(DOM_Array[i],'text/html')
                        .querySelector("#details > div > div.listing-details-primary > div.row > div:nth-child(1) > div > div.value-block")
                        .textContent;
                        console.log(type_for_sale)
    }

    catch (e) {
        var type_for_sale = null;
                        console.log(type_for_sale);
    }
        
    //freehold or leasehold
    try {
        var type_of_hold = parser.parseFromString(DOM_Array[i],'text/html')
                        .querySelector("#details > div > div.listing-details-primary > div.row > div:nth-child(2) > div > div.value-block")
                        .textContent;
                        console.log(type_of_hold)
    }

    catch (e) {
        var type_of_hold = null;
                        console.log(type_of_hold)
    }

    //total floor size
    try {
        var floor_size = parser.parseFromString(DOM_Array[i],'text/html')
                        .querySelector("#details > div > div.listing-details-primary > div.row > div:nth-child(3) > div > div.value-block")
                        .textContent;
                        console.log(floor_size)
    }

    catch (e) {
        var floor_size = null;
                        console.log(floor_size)
    }

    //name of developer
    try {
        var developer = parser.parseFromString(DOM_Array[i],'text/html')
                        .querySelector("#details > div > div.listing-details-primary > div.row > div:nth-child(4) > div > div.value-block")
                        .textContent;
                        console.log(developer)
    }

    catch (e) {
        var developer = null;
                        console.log(developer);
    }

    //land size
    try {
        var land_size = parser.parseFromString(DOM_Array[i],'text/html')
                        .querySelector("#details > div > div.listing-details-primary > div.row > div:nth-child(5) > div > div.value-block")
                        .textContent;
                        console.log(land_size)
    }

    catch (e) {
        var land_size = null;
                        console.log(land_size);
    }

    //price per square foot
    try {
        var price_psf = parser.parseFromString(DOM_Array[i],'text/html')
                        .querySelector("#details > div > div.listing-details-primary > div.row > div:nth-child(6) > div > div.value-block")
                        .textContent;
                        console.log(price_psf)
    }

    catch (e) {
        var price_psf = null;
                        console.log(price_psf);
    }

    //fully furnished, unfurnished, or partially furnished
    try {
        var furnishing = parser.parseFromString(DOM_Array[i],'text/html')
                        .querySelector("#details > div > div.listing-details-primary > div.row > div:nth-child(7) > div > div.value-block")
                        .textContent;
                        console.log(furnishing)
    }

    catch (e) {
        var furnishing = null;
                        console.log(furnishing);
    }

    //year constructed
    try { 
        var year_built = parser.parseFromString(DOM_Array[i],'text/html')
                        .querySelector("#details > div > div.listing-details-primary > div.row > div:nth-child(8) > div > div.value-block")
                        .textContent;
                        console.log(year_built)
    }

    catch (e) {
        var year_built = null;
                        console.log(year_built);
    }

    //floor level
    try {
        var floor_level = parser.parseFromString(DOM_Array[i],'text/html')
                        .querySelector("#details > div > div.listing-details-primary > div.row > div:nth-child(9) > div > div.value-block")
                        .textContent;
                        console.log(floor_level)
    }

    catch (e) {
        var floor_level = null;
                        console.log(floor_level);
    }

    //broker's description
    try {
        var description = parser.parseFromString(DOM_Array[i],'text/html')
                        .querySelector("#details > div > div.listing-details-text").textContent;
                        console.log(description)
    }

    catch (e) {
        var description = null;
                        console.log(description);
    }

    try {
       var feature_html = parser.parseFromString(DOM_Array[i], 'text/html').querySelector('#facilities > div.expansible.compacted.card.active > ul').children 
    } 
    catch (e) { var feature_html = null
        console.log('N/A')
    }

    var feature_list = []
    try{
        for (k = 0; k < feature_html.length; k++){
                        feature_list.push(feature_html[k].children[1]['innerText'])
                            }
                        console.log(feature_list)
                    }
                    
    catch (e) {
        console.log('N/A')
    }

}
