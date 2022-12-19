import { Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover } from "@reach/combobox";
import "@reach/combobox/styles.css";
import { Autocomplete, Marker, useLoadScript } from "@react-google-maps/api";
import { useState, useMemo } from "react";
import { GoogleMap } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { FormLabel, Stack } from "@mui/material";

export default function LocationPicker({name}){
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ["places"],
    });

    if(!isLoaded) return <div> Loading ...</div>;
    return <Map name={name} />
}

function Map({name}){
    const center = useMemo(() => ({ lat: 50.621879, lng: 5.575796}),[]);
    const [selected, setSelected] = useState(center);
    const containerStyle = {
        width: '100%',
        height: '50vh'
    }

    const selectPlace = (e) => {
        setSelected(e.latLng);
    }

    return(
        <Stack direction={'column'}>
            <FormLabel>Lieu</FormLabel>
            <PlacesAutocomplete name={name} setSelected={setSelected} />

            <GoogleMap
                zoom={13}
                center={selected}
                mapContainerStyle={containerStyle}
                mapContainerClassName="map-container"
                onClick={selectPlace}
            >
                {selected && <Marker position={selected} />}
            </GoogleMap>
        </Stack>
    )
}

const PlacesAutocomplete = ({name, setSelected}) => {
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
        <Combobox name={name} onSelect={handleSelect}>
            <ComboboxInput
                name={name ?? "trolol"}
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