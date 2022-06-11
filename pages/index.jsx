import { useState } from "react";
import SearchCountry from "../components/home/SearchCountry";
import Layout from "../components/layouts/Layout";

import { HomeContainer, SearchContainer } from "../styles/home_page_styles";

export default function Home({}) {
  const {search, setSearch } = useState();

  return (
    <Layout title={search ? `Buscar por ${search}` : "Todos Países"}>  
      <HomeContainer>
        <SearchContainer>
          <SearchCountry />         
        </SearchContainer>        
      </HomeContainer>
    </Layout>
    
  );
}

