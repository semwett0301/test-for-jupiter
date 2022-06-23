import {useState} from 'react'
import {useTheme} from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import classes from './NavbarSelect.module.css'
import {useDispatch, useSelector} from "react-redux";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 329,
        },
    },
};

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function NavbarSelect(props) {
    const tag = useSelector(state => state.tabs);

    const dispatch = useDispatch();

    const handleChange = (event) => {
        if (event.target.value === "Show All") {
            dispatch({
                type: "recover"
            })
        } else {
            dispatch({
                type: "replace",
                payload: event.target.value
            })
        }

        dispatch({
            type: "changeTab",
            payload: event.target.value
        })
    };


    return (
        <div className={classes.navbar_select}>
            <FormControl sx={{minWidth: 370, borderWidth: 2, borderColor: '#EF6D58'}}>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tag}
                    onChange={handleChange}
                >
                    {props.menu.map(elem => <MenuItem value={elem.text}>{elem.text}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    );
}