import { Container } from "@mui/system";
import { Typography } from "@mui/material";


const Header = ({title})=>{

    return(
        <header>
            <Container sx={{p:2}}>
            <Typography 
            variant="h3"
            align="center"
            color={"white"}
            bgcolor="primary.main"
            >{title}</Typography>
            </Container>
        </header>
    );
}

export default Header;