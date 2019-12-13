import React from 'react';
import CheckboxComp from './checkboxcomp'
import '../components/checkbox.css'
class SelectAll extends React.Component{
    constructor(){
        super();
        this.state = {
            bool: false
        }
    }   


    toggleCheck = (e) => {
        if (e.target.checked){
           this.setState({bool:true})
          
          }  else  {
            this.setState({bool:false})
            }
       }


        

    render(){
        var sel = this.state.bool ? 'Unselect All' : 'Select All';
        return(
          <div className='border=1'>
           <ul>
         
           <li style={{ padding:'25px 0 10px 0 ',color: '#000000', fontSize: '21px'}}>
           <input type="checkbox" onChange={this.toggleCheck} name="vehicle2" value="Car" />
           {sel}
           </li>
           
           <li><CheckboxComp checktoggle= {this.state.bool} /></li>
           
        </ul>
        </div>
        )
    }
}

export default SelectAll;