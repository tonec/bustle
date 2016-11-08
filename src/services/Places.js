import globals from './globals'

export default {
  apiUrl: globals.placesApiUrl,
  apiKey: globals.placesApiKey,

  autocompletePlaceName (text) {
    const url = `${this.apiUrl}?input=${text}&types=geocode&key=${this.apiKey}`

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
