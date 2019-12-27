import React from "react"
import PropTypes from "prop-types"
import "./card.styles.css"

export const Card = ({ monster }) => {

   const { email, id, name } = monster

   Card.propTypes = {
      /* Passed down from CardList Component
         Unique object used to get unique monster from robohash */
         monster: PropTypes.object
   }

   return(
      <div className="card-container">
         <img alt="monster" src={`https://robohash.org/${id}?set=set1&size=180x180`} />
         <h2>{name}</h2>
         <p>{email}</p>
      </div>
   )
}