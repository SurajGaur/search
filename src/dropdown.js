import React from 'react'
import './DropDown.css'        
       
class DropDown extends React.Component{
    
    
   
      
    render(){
        return(
            <div>
                <select  onChange = {this.props.action} value = {this.props.selectedOption}>
                    <option value = "select">Select</option>
                    <option value = "california">California</option>
                    <option value = "new york">New York</option>
                    <option value = "minnesota">Minnesota</option>
                </select>
            </div>
        )
    }
}
export default DropDown