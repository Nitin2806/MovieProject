import axios from "axios";

const get = (url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getAll = (urls) => {
  return new Promise((resolve, reject) => {
    axios
      .all(
        urls.map((url) => {
          return axios.get(url);
        })
      )
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const MOVIES = (page) =>
  `https://movie-task.vercel.app/api/popular?page=${page}`;

const fetchmovie = () => {
  return new Promise((resolve, reject) => {
    get(MOVIES())
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const fetchpopularmovies = (page) => {
  return new Promise((resolve, reject) => {
    let popularmovies = [];
    let total_pages;
    let total_results;

    get(MOVIES(page))
      .then((response) => {
        popularmovies = response.data.data.results;
        total_pages = 20;
        total_results = 9500;
      })
      .then(() => {
        if (total_results === 0) {
          resolve({
            total_results: 0,
            total_pages: 0,
            results: [],
          });
        } else if (total_pages === 1) {
          resolve({
            total_results: total_results,
            total_pages: total_pages,
            results: popularmovies,
          });
        } else {
          getAll(Array.from({ length: total_pages }, (_, i) => MOVIES(i + 1)))
            .then((results) => {
              popularmovies = [];
              results.forEach((result) => {
                popularmovies = [...popularmovies, ...result.data.data.results];
              });
            })
            .then(() => {
              resolve({
                total_results: popularmovies.length,
                total_pages: total_pages,
                results: popularmovies,
              });
            });
        }
      });
  });
};

export { fetchmovie, fetchpopularmovies };
