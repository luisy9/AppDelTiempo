/**
 * 
 * @Controller Weather
 */

import { WeatherModel } from "../models/weather.controller";
import { WeatherService } from "../services/weather.service";
import { WeatherView } from "../views/weather.view";

export class WeatherController {

    private WeatherService: WeatherService;
    private WeatherView: WeatherView;

    constructor(WeatherService: WeatherService, WeatherView: WeatherView ){
        this.WeatherService = WeatherService;
        this.WeatherView = WeatherView;

        //Esta funcion no se ejecuta automaticamente en el controlador
        this.WeatherView.bindSearchWeatherInput(this.handleSearchCity);

        this.WeatherService.bindWeatherListChanged(this.onWeatherChanged);
        this.onWeatherChanged(this.WeatherService.weatherArray);
    }

    handleSearchCity = (nameCity: string): any => {
        this.WeatherService.searchWeatherCity(nameCity);
    }

    onWeatherChanged = (array: WeatherModel[]) => {
        this.WeatherView.showSearchWeather(array);
    }

}