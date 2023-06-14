import { useState } from 'react'
import { AiOutlineHeart, AiFillHeart, AiTwotoneApi } from 'react-icons/ai'
import './index.css'

function Amigo (props) {
    return(<>
        <div className='amigo-container'>
            <h4>{props.nome}</h4>
            {props.fav == true ? <AiFillHeart className='icone' onClick={() => props.dislike(props.nome)}/> : <AiOutlineHeart className='icone' onClick={() => props.like(props.nome)}/>}
            <AiTwotoneApi className='icone' onClick={() => props.del(props.nome)}/>
        </div>    
    </>)
}

export default Amigo