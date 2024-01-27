/**
 * 
 * @Service Weather
 */

export class WeatherService {

    public urlWeatherApi: string = 'https://weatherapi-com.p.rapidapi.com/current.json?q=';
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
            
        } catch (error) {
            console.error(error);
        }
    }


    addWeatherSearch() {
        
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