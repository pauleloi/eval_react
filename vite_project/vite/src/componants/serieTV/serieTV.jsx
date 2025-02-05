import "./serieTV.scss"
import { useState } from "react";


export function serieTV(props) {
    return (
        <section className="tv-shows">
          <div className="title-filter">
            <h2>Séries TV</h2>
            <button className="active">Mieux notées</button>
            <button>Populaires</button>
          </div>
          <div class="grid-tendances" id="populaires"></div>
        </section>
      )
}