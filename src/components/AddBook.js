import { useState } from "react";
import booksData from "../data/booksData";

export function AddBook(props) {

    const [noOfChapters, setnoOfChapters] = useState(null);

    const [bookInfo, setbookInfo] = useState({
        bookName: "",
        author: "",
        publisher: "",
        cover: "",
        chapters: []
    });

    const handleChange = ({ target }) => {
        if (target.name == "no_of_chapters") {
            setnoOfChapters(target.value);
        } else {
            setbookInfo((prev) => ({ ...prev, [target.name]: target.value }))
        }
    }

    const notEmptyString = (attr) => {
        if (attr.length != 0) {
            return true;
        } else {
            return false;
        }
    }

    const handleSubmit = () => {
        if (Object.values(bookInfo).slice(0,3).every(notEmptyString)){
            if (parseInt(noOfChapters)) {
                setnoOfChapters(prev => parseInt(prev));
                const chapter_list = [];
                for (let i = 0; i < noOfChapters; i++) {
                    chapter_list.push("")
                }
                setbookInfo((prev) => ({ ...prev, chapters: chapter_list }));
                props.addBook(bookInfo);
                alert("Book successfully registered");
                
                document.getElementById("side").style.display = "none";

                setbookInfo({
                    bookName: "",
                    author: "",
                    publisher: "",
                    cover: "",
                    chapters: []
                });
                setnoOfChapters("");
            } else {
                alert("Number of chapters has to be an integer")
            }
        } else {
            alert("All fields cannot be blank")
        }
    }

    return (
        <div>
            Book name:<input name="bookName" value={bookInfo.bookName} onChange={handleChange} /><br />
            Author:<input name="author" value={bookInfo.author} onChange={handleChange} /><br />
            Publisher:<input name="publisher" value={bookInfo.publisher} onChange={handleChange} /><br />
            Cover image URL:<input name="cover" value={bookInfo.cover} onChange={handleChange} /><br />
            Number of chapters:<input name="no_of_chapters" value={noOfChapters} onChange={handleChange} /><br />
            <button onClick={handleSubmit}>submit</button>
        </div>
    )

}