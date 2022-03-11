import React from 'react';
import style from "./Recipe.module.css"

export const Recipe = ({imageURL, label, ingredientLines, calories}) => {
  return (
         <div className={style.recipe}>
             <h2>{label}</h2>
             <p className={style.calorie}>{Math.ceil(calories)} Calories</p>
             <ul>
               {
                 ingredientLines.map((ingredientLine, indx) => <li key={indx}>{ingredientLine}</li>)
               }
             </ul>
             <img src={imageURL} alt={label}/>
          </div>
            )
}
