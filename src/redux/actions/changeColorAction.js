import {CHANGE_COLOR} from "./types";

export const changeColor = (color) => {
    // console.log(color);
    return{
        type: CHANGE_COLOR,
        color
    }
};