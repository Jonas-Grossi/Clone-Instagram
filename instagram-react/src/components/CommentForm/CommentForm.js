//import React from "react";
import "./styles.css"

export default function CommentForm(props) {

    return ( <
        div className = "component-form-container" >
        <
        input className = "component-form-input"
        placeholder = { props.placeholder }
        /> <
        button className = "component-form-button" >
        Publicar <
        /button> <
        /div>


    )

}