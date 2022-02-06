import React from 'react'
import GaleriCard from './GaleriCard'
import axios from 'axios'

export default function GaleriList  ({albums})  {
    
    return (
        <>
        <div className="row">
        {
            albums.length ===  0 ? (
            <h3>Nonononono</h3>
                ) : ( 
                    albums.map((album) => {
                return (
                    <div className="col-md-3">
                        <GaleriCard/>
                    </div>
                )
            })
        )}
        </div>
        </>
    )
}
