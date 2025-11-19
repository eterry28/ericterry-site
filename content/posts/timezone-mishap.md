---
title: "The Timezone Mishap"
date: "2019-10-31"
excerpt: "The Chairwoman is expanding operations around the globe. Her problem - those pesky timezone differences. "
category: ["Comrade Cola", "JavaScript"]
tags: ["comrade-cola", "javascript"]
---

The Chairwoman of the Comrade Cola Company** has come back to the group with a new request. She is expanding operations around the globe. The problem is those pesky timezone issues. She still hasn’t figured out a way to get rid of those. She wants to be able to open a browser tab and see the dates and times for her global offices. A head literally rolled before she realized that the comrade was 12 hours away.

I am starting with JSON for the city name and timezone. I cut my data teeth on xml. It was good for its time. It is still useful, but JSON seems much more approachable. Take a look at what the city structure looks like in XML.

```xml
<cities>
    <city>
        <name>Moscow</name>
        <time>Europe/Moscow</time>
    </city>
    <city>
        <name>Sydney</name>
        <time>Australia/Sydney</time>
    </city>
</cities>
```
That is a pretty straight forward implementation of the cities structure. The heavy lifting comes when trying to parse that data for use. The JSON implementation is lightweight and is already baked in as a part of the language we are using here.

You can get a file with all of the timezone information from iana.org. Or you can be like me and visit wikipedia to grab the few you want to use.
```json
cities = [{
        "name": "Moscow",
        "time": "Europe/Moscow"
    },
    {
        "name": "Sydney",
        "time": "Australia/Sydney"
    },
    {
        "name": "Hong Kong",
        "time": "Asia/Hong_Kong"
    },
    {
        "name": "New York",
        "time": "America/New_York"
    },
    {
        "name": "Guam",
        "time": "Pacific/Guam"
    },
    {
        "name": "Dakar",
        "time": "Africa/Abidjan"
    },
    {
        "name": "Tehran",
        "time": "Asia/Tehran"
    }
];
```
I started with a fairly straightforward way of getting the information and displaying it.

```javascript
var nydate = new Date().toLocaleDateString("en-US", { timeZone: "America/New_York" });
var nytime = new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York" });
document.querySelector(#nydate).innerHTML = nydate;
document.querySelector(#nytime).innerHTML = nytime;
```

The HTML followed this structure:
```html
<div class="col-md-1">
    <div class="city">New York</div>
    <div class="date" id="nydate"></div>
    <div class="time" id="nytime"></div>
</div>
```

That may be fine for a one and done display, but we’re talking about multiple cities being displayed at once. The code would become a nightmare the moment copy and paste came into the picture. So what is a better way to approach this? Functions of course!

I moved the city, date, and time into an object constructor function.

```javascript
function ObjectConstructor(city, timezone) {
    this.city = city;    
    this.date = new Date().toLocaleDateString("en-US", { timeZone: timezone });
    this.time = new Date().toLocaleTimeString("en-US", { timeZone: timezone });
    return this;
}
```

Here the function is called and returns an object with the correct city and timezone. 

```javascript
let City = ObjectConstructor("New York", "America/New_York");
```
Much more flexibility for enhancements. Remember – there will always be changes. Set yourself up for success by trying to future-proof your code. Now to deal with that HTML. I kept the same structure, but changed the id of the div tags a bit.

```html
<div class="col-md-1">
    <div class="city" id="city0"></div>
    <div class="date" id="date0"></div>
    <div class="time" id="time0"></div>
</div>
```
Again, structurally the same. However, it allows me to put another piece of repeated code into a function. 

```javascript
function CityDateTime(object, cityId, dateId, timeId) {
    document.querySelector(cityId).innerHTML = object.city;
    document.querySelector(dateId).innerHTML = object.date;
    document.querySelector(timeId).innerHTML = object.time;
}
```
The function injects the city information into the HTML after the page loads. It takes the City object that we created earlier. Along with structural ids of the HTML.

```javascript
CityDateTime(City, "#city0, "#date0", "#time0");
```

Those ids look a little suspect. They are there for a reason. That reason – our JSON with the city info. We can loop through the cities and free ourselves from hard coding values into the function calls. Adding another layer of flexibility.

```javascript
for (i in cities) {
    let City = ObjectConstructor(cities[i].name, cities[i].time);
    CityDateTime(City, "#city" + i, "#date" + i, "#time" + i);
}
```
A good challenge would be to refactor the CityDateTime function to only take the city and one id parameter.

```javascript
timezone clock 
```

It works!

Technically we have met the Chairwoman’s latest ask. The page will load the current date and times for the cities in the JSON. You can take it a step further so the Chairwoman or anyone else does not have to refresh the page to keep current. We can wrap most of this in JavaScript’s built-in setInterval() method with a 1000 millisecond interval. Now the display updates every second, and you look like a hero for going above the ask.

