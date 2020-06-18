import React,{Component} from 'react'

class welcome extends Component{
    render(){
    return ( 
   <div>   
       <h1>welcome {this.props.name} from {this.props.batch}</h1>
           {this.props.children}
  </div>  )}
}
export default welcome