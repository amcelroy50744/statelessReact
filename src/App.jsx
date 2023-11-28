import "./style/reset.css";
import "./style/App.css";
import { CharacterCard } from "./Component/CharacterCard.";
import { CharacterRatings } from "./Component/CharacterRatings";
import { HeaderClass } from "./Component/HeaderClass";

function App() {
  return (
    <>
      <HeaderClass />
      <CharacterRatings />
      <CharacterCard />
    </>
  );
}

export default App;
