import React from "react"
import Input  from "./input";
import searchIcon from "../img/S.svg";
import Button from "./button";
import VacationsList from "./vacations";

class Section extends React.Component{
    constructor(props){
        super(props)
        this.state={
            searchText:"Введите название вакансии",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(event) {
        this.setState({ searchText: event.target.value });
    }
    handleSearch(event) {
        event.preventDefault();    
        console.log("Search performed:", this.state.searchText);
    }
    handleClick(){
        this.setState({searchText:''})
    }
    render(){
        return(
        <section>
        <div className="wrapper__search">
            <label htmlFor="Input">
            <img src ={searchIcon} alt="search icon"/>
            </label>        
        <Input
            type="search"
            className="search__input"
            placeholder={this.state.searchText}                        
            onChange={this.handleChange}
            onClick={this.handleClick}
            value={this.state.searchText}
            /> 
            <Button className="search__btn" onClick={this.handleSearch} type="button">Поиск</Button>
        </div>
        <VacationsList/>  
        </section>
        )}
        }

        export default Section