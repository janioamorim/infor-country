import { useContext, useEffect, useState } from "react";
import SearchCountry from "../components/home/SearchCountry";
import Layout from "../components/layouts/Layout";
import CountriesList from "../components/home/CountriesList";
import FilterCountry from "../components/home/FilterCountry";

import { HomeContainer, SearchContainer } from "../styles/home_page_styles";

import { countriesService } from "../services/countries.service";
import { CountryContext } from "../context/CountryContext";

export default function Home() {
  const {
    state: { filteredCountries, search, region },
    filterCountries,
    filterCountriesByRegion,
  } = useContext(CountryContext);

  const [countries, setCountries] = useState();

  const getAllCountries = async () => {
    const result = await countriesService.getAllCountries();    
      const countriesProps = result.data.map((country) => ({
            name: country.name,
            capital: country.capital ? country.capital : "",
            population: country.population,
            region: country.region,
            flag: country.flags.svg,
            cca2: country.alpha2Code,
      }));
    filterCountries(countriesProps);
    setCountries(countriesProps);
  }

  useEffect(() => {
    filterCountries(countries);
  }, [search]);

  useEffect(() => {
    filterCountriesByRegion(countries);
  }, [region]);

  useEffect(()=>{   
    getAllCountries();
  }, [])

  return (
    <Layout title={search ? `Buscar por ${search}` : "Todos Países"}>  
      <HomeContainer>
        <SearchContainer>
          <SearchCountry />
          <FilterCountry />       
        </SearchContainer>
        <CountriesList
          countries={search || region ? filteredCountries : countries}
        />     
      </HomeContainer>
    </Layout>
    
  );
}
