const apiKey = '30a71b1a4788a0664bf6780397eac724';
//30a71b1a4788a0664bf6780397eac724

const getWeather = async (city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then((res) => res.json())
    .then((json) => {
        return json;
    })
}

export default getWeather;