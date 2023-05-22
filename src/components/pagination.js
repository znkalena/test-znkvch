import React from "react"
import Button from "./button"
import Link from "./link"
import iconLeft from '../img/left.svg'
import iconRight from '../img/right.svg'

const clickLeft =() =>{
    console.log('left')
}
const clickRight =() =>{
    console.log('right')
}

const Pagination = (props) =>{    
    return(
        <div className="pagination__wrapper" type="button" onClick={clickLeft}>
        <Button className="pagination">
            <img src ={iconLeft} alt="arrow left"/>
        </Button>            
            <Link className="pagination pagination__link " href="#" content ="1"/>           
            <Link className ="pagination pagination__link " href="#" content ="2"/>           
            <Link className="pagination pagination__link " href ="#" content ="3"/> 
        <Button className="pagination" type="button" onClick={clickRight}>
            <img src={iconRight} alt="arrow right"/>
        </Button>           
        </div>  
    )
}


export default Pagination


