import React from "react"
import "./../index.css";
import notesData from "../data/notesData";
import App from "../App";
import booksData from "../data/booksData";

function Book(props) {

    const handleClick = () =>{
        const info = props.info;
        for (let i in booksData){
            const book = booksData[i];
            if (book.bookName == info.bookName && book.author == info.author && book.publisher == info.publisher){
                //display chapter list of this book;
                alert("Chapter list function is under development");
                break;
            }
        } 
       
    }

    return (
        <div onClick={handleClick}
            className="book"
            info = {props.info}
            style = {{height: "450px", width: "350px", border: "2px", float: "left", display:"inline-block", padding: "50px"}} >
            <img 
                className = "cover"
                src = {props.info.cover}
                style = {{height: "350px", width: "250px", }} />
            <p>
                {props.info.bookName}
            </p>
        </div>
    )
}

export default Book