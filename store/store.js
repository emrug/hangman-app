import { configureStore } from "@reduxjs/toolkit";
import gamePlayReducer from '../components/gamePlay';

export default configureStore({
    reducer: {
        gamePlay: gamePlayReducer
    }
});