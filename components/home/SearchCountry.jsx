import { useContext, useState } from "react";
import {
  SearchContainer,
  SearchInput,
} from "../../styles/search_country_styles";
import { CountryContext } from "../../context/CountryContext";

export default function SearchCountry() {
  const {
    state: { search },
    setSearch,
  } = useContext(CountryContext);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <SearchContainer>
      <span className="material-icons">search</span>
      <SearchInput
        type="text"
        value={search}
        placeholder="Buscar por um país..."
        onChange={handleSearch}
      />
    </SearchContainer>
  );
}
