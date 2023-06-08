import { Component } from 'react';
import './Weather_block.css';
import Weather_api from '../../services/Weather_api';
class Weather_block extends Component {
    Api = new Weather_api();
    
    constructor() {
        super()
        this.state = {
            city: 'Ufa',
            cityCopy: 'Ufa',
            firstDayWeather: {},
            secondDayWeather: {},
            thirdDayWeather: {},
            chanceOfRain: 0
        }

    }
    componentDidMount() {
        this.createWeatherData();
    }
    
    createWeatherData = () => {   
        this.Api.get_weather(this.props.data)
            .then((result) => {
                if(result.firstDayWeather.current && result.secondDayWeather.current && result.thirdDayWeather.current !== undefined) {
                    this.setState({ firstDayWeather: result.firstDayWeather.current,
                                    secondDayWeather: result.secondDayWeather.current,
                                    thirdDayWeather: result.thirdDayWeather.current}); 
                }
                this.setState({chanceOfRain: result.chanceOfRain.forecast.forecastday[0].hour[0].chance_of_rain});
          })
    };
    renameCity() {
        let fisrtWordChar = this.props.data.split("").slice(0, 1)[0].toUpperCase();
        let wordRest = this.props.data.split("").slice(1).join('').toLowerCase();
        this.setState({
            cityCopy: fisrtWordChar+wordRest
        })

    }
    checkCondition = () => {
        if (this.state.firstDayWeather.condition) {
            this.firstConditionText = this.state.firstDayWeather.condition.text;
        }
        if (this.state.firstDayWeather.condition) {
            this.firstConditionIcon = this.state.firstDayWeather.condition.icon;
        }
        if (this.state.secondDayWeather.condition) {
            this.secondConditionText = this.state.secondDayWeather.condition.text;
        }
        if (this.state.secondDayWeather.condition) {
            this.secondConditionIcon = this.state.secondDayWeather.condition.icon;
        }
        if (this.state.thirdDayWeather.condition) {
            this.thirdConditionText = this.state.thirdDayWeather.condition.text;
        }
        if (this.state.thirdDayWeather.condition) {
            this.thirdConditionIcon = this.state.thirdDayWeather.condition.icon;
        }
        
    }
    
    render() {
        this.checkCondition()
        if(this.props.data !== this.state.city) {
            this.setState({city: this.props.data})
            this.renameCity();
            this.createWeatherData();

        }
        return (
            <div className='weather_block'>
                <div className='weather_block_info__container'>
                    <div className='weather_block_info_wrapper'>
                        <p className='weather_block_name big_text'>{this.state.cityCopy}</p>
                        <p className='very_small_grey_text weather_block_subtitle'>Chance of rain: {this.state.chanceOfRain}%</p>
                    </div>

                    <p className='weather_block_temp very_big_black_text'>{this.state.firstDayWeather.temp_c}°</p>
                </div>
                <div className='weather_block_icon__container'>
                    <img className='weather_block_icon' alt="weather_image" src={this.firstConditionIcon}/>
                </div>


            </div>
        )
    }
}

export default Weather_block;