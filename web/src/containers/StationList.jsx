import React from 'react';

import Table from '../components/Table';
import { fetchAll } from '../api';


export default function StationList(){
  const [stations, setStations] = React.useState([]);

  React.useEffect(() => {
    async function fetchStations() {
      const stations = await fetchAll('citibikenyc');

      setStations(stations);
    }

    fetchStations();
  });

  return(
    <Table rowItems={stations} />
  )
}
