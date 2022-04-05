import CharacterDetailImport from "@components/CharacterDetail";
import ShowOnClientSideOnlyWrapper from "@helpers/ShowOnClientSideOnlyWrapper";

function CharacterDetail() {
  return (
    <>
      <ShowOnClientSideOnlyWrapper>
        <CharacterDetailImport />
      </ShowOnClientSideOnlyWrapper>
    </>
  );
}
export default CharacterDetail;
