import * as React from "react";
import {IRegion} from "../../../redux/reducers/dto/IRegion";

interface IRegionList {
    regions: IRegion[],
    searchText: string,
    selectRegion: (region: IRegion) => any
}

export function RegionList(props: IRegionList) {
    return (
        <div className={"region-list"}>
            {props.regions.filter((region: IRegion) => region.place_name.toLowerCase().indexOf(props.searchText.trim()) > -1)
                .map((region: IRegion) => (
                    <div className={"region-item"} onClick={() => props.selectRegion(region)}>
                        {region.place_name}
                    </div>
                ))}
        </div>
    );
}