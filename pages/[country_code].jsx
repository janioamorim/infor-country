import Link from "next/link";
import Router from "next/router";
import Image from "next/image";
import {
  BackButton,
  BorderCountries,
  BorderCountriesContainer,
  BorderCountry,
  Container,
  CountryContainer,
  CountryInfo,
  CountryInfoContainer,
  CountryInfoLower,
  CountryName,
} from "../styles/country_page_styles";
import Layout from "../components/layouts/Layout";
import { countriesService } from "../services/countries.service";

export default function CountryPage({ country, borders }) {
  if (!country) {
    return <p>País não encontrado</p>;
  }

  const goHome = () => {
    Router.push("/");
  };
  return (
    <Layout title={country ? country.name : "Loading..."}>
      <Container>
        <BackButton onClick={goHome}>
          <span className="material-icons">keyboard_backspace</span>
          <span>Voltar</span>
        </BackButton>

        <CountryContainer>
          <Image
            height={400}
            width={600}
            objectFit="contain"
            src={country.flags.svg}
            alt={country.name.common}
          />

          <div>
            <CountryName>{country.translations?.br}</CountryName>

            <CountryInfoContainer>
              <CountryInfo>
                <div>
                  <strong>Nome Nativo: </strong>
                  <span>{country.nativeName}</span>
                </div>
                {country.population && (
                  <div>
                    <strong>População: </strong>
                    <span>{country.population.toLocaleString({ maximumFractionDigits: 2 })}</span>
                  </div>
                )}
                <div>
                  <strong>Região: </strong>
                  <span>{country.region}</span>
                </div>
                {country.subregion && (
                  <div>
                    <strong>Sub-região: </strong>
                    <span>{country.subregion}</span>
                  </div>
                )}
                {country.capital && (
                  <div>
                    <strong>Capital: </strong>
                    <span>{country.capital}</span>
                  </div>
                )}
              </CountryInfo>

              <CountryInfoLower>
                {country.tld && (
                  <div>
                    <strong>Top level Domain: </strong>
                    <span>{country.tld[0]}</span>
                  </div>
                )}
                {country.currencies && (
                  <div>
                    <strong>Moedas: </strong>
                    <span>
                      {Object.values(country.currencies)
                        .map((currency) => currency.name)
                        .join(", ")}
                    </span>
                  </div>
                )}
                {country.languages && (
                  <div>
                    <strong>Idiomas: </strong>
                    <span>
                      {country.languages
                        .map((currency) => currency.nativeName)
                        .join(", ")}
                    </span>
                  </div>
                )}
              </CountryInfoLower>
            </CountryInfoContainer>

            {borders?.length > 0 && (
              <BorderCountriesContainer>
                <h2>Países na fronteira: </h2>
                <BorderCountries>
                  {borders?.map((border, index) => (
                    <Link href={`/${border.cca2}`} key={index} passHref>
                      <BorderCountry>{border.name}</BorderCountry>
                    </Link>
                  ))}
                </BorderCountries>
              </BorderCountriesContainer>
            )}
          </div>
        </CountryContainer>
      </Container>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const result = await countriesService.getAllCountries();
  const paths = result.data.map((country) => ({
    params: { country_code: country.alpha2Code },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const code = params.country_code;
  const result = await countriesService.getCountryByCode(code);
  const json = result.data;

  let borders = null;
  if (json.borders) {
    const borderCodes = json.borders.join(",");
    const borderCountriesResp = await countriesService.getBorderCountries(
      borderCodes
    );

    const borderCountriesJson = borderCountriesResp.data;

    borders = borderCountriesJson.map((country) => {
      return { cca2: country.alpha2Code, name: country.name };
    });
  }

  return { props: { country: json, borders } };
};
