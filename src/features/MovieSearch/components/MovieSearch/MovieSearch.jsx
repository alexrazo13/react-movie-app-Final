import React, { useState } from "react";
import styled from 'styled-components';
import axios from 'axios';

const SubmitButton = styled.button`
  background-color: purple;
  border: ;
  color: white;
  padding: 10px;
  border-radius: 12px;


  &:hover {
    background-color: pink;
  }
`

const MovieSearch = ({ setMovie }) => {
  const [movieName, setMovieName] = useState("");
  const apiKey ="3159865b.REACT_APP_API_KEY";
  //process.env.REACT_APP_API_KEY; put back in line 20 and take out id number

  const getMoviesByName = async (name) => {
    const url = `www.omdbapi.com/?apikey=${apiKey}&t=${name}`;
    const response = await axios.get(url);
    setMovie(response.data);
  };

  const getMoviesById = async (id) => {
    const url = `www.omdbapi.com/?apikey=${apiKey}&i=${id}`;
    const response = await axios.get(url);
    setMovie(response.data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getMoviesByName(movieName);
  };
  
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Movie Name"
          value={movieName}
          onChange={(e) => setMovieName(e.currentTarget.value)}
        />
        <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
      </form>
    </div>
  );
};

export default MovieSearch;
