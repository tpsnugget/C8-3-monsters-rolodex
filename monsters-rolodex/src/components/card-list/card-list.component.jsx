import React from "react"
import { Card } from "../card/card.component"
import "./card-list.styles.css"

export const CardList = (props) => {

   const { monsters, searchMonster } = props

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
            return <div>
                  <Card key={monster.id} id={monster.id} monster={monster} />
                  <h2>{searchMonster}</h2>
               </div>
         })}
      </div>
   )
}