import "./entete.scss"
import { useState } from "react";


export function entete(props) {
    return(
    <header className="desktop-nav">
      <a href="index.html"><i class="fas fa-film"></i></a>
      <ul>
        <li><a href="#">Films</a></li>
        <li><a href="#">Séries</a></li>
        <li><a href="#">Populaires</a></li>
      </ul>
    </header>

    <header className="nav-list-mobile">
    <a href="index.html"><i class="fas fa-film"></i></a>
        <ul>
            <li><a href="#">Films</a></li>
            <li><a href="#">Séries</a></li>
            <li><a href="#">Populaires</a></li>
        </ul>
    </header>
    
    
)
}