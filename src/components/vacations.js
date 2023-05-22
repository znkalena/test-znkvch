import React from "react";

import Vacation from "./vacation";

class VacationsList extends React.Component{    
    render(props){    
                if(this.props.vacations.length >0){
                return(<div>
                    {this.props.vacations.map((el) =>(
                        <Vacation key={el.id} vacation={el} />            
                    ))}
                    </div>
                )}else{
                    return(<div className="wrapper">
                        <h3 className="profesion">There is not such vacation</h3>
                
                </div>)
                }       
    }
}
export default VacationsList

