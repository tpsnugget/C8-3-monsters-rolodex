import React from "react"
import PropTypes from "prop-types"
import "./SearchBox.styles.css"

export const SearchBox = ({ placeholderText, handleChange }) => (

   SearchBox.propTypes = {
      /* Passed down from App.js
         placeholder show to user in input box */
      placeholderText: PropTypes.string,

      /* Passed down from App.js
         Function that updates the state in App.js as input is types into input */
      handleChange: PropTypes.func
   },

   <input
      className="SearchBox"
      placeholder={placeholderText}
      type="search"
      onChange={handleChange}
   />

)
