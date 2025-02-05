import "./tendence.scss"
import { useState } from "react";


export function tendence(props) {
    return (
    <section className="tendances-container">
        <div className="title-filter">
          <h2>Tendances</h2>
          <button className="active">Aujourd'hui</button>
          <button>Cette semaine</button>
        </div>
        <div className="grid-tendances">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
    </section>
    )
}