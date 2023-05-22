import React from "react";
import Button from "./button";
import svg from '../img/close.svg';
import SelectInput from "./select";
import Input from "./input";

class Filter extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    selectText: "Выберете отрасль",    
    inputAtData:"",
    inputAtText:"От",
    inputToData:"",
    inputToText:"До"
    };
    this.inputClick = this.inputClick.bind(this);    
    this.handleClearClick = this.handleClearClick.bind(this);
}

handleClearClick() {
    this.setState({inputAtData:"",inputToData:"" });
}

inputClick() {
    console.log('click');
}

render() {
    return (
<div className="forma__conteiner">
        <form className="forma" action="" method="">
    <legend className="legend">{this.props.content}</legend>
    <Button type="button" onClick={this.handleClearClick} className="reset__btn">
            Сбросить все
    </Button>
    <img src={svg} alt="close" />
    <fieldset>
        <SelectInput className="label" label ="Отрасль" content={this.state.selectText} option1="frontend"/>                         
    </fieldset>
    <fieldset>
    <label className="label">Оклад</label>
        <Input
            type="number"
            className="filter__input"
            placeholder={this.state.inputAtText}
            onClick={this.inputClick}            
            onChange={event => this.setState({ inputAtData: event.target.value })}
            value={this.state.inputAtData}
            min="0"
            max ="1000"
            step= "100"
            />
        <Input
            type="number"
            className="filter__input"
            placeholder={this.state.inputToText}
            onClick={this.inputClick}            
            onChange={event => this.setState({ inputToData: event.target.value })}
            value={this.state.inputToData}
            min="0"
            max="500000"
            step="100"
            />                             
    </fieldset>
    <Button className="submit__btn" type="button">Применить</Button>
        </form>
                        
    </div>
    );
}
}
export default Filter;
