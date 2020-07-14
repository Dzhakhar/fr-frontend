import {put, takeLatest, call, select} from "redux-saga/effects";
import {Actions} from "../actions/actions";
import {fetchWeather} from "../networkRequests/fetchWeather";
import {IGlobalState} from "../reducers/globalAppReducer";
import {IWeather} from "../reducers/dto/IWeather";
import {fetchWeathersAction} from "../actionCreators/fetchWeatherAction";

const getGlobalState = (state: IGlobalState): IGlobalState => state;

function* fetchWeatherOnSelectRegion() {
    const globalState: IGlobalState = yield select(getGlobalState);
    const weatherEntities: IWeather[] = yield call(fetchWeather, globalState.selectedRegion ? globalState.selectedRegion.station_id : 0);

    yield put(fetchWeathersAction(weatherEntities));
}

export function* onSelectRegionSaga() {
    yield takeLatest(Actions.SELECT_REGION, fetchWeatherOnSelectRegion)
}