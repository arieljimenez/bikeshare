import React from 'react';

const StationsContext = React.createContext();

export const ACTIONS = {
  SET_STATIONS: 'SET_STATIONS',
  SET_FILTERED_STATIONS: 'SET_FILTERED_STATIONS',
  SET_SELECTED_STATION: 'SET_SELECTED_STATION',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE'
}

const initialState = {
  selectedStation: false,
  stations: [],
  filteredStations: [],
  currentPage: 'homepage'
};

const reducer = (state, action) => {
  switch(action.type) {
    case ACTIONS.SET_STATIONS: {
      return {
        ...state,
        stations: action.payload
      }
    }

    case ACTIONS.SET_FILTERED_STATIONS : {
      return {
        ...state,
        filteredStations: action.payload
      }
    }

    case ACTIONS.SET_SELECTED_STATION: {
      return {
        ...state,
        selectedStation: action.payload
      }
    }

    case ACTIONS.SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload
      }
    }
  }
}

// context provider wrapper
export function StationsContextProvider(props) {
  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
    <StationsContext.Provider value={value}>{props.children}</StationsContext.Provider>
  );
}

export default StationsContext;
