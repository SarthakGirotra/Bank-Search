import React from 'react';
import { useSelector } from "react-redux"
import "./page.css"
function Page({ match }) {
    const { params: { ifsc } } = match;
    const data = useSelector((state) => state.banks)
    const bank = data.filter((d) => {
        return d['ifsc'] === ifsc


    }

    )
    return (
        <div>
            {bank[0] && (
                <div className="bank">
                    <h1>{bank[0]?.bank_name}</h1>
                    <h2>{bank[0]?.bank_id}</h2>
                    <h3>{bank[0]?.ifsc}</h3>
                    <h4>{bank[0]?.city}</h4>
                    <h5>{bank[0]?.address}</h5>
                </div>
            )
            }


        </div>
    );
}

export default Page;