/**
 *
 * @param {Object} object
 * @param {string} stationName - name of the station
 * @param {Array} stations - collection of stations
 * @returns {Array} collection of stations that match the desired name
 */
export function searchStationsByName({ query='', stations=[] }) {
  const filteredStations = [];

  stations.reduce((fStations, station) => {
    if (station.stationName.toLowerCase().includes(query.trim().toLowerCase())) {
      fStations.push(station);
    }

    return fStations;
  }, filteredStations);

  return filteredStations;
}
