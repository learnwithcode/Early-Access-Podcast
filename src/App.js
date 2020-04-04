import React from 'react'
import axios from 'axios';

// local import here.
import './static/css/style.css'

class ReactFormLabel extends React.Component {

    render() {
     return(
      <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
     )
    }
   }


class App extends React.Component {

    state = {
         email: '',
         phone: '',
         ocd: '',
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
                }) 
            //    this.props.history.push('/moneyform'); 
            }
        })
        .catch(err => {
            console.log(err)
            return alert('Mobile Or Email Exist')
        });  
       }

    render() {
        return (
            <React.Fragment>
            <header className='header'>
                <div className='header__container'>
                <div className='header__text-box'>
                    <h3 className='heading-tertiary'>

                 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </h3>
                </div>
                <div className='header__form-box'>
                    <form className='react-form' onSubmit={(event) => this.onFormSubmit(event)}>

                            <h1 className='form-title'>Access Podcast</h1>

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
                </div>
                </div>
            </header>
            </React.Fragment>
        )
    }

}

export default App;