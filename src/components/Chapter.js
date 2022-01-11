import React from "react";

export function Chapter(props){
    return (
        <div>
            <h3>Chapter {props.id +1}</h3>
            <p>{props.chapterList[props.id]}</p>
        </div>
    )
}