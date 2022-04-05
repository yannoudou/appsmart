import CharacterComponents from "@components/Character";
import ShowOnClientSideOnlyWrapper from "@helpers/ShowOnClientSideOnlyWrapper";

function Character() {
  return (
    <>
      <ShowOnClientSideOnlyWrapper>
        <CharacterComponents />
      </ShowOnClientSideOnlyWrapper>
    </>
  );
}
export default Character;
