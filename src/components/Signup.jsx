import React, { Component } from 'react'
import axios from 'axios'

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            fullName: '',
            username: '',
            email: '',
            password: ''

        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFullName(event) {
        this.setState({
            fullName: event.target.value
        })
    }
    changeUsername(event) {
        this.setState({
            username: event.target.value
        })
    }

    changeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }
    onSubmit(event) {
        event.preventDefault()
        const registered = {
            fullName: this.state.fullName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://18.157.53.210:4000/signup', registered)
            .then(response => console.log(response.data))
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type='text'
                                placeholder='Full name'
                                onChange={this.changeFullName}
                                value={this.state.fullName}
                                className='signup-form-fields'
                            />

                            <input type="text"
                                placeholder='Username'
                                onChange={this.changeUsername}
                                value={this.state.username}
                                className='signup-form-fields'
                            />

                            <input type="text"
                                placeholder='E-mail'
                                onChange={this.changeEmail}
                                value={this.state.email}
                                className='signup-form-fields'
                            />

                            <input type="password"
                                placeholder='Password'
                                onChange={this.changePassword}
                                value={this.state.password}
                                className='signup-form-fields'
                            />

                            <input type="submit" className='signup-submit-btn' value='Submit' />
                        </form>
                    </div>
                </div>


            </div>
        );

    }
}
export default SignUp;