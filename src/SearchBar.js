import React from 'react'

function searchingFor(term){
    return function(x){
      return x.title.toLowerCase().includes(term.toLowerCase())|| !term;
    }
  }
class SearchBar extends React.Component{

    constructor(){
        super()
          this.state = {
            term: '',
            value: ''
          }
          this.searchHandler = this.searchHandler.bind(this);
      }
      searchHandler(event){
        this.setState({term: event.target.value})
      }
    render(){
        const {term} = this.state;
        // const {people} = this.props;
        return(
            <div>
                <input className = "input" placeholder = "Keywords" onChange = {this.searchHandler}/>
                <button className = "search">Search</button>
                <div>
                {
            props.people.filter(searchingFor(term)).map(jobSeekers =>
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

export default SearchBar