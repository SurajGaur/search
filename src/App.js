import React from 'react'
import DropList from './DropList';
//import SearchBox from './SearchBox'
//import JobSeekers from './JobSeekers'
import './App.css'
//import JobSeekers from './JobSeekers';

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
function searchingFor(term){
  return function(x){
    return x.title.toLowerCase().includes(term.toLowerCase())|| !term;
  }
}
class App extends React.Component{
  handleClick = () =>{
    console.log("Searching");
  }
  constructor(props){
    super(props)
      this.state = {
        people:people,
        term: '',
        value: ''
      }
      this.searchHandler = this.searchHandler.bind(this);
  }
  searchHandler(event){
    this.setState({term: event.target.value})
  }
  
  render(){  
    const {people,term} = this.state;
    return(
      <div className = "container">
      <div className = "searchComponent">
        <input className = "input" placeholder = "Keywords" onChange = {this.searchHandler}/>
        <DropList />
        <button  >Search</button>
        
        </div>
        <div>
          {
            people.filter(searchingFor(term)).map(jobSeekers =>
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