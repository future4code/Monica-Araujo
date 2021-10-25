import React from "react";
import Header from "../../components/Header/Header";
import { IconButton, Paper, InputBase, BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { MainContainer, Main } from './style'
import MoviesCard from "../../components/MoviesCard/MovieCard";

const MainPage = () => {
    return (
        <Main>
            <Header/>
            <MainContainer>
            <Paper
                component="form"
                variant={"outlined"}
                style={{ width: "80vw" }}

            >
                <IconButton  >
                    <SearchIcon
                    />
                </IconButton>
                <InputBase
                    placeholder="Pesquisar filme"
                />
            </Paper>
            </MainContainer>   
        </Main>
    )
    
}

export default MainPage