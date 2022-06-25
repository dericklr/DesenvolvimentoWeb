import React, {useContext} from "react";
import {AppContext} from "../App";

function Letter({letterPos, attemptVal}){

  const {board,correctWord, currAttempt}= useContext(AppContext);
  const letter= board[attemptVal][letterPos];
  const correta=correctWord[letterPos]===letter;
  const quase= !correta && letter !== "" && correctWord.includes(letter)
  const letterState= currAttempt.attempt>attemptVal && (correta ? "correta" : quase ? "quase" : "error");
  return <div className="letter" id={letterState}>{letter} </div>;
  
  
}
export default Letter;