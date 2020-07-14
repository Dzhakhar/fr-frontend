import {IRegion} from "../reducers/dto/IRegion";
import {WEATHER_API_HOSTNAME} from "../../weatherAPIConfig";

export function fetchAvailableRegions(): Promise<IRegion[]> {
    return fetch(`${WEATHER_API_HOSTNAME}/available-cities/`)
        .then(function (response: Response) {
            return response.json();
        })
        .then(function (responseBody: IRegion[]) {
            return Promise.resolve(responseBody);
        });
}
