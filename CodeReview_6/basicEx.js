var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Location1 = /** @class */ (function () {
    function Location1(image, place, address, city, zip) {
        this.image = "";
        this.place = "";
        this.address = "";
        this.city = "";
        this.image = image;
        this.place = place;
        this.address = address;
        this.city = city;
        this.zip = zip;
    }
    Location1.prototype.display = function () {
        var showDisplay = "\n  <div class=\"row col-lg-3 col-md-6 col-sm-12 mt-2 offset\" id=\"places\">\n  <div class=\"card\">\n    <div class=\"card-body py-0 px-0\">\n      <img src=\"" + this.image + "\" alt=\"\" height=\"250px\" max-width=\"100%\" class=\"card-img-top col-lg-12 img-responsive\">\n      <h5 class=\"card-title ml-3\">" + this.place + "</h5>\n      <ul>\n      <li class=\"card-text\">" + this.address + ", " + this.zip + " " + this.city + "</li>\n      </ul>\n      </div>\n    </div>\n  </div>";
        return showDisplay;
    };
    return Location1;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(image, place, address, city, zip, phone, webpage, foodServed) {
        var _this = _super.call(this, image, place, address, city, zip) || this;
        _this.phone = phone;
        _this.webpage = webpage;
        _this.foodServed = foodServed;
        return _this;
    }
    Restaurant.prototype.displayRestaurant = function () {
        var showDisplayRestaurant = "\n  <div class=\"row col-lg-3 col-md-6 col-sm-12 mt-2 offset\" id=\"restaurants\">\n  <div class=\"card\">\n    <div class=\"card-body py-0 px-0\">\n      <img src=\"" + this.image + "\" alt=\"\" height=\"250px\" max-width=\"100%\" class=\"card-img-top col-lg-12 img-responsive\">\n      <h5 class=\"card-title ml-3\">" + this.place + "</h5>\n      <ul>\n      <li class=\"card-text\">" + this.address + ", " + this.zip + " " + this.city + "</li>\n      <li class=\"card-text\">" + this.phone + "</li>\n      <li><a href=\"" + this.webpage + "\">" + this.webpage + "</a></li>\n      <li class=\"card-text\">" + this.foodServed + "</li>\n      </ul>\n      </div>\n    </div>\n  </div>";
        return showDisplayRestaurant;
    };
    return Restaurant;
}(Location1));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(image, place, address, city, zip, eventDate, eventTime, price, webpage) {
        var _this = _super.call(this, image, place, address, city, zip) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.price = price;
        _this.webpage = webpage;
        return _this;
    }
    Events.prototype.displayEvents = function () {
        var showDisplayEvents = "\n  <div class=\"row col-lg-3 col-md-6 col-sm-12 mt-2 offset\" id=\"events\">\n  <div class=\"card\">\n    <div class=\"card-body py-0 px-0\">\n      <img src=\"" + this.image + "\" alt=\"\" height=\"250px\" max-width=\"100%\" class=\"card-img-top col-lg-12 img-responsive\">\n      <h5 class=\"card-title ml-3\">" + this.place + "</h5>\n      <ul>\n      <li class=\"card-text\">" + this.address + ", " + this.zip + " " + this.city + "</li>\n      <li class=\"card-text\">" + this.eventDate + "</li>\n      <li class=\"card-text\">" + this.eventTime + "</li>\n      <li class=\"card-text\">Ticket price: " + this.price + " EUR</li>\n      <li><a href=\"" + this.webpage + "\">" + this.webpage + "</a></li>\n      </ul>\n      </div>\n    </div>\n  </div>";
        return showDisplayEvents;
    };
    return Events;
}(Location1));
var karlsplatz = new Location1("img/karls.jpg", "St. Charles Church", "Karlsplatz 1", "Vienna", 1010);
var zoo = new Location1("img/zoo.jpg", "Zoo Vienna", "Maxingstraße 13b", "Vienna", 1130);
var lemonResto = new Restaurant("img/lemon.png", "Lemon Leaf Thai Restaurant", "Kettenbrückengasse 19", "Vienna", 1050, "+43(1)5812308", "http://www.lemonleaf.at/", "Chinese Restaurant");
var sixtaResto = new Restaurant("img/sixta.png", "Sixta Restaurant Bar", "Schönbrunner Straße 21", "Vienna", 1050, "+43 1 58 528 56", "http://www.sixta-restaurant.at/", "Viennese Restaurant");
var krisConcert = new Events("img/kris.jpg", "Kris Kristofferson Concert", "Wiener Stadthalle(Halle E), Roland Rainer Platz 1", "Vienna", 1150, "Fr., 15.11.2019", "20:00", "58.50", "http://kriskristofferson.com/");
var lennyConcert = new Events("img/lenny.jpg", "Lenny Kravitz Concert", "Wiener Stadthalle(Halle D), Roland Rainer Platz 1", "Vienna", 1150, "Sat, 09.12.2019", "19:30", "47.80", "http://www.lennykravitz.com/");
var array = [karlsplatz, zoo, lemonResto, sixtaResto, krisConcert, lennyConcert];
var cards = document.getElementById("result");
for (var i in array) {
    if (i == "4") {
        cards.innerHTML += array[i].displayEvents();
    }
    else if (i == "5") {
        cards.innerHTML += array[i].displayEvents();
    }
    else if (i == "2") {
        cards.innerHTML += array[i].displayRestaurant();
    }
    else if (i == "3") {
        cards.innerHTML += array[i].displayRestaurant();
    }
    else {
        cards.innerHTML += array[i].display();
    }
}
