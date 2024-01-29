import { WeatherArray } from "../interfaces/interfaces";
/**
 * 
 * @Model Weather
 */
export class WeatherModel {

    public id!: number;
    public location!: Object;
    public current!: Object;

    constructor(
        { location, current }: WeatherArray = {
            location: {},
            current: {}
        }
    ) {
        this.id = this._getRandomId;
        this.location = location;
        this.current = current;
    }

    get _getRandomId(): number {
        return Math.random();
    }
}