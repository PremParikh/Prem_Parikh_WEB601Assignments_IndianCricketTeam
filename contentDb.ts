import { Content } from './content-interface';

export const CONTENTS: Content[] = [
  {
    id: 1,
    title: 'Virat Kohli',
    description: 'Right Hand Batsman',
    creator: 'RCB',
    type: 'Batsman',
    imgURL: '../../assets/images/virat.JPG',
  },
  {
    id: 2,
    title: 'MS Dhoni',
    description: 'Right Hand Batsman Wicker Keeper',
    creator: 'CSK',
    type: 'Keeper',
    imgURL: '../../assets/images/msd.JPG',
    tags: ['Thala', 'Mahi'],
  },
  {
    id: 3,
    title: 'Rohit Sharma',
    description: 'Right Hand Batsman',
    creator: 'MI',
    type: 'Batsman',
  },
  {
    id: 4,
    title: 'Shikhar Dhawan',
    description: 'Left Hand Batsman',
    creator: 'PKKS',
    type: 'Batsman',
    imgURL: '../../assets/images/shikhar.JPG'
  },
  {
    id: 5,
    title: 'Ravindra Jadeja',
    description: 'Left All-Rounder',
    creator: 'CSK',
  },
  {
    id: 6,
    title: 'Sanju Samson',
    description: 'RIght Hand Batsman Wicket Keeper',
    creator: 'RR',
    imgURL: '../../assets/images/sanju.JPG'
  },
  {
    id: 7,
    title: 'SKY',
    description: 'RIght Hand Batsman',
    creator: 'MI',
  }
];
