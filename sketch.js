
var weather;
frio = "Brrr\nMUCHO\nFRIOOO\nABRIGATE";
calor = "Today\nIt's\na Sunny\nDay";




var nameCity;
var select;

function setup() {
  createCanvas(500,500);
  text('Weather of:',20,20);
  
  sel = createSelect();
  sel.position(20, 40);
  sel.option('New York');
  sel.option('Santiago');
  sel.option('Lima');
  sel.changed(mySelectEvent);

}

function draw() {
  background(123);
  fill(255);
  // get the humidity value out of the loaded JSON
  var temp_max = weather.main.temp_max;
  if ( temp_max < 20 ) {


    textSize(22);
    textFont('Apercu-Bold');
    textLeading(29);
    text(frio , 0,130 );
    
    textFont('Apercu-Mono');
    textSize(12);
    text('Now is ' + temp_max + ' Celcius Degrees', 10, height-40);

  }else{
      textSize(22);
    textFont('Apercu-Bold');
    textLeading(29);
    text(calor, 0,130 );
    
    textFont('Apercu-Mono');
    textSize(12);
    text('Now is ' + temp_max + ' Celcius Degrees', 10, height-40);

  }
    text('Weather of:',20,20);
  if ( sel.value == 'Santiago'){
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=Santiago' +
   '&APPID=7092c585ac798611e44cbb9dc55d4db9&units=metric';
    weather = loadJSON(url);

  }

}

function mySelectEvent() {
  var item = sel.value();
  background(200);
    if (sel.value() == 'Santiago'){
     var url = 'http://api.openweathermap.org/data/2.5/weather?q=Santiago' + 
     '&APPID=7092c585ac798611e44cbb9dc55d4db9&units=metric';
    weather = loadJSON(url);
      }
    if (sel.value() == 'Lima'){
   var url = 'http://api.openweathermap.org/data/2.5/weather?q=Lima' + 
   '&APPID=7092c585ac798611e44cbb9dc55d4db9&units=metric';
  weather = loadJSON(url);
    }
  
  println(sel.value());
  
}

function preload() {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=NewYork' +
   '&APPID=7092c585ac798611e44cbb9dc55d4db9&units=metric';
  weather = loadJSON(url);
  

}