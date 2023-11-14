
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const searchData = (e) => {
    e.preventDefault();
  }
  useEffect(() => {
    fetch(`https://wttr.in/${search}?format=j1`)
      .then(res => res.json())
      .then(data => setData(data.current_condition))
  }, [search])


  return (
    <><br /><br />
      <center>
        <h1>Weather Application</h1>
      </center>
      {
        data.map((item, i) => {
          return (
            <div key={i} className="container">
              <div className="weather__header">
                <form className="weather__search" onSubmit={searchData}>
                  <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search for a city..." className="weather__searchform" />
                  <i className="fa-solid fa-magnifying-glass"></i>
                </form>
                <div className="weather__units">
                  <span className="weather_unit_celsius">{item.temp_C} C</span>
                  <span className="weather_unit_farenheit">{item.temp_F} F</span>
                </div>
              </div>
              <div className="weather__body">
                <h1 className="weather__city"></h1>
                <div className="weather__datetime">
                </div>
                <div className="weather__forecast">
                  <span className="material-symbols-outlined">
                    partly_cloudy_night
                  </span>
                </div>
                <div className="weather__icon">
                </div>
                <p className="weather__temperature">
                </p>
                <div className="weather__minmax">
                  <p>{search}</p>
                </div>
              </div>

              <div className="weather__info">
                <div className="weather__card">
                  <i className="fa-solid fa-temperature-full"></i>
                  <div>
                    <p>Cloud Cover</p>
                    <p className="weather__realfeel">{item.cloudcover}
                      <span className="material-symbols-outlined">
                        humidity_high
                      </span></p>
                  </div>
                </div>
                <div className="weather__card">
                  <i className="fa-solid fa-droplet"></i>
                  <div>
                    <p>Humidity</p>
                    <p className="weather__humidity">18
                      <span className="material-symbols-outlined">
                        humidity_high
                      </span></p>
                  </div>
                </div>
                <div className="weather__card">
                  <i className="fa-solid fa-wind"></i>
                  <div>
                    <p>Pressure</p>
                    <p className="weather__wind">{item.pressure}
                      <span className="material-symbols-outlined">
                        humidity_high
                      </span></p>
                  </div>
                </div>
                <div className="weather__card">
                  <i className="fa-solid fa-gauge-high"></i>
                  <div>
                    <p>Observation Time</p>
                    <p className="weather__pressure">{item.observation_time}
                      <span className="material-symbols-outlined">
                        humidity_high
                      </span></p>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }

    </>
  )
}

export default App
