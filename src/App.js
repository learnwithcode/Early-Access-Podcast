import React from 'react'

// local import here.
import './static/css/style.css'

class ReactFormLabel extends React.Component {
    constructor(props) {
     super(props)
    }
   
    render() {
     return(
      <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
     )
    }
   }


class App extends React.Component {
    constructor(props) {
        super(props)
      
        this.state = {
         name: '',
         email: '',
         subject: '',
         message: ''
        }
      
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
       }
      
       handleChange = (e) => {
        let newState = {}
      
        newState[e.target.name] = e.target.value
      
        this.setState(newState)
       }
      
      
       handleSubmit = (e, message) => {
        e.preventDefault()
      
        let formData = {
         formSender: this.state.name,
         formEmail: this.state.email,
         formSubject: this.state.subject,
         formMessage: this.state.message
        }
      
        if (formData.formSender.length < 1 || formData.formEmail.length < 1 || formData.formSubject.length < 1 || formData.formMessage.length < 1) {
         return false
        }
      
        // $.ajax({
        //  url: '/some/url',
        //  dataType: 'json',
        //  type: 'POST',
        //  data: formData,
        //  success: function(data) {
        //   if (confirm('Thank you for your message. Can I erase the form?')) {
        //     this.setState({
        //      firstName: '',
        //      lastName: '',
        //      email: '',
        //      subject: '',
        //      message: ''
        //     })
        //   }
        //  },
        //  error: function(xhr, status, err) {
        //   console.error(status, err.toString())
        //   alert('There was some problem with sending your message.')
        //  }
        // })
      
        this.setState({
         firstName: '',
         lastName: '',
         email: '',
         subject: '',
         message: ''
        })
       }
    render() {
        return (
            <React.Fragment>
            <header>
                <form className='react-form' onSubmit={this.handleSubmit}>
                <h1>Access Podcast</h1>
    

    
                        <fieldset className='form-group'>
                        <ReactFormLabel htmlFor='formEmail' title='Email:' />
    
                        <input id='formEmail' className='form-input' name='email' type='email' required onChange={this.handleChange} value={this.state.email} />
                        </fieldset>
    
                        <fieldset className='form-group'>
                        <ReactFormLabel htmlFor='formSubject' title='Mobile:'/>
    
                        <input id='formSubject' className='form-input' name='subject' type='text' required onChange={this.handleChange} value={this.state.subject} />
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

                        <fieldset className='form-group'>
                        <ReactFormLabel htmlFor='formMessage' title='Message:' />
    
                        <textarea id='formMessage' className='form-textarea' name='message' onChange={this.handleChange}></textarea>
                        </fieldset>



    
                        <div className='form-group'>
                        <input id='formButton' className='btn' type='submit' placeholder='Send message' />
                        </div>
                </form>
            </header>
            </React.Fragment>
        )
    }

}

export default App;