import {Action} from "redux";
import {Actions} from "../actions/actions";

export function resetRegionAction(): Action {
    return {
        type: Actions.RESET_REGION_ACTION
    };
}