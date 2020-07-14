import {Action} from "redux";
import {Actions} from "../actions/actions";
import {DayPart} from "../reducers/enums/DayPart";

export interface IChangeDayPart extends Action {
    payload: string
}

export function changeDayPartAction(dayPart: DayPart): IChangeDayPart {
    return {
        type: Actions.CHANGE_DAY_PART,
        payload: dayPart
    };
}