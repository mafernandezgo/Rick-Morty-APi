import React, { useState, useEffect, setShow } from 'react';
import axios from 'axios';
import CharactersMoreInfo from "../../organisms/CharacterMoreInfo/CharacterMoreInfo"
import MoreInfo from '../../molecules/CardMoreInfo/CardMoreInfo'
import './BtnLove.scss';
import {AiOutlinePlus} from 'react-icons/ai'

function BtnLove({data}) { 
  const [show, setShow] = useState(false);
  
  return (
    <>
      <button className="a-btnlove" onClick={() => setShow((show) => !show)} > 
        <AiOutlinePlus/>
      </button>
      {show && <MoreInfo data = {data}/>}
    </>
  );
}

export default BtnLove;
