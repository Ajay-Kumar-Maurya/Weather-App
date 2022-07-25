import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { About } from './components/About';


function App() {

  const [query, setQuery] = useState({ q: 'Berlin' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : 'current location.'
      toast.info('Featching weather for ' + message)
      await getFormattedWeatherData({ ...query, units }).then(data => {

        toast.success(`Successfully fetched weather for ${data.name}, ${data.country}.`)

        setWeather(data);
      });
    }

    fetchWeather();
  }, [query, units])


  const formatBackgroundColor = () => {
    if (!weather) return 'from-cyan-700 to-blue-700'
    const thresold = units === 'metric' ? 20 : 60
    if (weather.temp <= thresold) return 'from-cyan-700 to-blue-700'
    return 'from-yellow-700 to-orange-700'
  }

  const formatBackgroundImage = () => {
    let myStyle = {}

    if (!weather) {
      myStyle.backgroundImage = 'url("https://cdn.pixabay.com/photo/2016/07/08/13/37/texture-1504364_960_720.jpg")'
      return myStyle
    }

    switch (weather.details) {
      case "Clear":
        myStyle.backgroundImage = 'url("https://cdn.pixabay.com/photo/2016/04/30/22/03/sunrise-flight-1364048_960_720.jpg")'
        break;

      case "Clouds":
        myStyle.backgroundImage = 'url("https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405_960_720.jpg")'
        break;

      case "Mist":
        myStyle.backgroundImage = 'url("https://cdn.pixabay.com/photo/2016/11/22/19/10/clouds-1850093_960_720.jpg")'
        break;

      default:
        myStyle.backgroundImage = 'url("https://cdn.pixabay.com/photo/2016/07/08/13/37/texture-1504364_960_720.jpg")'
        break;
    }
    return myStyle
  }



  return (
    // Div tag with style to show background colors depending on temperature.
    // <div className={`bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBackgroundColor()}`}

    // Div tag with style to show background images depending on weather.
    <div className={`w-full h-full bg-no-repeat bg-cover`} style={formatBackgroundImage()}>
      <Header />

      {/* <Router>
        <Routes>
          <Route exact path='/' element={<>
            <TopButtons setQuery={setQuery} />
            <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
            {weather && (
              <div className='pb-3'>
                <TimeAndLocation weather={weather} />
                <TemperatureAndDetails weather={weather} units={units} />
                <Forecast title="hourly forecast" items={weather.hourly} />
                <Forecast title="daily forecast" items={weather.daily} />
              </div>
            )}
          </>} />

          <Route exact path='/about' element={} />
        </Routes>
      </Router> */}
      

      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div className='pb-3'>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} units={units} />
          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />
        </div>
      )}

      <Footer />

      {/* <ToastContainer autoClose={3000} theme='colored' newestOnTop={true}/> */}

    </div>


  );
}

export default App;
