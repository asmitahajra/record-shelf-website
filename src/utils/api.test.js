// import utilsApi from './api';

// const { default: axios } = require('axios');
// // jest.mock('../');

// describe('test api calls', () => {
//   let axiosGetMock;
//   let axiosPostMock;

//   const mockProducts = [{
//     id: 1,
//     name: 'apple',
//     price: 120,
//     count: 20,
//     category: 'Fruits & Vegatables',
//   }];

//   const mockOrders = {
//     items: [
//       {
//         id: 1,
//         name: 'apple',
//         price: 120,
//         count: 1,
//         category: 'Fruits & Vegatables',
//       },
//     ],
//     id: 1,
//     date: 1615122360481,
//   };

//   const mockPostOrder = {
//     items: [
//       {
//         id: 4,
//         name: 'duster',
//         price: 80,
//         count: 1,
//         category: 'Household Items',
//       },
//       {
//         id: 5,
//         name: 'milk',
//         price: 10,
//         count: 2,
//         category: 'Dairy & Eggs',
//       },
//     ],
//     id: 25,
//     date: 1615526811454,
//   };

//   const mockOrderedOrder = {
//     items: [
//       {
//         id: 4,
//         name: 'rubber',
//         price: 80,
//         count: 1,
//         category: 'Household Items',
//       },
//       {
//         id: 5,
//         name: 'eggs',
//         price: 10,
//         count: 2,
//         category: 'Dairy & Eggs',
//       },
//     ],
//   };

//   beforeEach(() => {
//     axiosGetMock = jest.spyOn(axios, 'get');
//     // axiosGetMock.mockClear();
//     // axiosGetMock.mockResolvedValue({ data: null });

//     axiosPostMock = jest.spyOn(axios, 'post');
//     // axiosPostMock.mockClear();
//     // axiosPostMock.mockResolvedValue({ data: null });
//   });

//   describe(utilsApi.getItems.name, () => {
//     test('should get items from GET /items', async () => {
//       axiosGetMock.mockResolvedValue({ data: { data: [] } });
//       await utilsApi.getItems();
//       expect(axiosGetMock).toHaveBeenCalledWith('/items');
//     });

//     test('should return items', async () => {
//       axiosGetMock.mockResolvedValue({ data: { data: mockProducts } });
//       const items = await utilsApi.getItems();
//       expect(items).toEqual(mockProducts);
//     });
//   });

//   describe(utilsApi.getOrders.name, () => {
//     test('should get orders from GET /orders', async () => {
//       axiosGetMock.mockResolvedValue({ data: { data: [] } });
//       await utilsApi.getOrders();
//       expect(axiosGetMock).toHaveBeenCalledWith('/orders');
//     });
//     test('should return array of objects orders', async () => {
//       axiosGetMock.mockResolvedValue({ data: { data: mockOrders } });
//       const orders = await utilsApi.getOrders();
//       expect(orders).toEqual(mockOrders);
//     });
//   });

//   describe(utilsApi.postOrders.name, () => {
//     test('should post order to POST /orders', async () => {
//       axiosPostMock.mockResolvedValue({ data: { data: {} } });
//       await utilsApi.postOrders(mockOrderedOrder);
//       expect(axiosPostMock).toHaveBeenCalledWith('/orders', mockOrderedOrder);
//     });

//     test('should return order object', async () => {
//       axiosPostMock.mockResolvedValue({ data: { data: mockPostOrder } });
//       const postOrder = await utilsApi.postOrders(mockOrderedOrder);
//       expect(postOrder).toEqual(mockPostOrder);
//     });
//   });
// });
