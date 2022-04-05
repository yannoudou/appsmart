import NavBar from "@components/Common/Navbar";
import { TakeHomeBackground } from "@components/CharacterDetail/CharacterDetail.styled";
import useFetch from "@helpers/useFetch";
import {
  generateApiKeyParameter,
  serverEndPoints,
} from "@helpers/serverEndPoints";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  ContainNotice,
  ContainCharacterDetails,
} from "./CharacterDetail.styled";
import CharactersView, { CharactersViewLoader } from "./src/CharactersView";
import { characterDataType } from "@backend/types/response/characters";

function characterDetail() {
  // hoks to get the characterId
  const router = useRouter();
  const { characterId } = router.query;
  const [characterInfo, setCharacterInfo] = useState<characterDataType | null>(
    null
  );

  // hooks for request
  // I could have same the previos data on the store, but it will have take too much time
  const {
    load: searchCharacterInformation,
    error,
    success,
  } = useFetch<"getCharactersDetail">({
    url: serverEndPoints.getCharactersDetail,
    onSuccess: ({ result }) => {
      setCharacterInfo(result.data.results[0]);
    },
    // no need of frontend cache on this request since the timestamp is different on every request
    shouldBeCached: false,
  });

  useEffect(() => {
    characterId &&
      searchCharacterInformation(
        "GET",
        `${characterId.toString()}${generateApiKeyParameter()}`
      );
  }, [characterId]);

  if (error) {
    return (
      <Wrapper>
        <ContainNotice>
          <span>An error has occurred </span>
        </ContainNotice>
      </Wrapper>
    );
  }

  if (success && characterInfo) {
    // if success
    return (
      <>
        <Wrapper>
          <CharactersView data={characterInfo} />
        </Wrapper>
      </>
    );
  }

  // we show loader
  return (
    <Wrapper>
      <CharactersViewLoader />
    </Wrapper>
  );
}

const Wrapper = ({ children }: { children: React.ReactChild }) => {
  return (
    <ContainCharacterDetails>
      <TakeHomeBackground>
        <NavBar />
      </TakeHomeBackground>
      {children}
    </ContainCharacterDetails>
  );
};

export default characterDetail;
