import React, { Component } from "react"
import { Button, Form, Container, Input } from "reactstrap"
import Head from "next/head"

export default class BasicForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            nameError: "",
            emailError: "",
        }
    }

    handleNameChange = event => {
        this.setState({ name: event.target.value }, () => {
            this.validateName()
        })
    }

    handleEmailChange = event => {
        this.setState({ email: event.target.value }, () => {
            this.validateEmail()
        })
    }

    validateName = () => {
        this.setState({
            nameError:
                this.state.name.length > 3
                    ? null
                    : "Name must be longer than 3 characters",
        })
    }

    validateEmail = () => {
        this.setState({
            emailError:
                this.state.email.length > 3
                    ? null
                    : "Email must be longer than 3 characters",
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        e.target.reset();
       
    }

    render() {
        return (
            <div>
                <Head>
                    <title>HIS - Validation</title>
                    <link
                        rel="stylesheet"
                        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="stylesheet"
                        href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
                        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
                        crossOrigin="anonymous"
                    />
                </Head>
                <Container>
                    <h1>How to validation</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <Input
                                name="name"
                                className={`form-control ${
                                    this.state.nameError ? "is-invalid" : ""
                                }`}
                                id="name"
                                placeholder="Enter name"
                                value={this.state.name}
                                onChange={this.handleNameChange}
                                onBlur={this.validateName}
                            />
                            <div className="invalid-feedback">
                                {this.state.nameError}
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Input
                                name="email"
                                className={`form-control ${
                                    this.state.emailError ? "is-invalid" : ""
                                }`}
                                id="email"
                                placeholder="Enter email"
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                                onBlur={this.validateEmail}
                            />
                            <div className="invalid-feedback">
                                {this.state.emailError}
                            </div>
                        </div>
                        <Button
                            type="submit"
                            color="primary"
                            className="btn-block"
                        >
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}
