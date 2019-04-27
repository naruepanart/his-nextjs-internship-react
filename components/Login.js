import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Card, CardBody, CardHeader, Button, Col, Input,Form } from 'reactstrap';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      accountusers: [],
      checklogin: false
    };

    this.onChange1 = this.onChange1.bind(this);
    this.onChange2 = this.onChange2.bind(this);
    this.handleClick = this.handleClick.bind(this);


  }

  onChange1(e) {
    this.setState({ username: e.target.value });
  }

  onChange2(e) {
    this.setState({ password: e.target.value });

  }

  async componentDidMount() {
    const uri = 'https://backend-jsonserver-test.herokuapp.com/users'
    const { data } = await axios.get(uri)
    this.setState({ accountusers: data })
  }


  async handleClick() {
    var i = 0;
    var u = this.state.accountusers;
    for (i = 0; i < u.length; i++) {
      if (this.state.username === u[i].username && this.state.password === u[i].password) {
        await swal({
          title: "Success",
          icon: "success",
          button: "OK",
        });
        window.location.assign("/register");
        break;
      } else {
        swal({
          title: "Login Failed",
          text: "Username or Password incorrect. Please try again.",
          icon: "error",
          button: "OK",
        });

      }
    }
  }

  render() {
    return (
      <div>
        <Form>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <br></br>
            <Card>
              <CardHeader>Login</CardHeader>
              <CardBody>
                <div>
                  <label>Username</label>
                  <Input type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange1}

                  />
                </div>

                <div>
                  <label>Password</label>
                  <Input type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange2}

                  />
                </div>
                <br></br>
                <center>
                  <Button color="primary" style={{ padding: "8px 80px" }} onClick={this.handleClick}> Login </Button>
                </center>
              </CardBody>
            </Card>
          </Col>
        </Form>
      </div>
    );
  }
}
