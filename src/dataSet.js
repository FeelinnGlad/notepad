import { v4 as uuid } from 'uuid';

const templateText = 'Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt ut labore et '
  + 'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
  + 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

const dataSet = [];
for (let i = 1; i <= 8; i++) {
  dataSet.push({
    id: uuid(),
    caption: `Card #${i}`,
    text: templateText,
  });
}

export default dataSet;
