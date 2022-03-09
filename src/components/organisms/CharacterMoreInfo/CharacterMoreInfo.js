import React from "react";
import MoreInfo from "../../molecules/CardMoreInfo/CardMoreInfo"
// import './Character.scss';


function CharactersMoreInfo ({data}) {
    const {status, gender, location, origin} = data
    return(
        <MoreInfo data = {data}/>
    )
}

export default CharactersMoreInfo;
