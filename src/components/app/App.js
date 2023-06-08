import './App.css';

import Search from '../search/Search';
import Weather_block from '../weather_block/Weather_block';
import Week_weather from '../week_weather/Week_weather';
import Today_forecast from '../today_forecast/Today_forecast';
import Air_conditions from '../air_conditions/Air_conditions';
import './Adaptive.css'
import { Component } from 'react';
class App extends Component {
  state = {
    data: "Ufa",
    bg_color: 'red'
  }
  updateData = (value) => {
    this.setState({data: value})
  }
  
  render() {
    return (
      <div className='wrapper' id={this.state.bg_color}>
        <div className='padding gap container'>
          <div className='gap first_container'>
            <Search updateData={this.updateData} />
            <Weather_block data={this.state.data} updateColor={this.updateColor} />
          </div>
          <div className='gap second_container'>
            <div className='gap big_blocks__container'>
              <Today_forecast data={this.state.data}/>
              <Air_conditions data={this.state.data}/>
            </div>
            <Week_weather data={this.state.data}/>
          </div>
        </div>  
      </div>     
    );
  };
  
};

export default App;
