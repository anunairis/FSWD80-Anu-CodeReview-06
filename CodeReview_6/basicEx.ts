class Location1 {
  placeTitle = "";
  image = "";
  place = "";
  address = "";
  city = "";
  zip:number; 
constructor(placeTitle:string, image:string, place:string, address:string, city:string, zip) { 
  this.placeTitle = placeTitle;
  this.image = image;
  this.place = place;
  this.address = address;
  this.city = city;
  this.zip = zip;
  }

display() {
  console.log(this.placeTitle);
  let showDisplay = `
    
    <div class="row col-lg-3 col-md-6 col-sm-12 mt-2 offset" id="places">
    <h4 class="ml-3 mt-3 mr-3 title-section"><strong>${this.placeTitle}</strong></h4>
    <div class="card">
      <div class="card-body py-0 px-0 body-section">
        <img src="${this.image}" alt="" height="250px" max-width="100%" class="card-img-top col-lg-12 img-responsive lose-picture">
        <h5 class="card-title ml-3">${this.place}</h5>
        <ul>
        <li class="card-text">${this.address}, ${this.zip} ${this.city}</li>
        </ul>
        </div>
      </div>
    </div>
  </div>
`
return showDisplay;
  }
}

class Restaurant extends Location1 {
  phone:string;
  webpage:string;
  foodServed:string;
constructor(placeTitle:string, image:string, place:string, address:string, city:string, zip, phone, webpage:string, foodServed) {
  super(placeTitle, image, place, address, city, zip);
  this.phone = phone;
  this.webpage = webpage;
  this.foodServed = foodServed;
  }
  display() {
  super.display();
  let showDisplayRestaurant = `
  
  <div class="row col-lg-3 col-md-6 col-sm-12 mt-2 offset" id="restaurants">
  <h4 class="ml-3 mt-3 mr-3 title-section"><strong>${this.placeTitle}</strong></h4>
  <div class="card">
    <div class="card-body py-0 px-0 body-section">
      <img src="${this.image}" alt="" height="250px" max-width="100%" class="card-img-top col-lg-12 img-responsive lose-picture">
      <h5 class="card-title ml-3">${this.place}</h5>
      <ul>
      <li class="card-text">${this.address}, ${this.zip} ${this.city}</li>
      <li class="card-text">${this.phone}</li>
      <li><a href="${this.webpage}">${this.webpage}</a></li>
      <li class="card-text">${this.foodServed}</li>
      </ul>
      </div>
    </div>
  </div>`
return showDisplayRestaurant;
  }
}

class Events extends Location1 {

  eventDate:string;
  eventTime:string;
  price:string;
  webpage:string;
constructor(placeTitle:string, image:string, place:string, address:string, city:string, zip, eventDate,  eventTime, price, webpage) {
  super(placeTitle, image, place, address, city, zip);
  this.eventDate = eventDate;
  this.eventTime = eventTime;
  this.price = price;
  this.webpage = webpage;
  }
  display() {
  super.display();
  let showDisplayEvents = `
 
  <div class="row col-lg-3 col-md-6 col-sm-12 mt-2 offset" id="events">
   <h4 class="ml-3 mt-3 mr-3 title-section"><strong>${this.placeTitle}</strong></h4>
  <div class="card">
    <div class="card-body py-0 px-0 body-section">
      <img src="${this.image}" alt="" height="250px" max-width="100%" class="card-img-top col-lg-12 img-responsive lose-picture">
      <h5 class="card-title ml-4">${this.place}</h5>
      <ul>
      <li class="card-text">${this.address}, ${this.zip} ${this.city}</li>
      <li class="card-text">${this.eventDate}</li>
      <li class="card-text">${this.eventTime}</li>
      <li class="card-text">Ticket price: ${this.price} EUR</li>
      <li><a href="${this.webpage}">${this.webpage}</a></li>
      </ul>
      </div>
    </div>
  </div>`
return showDisplayEvents;
  }
}
let karlsplatz = new Location1("PLACES:", "img/karls.jpg", "St. Charles Church", "Karlsplatz 1", "Vienna", 1010); 

let zoo = new Location1("", "img/zoo.jpg", "Zoo Vienna", "Maxingstraße 13b", "Vienna", 1130);

let lemonResto = new Restaurant("RESTAURANTS:", "img/lemon.jpg", "Lemon Leaf Thai Restaurant", "Kettenbrückengasse 19", "Vienna", 1050, 
  "+43(1)5812308", "http://www.lemonleaf.at", "Chinese Restaurant"); 

let sixtaResto = new Restaurant("", "img/sixta.png", "Sixta Restaurant Bar", "Schönbrunner Straße 21", "Vienna", 1050, 
  "+43 1 58 528 56", "http://www.sixta-restaurant.at", "Viennese Restaurant");  

let krisConcert = new Events("EVENTS:", "img/kris.jpg", "Kris Kristofferson Concert", "Wiener Stadthalle(Halle E), Roland Rainer Platz 1", "Vienna", 1150, "Fr., 15.11.2019", "20:00", "58.50", "http://kriskristofferson.com"); 

let lennyConcert = new Events("", "img/lenny.jpg", "Lenny Kravitz Concert", "Wiener Stadthalle(Halle D), Roland Rainer Platz 1", "Vienna", 1150,"Sat, 09.12.2019", "19:30", "47.80", "http://www.lennykravitz.com");


var array = [karlsplatz, zoo, lemonResto, sixtaResto, krisConcert, lennyConcert];

var cards = document.getElementById("result");
for (let i in array) {
  cards.innerHTML += array[i].display();
}
