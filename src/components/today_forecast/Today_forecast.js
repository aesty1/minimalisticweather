import './Today_forecast.css';
import { Component } from 'react';
import Weather_api from '../../services/Weather_api';
class Today_forecast extends Component {
    Api = new Weather_api();
   
    constructor(props) {
        super(props);
        this.state = {
            day_weather: new Map(),
            day_icon: new Map()
        };
    }

    componentDidMount() {
        this.createWeatherData();
    }

    createWeatherData = () => {   
        this.Api.get_weather(this.props.data)    
            .then((result) => {
                let hoursWeather = new Map();
                let hoursIcons = new Map();
                for(let i = 0; i < 24; i++) {
                    hoursWeather.set(`hour${i}`, result.chanceOfRain.forecast.forecastday[0].hour[i].temp_c);
                    hoursIcons.set(`hour${i}`, result.chanceOfRain.forecast.forecastday[0].hour[i].condition.icon);
                }
                this.setState({
                    day_weather: hoursWeather,
                    day_icon: hoursIcons
                });
            });
    };

    render() {
        if(this.props.data !== this.state.city) {
            this.setState({city: this.props.data})
            this.createWeatherData();

        }
        return (
            <div className='padding blocks_wrapper grey_block_wrapper today_forecast_wrapper'>
                <p className='very_small_grey_text block_title'>Today forecast</p>
                <div className='day_weather__container'>
                    <div className='today_forecast_item'>
                        <p className='very_small_grey_text today_forecast_item_text'>6:00 AM</p>
                        <img className='today_forecast_icon small_icon' alt="weather" src={this.state.day_icon.get("hour6")}/>
                        <p className='small_black_text today_forecast_item_text'>{this.state.day_weather.get("hour6")}°</p>
                    </div>
                    <hr/>
                    <div className='today_forecast_item'>
                        <p className='very_small_grey_text today_forecast_item_text'>9:00 AM</p>
                        <img className='today_forecast_icon small_icon' alt="weather" src={this.state.day_icon.get("hour9")}/>
                        <p className='small_black_text today_forecast_item_text'>{this.state.day_weather.get("hour9")}°</p>
                    </div>
                    <hr/>
                    <div className='today_forecast_item'>
                        <p className='very_small_grey_text today_forecast_item_text'>12:00 AM</p>
                        <img className='today_forecast_icon small_icon' alt="weather" src={this.state.day_icon.get("hour12")}/>
                        <p className='small_black_text today_forecast_item_text'>{this.state.day_weather.get("hour12")}°</p>
                    </div>
                    <hr/>
                    <div className='today_forecast_item'>
                        <p className='very_small_grey_text today_forecast_item_text'>15:00 AM</p>
                        <img className='today_forecast_icon small_icon' alt="weather" src={this.state.day_icon.get("hour15")}/>
                        <p className='small_black_text today_forecast_item_text'>{this.state.day_weather.get("hour15")}°</p>
                    </div>
                    <hr/>
                    <div className='today_forecast_item'>
                        <p className='very_small_grey_text today_forecast_item_text'>19:00 AM</p>
                        <img className='today_forecast_icon small_icon' alt="weather" src={this.state.day_icon.get("hour19")}/>
                        <p className='small_black_text today_forecast_item_text'>{this.state.day_weather.get("hour19")}°</p>
                    </div>
                    <hr/>
                    <div className='today_forecast_item'>
                        <p className='very_small_grey_text today_forecast_item_text'>23:00 AM</p>
                        <img className='today_forecast_icon small_icon' alt="weather" src={this.state.day_icon.get("hour23")}/>
                        <p className='small_black_text today_forecast_item_text'>{this.state.day_weather.get("hour23")}°</p>
                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default Today_forecast;