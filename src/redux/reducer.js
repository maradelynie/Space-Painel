import { faGlobeEurope, faUsers } from "@fortawesome/free-solid-svg-icons";

const INITIAL_STATE = {
  alert: false,
  records: [],
  addPlanet: false,
  list: [],
  page: { title: "Planetas", icon: faGlobeEurope },
  selectedItem: {},
  pages: [
    { title: "Rebeldes", icon: faUsers },
    { title: "Planetas", icon: faGlobeEurope },
  ],
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.value,
      };
    case "SET_RECORDS":
      return {
        ...state,
        records: action.value,
        list: action.value,
      };
    case "SET_LIST":
      return {
        ...state,
        list: action.value,
      };
    case "ADD_RECORD":
      return {
        ...state,
        list: [...state.list, action.value],
      };
    case "CHANGE_PAGE":
      return {
        ...state,
        page: action.value,
      };
    case "SHOW_ADD":
      return {
        ...state,
        addPlanet: !state.addPlanet,
      };
    case "SHOW_ALERT":
      return {
        ...state,
        alert: !state.alert,
      };
    default:
      return state;
  }
}

export default reducer;
