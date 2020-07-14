import {GoogleMap, withGoogleMap, withScriptjs} from "react-google-maps";
import React from "react";
import {GoogleMapsStylesNight} from "./GoogleMapStylesNight";
import {DayPart} from "../../redux/reducers/enums/DayPart";
import {GoogleMapStylesMorning} from "./GoogleMapStylesMorning";

const defaultMapOptions = {
    fullscreenControl: false,
    zoomControl: false,
    streetViewControl: false,
    panControl: false,
    mapTypeControl: false,
    zoom: 10,
    styles: GoogleMapsStylesNight
};

interface IMapLocation {
    lat: number,
    lng: number
}

interface IGoogleMapComponentProps {
    center: IMapLocation,
    zoom: number,
    selectedDayPart: DayPart
}


export const GoogleMapComponent = withScriptjs(withGoogleMap((props: IGoogleMapComponentProps) => (
    <div className="App">
        <GoogleMap defaultOptions={{
            ...defaultMapOptions,
            styles: props.selectedDayPart === DayPart.NIGHT ? GoogleMapsStylesNight : GoogleMapStylesMorning
        }} options={{
            ...defaultMapOptions,
            zoom: props.zoom,
            center: props.center,
            styles: props.selectedDayPart === DayPart.NIGHT ? GoogleMapsStylesNight : GoogleMapStylesMorning
        }}>

        </GoogleMap>
    </div>
)));