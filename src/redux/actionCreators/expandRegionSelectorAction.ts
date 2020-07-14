import {Action} from "redux";
import {Actions} from "../actions/actions";

export function expandRegionSelectorAction(): Action {
    return {
        type: Actions.EXPAND_REGION_SELECTOR
    };
}