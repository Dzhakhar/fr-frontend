import {WEATHER_API_HOSTNAME} from "../../weatherAPIConfig";
import {IWeather} from "../reducers/dto/IWeather";

export function fetchWeather(stationId: number): Promise<IWeather[]> {
    return fetch(`${WEATHER_API_HOSTNAME}/getweather?stationId=${stationId}`)
        .then(function (response: Response) {
            return response.json();
        })
        .then(function (responseBody: IWeather[]) {
            responseBody.sort(function (a: IWeather, b: IWeather) {
                const dateA: Date = new Date(a.datetime);
                const dateB: Date = new Date(b.datetime);

                return dateA.getTime() - dateB.getTime();
            });

            return Promise.resolve(responseBody);
        });
}
