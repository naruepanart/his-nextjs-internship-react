import React, { PureComponent } from "react"
import axios from "axios"
import {
    Card,
    CardBody,
    CardHeader,
    Button,
    Col,
    Input,
    Form,
    Label,
} from "reactstrap"

export default class Login extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            accountusers: [],
        }
    }

    onChange1 = e => {
        this.setState({ username: e.target.value })
    }

    onChange2 = e => {
        this.setState({ password: e.target.value })
    }

    async componentDidMount() {
        const uri = "https://backend-jsonserver-test.herokuapp.com/users"
        const { data } = await axios.get(uri)
        this.setState({ accountusers: data })
    }

    handleClick = () => {
        var i = 0
        var u = this.state.accountusers
        for (i = 0; i < u.length; i++) {
            if (
                this.state.username === u[i].username &&
                this.state.password === u[i].password
            ) {
                window.location.assign("/register")
                break
            } else {
                alert("Error")
            }
        }
    }

    render() {
        return (
            <div>
                <Form>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <br />
                        <Card>
                            <CardHeader>Login</CardHeader>
                            <CardBody>
                                <Label>Username</Label>
                                <Input
                                    type="text"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.onChange1}
                                />

                                <Label>Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChange2}
                                />

                                <br />
                                <center>
                                    <Button
                                        color="primary"
                                        style={{ padding: "8px 80px" }}
                                        onClick={this.handleClick}
                                    >
                                        Login
                                    </Button>
                                </center>
                            </CardBody>
                        </Card>
                    </Col>
                </Form>
            </div>
        )
    }
}
