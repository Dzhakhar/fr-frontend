import * as React from "react";
import {RegionSelector} from "./RegionSelector";
import {RegionList} from "./RegionList";
import {IRegion} from "../../../redux/reducers/dto/IRegion";

interface IRegionSelectorLayerProps {
    isRegionSelectorExpanded: boolean,
    expandRegionSelector: () => any,
    regions: IRegion[],
    changeRegionSelectorSearchText: (text: string) => any,
    searchText: string,
    selectRegion: (region: IRegion) => any,
}

export const RegionSelectorLayer = (props: IRegionSelectorLayerProps) => {
    return (
        <>
            <RegionSelector isRegionSelectorExpanded={props.isRegionSelectorExpanded}
                            searchText={props.searchText}
                            changeRegionSelectorSearchText={props.changeRegionSelectorSearchText}
                            expandRegionSelector={props.expandRegionSelector}/>
            {props.isRegionSelectorExpanded && (
                <RegionList searchText={props.searchText} regions={props.regions}
                            selectRegion={props.selectRegion}/> )}
        </>
    );
};