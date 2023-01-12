import { Container } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Book from "./Books";

const BookShelf = ({title,books})=>{
    
    const [updatedBooks,setUpdatedBooks] = useState([]);
    useEffect(()=>{
        if(title === "Currently Reading"){
            setUpdatedBooks(books.filter((book)=>book.shelf === 'currentlyReading'))
        }
        if(title === "Want To Read"){
            setUpdatedBooks(books.filter((book)=>book.shelf === 'wantToRead'))
        }
        if(title === "Read"){
            setUpdatedBooks(books.filter((book)=>book.shelf === 'read'))
        }
    },[books])

    return(
        <Container maxWidth="90" sx={{my:3}}>
            <Typography
                variant="h4"
                align="left"
            >{title}</Typography>
            <hr></hr>
            <Grid container align="center" alignContent={"end"} justifyContent={"center"} spacing={2}>
            {updatedBooks.map((book)=>(
                <Grid item xs={2} key={book.id}><Book book={book} /></Grid>
            ))}
            </Grid>
        </Container>
    );
}

export default BookShelf;

