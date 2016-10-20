var weather;

var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&APPID=7092c585ac798611e44cbb9dc55d4db9';
var units = '&units=metric';

var input;
first = "Hi,\nHow is\nthe\nWeather?";
frio = "Brrr,\nit's very\ncold, wrap\nyourself!";
medium = "Mmmm, it\nis not \nthat bad.";
calor = "It's great \nand \nwarm\nout there.";



function setup() {
  createCanvas(500,500);
  var button = select('#submit');
  button.mousePressed(weatherAsk);
	input = select('#city');

} 
  function weatherAsk() {
    var url = api + input.value() + apiKey + units;
    loadJSON(url, gotData);
  }



function gotData(data) {
	weather = data;
}

function draw() {
  background(255);
  textStyle(BOLD);  
  textSize(80);
  textLeading(85);
  text(first, 15,110 );
  
  if (weather) {
	var temp_max = weather.main.temp_max;
  var description = weather.weather[0].description;

  if ( temp_max < 11 ) {


    textSize(82);
    textLeading(84);
    text(frio , 15,140 );
    textSize(12);
    text('Now is ' + temp_max + ' Celcius degrees' + " with " + description + '.', 10, height-40);
		first = "";

    
  }  else if( temp_max > 11 && temp_max < 18  ) {


    textSize(92);
    textLeading(90);
    text(medium , 15,140 );
    
    textSize(12);
    text('Now is ' + temp_max + ' Celcius degrees' + " with " + description + '.', 10, height-40);
		first = "";

  }else{
    textSize(92);
    textLeading(90);
    text(calor, 15,140 );
    
    textSize(12);
    text('Now is ' + temp_max + ' Celcius degrees' + " with " + description + '.'  , 10, height-40);
		first = "";

  }
    textStyle(BOLD);
    text('The weather in ' + input.value() + ',',20,40);
  }
  


}

