/**
 * 
 * @Service Weather
 */

import { WeatherArray } from "../interfaces/interfaces";

export class WeatherService {

    public urlWeatherApi: string = 'https://weatherapi-com.p.rapidapi.com/current.json?q=';
    // public weatherArr: WeatherArray[] = [{id: 0, location: {}, current: {}}];
    public weatherArr: Array<{}> = [];

    constructor() {
        console.log('hola')
    }

    // _commitWeatherArray(result: any) {
    //     console.log('_commitWeatherArray')
    //     const objectWeather = {
    //         id: this._idWeather,
    //         location: result.location,
    //         current: result.current
    //     }
    //     this.weatherArr.push(objectWeather);
    //     console.log(this.weatherArr)
    // }

    async searchWeatherCity(nameCity: string) {
        try {
            const urlWeatherApiNameCity = this.urlWeatherApi + nameCity;
            const res = await fetch(urlWeatherApiNameCity, this._headersMethod);
            const result = await res.json();
            if(result.location && result.current){
                const weatherObject = {
                    id: this._idWeather,
                    location: result.location,
                    current: result.current
                };
                this.addWeatherSearch(weatherObject);
            }

        } catch (error) {
            console.error(error);
        }
    }


    addWeatherSearch(result: Object) {
        console.log(result);
        /* Guardar el objeto de result en el Array de weatherArr para tenerlo en el array guardado
        Y despleglarlo luego en el fron. Y luego para diferenciar si lo guardamos en el localStorage o no tenemos que poner true en el parametro localStorage del objeto  */
        console.log(this.weatherArr, 'hola');
    }


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
}