import React from "react"
import PropTypes from "prop-types"
import { Card } from "../card/card.component"
import "./card-list.styles.css"

export const CardList = ({ monsters, searchMonster }) => {

   CardList.propTypes = {
      /* Passed down from App.js
         Full array of monsters */
      monsters: PropTypes.array,

      /* Passed down from App.js
         Search string from the SearchBox Component */
      searchMonster: PropTypes.string
   }

   const len = searchMonster.length

   const filteredMonsters = monsters.filter( (monster) => {
      if(len > 0){
         console.log(monster.name.slice(0, len))
         return (monster.name.slice(0, len).toLowerCase().includes(searchMonster.toLowerCase()) ? monster : "")
      } else
         return monster
   } )

   return (

      <div className="card-list">
         {filteredMonsters.map((monster) => {
            return <div key={monster.id}>
                  <Card monster={monster} />
                  <h2>{searchMonster}</h2>
               </div>
         })}
      </div>
   )
}