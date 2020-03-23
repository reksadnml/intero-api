var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+
	'&units=imperial&appid=f878ccf686e0f2d8efffad309d043603')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Weather : "+descValue;
  temp.innerHTML = "Temperature : "+tempValue+"° Fahrenheit";
  input.value ="";

})

.catch(err => alert("Nama Kota Salah!"));
})
