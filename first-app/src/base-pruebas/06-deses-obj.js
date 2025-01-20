export const usContext = ({ key, username, age, rango = 'Leader' }) => {
  return {
    key,
    username,
    age,
    latlng: {
      lat: 14.1232,
      lng: -12.3232
    },
    rango
  }
}