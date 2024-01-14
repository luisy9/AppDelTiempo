import { WeatherController } from "./controller/weather.controller";
import { WeatherView } from "./views/weather.view";
import { WeatherService } from "./services/weather.service";

const app = new WeatherController(new WeatherService(), new WeatherView());