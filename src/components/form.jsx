import React from 'react'
import axios from 'axios';

class ReactFormLabel extends React.Component {

    render() {
     return(
      <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
     )
    }
   }

class EmbedVideo extends React.Component {

    render() {
        return(
            <React.Fragment>
            <h1 className='heading-tertiary'>We have sent you the podcast link in email meanwhile Join Our Whatsapp community</h1>
            <a id='formButton' target="_blank" className='btn--green' href="https://chat.whatsapp.com/HqJhGflNvlKHmPBhKcN4ye">Join Whatsapp Group</a>
            </React.Fragment>

        )
    }
}

class Form extends React.Component {
    state = {
        email: '',
        phone: '',
        ocd: '',
        video: false
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
                   video: true  
               })  
           }
       })
       .catch(err => {
           console.log(err)
           return alert('Mobile Or Email Exist')
       });  
      }


   render() {
       let showvideo = this.state.video
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
                   <h3 className='heading-tertiary'>

                        ye samay sabhi k lie mushkil hai lekin kabhi koi nahi smajhta ki is situation ocd sufferers ki Anxiety badhna, dar lagna ye sab kisi ko nhi dihkta.
                        <br/>
                        <br/>
                        hum samajhte hai, join kijie podcast ko aur janie kaise ocd se lade corona virus lock down m.
                        <br/>
                        <br/>
                        fill the form to listen podcast.
                    </h3>
               </div>
               <div className='header__form-box'>
                   
                {showvideo ?  <EmbedVideo/> : form}
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