export function setRecords (value) {
   return {
        type: "SET_RECORDS",
        value:value
    }
}
export function addRecord (value) {
    return {
         type: "ADD_RECORD",
         value:value
     }
 }
 export function deleteRecord (value) {
    return {
         type: "DELETE_RECORD",
         value:value
     }
 }
 export function updateRecord (value) {
    return {
         type: "UPDATE_RECORD",
         value:value
     }
 }
 export function selectItem (value) {
    return {
         type: "SELECT_ITEM",
         value:value
     }
 }
