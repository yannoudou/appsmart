import { TakeHomeBackground } from "./Character.styled";
import WelcomeAndSearchBar from "./src/WelcomeAndSearchBar";
import NavBar from "@components/Common/Navbar";
import CharactersList from "./src/CharactersList/CharactersList";

function Character() {
  return (
    <>
      <TakeHomeBackground>
        <NavBar />
        <WelcomeAndSearchBar />
      </TakeHomeBackground>
      <CharactersList />
    </>
  );
}

export default Character;
