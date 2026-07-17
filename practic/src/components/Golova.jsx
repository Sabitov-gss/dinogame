import React from 'react'
import style from '../styles/Golova.module.css'
import bg from '../assets/search.png'

function Golova() {
  return (
    <div className={style.header}>
        <div className={style.logo}>
            <h1>uncode</h1>
        </div>
        <div className={style.men}>
            <ul className={style.mene}>
                <li className={style.soz}>HOME</li>
                <li className={style.soz}>PAGES</li>
                <li className={style.soz}>FEATURES</li>
                <li className={style.soz}>WORKS</li>
                <li className={style.soz}>BLOG</li>
                <li className={style.soz}>SHOP</li>
                <li className={style.soz}>EXTRA</li>
            </ul>
        </div>
        <div className={style.search}>
            <img className={style.img} src={bg} alt="" />
        </div>
       
    </div>


  )
}

export default Golova