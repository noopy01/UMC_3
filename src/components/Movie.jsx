import React from "react"
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

export default function Movie({ title,poster_path,vote_average, overview }) {
    return(
        <div className='movie-container'>
            <img className="image" src={IMG_BASE_URL + poster_path} alt = "영화포스터"/>
            <div className='movie-info'>
                <h4>{title}</h4>
                <span>{vote_average}</span>
            </div>
            
            <div className="textBox">
                <p>{title}</p>
                <p>{overview}</p>
            </div>

        </div>
    )
}
