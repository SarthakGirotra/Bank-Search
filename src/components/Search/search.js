import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch } from "react-redux"
import "./search.css"
import {
    Link
} from "react-router-dom";
// import { fetchBanks } from "../../api"
import { getBanks } from "../../actions"
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const Search = () => {
    const dispatch = useDispatch()
    const [filter, setFilter] = useState('')
    const handleChange = async (e) => {
        setCity(e.target.value)
        // const response = await fetchBanks(e.target.value.toUpperCase())
        dispatch(getBanks(e.target.value.toUpperCase()))
    }

    const handleFilterChange = (e) => {

        setFilter(e.target.value)

        dispatch({
            type: 'edit',
            payload: e.target.value
        })
    }
    const classes = useStyles();
    const [city, setCity] = useState('')
    return (

        <div className="nav">
            <div className="links">
                <h1>  <Link to="/">Bank Search</Link></h1>
                <h1> <Link to="/favs">Favs</Link></h1>
            </div>
            <div className="search">
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">City</InputLabel>
                    <Select
                        value={city}
                        onChange={handleChange}
                    >
                        <MenuItem value={'Delhi'}>Delhi</MenuItem>
                        <MenuItem value={'Bangalore'}>Bangalore</MenuItem>
                        <MenuItem value={'Kolkata'}>Kolkata</MenuItem>
                    </Select>
                </FormControl>
                <input type="text" placeholder="search..." className="searchbar" value={filter} onChange={handleFilterChange} />
            </div>
        </div>

    );
}

export default Search;