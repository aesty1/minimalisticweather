import './Week_weather.css';
import { Component } from 'react';
import Weather_api from '../../services/Weather_api';

class Week_weather extends Component {
    Api = new Weather_api();
   
    constructor(props) {
        super(props);
        this.state = {
            day_weather: new Map(),
            day_description: new Map(),
            day_icon: new Map(),
            day_date: new Map()
        };
    }

    componentDidMount() {
        this.createWeatherData();
    }

    formatTime(time) {
        const date = new Date(time);
        const day = date.getDate();
        const month = date.toLocaleString('en-US', {month: 'long'});
        return `${day} ${month}`;
    }

    createWeatherData = () => {   
        this.Api.get_weather(this.props.data)    
            .then((result) => {
                let dayWeather = new Map();
                let dayIcons = new Map();
                let dayDescription = new Map();
                let dayDate = new Map();
                for(let i = 0; i < 3; i++) {
                    dayWeather.set(`day${i}`, 
                        result.chanceOfRain.forecast.forecastday[i].day.avgtemp_c);
                    dayIcons.set(`day${i}`, 
                        result.chanceOfRain.forecast.forecastday[i].day.condition.icon);
                    dayDescription.set(`day${i}`, 
                        result.chanceOfRain.forecast.forecastday[i].day.condition.text);
                    dayDate.set(`day${i}`, 
                        result.chanceOfRain.forecast.forecastday[i].date);
                }
                this.setState({
                    day_weather: dayWeather,
                    day_icon: dayIcons,
                    day_description: dayDescription,
                    day_date: dayDate
                });
            });
        
            
    };
    render() {
        if(this.props.data !== this.state.city) {
            this.setState({city: this.props.data})
            this.createWeatherData();

        }
        return (
            <div className='padding blocks_wrapper grey_block_wrapper week_weather_wrapper'>
                <p className='very_small_grey_text block_title'>Погода на неделю</p>
                <div className='week_weather_items__container'>
                    <div className='week_weather_item_wrapper'>
                        <p className='very_small_grey_text week_weather_item_text week_weather_item_day'>Today</p>
                        <img className='week_weather_item_icon small_icon' src={this.state.day_icon.get("day0")}/>
                        <p className='small_black_text week_weather_item_text week_weather_item_temp'>{this.state.day_weather.get("day0")}</p>
                    </div>
                    <hr/>
                    <div className='week_weather_item_wrapper'>
                        <p className='very_small_grey_text week_weather_item_text week_weather_item_day'>{this.formatTime(this.state.day_date.get("day1"))}</p>
                        <img className='week_weather_item_icon small_icon' src={this.state.day_icon.get("day1")}/>
                        <p className='small_black_text week_weather_item_text week_weather_item_temp'>{this.state.day_weather.get("day1")}</p>
                    </div>
                    <hr/>
                    <div className='week_weather_item_wrapper'>
                        <p className='very_small_grey_text week_weather_item_text week_weather_item_day'>{this.formatTime(this.state.day_date.get("day2"))}</p>
                        <img className='week_weather_item_icon small_icon' src={this.state.day_icon.get("day2")}/>
                        <p className='small_black_text week_weather_item_text week_weather_item_temp'>{this.state.day_weather.get("day2")}</p>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Week_weather;