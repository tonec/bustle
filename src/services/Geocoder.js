import Globals from './Globals';

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

    getFrom(type, data) {
        let url;

        if (!this.apiKey) {
            return Promise.reject(new Error('API key is invalid or missing'));
        }

        if (!data) {
            return Promise.reject(new Error('The provided location or coordinates are invalid'));
        }

        if (type === 'location') {
            url = `${Globals.geocodingApiUrl}?key=${this.apiKey}&address=${encodeURI(data.location)}`;
        } else {
            url = `${Globals.geocodingApiUrl}?key=${this.apiKey}&latlng=${data.lat},${data.lng}`;
        }

        return fetch(url).then(response => {
            return response.json().catch(error => {
                return Promise.reject(new Error(`Error parsing json: ${error}`));
            });
        }).catch(error => {
            return Promise.reject(new Error(`Error getting response from server: ${error}`));
        });

    }
};
