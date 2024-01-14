/**
 * 
 * @Controller Weather
 */

import { WeatherService } from "../services/weather.service";
import { WeatherView } from "../views/weather.view";

export class WeatherController {

    private WeatherService: WeatherService;
    private WeatherView: WeatherView;

    constructor(WeatherService: WeatherService, WeatherView: WeatherView ){
        this.WeatherService = WeatherService;
        this.WeatherView = WeatherView;
    }
}