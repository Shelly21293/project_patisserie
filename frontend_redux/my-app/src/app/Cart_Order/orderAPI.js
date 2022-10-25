// A mock function to mimic making an async request for data
import axios from "axios";


const SERVER_URL_ADD_ORDER = "http://127.0.0.1:8000/api/addorder/"



// export function getData() {
//   return new Promise((resolve) =>
//   axios(SERVER_URL).then((res) => resolve({ data: res.data })),
//   );
// }

export const addData = (myCart,token) => {
  // console.log(newData);
  return new Promise((resolve) =>
    axios.post(SERVER_URL_ADD_ORDER, myCart, {
      headers: {
          'Authorization': `Bearer ${token}`
      }
  } ).then((res) => resolve({ data: res.data }))
  );
};

// export const delData = (id) => {
//   // console.log(id);
//   return new Promise((resolve) =>
//     axios.delete(SERVER_URL+ id).then((res) => resolve({ data: res.data }))
//   );
// };

// export function updData(newData,id) {
//   return new Promise((resolve) =>
//     axios.put(SERVER_URL +id, newData).then((res) => resolve({ data: res.data }))
//   );
// }
