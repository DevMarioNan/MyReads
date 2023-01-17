import { Container } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Book from "./Books";

const BookShelf = ({title,books,setBooks,allBooks,forceUpdate})=>{
    

    return(
        <Container maxWidth="90" sx={{my:3}}>
            <Typography
                variant="h4"
                align="left"
            >{title}</Typography>
            <hr></hr>
            <Grid container align="center" alignContent={"end"} justifyContent={"center"} spacing={2}>
            {books.map((book)=>(
                <Grid item xs={2} key={book.id}><Book book={book} setBooks={setBooks} allBooks={allBooks} forceUpdate={forceUpdate}/></Grid>
            ))}
            </Grid>
        </Container>
    );
}

export default BookShelf;

