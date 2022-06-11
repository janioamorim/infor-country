import { useState } from "react";
import {
  SearchContainer,
  SearchInput,
} from "../../styles/search_country_styles";

export default function SearchCountry() {
  const {search, setSearch } = useState();

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
