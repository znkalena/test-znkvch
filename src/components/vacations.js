import React from "react";
import Icon from '../img/vacationcity.svg';
import saveIcon from '../img/Save Button.svg'
import Button from "./button";

class VacationsList extends React.Component{
    constructor(props){
        super(props)
        this.state={
        className:"save__btn"        
        }

        this.handleSave=this.handleSave.bind(this)
        
    }
    vacations=[
        {
            id:1,
            profession:'Менеджер-дизайнер',
            firm_name:'sss',
            towntitle:'new urengoy',            
            type_of_worktitle :'full day',
            payment_to:'',
            payment_from:'70000',
            currency:''
        },
        {
            id:2,
            profession:'Ведущий графический дизайнер НЕ УДАЛЕННО',
            firm_name:'vvv',
            towntitle:'moskow',            
            type_of_worktitle :'full day',
            payment_to:'',
            payment_from:'80000',
            currency:''
        }
    ]
    handleSave(){
        console.log('save');
        this.setState({className:"save__btn active"});
    }

    render(){
        return(<div>
            {this.vacations.map((vacation) =>(<div className="wrapper">
            <div className="card">
                <h3 className="profesion">{vacation.profession}</h3>
                <p className="paragraf">
                    <span className="payment">з/п от {vacation.payment_from || vacation.payment_to || vacation.currency } rub</span>
                    <span className="worktitle">{vacation.type_of_worktitle}</span>
                </p>
                <p className="paragraf">
                    <img className="cityicon" src={Icon} alt="icon near the city"/>
                    <span className="town">{vacation.towntitle}</span>
                </p>
            </div>
            <Button type="submit" onClick={this.handleSave} className={this.state.className}><img src={saveIcon} alt="save icon"/></Button>
        </div>
            ))}
        </div>


        )
    }
}
export default VacationsList