import React, {useContext} from "react";
import {AppContext} from "../App";

function Letter({letterPos, attemptVal}){
  const {board}= useContext(AppContext);
  
  return <div className="letter">{ Letter} Letter</div>
  
  
}
export default Letter;