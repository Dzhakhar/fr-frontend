import {Action} from "redux";
import {Actions} from "../actions/actions";
import {IRegion} from "../reducers/dto/IRegion";

export interface ISelectRegionAction extends Action {
    payload: IRegion
}

export function selectRegionAction(region: IRegion): ISelectRegionAction {
    return {
        type: Actions.SELECT_REGION,
        payload: region
    };
}