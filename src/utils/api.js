const { default: axios } = require('axios');

const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4NzhjYjMyMC04ZDY0LTRlMmItYTlhMC1mZGExN2Q3ZmJkY2UiLCJuYW1lIjoiQXNtaXRhIiwicm9sZSI6MCwic3ViamVjdCI6IlRlY2ggVW5pdiAyMDIxIiwiZWFzdGVyX2VnZyI6Ikdvb2QgbHVjayEiLCJhdWQiOiJtdXNpY3JlY29yZHMudGVjaHVuaXYuY29tIiwibmJmIjoxNjE1Nzg0NDcyLCJleHAiOjE2MTgzNzY0NzIsImlhdCI6MTYxNTc4NDQ3MiwiaXNzIjoiTXVzaWMgUmVjb3JkcyJ9.576yYYwIjbr7R_h4lRaVTpy7W8sKQVPDfdx7JncrrbQ';
const authStr = `Bearer ${authToken}`;

const getSongs = async () => {
  // const allItems = await axios.get('https://musicrecordsapi.azurewebsites.net/api/records');
  const allSongs = await axios.get('/records', { headers: { Authorization: authStr } });
  // console.log(allSongs.data.data);
  return allSongs.data.data;
};

const getSongLikes = async (recordId) => {
  // const allItems = await axios.get('https://musicrecordsapi.azurewebsites.net/api/records');
  const songLinkes = await axios.get(`/records/${recordId}/likes`, { headers: { Authorization: authStr } });
  // console.log(allSongs.data.data);
  return songLinkes.data.data;
};

// const getOrders = async () => {
//   const allOrders = await axios.get('/orders');
//   return allOrders.data.data;
// };

// const postOrders = async (orders) => {
//   // try {
//   //   console.log(orders);
//   const allOrders = await axios.post('/orders', orders);
//   return allOrders.data.data;
//   // } catch (error) {
//   //   return error;
//   // }
// };

// getItems();
export default { getSongs, getSongLikes };
