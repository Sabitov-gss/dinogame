import React, { Component } from 'react'
import style from '../styles/Main.module.css'
import bo from '../assets/volny.jpg'

export class Main extends Component {
  render() {
    return (
      <div className={style.box}>
        <img className={style.oboi} src={bo} alt="" />
        <div className={style.con}>
            <h1 className={style.dodo}>Welcome</h1>
            <p>Eye catching modern metro-style blog layout for ambitious creatives writers.</p>
            <button className={style.knopka}> READ OUR BLOG</button>
        </div>
        
      </div>
      
    )
  }
}

export default Main