The source code is below. Have fun!

The HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Comrade Cola Locations</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css?family=Arimo&display=swap%7CMontserrat:regular,700,900,100,200" rel="stylesheet">
</head>
<body>
    <div class="locations">
        <h1 class="group">Comrade Cola Clock</h1>
    </div>
    <div class="row seven-cols">
        <div class="col-md-1">
            <div class="city" id="city0"></div>
            <div class="date" id="date0"></div>
            <div class="time" id="time0"></div>
        </div>
        <div class="col-md-1">
            <div class="city" id="city1"></div>
            <div class="date" id="date1"></div>
            <div class="time" id="time1"></div>
        </div>
        <div class="col-md-1">
            <div class="city" id="city2"></div>
            <div class="date" id="date2"></div>
            <div class="time" id="time2"></div>
        </div>
        <div class="col-md-1">            
            <div class="city" id="city3"></div>
            <div class="date" id="date3"></div>
            <div class="time" id="time3"></div>
        </div>
        <div class="col-md-1">            
            <div class="city" id="city4"></div>
            <div class="date" id="date4"></div>
            <div class="time" id="time4"></div>
        </div>
        <div class="col-md-1">
            <div class="city" id="city5"></div>
            <div class="date" id="date5"></div>
            <div class="time" id="time5"></div>
        </div>
        <div class="col-md-1">            
            <div class="city" id="city6"></div>
            <div class="date" id="date6"></div>
            <div class="time" id="time6"></div>
        </div>
    </div>
    <script src="index.js" charset="utf-8"></script>
</body>
</html>
```

The CSS
```css
@media (min-width: 768px){
  .seven-cols .col-md-1,
  .seven-cols .col-sm-1,
  .seven-cols .col-lg-1  {
    width: 100%;
    *width: 100%;
  }
}
@media (min-width: 992px) {
  .seven-cols .col-md-1,
  .seven-cols .col-sm-1,
  .seven-cols .col-lg-1 {
    width: 14.285714285714285714285714285714%;
    *width: 14.285714285714285714285714285714%;
    max-width: 14.285714285714285714285714285714% !important;
flex:none !important;
  }
}
 
@media (min-width: 1200px) {
  .seven-cols .col-md-1,
  .seven-cols .col-sm-1,
  .seven-cols .col-lg-1 {
    width: 14.285714285714285714285714285714%;
    *width: 14.285714285714285714285714285714%;
    max-width: 14.285714285714285714285714285714% !important;
flex:none !important;
  }
}
.city {
    font-family: 'Arimo', sans-serif;
    font-size: 1.75rem;
    line-height: 1.75rem;
    color: rgb(100, 0, 0);
    padding:0 auto;
}
.row {
    margin:10% auto;
    width:90%;
}
.group {
    font-family: 'Montserrat:regular', sans-serif;
    font-weight: 700;
    color: rgb(100, 0, 0);
    font-size: 3.5rem;
    width: fit-content;
    margin: 2.5rem auto;
}
.seven-cols .col-md-1,
.seven-cols .col-sm-1,
.seven-cols .col-lg-1{
    margin-bottom: .75rem;
}
```

The JavaScript

```javascript
cities = [{
        "name": "Moscow",
        "time": "Europe/Moscow"
    },
    {
        "name": "Sydney",
        "time": "Australia/Sydney"
    },
    {
        "name": "Hong Kong",
        "time": "Asia/Hong_Kong"
    },
    {
        "name": "New York",
        "time": "America/New_York"
    },
    {
        "name": "Guam",
        "time": "Pacific/Guam"
    },
    {
        "name": "Dakar",
        "time": "Africa/Abidjan"
    },
    {
        "name": "Tehran",
        "time": "Asia/Tehran"
    }
];
setInterval(function () {
    for (i in cities) {
        let City = ObjectConstructor(cities[i].name, cities[i].time);
        CityDateTime(City, "#city" + i, "#date" + i, "#time" + i);
    }
    function ObjectConstructor(city, tzone) {
        this.city = city;
        //this.day = new Date()
        this.date = new Date().toLocaleDateString("en-US", {
            timeZone: tzone
        });
        this.time = new Date().toLocaleTimeString("en-US", {
            timeZone: tzone
        });
        return this;
    }
    function CityDateTime(object, cityId, dateId, timeId) {
        //console.log(object, cityId, dateId, timeId);
        document.querySelector(cityId).innerHTML = object.city;
        document.querySelector(dateId).innerHTML = object.date;
        document.querySelector(timeId).innerHTML = object.time;
    }
}, 1000);
```