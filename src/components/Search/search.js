import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Tooltip from '@material-ui/core/Tooltip';
import { useDispatch } from "react-redux"
import "./search.css"
import {
    Link
} from "react-router-dom";
import fav from "../../assets/star.svg"
import trash from "../../assets/delete.svg"
// import { fetchBanks } from "../../api"
import { getBanks } from "../../actions"
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        // color: 'white',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    item: {
        color: 'white',
    },

}));
const clear = () => {
    localStorage.clear()
}


const Search = () => {
    const dispatch = useDispatch()
    const [filter, setFilter] = useState('')
    const handleChange = async (e) => {
        setCity(e.target.value)
        dispatch({ type: 'true' })
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
                <h1>  <Link to="/Bank-Search">Bank Search</Link></h1>
                <Tooltip title={
                    <>
                        <h2>Favorites</h2>
                    </>
                } placement="right">
                    <Link to="/Bank-Search/favs"><img src={fav} alt="Favs" className="favicon" /></Link>
                </Tooltip>
            </div>
            <div className="search">
                <Tooltip title={
                    <>
                        <h3>Clear Cache</h3>
                    </>
                } placement="left">
                    <img src={trash} alt="Delete" className="delicon" onClick={() => { clear() }} />
                </Tooltip>
                <FormControl className={classes.formControl} id="select">
                    <InputLabel id="demo-simple-select-label">City</InputLabel>
                    <Select

                        className={classes.item}
                        value={city}
                        onChange={handleChange}
                    >
                        <MenuItem value={'Delhi'}>Delhi</MenuItem>
                        <MenuItem value={'Bangalore'}>Bangalore</MenuItem>
                        <MenuItem value={'Kolkata'}>Kolkata</MenuItem>
                        <MenuItem value={'Mumbai'}>Mumbai</MenuItem>
                        <MenuItem value={'Pune'}>Pune</MenuItem>
                    </Select>
                </FormControl>
                <input type="text" placeholder="search..." className="searchbar" value={filter} onChange={handleFilterChange} />
            </div>
        </div>

    );
}

export default Search;