import React from "react";
import "./App.css";
import {GoogleMapComponent} from "./react/GoogleMap/GoogleMap";
import {IRegion} from "./redux/reducers/dto/IRegion";
import {IWeather} from "./redux/reducers/dto/IWeather";
import {DayPart} from "./redux/reducers/enums/DayPart";
import {WeatherLayer} from "./react/Controls/WeatherLayer/WeatherLayer";
import {RegionSelectorLayer} from "./react/Controls/RegionSelectorLayer/RegionSelectorLayer";

interface IAppProps {
    isRegionSelectorExpanded: boolean,
    expandRegionSelector: () => any,
    regions: IRegion[],
    changeRegionSelectorSearchText: (text: string) => any,
    changeDate: (date: string) => any,
    changeDayPart: (dayPart: DayPart) => any,
    selectRegion: (region: IRegion) => any,
    resetRegion: () => any,
    searchText: string,
    selectedDate: string,
    selectedDayPart: DayPart,
    selectedRegion: IRegion | null,
    weatherData: IWeather[]
}

function App(props: IAppProps) {
    return (<div className={`theme-root ${props.selectedDayPart === DayPart.NIGHT && " theme-root--dark"}`}>
            <GoogleMapComponent
                center={props.selectedRegion ? {
                    lat: props.selectedRegion.latitude,
                    lng: props.selectedRegion.longitude
                } : {
                    lat: -34.397 * Math.random(),
                    lng: 150.644 * Math.random()
                }}
                selectedDayPart={props.selectedDayPart}
                zoom={props.selectedRegion ? 10 : 2}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDvZR86XtNorwiNQnrKfCc5N2aq4WJQZg0&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{height: `100%`}}/>}
                containerElement={<div style={{height: `100vh`}}/>}
                mapElement={<div style={{height: `100%`}}/>}/>


            <div className={"controls-layer"}>
                {!props.selectedRegion && (
                    <RegionSelectorLayer isRegionSelectorExpanded={props.isRegionSelectorExpanded}
                                         expandRegionSelector={props.expandRegionSelector}
                                         regions={props.regions}
                                         changeRegionSelectorSearchText={props.changeRegionSelectorSearchText}
                                         searchText={props.searchText}
                                         selectRegion={props.selectRegion}/>
                )}

                {props.selectedRegion && (
                    <WeatherLayer changeDate={props.changeDate}
                                  changeDayPart={props.changeDayPart}
                                  resetRegion={props.resetRegion}
                                  selectedDate={props.selectedDate}
                                  selectedDayPart={props.selectedDayPart}
                                  selectedRegion={props.selectedRegion}
                                  weatherData={props.weatherData}/>
                )}
            </div>
        </div>
    );
}

export default App;
