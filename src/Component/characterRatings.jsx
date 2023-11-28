import { Component } from "react";
import { characterData } from "../data/characterData";
import { sortCharacterCard } from "../data/characterData";

export class CharacterRatings extends Component {
  render() {
    let x = 0;
    return (
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
          {characterData
            .sort(sortCharacterCard)
            .slice(0, 5)
            .map((character) => (
                (<tr
                  key={character.id}
                  className={x % 2 === 0 ?  "dark" : "light" }
                  {...++x}
                >
                  <td>{character.name}</td>
                  <td>{character.skillset}</td>
                  <td>{character.votes}</td>
                </tr>
           )))}
        </table>
      </section>
    );
  }
}
