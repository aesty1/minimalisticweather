import './Air_conditions.css';
import { Component } from 'react';
import Weather_api from '../../services/Weather_api';
import thermometer from '../../icons/thermometer.png';
import drop from '../../icons/drop.png';
import sun from '../../icons/sun.png';
import wind from '../../icons/wind.png';
class Air_conditions extends Component {
    Api = new Weather_api();
    constructor(props) {
        super(props);
        this.state = {
            real_feel: 0,
            wind: 0,
            humidity: 0,
            uv: 0
        };
    }
    componentDidMount() {
        this.createWeatherData();
    }
    createWeatherData = () => {   
        this.Api.get_weather(this.props.data)    
            .then((result) => {
                this.setState({
                    real_feel: result.firstDayWeather.current.feelslike_c,
                    wind: result.firstDayWeather.current.wind_kph,
                    humidity: result.firstDayWeather.current.humidity,
                    uv: result.firstDayWeather.current.uv
                })

          });
    };

    render() {
        if(this.props.data !== this.state.city) {
            this.setState({city: this.props.data})
            this.createWeatherData();

        }
        return (
            <div className='padding blocks_wrapper air_conditions_wrapper'>
                <p className='very_small_grey_text block_title'>Air conditions</p>
                <div className='air_conditions__container'>
                    <div className='air_conditions_item__container real_feel__container'>
                        <div className='air_conditions_item__wrapper'>
                            <img className='air_conditions_item__img small_img' src={thermometer}/>
                            <p className='very_small_grey_text today_forecast_text'>Feels like</p>
                        </div>                       
                        <p className='small_black_text air_conditions__text'>{this.state.real_feel}°</p>
                    </div>
                    <div className='air_conditions_item__container wind__container'>
                        <div className='air_conditions_item__wrapper'>
                            <img className='air_conditions_item__img wind_img small_img' src={wind}/>
                            <p className='very_small_grey_text today_forecast_text'>Wind</p>
                        </div>
                        <p className='small_black_text air_conditions__text'>{this.state.wind}km/h</p>
                    </div>
                    <div className='air_conditions_item__container wind__container'>
                        <div className='air_conditions_item__wrapper'>
                            <img className='air_conditions_item__img wind_img small_img' src={drop}/>
                            <p className='very_small_grey_text today_forecast_text'>Humidity</p>
                        </div>
                        <p className='small_black_text air_conditions__text'>{this.state.humidity}%</p>
                    </div>
                    <div className='air_conditions_item__container wind__container'>
                        <div className='air_conditions_item__wrapper'>
                            <img className='air_conditions_item__img wind_img small_img' src={sun}/>
                            <p className='very_small_grey_text today_forecast_text'>UV index</p>
                        </div>
                        <p className='small_black_text air_conditions__text'>{this.state.uv}</p>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Air_conditions;