import React, { useState } from 'react';
import moment from 'moment';


import './App.css';
import Arrow from './utility/images/weather-icons/arrow.svg';
import { Search } from './components/Search';
import { Image } from './components/Weather/Image';
import { Welcome } from './components/Welcome';

const api = {
  key: 'ea4916ab4bbf15a404369e1564b83cd7',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})
  // const [isNight, setIsNight] = useState(false)


  const search = event => {
    if (event.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('')
          console.log(result)
        })
        .catch(err => console.log(err))
    }
  }


  const dateBuilder = d => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`
  }

  const timezone = weather.timezone //needs to be converted in minutes 
  const timezoneInMinutes = timezone / 60;
  const currTime = moment().utcOffset(timezoneInMinutes).format("HH:mm");

  const hour = moment().utcOffset(timezoneInMinutes).hours()
  // const minutes = new Date().getMinutes()
  let bgColor = ''
  if (hour >= 5 && hour <= 11) {
    // bgColor = '#d7cbb5'
    bgColor = '#cfd7cb'
  } else if (hour >= 17 && hour <= 22) {
    // bgColor = '#cfd7cb'
    bgColor = '#babdc0'
  } else if (hour >= 23 || hour <= 4) {
    bgColor = '#323232'
    
  } else {
    bgColor = 'rgb(235,198,178)'
  }

  return (
    <div className="App">
      <main 
        style={hour >= 23 || hour <= 4 ? {color: 'white', backgroundColor: bgColor} : {color: 'black', backgroundColor: bgColor}}
        >
        <Search
          setQuery={setQuery}
          query={query}
          search={search}
          isNight={hour >= 23 || hour <= 4}
        />
        {typeof weather.main != 'undefined' ?
          <div>
            <Image
              mainWeather={weather.weather[0].main}
              desc={weather.weather[0].description}
              isNight={hour >= 23 || hour <= 4}
            />
            <div className='weather-info'>
              <div className='temp'>
                <span className='temp-min'>
                  <img src={Arrow} alt='#' />
                  {Math.round(weather.main.temp_min)}&deg;
             </span>
                <span className='temp-normal'>{Math.round(weather.main.temp)}&deg;</span>
                <span className='temp-max'>
                  <img style={{fill: 'white'}} src={Arrow} alt='#' />
                  {Math.round(weather.main.temp_max)}&deg;
             </span>
              </div>
            </div>
            <div className='location-date-box'>
              <div className='location'>{`${weather.name}, ${weather.sys.country}`}</div>
              <div className='date'>{dateBuilder(new Date())}</div>
            </div>
            <div className='time-box'>
              <div className='time'>{currTime}</div>
            </div>
          </div>
          : <Welcome />}
      </main>
    </div>
  );
} 

export default App;
