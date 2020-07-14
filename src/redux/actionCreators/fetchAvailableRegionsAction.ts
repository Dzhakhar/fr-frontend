import {IRegion} from "../reducers/dto/IRegion";
import {Action} from "redux";
import {Actions} from "../actions/actions";

export interface IFetchAvailableRegionsAction extends Action {
    payload: IRegion[];
}

export function fetchAvailableRegionsAction(regions: IRegion[]): IFetchAvailableRegionsAction {
    return {
        type: Actions.FETCH_AVAILABLE_REGIONS,
        payload: regions
    };
}