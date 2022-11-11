import React from "React";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
}   from "@react-google-maps/api";
import {formatRelative } from "data-fns";
// import usePlacesAutocomplete, {
//    getGeocode,
//    getLating,
//  } from "use-places-autocomplete";
//  impoort {
//      Combobox,    
//      ComboboxInput,
//      ComboboxPopover,
//      ComboboxList
//      ComboboxOption,
//  }   from "@reach/combobox";
import "@reach/combobox/styles.css";

const libraries = ["places"]
const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
};
const center = {
    lat:40.712776;
    log
}

export default function App() {
    const {isLoaded, loadError} = useLoadScript({
        googleMapApiKey: ProcessingInstruction.end.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    if(loadError) return "Error loading maps";
    if(!isLoaded) return "Loading Maps";
    
    return <div>
        <GoogleMap mapContainerStyle = {mapContainerStyle} zoom=8 ></GoogleMap>
    </div>;
}

function initMap(){
    //Map
    var options = {
        center: {},
        zoom
    }

    map = new google.maps.Map(document.getElementById)
}