import Link from "next/link";
import {
  CountryCardContainer,
  CountryFlag,
  CountryInfo,
  CountryInfoContainer,
  CountryName,
  FlagContainer,
  InfoItem,
} from "../../styles/country_styles";


export default function CountryCard({ country }) {

  return (
    <Link href={`/${country.cca2}`} passHref>
      <CountryCardContainer>
        <FlagContainer>
          <CountryFlag layout="fill" src={country.flag} alt={country.name}/>
        </FlagContainer>

        <CountryInfoContainer>
          <CountryName>{country.nameBr}</CountryName>

          <CountryInfo>
            <InfoItem>
              <strong>População: </strong>
              <span>{country.population}</span>
            </InfoItem>
            {country.region && (
              <InfoItem>
                <strong>Região: </strong>
                <span>{country.region}</span>
              </InfoItem>
            )}
            {country.capital && (
              <InfoItem>
                <strong>Capital: </strong>
                <span>{country.capital}</span>
              </InfoItem>
            )}
          </CountryInfo>
        </CountryInfoContainer>
      </CountryCardContainer>
    </Link>
  );
}
