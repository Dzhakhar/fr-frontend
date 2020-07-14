import * as React from "react";
import {ChangeEvent} from "react";

interface IRegionSelectorProps {
    isRegionSelectorExpanded: boolean,
    expandRegionSelector: () => any,
    changeRegionSelectorSearchText: (text: string) => any,
    searchText: string
}

export function RegionSelector(props: IRegionSelectorProps): any {
    return props.isRegionSelectorExpanded ? (
        <div className={"region-selector-input-wrapper"}>
            <input type={"text"} className={"fr-input region-selector"} placeholder={"Start typing a city name"}
                   value={props.searchText}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => {
                       props.changeRegionSelectorSearchText(e.target.value);
                   }}></input>
        </div>
    ) : (
        <div className={"region-selector"} onClick={props.expandRegionSelector}>
            Which city are you interested in?
        </div>
    );
}