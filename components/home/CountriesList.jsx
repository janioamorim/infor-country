import {
  CountriesListContainer,
  InfoText,
} from "../../styles/countries_styles";
import CountryCard from "./CountryCard";

export default function CountriesList({ countries }) {
  return (
    <CountriesListContainer>
      {countries?.length === 0 && <InfoText>Países não encontrados</InfoText>}

      {countries?.map((country) => (
        <CountryCard key={country.cca2} country={country} />
      ))}
    </CountriesListContainer>
  );
}
