import {v4} from 'uuid'

import {Component} from 'react'
import ContactItem from "./todolist.js"

const initialContactsList = [
  {
    id: v4(),
    name: 'Ram',
    mobileNo: 9999988888,
    isFavorite: false,
  },
  {
    id: v4(),
    name: 'Pavan',
    mobileNo: 8888866666,
    isFavorite: true,
  },
  {
    id: v4(),
    name: 'Nikhil',
    mobileNo: 9999955555,
    isFavorite: false,
  },
]
class App extends Component{
 
  state = {
    contactsList: initialContactsList,
    name: '',
    mobileNo: '',
   
  }
pppp=id=>{
  this.setState(prev=>({
    contactsList:prev.contactsList.map(user=>{
      if(id===user.id){
        return {...user,isFavorite:!user.isFavorite}
      }
      return user
    })
  }))
}
  onadd=event=>{
    event.preventDefault()
    const {name,mobileNo}=this.state
    const newitem={
      id:v4(),
      name,
      mobileNo,
  
      isFavorite: false,
    }
   this.setState(preves=>({
    contactsList:[...preves.contactsList,newitem]
   }))
  }
 

  onChangeName = event => {
    this.setState({name: event.target.value})
   
  }
  
  onChangeMobileNo = event => {
    this.setState({mobileNo: event.target.value})
  }



  render(){
    const {name, mobileNo, contactsList} = this.state
   return(
<div>
<input
              value={name}
              onChange={this.onChangeName}
          
              placeholder="Name"
            />
            <input
           
              value={mobileNo}
              onChange={this.onChangeMobileNo}
              placeholder="Mobile Number"
            />
  <button type='type' onClick={this.onadd}   >add</button>
  {contactsList.map(eachContact => (
              <ContactItem
                key={eachContact.id}
        toggleIsFavorite={this.pppp}
                
                useritem={eachContact}
              
              />
            ))}
  
</div>

   )
   }
  }

export default App