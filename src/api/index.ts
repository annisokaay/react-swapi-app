import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

export const getPlanets = async (page = 1) => {
  try {
    const response = await instance.get(
      `https://swapi.dev/api/planets?page=${page}`
    );
    return response.data.results;
  } catch (err) {
    console.log(err);
  }
};

export interface Planet {
  name: string;
  url: string;
}

export const getPlanet = async (id: number) => {
  try {
    const response = await instance.get(`planets/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getPerson = async (id: number) => {
  try {
    const response = await instance.get(`people/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export interface People {
  name: string;
  url: string;
}

export const getPeople = async (page = 1) => {
  try {
    const response = await instance.get(`people?page=${page}`);

    return response.data.results;
  } catch (err) {
    console.log(err);
  }
};

export const getPeopleCount = async () => {
  try {
    const response = await instance.get(`people`);

    return response.data.count;
  } catch (err) {
    console.log(err);
  }
};

export const fetcher = (url: string) =>
  instance.get(url).then((res) => res.data);
