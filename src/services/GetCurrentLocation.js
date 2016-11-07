import Geocoder from './Geocoder';
import Globals from './Globals';

export default (callback) => {

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { longitude, latitude } = position.coords;

            Geocoder.setApiKey(Globals.geocodingApiKey);

            Geocoder.getFromCoords({
                lat: latitude,
                lng: longitude
            }).then(json => {
                const location = json.results[0].formatted_address;
                return callback(location);
            })
            .catch(error => alert(error));
        },
        (error) => {
            alert(JSON.stringify(error));
        },
        {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000
        }
    );
};
