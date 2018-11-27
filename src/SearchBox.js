import React from 'react'

class SearchBox extends React.Component{
    state = {
        searchTerm : ""
    }
    handleUserInput(event){
        console.log("event",event.target.value);
        this.setState({searchTerm:event.target.value})
    }
    render(){
        return(
            <div>
                <input value = {this.state.searchTerm}onChange = {event=>this.handleUserInput(event)} />
            </div>
        )
    }
}
export default SearchBox