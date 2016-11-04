const googleApiUrl = 'https://maps.google.com/maps/api/geocode/json';

export default {
    apiKey: null,

    setApiKey(apiKey) {
        this.apiKey = apiKey;
    },

    getFromLocation(location) {
        return this.getFrom('location', location);
    },

    getFromCoords(coords) {
        return this.getFrom('coords', coords);
    },

    async getFrom(type, data) {
        let url;

        if (type === 'location') {
            url = `${googleApiUrl}?key=${this.apiKey}&address=${encodeURI(data.location)}`;
        } else {
            url = `${googleApiUrl}?key=${this.apiKey}&latlng=${data.lat},${data.lng}`;
        }

        if (!this.apiKey) {
            return Promise.reject(new Error('Provided API key is invalid'));
        }

        if (!data) {
            return Promise.reject(new Error('Provided data is invalid'));
        }

        const response = await fetch(url).catch(
            error => {
                return Promise.reject(new Error(`Error fetching data: ${error}`));
            }
        );

        const json = await response.json().catch(
            error => {
                return Promise.reject(new Error(`Error parsing server response: ${error}`));
            }
        );

        if (json.status === 'OK') {
            return json;
        }

        return Promise.reject(new Error(`Server returned status code ${json.status}`));
    }
};
