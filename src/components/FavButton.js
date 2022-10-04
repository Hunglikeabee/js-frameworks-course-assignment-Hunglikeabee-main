import { faStar as faStarFull }  from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function FavButton(props) {


  const[star, setStar] = useState(faStar)

  const handleFavourites = () => {
    setStar(prev => !prev)
  }

  return (
    <FontAwesomeIcon {...props} onClick={handleFavourites} icon={star ? faStar : faStarFull} />
  )
}