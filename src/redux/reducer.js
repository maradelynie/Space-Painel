import { faGlobeEurope, faUsers } from "@fortawesome/free-solid-svg-icons";

const INITIAL_STATE = {
  records: [],
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

    case "SELECT_ITEM":
      return {
        ...state,
        selectedItem: action.value,
      };
    case "CHANGE_PAGE":
      return {
        ...state,
        page: action.value,
      };

    default:
      return state;
  }
}

export default reducer;
