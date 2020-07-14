import {RequestStatus} from "./enums/RequestStatus";
import {IWeather} from "./dto/IWeather";
import {IRegion} from "./dto/IRegion";
import {DayPart} from "./enums/DayPart";
import {Action} from "redux";
import {Actions} from "../actions/actions";

export interface IGlobalState {
    weatherData: IWeather[],
    availableRegions: IRegion[],
    requestStatus: RequestStatus,
    selectedRegion: IRegion | null,
    selectedDayPart: DayPart,
    selectedDate: string,
    isRegionSelectorExpanded: boolean,
    searchText: string
}

interface IGlobalAction extends Action {
    payload: IRegion[] | IWeather[] | string | any;
}

const initialState: IGlobalState = {
    weatherData: [],
    availableRegions: [],
    requestStatus: RequestStatus.NOT_STARTED,
    selectedRegion: null,
    selectedDayPart: DayPart.MORNING,
    selectedDate: "",

    isRegionSelectorExpanded: false,
    searchText: ""
};

export const globalAppReducer = (state: IGlobalState = initialState, action: IGlobalAction): IGlobalState => {
    switch (action.type) {
        case Actions.FETCH_AVAILABLE_REGIONS:
            return {
                ...state,
                availableRegions: (action.payload as IRegion[])
            };

        case Actions.EXPAND_REGION_SELECTOR:
            return {
                ...state,
                isRegionSelectorExpanded: true
            };

        case Actions.CHANGE_REGION_SELECTOR_SEARCH_TEXT:
            return {
                ...state,
                searchText: (action.payload as string)
                    .toLowerCase()
                    .replace("  ", " ")
            };

        case Actions.SELECT_REGION:
            return {
                ...state,
                selectedRegion: (action.payload as IRegion),
                searchText: "",
                isRegionSelectorExpanded: false
            };

        case Actions.FETCH_WEATHER:
            return {
                ...state,
                weatherData: (action.payload as IWeather[]),
                selectedDate: (action.payload as IWeather[])[0] ? (action.payload as IWeather[])[0].datetime : ""
            };

        case Actions.CHANGE_DATE:
            return {
                ...state,
                selectedDate: (action.payload as string)
            };

        case Actions.CHANGE_DAY_PART:
            return {
                ...state,
                selectedDayPart: (action.payload as DayPart)
            };

        default:
            return state;
    }
};