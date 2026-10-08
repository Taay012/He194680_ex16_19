import lionImage from './image/lion.jpg';
import gorillaImage from './image/gorilla.jpg';
import zebraImage from './image/zebra.jpg';

const animals = [
  {
    name: 'Lion',
    image: lionImage,
    scientificName: 'Panthera leo',
    size: 140,
    diet: ['meat'],
  },
  {
    name: 'Gorilla',
    image: gorillaImage,
    scientificName: 'Gorilla beringei',
    size: 205,
    diet: ['plants', 'insects'],
    additional: {
      notes: 'This is the eastern gorilla. There is also a western gorilla that is a different species.',
    },
  },
  {
    name: 'Zebra',
    image: zebraImage,
    scientificName: 'Equus quagga',
    size: 322,
    diet: ['plants'],
    additional: {
      notes: 'There are three different species of zebra.',
      link: 'https://en.wikipedia.org/wiki/Zebra',
    },
  },
];

export default animals;
