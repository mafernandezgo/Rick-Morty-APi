import React from "react";
import CardCharacter from "../../molecules/CardCharacter/CardCharacter";
import MoreInfo from "../../molecules/CardMoreInfo/CardMoreInfo"
import './Character.scss';


function Characters ({data}) {
    return(
        <div className="m-cardhome">
            {data.map(item => {
                return (
                        <CardCharacter data ={item}
                    />
                )
            })}
        </div>
    )

}

export default Characters;
