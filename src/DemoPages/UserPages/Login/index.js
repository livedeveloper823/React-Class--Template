import React, { Fragment } from "react";

import sidebar from "../../../assets/utils/images/login.jpg"
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

export default function Login () {

    return (
      <Fragment>
        <div className="h-100">
          <Row className="h-100 g-0">
            <Col lg="4" className="d-none d-lg-block">
              <div className="slider-light">
                <img src={sidebar} style={{height:'950px'}} alt=""/>
              </div>
            </Col>
            <Col lg="8" md="12" className="h-100 d-flex bg-white justify-content-center align-items-center">
              <Col lg="9" md="10" sm="12" className="mx-auto app-login-box">
                <div className="app-logo" />
                <h4 className="mb-0">
                  <div>Welcome back,</div>
                  <span>Please sign in to your account.</span>
                </h4>
                <h6 className="mt-3">
                  No account?{" "}
                  <a href="#/pages/register" className="text-primary">
                    Sign up now
                  </a>
                </h6>
                <Row className="divider" />
                <div>
                  <Form>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="exampleEmail">Email</Label>
                          <Input type="email" name="email" id="exampleEmail" placeholder="Email here..."/>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="examplePassword">Password</Label>
                          <Input type="password" name="password" id="examplePassword" placeholder="Password here..."/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup check>
                      <Input type="checkbox" name="check" id="exampleCheck" />
                      <Label for="exampleCheck" check>
                        Keep me logged in
                      </Label>
                    </FormGroup>
                    <Row className="divider" />
                    <div className="d-flex align-items-center">
                      <div className="ms-auto">
                        <a href="#/pages/forgot-password" className="btn-lg btn btn-link" >
                          Recover Password
                        </a>{" "}
                        <Button color="primary" size="lg">
                          <a href="#/dashboards" style={{color:'white'}}>Login to Dashboard</a>
                        </Button>
                      </div>
                    </div>
                  </Form>
                </div>
              </Col>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }

