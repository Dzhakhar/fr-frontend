import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore, Store} from "redux";
import createSagaMiddleware from "redux-saga";
import {globalAppReducer, IGlobalState} from "./redux/reducers/globalAppReducer";
import {fetchAvailableRegions} from "./redux/networkRequests/fetchAvailableRegions";
import {IRegion} from "./redux/reducers/dto/IRegion";
import {fetchAvailableRegionsAction} from "./redux/actionCreators/fetchAvailableRegionsAction";
import {expandRegionSelectorAction} from "./redux/actionCreators/expandRegionSelectorAction";
import {changeRegionSelectorSearchText} from "./redux/actionCreators/changeRegionSelectorSearchText";
import {selectRegionAction} from "./redux/actionCreators/selectRegionAction";
import {onSelectRegionSaga} from "./redux/sagas/onSelectRegionSaga";
import {changeDateAction} from "./redux/actionCreators/changeDateAction";
import {changeDayPart} from "./redux/actionCreators/changeDayPartAction";
import {DayPart} from "./redux/reducers/enums/DayPart";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const globalStore: Store = createStore<IGlobalState, any, any, unknown>(globalAppReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(onSelectRegionSaga);

function initApp() {
    fetchAvailableRegions()
        .then(function (regions: IRegion[]) {
            globalStore.dispatch(fetchAvailableRegionsAction(regions));
        });
}

function renderApp() {
    const globalState: IGlobalState = globalStore.getState();

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={globalStore}>
                <App isRegionSelectorExpanded={globalState.isRegionSelectorExpanded}
                     regions={globalState.availableRegions}
                     searchText={globalState.searchText}
                     selectedRegion={globalState.selectedRegion}
                     weatherData={globalState.weatherData}
                     selectedDate={globalState.selectedDate}
                     selectedDayPart={globalState.selectedDayPart}

                     expandRegionSelector={function () {
                         globalStore.dispatch(expandRegionSelectorAction())
                     }}

                     changeRegionSelectorSearchText={function (text: string) {
                         globalStore.dispatch(changeRegionSelectorSearchText(text));
                     }}

                     selectRegion={function (region: IRegion) {
                         globalStore.dispatch(selectRegionAction(region));
                     }}

                     changeDate={function (date: string) {
                         globalStore.dispatch(changeDateAction(date))
                     }}

                     changeDayPart={function (dayPart: DayPart) {
                         globalStore.dispatch(changeDayPart(dayPart))
                     }}

                />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

globalStore.subscribe(renderApp);
initApp();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
