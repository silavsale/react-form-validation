import React, {Component} from 'react';
import './App.css';

const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach(value => {
        value.length > 0 && (valid = false)
    });

    return valid;
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state.formErrors)) {
            console.log(`
          --SUBMITTING--
          First Name: ${this.state.firstName}
          Last Name: ${this.state.lastName}
          Email: ${this.state.email}
          Password: ${this.state.password}
          `)
        } else {
            console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
        }
    };

    handleChange = e => {
      e.preventDefault();

    };

    render() {
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Create Account</h1>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="firstName">
                            <label htmlFor="fistName">First Name</label>
                            <input
                                type="text"
                                className=""
                                placeholder="First Name"
                                typeof="text"
                                name="firstName"
                                noValidate
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="lastName">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                className=""
                                placeholder="Last Name"
                                typeof="text"
                                name="lastName"
                                noValidate
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                className=""
                                placeholder="Email"
                                typeof="text"
                                name="email"
                                noValidate
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className=""
                                placeholder="Password"
                                typeof="text"
                                name="password"
                                noValidate
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="createAccount">
                            <button type="submit">Create Account</button>
                            <small>Already have an account?</small>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default App;
