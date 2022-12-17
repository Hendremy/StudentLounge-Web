import { Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover } from "@reach/combobox";
import "@reach/combobox/styles.css";
import { Autocomplete, Marker, useLoadScript } from "@react-google-maps/api";
import { useState, useMemo } from "react";
import { GoogleMap } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";

export default function LocationPicker(){
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ["places"],
    });

    if(!isLoaded) return <div> Loading ...</div>;
    return <Map />
}

function Map(){
    const center = useMemo(() => ({ lat: 43.45, lng:-80.49}),[]);
    const [selected, setSelected] = useState(center);
    const containerStyle = {
        width: '100%',
        height: '50vh'
    }

    return(
        <>
            <PlacesAutocomplete setSelected={setSelected} />

            <GoogleMap
                zoom={13}
                center={selected}
                mapContainerStyle={containerStyle}
                mapContainerClassName="map-container"
            >
                {selected && <Marker position={selected} />}
            </GoogleMap>
        </>
    )
}

const PlacesAutocomplete = ({setSelected}) => {
    const {
        ready, 
        value, 
        setValue,
        suggestions: {status, data},
        clearSuggestions,
    } = usePlacesAutocomplete();

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();

        const results = await getGeocode({address});
        const {lat, lng} = await getLatLng(results[0]);
        setSelected({lat, lng});
    }

    const inputStyle = {
        width: '100%'
    }

    //TODO: Utiliser autocomplete de MUI plutôt que Combobox de Reach, mais relou
    // return (
    // 
    //     <Autocomplete
    //         disablePortal
    //         options={data}
    //         onPlaceChange={()}
    //         renderInput={(params) => (
    //             <TextField {...params} label='Place' variant='outlined'/>
    //         )}
    //     />
    // )

    return(        
        <Combobox onSelect={handleSelect}>
            <ComboboxInput
                style={inputStyle} 
                value={value} onChange={(e) => setValue(e.target.value)} disabled={!ready}
                className="combobox-input" placeholder="Chercher un lieu" />
            <ComboboxPopover portal={false}>
                <ComboboxList>
                    {status === "OK" && 
                        data.map(({place_id,description}) => (<ComboboxOption key={place_id} value={description} />))}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    );
}