import {Action} from "redux";
import {Actions} from "../actions/actions";

export interface IChangeRegionSelectorSearchTextAction extends Action {
    payload: string
}

export function changeRegionSelectorSearchText(text: string): IChangeRegionSelectorSearchTextAction {
    return {
        type: Actions.CHANGE_REGION_SELECTOR_SEARCH_TEXT,
        payload: text
    };
}