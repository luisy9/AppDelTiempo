/**
 * 
 * @Service Weather
 */

export class WeatherService {

    public urlWeatherApi: string = 'https://weatherapi-com.p.rapidapi.com/current.json?q=';

    constructor() { }

    get _headersMethod(): Object {
        return {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ca8883ebacmsh7f08012256b1c56p1407a3jsn9b1bc30c6e8a',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };
    }
    //Refactorizar
    async searchWeatherCity(nameCity: string) {
        try {
            const urlWeatherApiNameCity = this.urlWeatherApi + nameCity;
            const res = await fetch(urlWeatherApiNameCity, this._headersMethod);
            const result = await res.json();
            console.log(result.current);
        } catch (error) {
            console.error(error);
        }
    }
}