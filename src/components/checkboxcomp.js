import React from 'react';
import checkboxData from './checkboxArray' 

class CheckboxComp extends React.Component{
 constructor(){
        super();
        this.state = {
          newBool: false
        }
    }
  
   
    handleClick = () =>{
    if(this.props.checktoggle == true)
    {
        this.setState({newBool: true})
    } else  {
        this.setState({newBool: false})
    }
    
}




    render(){
        return(
          <>
          { checkboxData.map((item)=>{
        return (
            <tr style={{color: 'grey'}}>
            <input
            onClick={this.handleClick}
               checked={this.props.checktoggle} 
               type="checkbox" />{item.name}</tr>
        )
    })}  
              
        </>
        )
    }
}

export default CheckboxComp;