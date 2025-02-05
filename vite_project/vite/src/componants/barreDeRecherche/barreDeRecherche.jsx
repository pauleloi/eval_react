import "./barreDeRecheche.scss"
import { useState } from "react";


export function barreDeRecheche(props) {
    return (
        <div className="search-container">
          <input type="text" placeholder="Rechercher un film" />
          <button type="submit"><i class="fas fa-search"></i></button>
        </div>
      )
}