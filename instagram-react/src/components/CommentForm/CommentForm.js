//import React from "react";
import "./styles.css";
import {VscSmiley} from "react-icons/vsc";
export default function CommentForm(props) {
  return (
    <div className="component-form-container" style={props.style}>
      <VscSmiley size={30}/>
      <input className="component-form-input" placeholder={props.placeholder} />
      <button
        style={props.buttonColor ? { color: props.buttonColor } : {}}
        className="component-form-button"
      >
        {props.buttonText}
      </button>
    </div>
  );
}
