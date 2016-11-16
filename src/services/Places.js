import globals from './globals'

export default {
  apiUrl: globals.placesApiUrl,
  apiKey: globals.placesApiKey,

  autocompletePlaceName (text, location = null, radius = null) {
    const url = `${this.apiUrl}?input=${text}&location=${location}&radius=${radius}&types=geocode&key=${this.apiKey}`

    if (!this.apiKey) {
      return Promise.reject(new Error('API key is invalid or missing'))
    }

    return fetch(url).then(response => {
      return response.json().catch(error => {
        return Promise.reject(new Error(`Error parsing json: ${error}`))
      })
    }).catch(error => {
      return Promise.reject(new Error(`Error getting response from server: ${error}`))
    })
  }
}
