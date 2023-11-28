import { CharacterCard } from "./Component/characterCard.";
import { CharacterRatings } from "./Component/characterRatings";
import { HeaderClass } from "./Component/header";
import "./style/index.css";
import "./style/reset.css";
import "./style/style.css";
import "./style/header.css";
import "./style/characterRatings.css";
import "./style/characterCard.css";

function App() {
  return (
    <body>
      <HeaderClass />
      <CharacterRatings />
      <CharacterCard />
    </body>
  );
}

export default App;
