import React from 'react';
import CityList from './CityList'

const CityContainer = (props) => {
  return (
    <div id="city-container">
      {props.cityData.map((cities, key) =>
        <div key={key}>
          <CityList
            key={cities.key}
            id={cities.id}
            name={cities.name}
            temp={cities.main.temp}
            main={cities.weather[0].main}
            descr={cities.weather[0].description}
            icon={cities.weather[0].icon}/>
        </div>
      )}
    </div>
  )
}

export default CityContainer
