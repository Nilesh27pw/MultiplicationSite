import React,{Component}from 'react';
// import logo from './logo.svg';
import './App.css';
// import Greet from './components/greet'
// import Welcome from './components/welcome'
// import Message from './components/message'

class App extends Component  {
 constructor(props) {
   super(props)
   this.state={
     username:0,
     u2:0,
     t1:0,
     t2:0,
     t3:0,
     t4:0,
     t5:0,
     t6:0,
     t7:0,
     t8:0,
     t9:0,
     t10:0,
     hasTrue:'false'
    };
   }
   handleChange=(event)=>{
     this.setState({
    username:event.target.value   

     });
   }
   handle = () =>{
    this.setState({
           hasTrue:'true',
           t1:this.state.username*1,
           t2:this.state.username*2,
           t3:this.state.username*3,
           t4:this.state.username*4,
           t5:this.state.username*5,
           t6:this.state.username*6,
           t7:this.state.username*7,
           t8:this.state.username*8,
           t9:this.state.username*9,
           t10:this.state.username*10,
           u2:this.state.username,
           username:0
   });
   }
 clear = ()=>{
   this.setState({
     hasTrue:'false'
   })
 }
  render(){   
    let h=''
    if(this.state.hasTrue ==='true')
     {h=<p>Table of {this.state.u2} is :
      <p className="table">
             {(this.state.u2)} * 1   = <i className="table1">{this.state.t1}</i><br/>
             {(this.state.u2)} * 2   = <i className="table1">{this.state.t2}</i><br/>
             {(this.state.u2)} * 3   = <i className="table1">{this.state.t3}</i><br/>
             {(this.state.u2)} * 4   = <i className="table1">{this.state.t4}</i><br/>
             {(this.state.u2)} * 5   = <i className="table1">{this.state.t5}</i><br/>
             {(this.state.u2)} * 6   = <i className="table1">{this.state.t6}</i><br/>
             {(this.state.u2)} * 7   = <i className="table1">{this.state.t7}</i><br/>
             {(this.state.u2)} * 8   = <i className="table1">{this.state.t8}</i><br/>
             {(this.state.u2)} * 9   = <i className="table1">{this.state.t9}</i><br/>
             {(this.state.u2)} * 10=<i className="table1">{this.state.t10}</i><br/>
      </p> 
    </p>;}
   return ( 
    <div className="App">
      <h1 className="App-header">Multiplication Table App</h1>
         <label>Enter a Number</label>:<input type='number' onChange={this.handleChange}/>
         <button onClick={this.handle}>
            Submit
          </button>
          <button onClick={this.clear}>
              Clear
          </button>
          {h}
          
         
      {/* <Message/>
      <p alignment='left'><input type='text' placeholder ='Yourname' /></p> 
      <Greet name="nilesh" batch="SYCSE-1">
          <p>bye............</p>
        </Greet>
        <Greet name="Pratiksha" batch="SYCSE-1">
          <p>
            Nothing hearing
          </p>
        </Greet>
        <Greet name="rutuja" batch="SYCSE-1">
          <p>
            deva
          </p>
        </Greet>
        <Greet name="pratik" batch="SYCSE-1">
          <p>
            chomya
          </p>
        </Greet>
       <Welcome name="nilesh" batch="SYCSE-1">
       <p>bye............</p>
       </Welcome>
       <Welcome name="Pratiksha" batch="SYCSE-1"></Welcome>
       <Welcome name="rutuja" batch="SYCSE-1"></Welcome>
       <Welcome name="pratik" batch="SYCSE-1"></Welcome> */}
     </div>
  );
   } 
}

export default App;
