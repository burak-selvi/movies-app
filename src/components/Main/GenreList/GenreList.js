import React from 'react'

export default function GenreList(props) {
  const { genres, onItemSelect, selectedItem } = props;
  return (
    <ul className="list-group">
      {
        genres.map(genre => {
          return (
            <li
              key={genre._id}
              onClick={() => onItemSelect(genre)}
              className={genre === selectedItem ? "list-group-item active" : "list-group-item"}>
              {genre.name}
            </li>
          )
        })
      }
    </ul>
  )
}
