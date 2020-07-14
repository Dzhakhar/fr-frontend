import * as React from "react";
import {IRegion} from "../../../redux/reducers/dto/IRegion";
import {DayPart} from "../../../redux/reducers/enums/DayPart";
import {IWeather} from "../../../redux/reducers/dto/IWeather";
import {monthIndexToName} from "../../../redux/reducers/enums/MonthIndexToName";

interface IWeatherLayerProps {
    changeDate: (date: string) => any,
    changeDayPart: (dayPart: DayPart) => any,
    selectedDate: string,
    selectedDayPart: DayPart,
    selectedRegion: IRegion | null,
    weatherData: IWeather[]
}

export const WeatherLayer = (props: IWeatherLayerProps) => {
    return (
        <div className={"weather-layer"}>
            <div className="weather-layer__top">
                <div className={"controls-header"}>
                    <div className={"controls-header__arrow"}>
                        <i className={"fas fa-angle-left"}></i>
                    </div>
                    <h1>
                        {props.selectedRegion?.place_name}
                    </h1>
                </div>

                <div className={"dates"}>
                    {props.weatherData.map((weather: IWeather, i: number) => {
                        const date: Date = new Date(weather.datetime);
                        const isFirstItemSelectedByDefault: boolean = !props.selectedDate;
                        let isThisItemSelected: boolean = props.selectedDate === weather.datetime;

                        if (isFirstItemSelectedByDefault && i === 0) {
                            isThisItemSelected = true;
                        }

                        return (
                            <div
                                className={`dates__item ${isThisItemSelected && "dates__item--active"}`}
                                onClick={() => {
                                    props.changeDate(weather.datetime);
                                }}>
                                <div className={"dates__day"}>
                                    {date.getDate()}
                                </div>
                                <div className={"dates__month"}>
                                    {monthIndexToName(date.getMonth()).slice(0, 3)}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className={"day-part-selector"}>
                    {[DayPart.MORNING, DayPart.DAYTIME, DayPart.NIGHT].map((dayPart: DayPart) => {
                        return (
                            <div
                                className={`day-part-selector__item ${(props.selectedDayPart === dayPart) && " day-part-selector__item--active"}`}
                                onClick={() => {
                                    props.changeDayPart(dayPart)
                                }}>
                                {dayPart}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className={"weather-data"}>
                {props.weatherData.map((weather: IWeather) => {
                    if (weather.datetime === props.selectedDate) {
                        return (
                            <div className={"weather-data__temperature"}>
                                <span><i className={"fas fa-temperature-high"}></i></span>
                                <span className={"weather-data__temperature-text"}>
                                    {props.selectedDayPart === DayPart.MORNING && ((parseInt(weather.temperature_max) + parseInt(weather.temperature_min)) / 2)}
                                    {props.selectedDayPart === DayPart.DAYTIME && weather.temperature_max}
                                    {props.selectedDayPart === DayPart.NIGHT && weather.temperature_min}
                                </span>
                            </div>
                        );
                    }

                    return "";
                })}
            </div>
        </div>
    );
};