import {Action} from "redux";
import {Actions} from "../actions/actions";

export interface IChangeDateAction extends Action {
    payload: string
}

export function changeDateAction(date: string): IChangeDateAction {
    return {
        type: Actions.CHANGE_DATE,
        payload: date
    };
}