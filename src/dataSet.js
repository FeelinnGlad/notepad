// import { v4 as uuid } from 'uuid';
// import axios from 'axios';
//
// let receivedData = null;
//
// async function fetchCards() {
//   try {
//     const response = await axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json');
//     receivedData = response.data.slice(0, 15);
//     console.log('rec', receivedData);
//     receivedData = receivedData.map((card) => ({
//       id: uuid(),
//       caption: card.Name,
//       text: card.About,
//     }));
//     return receivedData;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }
//
// // const templateText = 'Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt ut labore et '
// //   + 'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
// //   + 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
// //
// // const dataSet2 = [];
// // for (let i = 1; i <= 8; i++) {
// //   dataSet2.push({
// //     id: uuid(),
// //     caption: `Card  #${i}`,
// //     text: templateText,
// //   });
// // }
//
// const dataSet = fetchCards();
// console.log(dataSet);
//
// export default dataSet;
