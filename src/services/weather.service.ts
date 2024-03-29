/**
 * 
 * @Service Weather
 */

import { WeatherModel } from "../models/weather.controller";

export class WeatherService {

    public urlWeatherApi: string = 'https://weatherapi-com.p.rapidapi.com/current.json?q=';
    public weatherArray: WeatherModel[] = [];
    public onWeatherChanged!: Function;

    constructor() {}

    get _headersMethod(): Object {
        return {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ca8883ebacmsh7f08012256b1c56p1407a3jsn9b1bc30c6e8a',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };
    }

    get _idWeather(): number {
        return Math.random() * 1000;
    }

    //Aqui solamente le pasamos la referencia de onWeatherChanged del controllador
    bindWeatherListChanged(callback: Function){
        this.onWeatherChanged = callback;
    }

    _commt(weatherArray: WeatherModel[]){
        //Ejecutamos la funcion de onWeatherChanged en el controllador pasandole el nuevo array de Weathers
        this.onWeatherChanged(weatherArray);
    }

    async searchWeatherCity(nameCity: string) {
        try {
            const urlWeatherApiNameCity = this.urlWeatherApi + nameCity;
            const res = await fetch(urlWeatherApiNameCity, this._headersMethod);
            const result = await res.json();
            if(result.location && result.current){
                this.addWeatherSearch(result);
            }

        } catch (error) {
            console.error(error);
        }
    }


    addWeatherSearch(result: WeatherModel) {
        const weatherObject = new WeatherModel(result);
        if(this.weatherArray.length === 0){
            this.weatherArray.push(weatherObject);
        }else {
            const idFind = this.weatherArray.find(e => e.id === weatherObject.id);
            if(!idFind){
                this.weatherArray.push(weatherObject);
            }
        }
        this._commt(this.weatherArray);
    }
}