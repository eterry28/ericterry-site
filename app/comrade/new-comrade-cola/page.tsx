import Link from "next/link";

export default function ComradeCola() {
  return (
    <>
      <style>
        {`
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
    color: var(--neon-cyan);
    padding:0 auto;
}
.row {
    margin:10% auto;
    width:90%;
    display:ruby-text;
}
.group {
    font-family: 'Montserrat:regular', sans-serif;
    font-weight: 700;
    color: var(--neon-cyan);
    font-size: 3.5rem;
    width: fit-content;
    margin: 2.5rem auto;
}
.seven-cols .col-md-1,
.seven-cols .col-sm-1,
.seven-cols .col-lg-1{
    margin-bottom: .75rem;
}
    `}
        `
      </style>
      <script>
        {`
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
}, 1000);`}
      </script>
      <div className="grid-bg" />
      <nav>
        <ul>
          <li>
            <a href="/#home">Home</a>
          </li>
          <li>
            <a href="/#story">Story</a>
          </li>
          <li>
            <a href="/#journey">Journey</a>
          </li>
          <li>
            <a href="/#expertise">Expertise</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#connect">Connect</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </nav>
      <div className="blog-container">
        <div className="locations">
          <h1 className="group">Comrade Cola Clock</h1>
        </div>
        <div className="row seven-cols">
          <div className="col-md-1">
            <div className="city" id="city0"></div>
            <div className="date" id="date0"></div>
            <div className="time" id="time0"></div>
          </div>
          <div className="col-md-1">
            <div className="city" id="city1"></div>
            <div className="date" id="date1"></div>
            <div className="time" id="time1"></div>
          </div>
          <div className="col-md-1">
            <div className="city" id="city2"></div>
            <div className="date" id="date2"></div>
            <div className="time" id="time2"></div>
          </div>
          <div className="col-md-1">
            <div className="city" id="city3"></div>
            <div className="date" id="date3"></div>
            <div className="time" id="time3"></div>
          </div>
          <div className="col-md-1">
            <div className="city" id="city4"></div>
            <div className="date" id="date4"></div>
            <div className="time" id="time4"></div>
          </div>
          <div className="col-md-1">
            <div className="city" id="city5"></div>
            <div className="date" id="date5"></div>
            <div className="time" id="time5"></div>
          </div>
          <div className="col-md-1">
            <div className="city" id="city6"></div>
            <div className="date" id="date6"></div>
            <div className="time" id="time6"></div>
          </div>
        </div>
      </div>
      
    </>
  );
}
