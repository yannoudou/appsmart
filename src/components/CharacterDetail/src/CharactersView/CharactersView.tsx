import { characterDataType } from "@backend/types/response/characters";
import { StyledCol, StyledRow } from "@components/Common/StyledComponent";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { FiArrowLeft } from "react-icons/fi";
import {
  ContainCharacterViewDescription,
  StyledImg,
  StyledContainer,
  ContainIcon,
  ContainComicBottom,
} from "./CharactersView.styled";

function getNamePropertiesFromObject(
  params: { resourceURI: string; name: string }[]
) {
  // storie something don't have name,
  let res: string[] = [];
  let gn = params.map((itm) => {
    itm.name && res.push(itm.name);
  });
  return res;
}

function CharactersView({ data }: { data: characterDataType }) {
  const { name, description, id, thumbnail, comics, stories, events, series } =
    data;
  return (
    <>
      <StyledContainer fluid="xxl">
        <ContainIcon>
          <Link href={"/"} as={"/"}>
            <span>
              <FiArrowLeft /> Go back
            </span>
          </Link>
        </ContainIcon>

        <StyledRow>
          <StyledCol margin={"1.4rem"} xl={4} lg={4} md={4} sm={12}>
            <StyledImg
              src={thumbnail.path + "." + thumbnail.extension}
              alt={name}
            />
          </StyledCol>
          <StyledCol xl={8} lg={8} md={8} sm={12}>
            <>
              <ContainCharacterViewDescription>
                <p>#{id}</p>
                <h1>{name}</h1>
                <h5>{description}</h5>

                <CharactersViewSubElement
                  title="Comics"
                  items={getNamePropertiesFromObject(comics.items)}
                />
                <CharactersViewSubElement
                  title="Stories"
                  items={getNamePropertiesFromObject(stories.items)}
                />
                <CharactersViewSubElement
                  title="Events"
                  items={getNamePropertiesFromObject(events.items)}
                />
                <CharactersViewSubElement
                  title="Series"
                  items={getNamePropertiesFromObject(series.items)}
                />
              </ContainCharacterViewDescription>
            </>
          </StyledCol>
        </StyledRow>
      </StyledContainer>
    </>
  );
}

function CharactersViewSubElement({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  if (!items.length) return null;
  return (
    <ContainComicBottom>
      <h2>{title}</h2>
      {items.map((item, index) => {
        return <span key={index}>{item}</span>;
      })}
    </ContainComicBottom>
  );
}

export default CharactersView;
