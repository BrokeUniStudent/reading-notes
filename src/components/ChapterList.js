import React from "react";
import notesData from "../data/notesData";
import { Chapter } from "./Chapter";
import booksData from "../data/booksData";

export function ChapterList(props){
    const chapters = booksData[props.index].chapters;
    return (
    <div>
      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
              <p className="navbar-brand">Reading Notes</p>
          </div>
          <div>
              <ul className="nav navbar-nav">
              </ul>
          </div>
        </div>
      </nav>
      <div id="content">
          {chapters.map((chapterList, id) => <Chapter key={id} chapterList={chapterList} />)}
      </div>
      
    </div>   
    )
}