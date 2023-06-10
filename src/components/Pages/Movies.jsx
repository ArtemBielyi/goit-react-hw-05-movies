// import React from 'react';
// // import { getSearchMov } from './Service/Fetch';
import { useEffect } from 'react';
import SearchForm from '../Searchform/Searchform';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWE3MTViMjhiYzlhNTc2ZWQ2MzkzZjYzYjllMjlmOCIsInN1YiI6IjY0N2ZhYTRlY2E3ZWM2MDEzOTAwNDkzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4uBK7cn8JGhy1huwgClr31nT-u15Nkxz-Rq5SsBaK6g',
  },
};

const Movies = () => {
  // useEffect(() => {

  //   fetch(
  //     'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
  //     options
  //   )
  //     .then(response => response.json())
  //     .then(data => {

  //       console.log(data);
  //     });
  // }, []);

  return (
    <div>
      {/* <p>movies</p> */}
      <SearchForm />
    </div>
  );
};
export default Movies;
