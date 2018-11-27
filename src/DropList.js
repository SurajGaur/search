import React from 'react'
        
       
class DropList extends React.Component{
    constructor(){
        super()
        this.state = {
            value: 'select'
        }
        this.change = this.change.bind(this);
    }
    
    change(event){
        this.setState({value: event.target.value})
      }
      
    render(){
        return(
            <div>
                <select onChange = {this.change} value = {this.state.value}>
                    <option value = "select">Select</option>
                    <option value = "california">California</option>
                    <option value = "new york">New York</option>
                    <option value = "minnesota">Minnesota</option>
                </select>
            </div>
        )
    }
}
export default DropList