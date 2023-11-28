import { Component } from "react";
import { characterData } from "../data/characterData";
import "../style/characterCard.css";
export class CharacterCard extends Component {
  render() {
    return (
      <section id="character-cards">
        {characterData.map((character) => (
          <div key={character.name} className="card">
            {/* <!-- Card # --> */}
            <div className="card-titles">
              {/* <!-- name --> */}
              <h3>{character.name}</h3>
              {/* <!-- nickname --> */}
              {character.nickName && (<h4>{character.nickName}</h4>)}
            </div>
            {/* <!-- imageUrl --> */}
            <img src={character.imageUrl} alt="" />
            {/* <!-- description --> */}
            <p>{character.background}</p>
          </div>
        ))}
      </section>
    );
  }
}
