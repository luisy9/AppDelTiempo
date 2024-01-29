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
        this.WeatherView.bindSearchWeatherInput(this.handleSearchCity);

        //Ejecutamos la funcion de bindWeatherListChanged pasandole la referencia de la funcion de onWeatherChanged
        this.WeatherService.bindWeatherListChanged(this.onWeatherChanged);
        //Entonces para ejcutar la funcion de onWeatherChanged en el servicio se tiene que ejecutar el _commit para ejecutar la funcion
        //Porque en el servicio tengo la referencia que previamente he mandado en bindWeatherListChanged y por eso llamando a onWeatherChanged se ejecuta en el controllador
        this.onWeatherChanged(this.WeatherService.weatherArray);
    }

    handleSearchCity = (nameCity: string): any => {
        this.WeatherService.searchWeatherCity(nameCity);
    }

    onWeatherChanged = (array: WeatherModel[]) => {
        this.WeatherView.showSearchWeather(array);
    }

}