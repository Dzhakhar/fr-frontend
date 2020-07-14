import {Action} from "redux";
import {Actions} from "../actions/actions";
import {IWeather} from "../reducers/dto/IWeather";

export interface IFetchWeatherAction extends Action {
    payload: IWeather[]
}

export function fetchWeathersAction(weatherEntities: IWeather[]): IFetchWeatherAction {
    return {
        type: Actions.FETCH_WEATHER,
        payload: weatherEntities
    };
}