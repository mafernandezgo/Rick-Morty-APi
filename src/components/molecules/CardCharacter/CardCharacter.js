import React, {useState} from 'react'
import './CardCharacter.scss'
import BtnLove from '../../atoms/BtnLove/BtnLove'
import MoreInfo from '../../molecules/CardMoreInfo/CardMoreInfo'
import {AiOutlinePlus} from 'react-icons/ai'

function CardCharacter({data} ){
    const [show, setShow] = useState(false);
    const {name, image, species} = data
    return (
        <div className="card">
            <h2 className="card_name">{name} </h2>
            <div className="card_wrapper">
                <img className="card_image" src={image}/>
                <h3 >{species}</h3>
                <div className="card_moreInfo">
                    <button className="a-btnlove" 
                        onClick={() => setShow((show) => !show)} > 
                        <AiOutlinePlus/>
                    </button>
                        {show && <MoreInfo data ={data}/>}
                </div>
            </div>
        </div>
    ) 
}


export default CardCharacter