import React from 'react';

import clear from '../../utility/images/weather-icons/clear.svg';
import clearNight from '../../utility/images/weather-icons/clear-night.svg';
import cloudy from '../../utility/images/weather-icons/cloudy.svg';
import cloudyNight from '../../utility/images/weather-icons/cloudy-night.svg';
import cloudySunny from '../../utility/images/weather-icons/cloudy-sunny.svg';
import fog from '../../utility/images/weather-icons/fog.svg';
import heavyRain from '../../utility/images/weather-icons/heavy-rain.svg';
import lightRain from '../../utility/images/weather-icons/light-rain.svg';
import mist from '../../utility/images/weather-icons/mist.svg';
import rain from '../../utility/images/weather-icons/rain.svg';
import rainNight from '../../utility/images/weather-icons/rain-night.svg';
import showerRain from '../../utility/images/weather-icons/shower-rain.svg';
import snow from '../../utility/images/weather-icons/snow.svg';
import snowNight from '../../utility/images/weather-icons/snow-night.svg';
import snowRain from '../../utility/images/weather-icons/snow-rain.svg';
import thunder from '../../utility/images/weather-icons/thunder.svg';
import thunderNight from '../../utility/images/weather-icons/thunder-night.svg';
import thunderRain from '../../utility/images/weather-icons/thunder-rain.svg';
import thunderRainNight from '../../utility/images/weather-icons/thunder-rain-night.svg';


export const Image = props => {
  let picture = ''

  if (props.isNight) {
    switch (props.mainWeather) {
      case 'Rain':
        picture = rainNight;
        break;
      case 'Snow':
        picture = snowNight;
        break;
      case 'Thunderstorm':
        switch (props.desc) {
          case 'Thunderstorm':
            picture = thunderNight
            break;
          default:
            picture = thunderRainNight;
            break;
        }
        break
      case 'Clouds':
        picture = cloudyNight;
        break;
      default:
        picture = clearNight;
        break;
    }
  } else {
    switch (props.mainWeather) {
      case 'Clouds':
        switch (props.desc) {
          case 'few clouds':
            picture = cloudySunny
            break;
          default:
            picture = cloudy
            break;
        }
        break;
      case 'Rain':
        switch (props.desc) {
          case 'light rain':
            picture = lightRain
            break;
          case 'heavy intensity rain':
            picture = heavyRain
            break;
          case 'shower rain':
            picture = showerRain
            break;
          default:
            picture = rain
            break;
        }
        break;
      case 'Snow':
        switch (props.desc) {
          case 'Rain and snow':
            picture = snowRain
            break;
          default:
            picture = snow
            break;
        }
        break;
      case 'Thunderstorm':
        switch (props.desc) {
          case 'Thunderstorm':
            picture = thunder
            break;
          default:
            picture = thunderRain
            break;
        }
        break;
      case 'Atmosphere':
        switch (props.desc) {
          case 'fog':
            picture = fog
            break;
          default:
            picture = mist
            break;
        }
        break;
      default:
        picture = clear
        break;
    }    
  }


  return (
    <div className='image-box'>
      <img
        src={picture}
        alt='weather'
      />
    </div>
  )
}