export function setRecords(value) {
  return {
    type: "SET_RECORDS",
    value: value,
  };
}
export function addRecord(value) {
  return {
    type: "ADD_RECORD",
    value: value,
  };
}
export function setToken(value) {
  return {
    type: "SET_TOKEN",
    value: value,
  };
}
export function setList(value) {
  return {
    type: "SET_LIST",
    value: value,
  };
}
export function setPage(value) {
  return {
    type: "CHANGE_PAGE",
    value: value,
  };
}
export function showAdd() {
  return {
    type: "SHOW_ADD",
  };
}
export function showAlert() {
  return {
    type: "SHOW_ALERT",
  };
}
