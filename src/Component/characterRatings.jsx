import { Component } from "react";
import { sortCharacterCard } from "../data/characterData";
import "../style/characterRatings.css";

export class CharacterRatings extends Component {
  render() {
    return (
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Skillset</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {this.props.characters
              .slice()
              .sort(sortCharacterCard)
              .slice(0, 5)
              .map((character, index) => (
                <tr
                  key={character.name}
                  className={index % 2 === 0 ? "dark" : "light"}
                >
                  <td>{character.name}</td>
                  <td>{character.skillset}</td>
                  <td>{character.votes}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    );
  }
}
