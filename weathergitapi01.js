const apiKey = 'c2edd4ca01fc231f1c775fe9260c1dd0'

countryCode = 'us'

getWeather = () => {
    const zipCode = document.getElementById('userZipCode').value

    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${apiKey}`

    const xhr = new XMLHttpRequest()

    xhr.open("GET", url) // GET, PUT, UPDATE, DELETE-4 XHR API CRUD methods

    xhr.send()

    xhr.onload = () => {
        jsonData = JSON.parse(xhr.responseText)
        document.getElementById("main").innerText = xhr.responseText
        cityName = jsonData.name
        const K = parseInt(jsonData.main.temp)
        const F = (1.8*(K - 273) + 32)
        const description = jsonData.weather[0].description
        const output = `The weather for ${cityName}: Temperature is ${F} and conditions call for ${description}.`
        document.getElementById('main').innerText = output

        if (jsonData.weather[0].main == 'Clouds') {
            var cloudyIcon = document.createElement('img')
            cloudyIcon.src = "icons/03d.png"
            document.body.appendChild(cloudyIcon)
        }
        if (jsonData.weather[0].main == 'Clear') {
            var clearIcon = document.createElement('img')
            clearIcon.src = "icons/01d.png"
            document.body.appendChild(clearIcon)
        }
        if (jsonData.weather[0].main == 'Rain') {
            var rainIcon = document.createElement('img')
            rainIcon.src = "icons/10d.png"
            document.body.appendChild(rainIcon)
        }
        if (jsonData.weather[0].main == 'Thunderstorm') {
            var thunderIcon = document.createElement('img')
            thunderIcon.src = "icons/11d.png"
            document.body.appendChild(thunderIcon)
        }
    }   
}