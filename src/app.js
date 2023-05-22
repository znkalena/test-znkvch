import React from "react"
import Header from "./components/header"
import Filter from "./components/filter"
import Section from "./components/section"
import Link from "./components/link"
import Button from "./components/button"
import Pagination from "./components/pagination"



class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
        mainText:"Test",        
        userData:""
        }

        this.inputClick=this.inputClick.bind(this)
        this.handleClearClick = this.handleClearClick.bind(this)
    }
    
    render(){
        return(
        <div className='name'>
        <Header/>
        <h1 className="visualy-hidden">{this.state.mainText}</h1> 
        <main className="main">       
        <Filter content="Фильтры" />
        <Section/>
        </main>        
        <Pagination/>      
        </div>
    )
    }
    inputClick(){
        this.setState({helpText:"change"})
        console.log('click')
    }
    handleClearClick() {
        this.setState({userData:""});
    }
}  
export default App