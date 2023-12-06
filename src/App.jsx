import "./style/reset.css";
import "./style/App.css";
import { CharacterCard } from "./Component/CharacterCard.";
import { CharacterRatings } from "./Component/CharacterRatings";
import { HeaderClass } from "./Component/HeaderClass";
import { characterData } from "./data/characterData";

function App() {
  return (
    <>
      <HeaderClass />
      <CharacterRatings characters={characterData} />
      <CharacterCard characters={characterData} />
    </>
  );
}

export default App;
