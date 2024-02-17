var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = "86f0b7b8bdf6305c1f46c8dd2563fabe"
function convertion(val) {
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())

        .then(data => {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var temprature = data['main']['temp']
            var windspeed = data['wind']['speed']


            city.innerHTML = `Weather of <span>${nameval}<span>`
            temp.innerHTML = `Temperature:-<span>${convertion(temprature)}C</span>`
            description.innerHTML = `Sky conditions :-<span>${descrip}<span>`
            wind.innerHTML = `Wind Speed : <span>${windspeed}km/h<span>`

        })


        .catch(err => alert('You entered Wrong city name'))
})