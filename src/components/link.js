import React from "react"

class Link extends React.Component{
    render(){
    return(
    <a href={this.props.href} className={this.props.className}>{this.props.content}</a>
    )
}
}

export default Link