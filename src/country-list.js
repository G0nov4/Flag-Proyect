import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Country from "./Country";

const CountryListStyled = styled.div`
  display: grid;
  background-color: var(--background);
  padding: 4em 2em;
  grid-row-gap: 2em;
  border: 1px solid black;
  justify-content: center;
`;
function CountryList() {
  const [countryList, setcountrylist] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
          setcountrylist(data)
      })
      .catch(() => {
        console.log("hubo un error....");
      });
  }, []);

  return (
    <CountryListStyled>
      {countryList.map(({flag, name, population, capital, region}) => {
        return (
          <Country
            flag={ flag }
            name={ name }
            key = { name }
            population={ population }
            region={ region }
            capital={ capital }
          />
        );
      })}
    </CountryListStyled>
  );
}

export default CountryList;
