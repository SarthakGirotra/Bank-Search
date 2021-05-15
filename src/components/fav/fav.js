import React from 'react';
import Table from "../table/table"
import { useSelector } from "react-redux"
const Fav = () => {
    const data = useSelector((state) => state.banks)
    const favs = useSelector((state) => state.fav)
    const rows = data.filter(d => {
        return favs?.hasOwnProperty(d.ifsc)
    })
    return (
        <div>
            <h1>
                <Table data={rows}></Table>
            </h1>
        </div>
    );
}

export default Fav;