import {IRegion} from "./IRegion";

export interface IWeather extends IRegion {
    datetime: string,
    temperature_max: string,
    temperature_min: string,
    precipitation_probability: string,
    precipitation_mm: string
}