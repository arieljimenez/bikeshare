import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Table from '../components/Table';
import { fetchAll } from '../api';
import StationsContext from '../contexts/StationsContext';
import { ACTIONS } from '../contexts/StationsContext';

export default function StationList(){
  const { state, dispatch } = useContext(StationsContext);

  let history = useHistory();

  React.useEffect(() => {
    async function fetchStations() {
      const { success, results } = await fetchAll('citibikenyc');

      if (success) {
        dispatch({type: ACTIONS.SET_STATIONS, payload: results});
        dispatch({ type: ACTIONS.SET_CURRENT_PAGE, payload: 'homepage' });
      }
    };

    fetchStations();
  }, []);


  // move the user to the desired station
  const handleRowClick = (stationData) => {
    dispatch({ type: ACTIONS.SET_SELECTED_STATION, payload: stationData });
    dispatch({ type: ACTIONS.SET_CURRENT_PAGE, payload: 'details' });
    history.push(`/station/${stationData.id}`);
  }

  const rowItems = state.filteredStations.length > 0
    ? state.filteredStations
    : state.stations

  return(
    <Table
      rowItems={rowItems}
      handleRowClick={handleRowClick}
    />
  )
};
