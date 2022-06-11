import { useState } from "react";
import SearchCountry from "../components/home/SearchCountry";
import Layout from "../components/layouts/Layout";
import CountriesList from "../components/home/CountriesList";

import { HomeContainer, SearchContainer } from "../styles/home_page_styles";

export default function Home({countries}) {
  const {search, setSearch } = useState();

  return (
    <Layout title={search ? `Buscar por ${search}` : "Todos Países"}>  
      <HomeContainer>
        <SearchContainer>
          <SearchCountry />         
        </SearchContainer>
        <CountriesList
          countries={countries}
        />     
      </HomeContainer>
    </Layout>
    
  );
}

export const getStaticProps = async () => {
  const resp = await fetch("https://restcountries.com/v2/all");
  const countries = await resp.json().then((countries) =>
    countries.map((country) => ({
      name: country.name,
      capital: country.capital ? country.capital : "",
      population: country.population,
      region: country.region,
      flag: country.flags.svg,
      cca2: country.alpha2Code,
    }))
  );

  return { props: { countries: countries } };
};


