import geocoder from './geocoder'

export default (callback) => {

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { longitude, latitude } = position.coords

      geocoder.getFromCoords({
        lat: latitude,
        lng: longitude
      }).then(json => {
        const location = json.results[0].formatted_address
        return callback(location)
      })
      .catch(error => {
        Promise.reject(new Error(error))
      })
    },
    (error) => {
      alert(JSON.stringify(error))
    },
    {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 1000
    }
  )
}
