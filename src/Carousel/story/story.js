import React from 'react';
import ZImage from '../../ZImage';

const componentData = [
  {
    src: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    src: 'https://images.pexels.com/photos/111130/potatoes-ketchup-murder-blood-111130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x',
  },
  {
    src: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    src: 'https://images.pexels.com/photos/708488/pexels-photo-708488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x',
  },
  {
    src: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    src: 'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
];

const componentData2 = [
  {
    src: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    src: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    src: 'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
];

const componentData3 = [
  {
    src: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500%201x',
  },
  {
    src: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    src: 'https://images.pexels.com/photos/1168940/pexels-photo-1168940.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x',
  },
];

const carouselComponent = ({ src }) => (
  <ZImage src={src} height='100%' width='100%' ratio={0.5} />
);

export { componentData, componentData2, componentData3, carouselComponent };
