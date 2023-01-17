import { Container } from "@mui/system";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { IconButton } from '@mui/material';
import { Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import { search } from "../BookAPI";
import { useState } from "react";
import { Grid } from '@mui/material';
import Book from './Books';

const SearchPage = () => {

    const [result,setResult] = useState([]);
    const [query,setQuery] = useState('');

    const handleSearch = (e)=>{
        setQuery(e.target.value); 
        if(query !== ''){
            search(query)
            .then(  (data)=>  {
                if(data.error){
                    setResult([]);
                }else{
                    setResult(data);
                    }
                }    
            )
            
        }else{
            setResult([])
        }

    }

    return ( 
    <Box>
        <Box sx={{display:"flex",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px;",py:'1rem'}}>
            <Link to="/">
                <IconButton >
                    <ChevronLeftIcon sx={{fontSize:'2em'}}/>
                </IconButton>
            </Link>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{width:"95vw",border:"none",top:3}} onChange={(e)=>handleSearch(e)} />
        </Box>
        
            <Grid container spacing="2" sx={{mt:2}}>
                {result.map((book)=>(
                    <Grid item xs={2} key={book.id}>
                        <Book book={book} ></Book>
                    </Grid>
                ))}
            </Grid>
    </Box>
    );
}

export default SearchPage;