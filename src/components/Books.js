import { Typography } from "@mui/material";
import {IconButton} from "@mui/material";
import {Menu} from "@mui/material";
import {MenuItem} from "@mui/material";
import React, { useState } from "react";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import CheckIcon from '@mui/icons-material/Check';
import { update } from "../BookAPI";



const Book = ({book,setBooks,allBooks,forceUpdate})=>{
    
    const [shelf,setShelf] = useState(book.shelf);

    

    const [anchorEl,setAnchorEl] = useState(null)
    const handleClose = (e,newShelf)=>{
        if(['currentlyReading','wantToRead','read','none'].includes(newShelf)){
                if(window.location.pathname === '/search'){
                    setShelf(newShelf);
                    update(book,newShelf);
                }else{
                    setShelf(newShelf);
                    update(book,newShelf);
                    const index = allBooks.indexOf(book);
                    allBooks[index].shelf = newShelf;
                    setBooks(allBooks)
                    forceUpdate();

                }
                
        }
        setAnchorEl(null);
    }

    const handleMenu = (event) =>{
        setAnchorEl(event.currentTarget);
    }
    return(
        <div style={{display: "flex",flexDirection:"column",justifyContent:"center" ,alignContent:"center"}}>
            <div style={{flex:0,width:200,position:"relative"}}>
                <img style={{width:"100%"}} src={book.imageLinks.thumbnail}/>

                <IconButton id={book.id} style={{position:"absolute",right:-20,bottom:-5,color:"green",backgroundColor:"white"}} onClick={handleMenu} >
                <ArrowDropDownCircleIcon fontSize="large"/>
                </IconButton>
            </div>
            <Typography variant="p" color={"black"} align={"left"}>{book.title}</Typography>
            <Typography variant="p" color={"gray"} align={"left"}>{book.authors}</Typography>
            <Menu 
            id={book.id}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
                <MenuItem onClick={(e)=>handleClose(e,'currentlyReading')}>{(shelf === 'currentlyReading')? <CheckIcon fontSize="small"/> : ""}Currently Reading</MenuItem>
                <MenuItem onClick={(e)=>handleClose(e,'wantToRead')}>{(shelf === 'wantToRead')? <CheckIcon fontSize="small"/> : ""}Want To Read</MenuItem>
                <MenuItem onClick={(e)=>handleClose(e,'read')}>{(shelf === 'read')? <CheckIcon fontSize="small"/> : ""}Read</MenuItem>
                <MenuItem onClick={(e)=>handleClose(e,'none')}>{(shelf === undefined ^ shelf === 'none')? <CheckIcon fontSize="small"/> : ""}None</MenuItem>
                </Menu>
        </div>
    );
}

export default Book;