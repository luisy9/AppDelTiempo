export interface WeatherGetOptions {
    method: string;
}

export interface WeatherArray {
    id: number;
    location: Object;
    current: Object;
}