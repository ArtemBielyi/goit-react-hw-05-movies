const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWE3MTViMjhiYzlhNTc2ZWQ2MzkzZjYzYjllMjlmOCIsInN1YiI6IjY0N2ZhYTRlY2E3ZWM2MDEzOTAwNDkzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4uBK7cn8JGhy1huwgClr31nT-u15Nkxz-Rq5SsBaK6g',
  },
};

const getTrendingMovies = async () => {
  const data = await fetch(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  );
  return data.json();
  // return fetch(
  //   'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
  //   options
  // )
  // .then(res => {
  //   if (!res.ok) {
  //     throw new Error(`res.ok is "${res}"`);
  //   }
  //   return res.json();
  // })
  // .then(data => {
  //   // setData(data.results);
  //   return data.results;
  // });
};

const getSearchMovies = async quary => {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${quary}&include_adult=false&language=en-US&page=1`,
    options
  );
  return data.json();
};

const getMovieById = async movieId => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  return data.json();
  // if (!movieId || movieId === '') return;

  // return fetch(url, options).then(res => {
  //   if (!res.ok) throw new Error(`res.ok is "${res.ok}"`);
  //   return res.json();
};

export { getTrendingMovies, getSearchMovies, getMovieById };

// const BASE_URL = `https://api.themoviedb.org/3/`;

// fetch('https://api.themoviedb.org/3/configuration', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// const BASE_URL = `https://pixabay.com/api/`;
// const API_KEY = `35172830-be7dc29c069ae2fbfd826fe75`;

// export const getSearchMov = async () => {
//   const data = await fetch(
//     'https://api.themoviedb.org/3/configuration',
//     options
//   );
//   console.log(data.json());
//   return await data.json();
// };
// export default getSearchMov;
