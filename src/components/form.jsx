import React from 'react'
import axios from 'axios';

class ReactFormLabel extends React.Component {

    render() {
     return(
      <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
     )
    }
   }

class Whatsapp extends React.Component {

    render() {
        return(
            <React.Fragment>
            <h2 className='heading-group'>For Contamination Ocd</h2>
            <a id='formButton' target="_blank" className='btn--green' href="https://chat.whatsapp.com/JbyJNdkDTsH40QR9wJbWWK ">Join Whatsapp Group</a>
            <br/>
            <br/>
            <h2  className='heading-group'>For Religious Ocd</h2>
            <a id='formButton' target="_blank" className='btn--green' href="https://chat.whatsapp.com/FBY9kwS6wHZBr4kzMy3KH5">Join Whatsapp Group</a>
            <br/>
            <br/>
            <h2  className='heading-group'>For Sexual Ocd</h2>
            <a id='formButton' target="_blank" className='btn--green' href="https://chat.whatsapp.com/HPHfJKnAdYN1ye7zinS5Ze">Join Whatsapp Group</a>
            <br/>
            <br/>
            <h2  className='heading-group'>Other Ocd</h2>
            <a id='formButton' target="_blank" className='btn--green' href="https://chat.whatsapp.com/HqJhGflNvlKHmPBhKcN4ye">Join Whatsapp Group</a>
            </React.Fragment>

        )
    }
}

class WhatsappText extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h3 className='heading-tertiary'>
                    ocd ek aisi problem hai jo kisi normal friend, relative ya family member se  share kare to shayad vo kabhi nahi samjhenge kuki ise  vahi samaj skta h jo isse suffer kar raha  hota hai,
                    <br/>
                    <br/>
                    Isilie Cromunity ne aapke lie community banai hai, jha aap un logo say jud skte h jo aap hi ki trah is problem se lad rahe h!
                    <br/>
                    <br/>
                    yaha aap apne jaise sufferer se jud kar jaan skte hai vo kis trah ocd se ladrahe h, aap doctors or medicine par  le  sakte h, aap akela feel karte h ocd me to unhe dost bna skte h jo aap ko samjhe
                    <br/>
                    <br/>
                </h3>
                <h1 className='form-title'>join kijie cromunity whats app par</h1>
            </React.Fragment> 
        )
    }
}

class Form extends React.Component {
    state = {
        email: '',
        phone: '',
        ocd: '',
        group: false
       }
     
       handleChange = e => {
           this.setState({[e.target.name]: e.target.value})
         }
     
       onFormSubmit = (e) => {
       e.preventDefault()
     
       let formData = {
        email: this.state.email,
        phone: this.state.phone,
        ocd: this.state.ocd,
        
       }
     
       if (formData.phone.length < 10) {
           return alert('phone must be 10 digits')
          }
  
       axios.post('https://mypodcst.herokuapp.com/email/create/', formData)
       .then(response => {
           console.log(response)
           if (response.status === 201){
               this.setState({
                   email: '',
                   phone: '',
                   ocd: '',  
                   group: true  
               })  
           }

       })
       .catch(err => {
            console.log(err)
            return alert('Mobile Or Email Exist')
        
       });  
      }


   render() {
       let showgroup = this.state.group
       let form = (
            <form className='react-form' onSubmit={(event) => this.onFormSubmit(event)}>

                <h1 className='form-title'>Join Free Podcast</h1>

                <fieldset className='form-group'>
                <ReactFormLabel htmlFor='formEmail' title='Email:' />

                <input id='formEmail' className='form-input' name='email' type='email' required onChange={this.handleChange} value={this.state.email} />
                </fieldset>

                <fieldset className='form-group'>
                <ReactFormLabel htmlFor='phone' title='Mobile:'/>

                <input id='phone' className='form-input' name='phone' type='text' required onChange={this.handleChange} value={this.state.phone} />
                </fieldset>

                <fieldset className='form-group'>
                <ReactFormLabel htmlFor='formMessage' title='Select Type:' />

                    <select id="cars">
                    <option value="1">CONTAMINATION</option>
                    <option value="2">RELIGIOUS</option>
                    <option value="3">SOCIAL</option>
                    <option value="4">OTHER</option>
                    </select>
                </fieldset>

                <div className='form-group'>
                <input id='formButton' className='btn' type='submit' placeholder='Send message' />
                </div>
        </form>
       ) 
       return (
           <React.Fragment>
           <header className='header'>
           <div className="header__logo-box">
                <h2 className="logo">Cromunity</h2>
            </div>
               <div className='header__container'>
               <div className='header__text-box'>

                  {showgroup ? <WhatsappText/>: 
                   <h3 className='heading-tertiary'>
                        Lock down me Ocd sufferers ki anxiety jada hona, dur lagna, akela feel krna or koi madad na milna 
                        <br/>
                        <br/>
                        Hum samjhte hai!  
                        <br/>
                        <br/>
                        Join kijie podcast aur janie kaise OCD se lade lock down k samay me. 
                        <br/>
                        <br/>
                        <h1 className='form-title'> Join free PODCAST</h1>
                    </h3>
                }  
               </div>
               <div className='header__form-box'>
                   
                {showgroup ?  <Whatsapp/> : form}
               </div>
               </div>
        </header>
           <footer className="footer">
            <h3 className="footer__text">Copyright &copy; 2019-2020 By Cromunity</h3>
            </footer>
           </React.Fragment>
       )
   }
}  


export default Form;