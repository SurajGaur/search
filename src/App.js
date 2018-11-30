import React from 'react'
import DropDown from './DropDown';
import './App.css'


const people = [
  {
    id: 1,
    title: "UI Developer",
    location: "California",
    experience: 5 
  },
  {
    id: 2,
    title: "Developer",
    location: "California",
    experience: 3   
  },
  {
    id: 3,
    title: "Manager",
    location: "California",
    experience: 10 
  },
  {
    id: 4,
    title: "UI Developer",
    location: "California",
    experience: 5 
  },
  {
    id: 5,
    title: "UI Developer",
    location: "New York",
    experience: 5 
  }
]
function searchingFor(term,selectedOption){
  return function(x){
   if(x.location.toLowerCase() === selectedOption.toLowerCase()){
    return (x.title.toLowerCase().includes(term.toLowerCase() ));
  }else{
    return !term;
  }
  }
}
class App extends React.Component{
  handleClick = () =>{
    console.log("Searching");
  }
  constructor(props){
    super(props)
      this.state = {
        people: people,
        term: '',
        value: '',
        selectedOption: ''
      }
      this.searchHandler = this.searchHandler.bind(this);
      this.change = this.change.bind(this);
  }
 
  searchHandler(){
    this.setState({term: document.getElementById("keyword").value})
  }
  change(event){   
    this.setState({selectedOption: event.target.value})
 
  }
  render(){  
    const {people,term,selectedOption} = this.state;
    return(
      <div className = "container">
      <div className = "searchComponent">
        <input className = "input" id="keyword" placeholder = "Keywords" />
        <div className = "dropdown">
        <DropDown action = {this.change}/>
       
        </div>
        <button className = "search" onClick={this.searchHandler}>Search</button>
        
        </div>
      
        <div>
          {
            people.filter(searchingFor(term,selectedOption)).map(jobSeekers =>
                <div key =  {jobSeekers.id}>
                  <p> {jobSeekers.id}</p>
                  <p> {jobSeekers.title}</p>
                  <p> {jobSeekers.location}</p>
                  </div>
            )
          }
        </div>
      </div>
    )
  }
}
export default App