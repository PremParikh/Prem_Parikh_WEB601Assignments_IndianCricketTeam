// import { Content } from './content-interface';
//
// export const CONTENTS: Content[] = [
//   {
//     id: 1,
//     title: 'Virat Kohli',
//     description: 'Right Hand Batsman',
//     creator: 'RCB',
//     type: 'Batsman',
//     imgURL: '../../assets/images/virat.JPG',
//   },
//   {
//     id: 2,
//     title: 'MS Dhoni',
//     description: 'Right Hand Batsman Wicker Keeper',
//     creator: 'CSK',
//     type: 'Keeper',
//     imgURL: '../../assets/images/msd.JPG',
//     tags: ['Thala', 'Mahi'],
//   },
//   {
//     id: 3,
//     title: 'Rohit Sharma',
//     description: 'Right Hand Batsman',
//     creator: 'MI',
//     type: 'Batsman',
//   },
//   {
//     id: 4,
//     title: 'Shikhar Dhawan',
//     description: 'Left Hand Batsman',
//     creator: 'PKKS',
//     type: 'Batsman',
//     imgURL: '../../assets/images/shikhar.JPG'
//   },
//   {
//     id: 5,
//     title: 'Ravindra Jadeja',
//     description: 'Left All-Rounder',
//     creator: 'CSK',
//   },
//   {
//     id: 6,
//     title: 'Sanju Samson',
//     description: 'RIght Hand Batsman Wicket Keeper',
//     creator: 'RR',
//     imgURL: '../../assets/images/sanju.JPG'
//   },
//   {
//     id: 7,
//     title: 'SKY',
//     description: 'RIght Hand Batsman',
//     creator: 'MI',
//   }
// ];

import axios from 'axios';

const API_URL = 'http://localhost:3001';

export function fetchPosts() {
  return axios.get(`${API_URL}/posts`);
}

export function createPost({post}: { post: any }) {
  return axios.post(`${API_URL}/posts`, post);
}

export function updatePost({post}: { post: any }) {
  return axios.put(`${API_URL}/posts/${post.id}`, post);
}

export function deletePost({postId}: { postId: any }) {
  return axios.delete(`${API_URL}/posts/${postId}`);
}

export class CONTENTS {
}
