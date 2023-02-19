/* eslint-disable quote-props */
/* eslint-disable no-unused-vars */
import React from 'react';
import SideTile from '../SideTile/SideTile';

export default function SideBar() {
  const [genres, setGenres] = React.useState([]);
  React.useEffect(() => {
    setGenres((prevState) => sampleGenreData.genres.map((genre, i) => <SideTile
                    key={genre.id}
                    genre={genre}
                    pos={i}
                />));
  }, []);

  return (
        <div className="bg-neutral-800 text-neutral-100 p-2 pr-0 h-auto drop-shadow-lg">
            <ul className="text-sm cursor-pointer space-y-0.5">
                {genres}
            </ul>
        </div>
  );
}

const sampleGenreData = {
  'genres': [
    {
      'id': 28,
      'name': 'Action',
    },
    {
      'id': 12,
      'name': 'Adventure',
    },
    {
      'id': 16,
      'name': 'Animation',
    },
    {
      'id': 35,
      'name': 'Comedy',
    },
    {
      'id': 80,
      'name': 'Crime',
    },
    {
      'id': 99,
      'name': 'Documentary',
    },
    {
      'id': 18,
      'name': 'Drama',
    },
    {
      'id': 10751,
      'name': 'Family',
    },
    {
      'id': 14,
      'name': 'Fantasy',
    },
    {
      'id': 36,
      'name': 'History',
    },
    {
      'id': 27,
      'name': 'Horror',
    },
    {
      'id': 10402,
      'name': 'Music',
    },
    {
      'id': 9648,
      'name': 'Mystery',
    },
    {
      'id': 10749,
      'name': 'Romance',
    },
    {
      'id': 878,
      'name': 'Science Fiction',
    },
    {
      'id': 10770,
      'name': 'TV Movie',
    },
    {
      'id': 53,
      'name': 'Thriller',
    },
    {
      'id': 10752,
      'name': 'War',
    },
    {
      id: 37,
      name: 'Western',
    },
  ],
};