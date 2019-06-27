import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import { inlineLoading } from '../../helpers/utils';
import {RESEND_CODE, LOGIN, BACK_TO_LOGIN}  from '../../helpers/translations';

class ForgotForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      form: {
        email: '',
        password: '',
        confirmPassword: '',
        otp: '',
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadingRender = this.loadingRender.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.resend = this.resend.bind(this);
  }

  handleSubmit(data){
    this.setState({
      form: data
    })
    if(data.email && data.otp && data.password && data.confirmPassword){
      this.props.onSubmitForm(data.email, data.otp, data.password);
    }
  }

  loadingRender() {
    return (
      <div className="text-center">{inlineLoading()}</div>
    )
  }

  checkStatus() {
    const {fetching, fetched, error} = this.props;
    if (fetching || (fetched && error === null)) {
      return (
        <div className="login-status">
          {this.loadingRender()}
        </div>
      )
    }
    else if (fetched && error && error.data && error.data.message) {
      return (
        <div className="text-center">
          <p>{error.data.message}</p>
        </div>
      )
    }
  }

  resend(){
    if(this.state.form.email && this.state.form.email !== '' ){
      this.props.resend(this.state.form.email);
    }
  }

  render() {
    const { email, password, confirmPassword, otp} = this.state.form;
    return (
      <Formik
        initialValues={{ email: email, password: password, confirmPassword: confirmPassword, otp: otp }}
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            /\s?\w+\s/i.test(values.email)
          ) {
            errors.email = 'Invalid username';
          }
          if(!values.otp){
            errors.otp = 'Required';
          }
          if(!values.password){
            errors.password = 'Required';
          }
          if(!values.confirmPassword){
            errors.confirmPassword = 'Required';
          } else if(values.password !== values.confirmPassword){
            errors.confirmPassword = 'Password does not match';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            this.handleSubmit(values);
          }, 400);
        }}
        enableReinitialize={true}
      >
        {({ isSubmitting }) => (
          <Form className={classnames({ "disabled": this.props.fetching || (this.props.fetched && this.props.error === null) })}>
            {this.props.changePassword && this.props.changePassword.message ?
              <div className="text-center">
                {this.props.changePassword.message}
              </div>
            : null}
            {this.checkStatus()}
            <div className="extended">
              <Link className="forget-password mb-4" to="/login">{BACK_TO_LOGIN}</Link>
            </div>
            <Field
              type="text"
              name="email"
              placeholder="Email Address"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error-msg"
            />
            <Field
              type="text"
              name="otp"
              placeholder="Reset Code"
            />
            <ErrorMessage
              name="otp"
              component="div"
              className="error-msg"
            />
            <Field
              type="password"
              name="password"
              placeholder="Enter New Password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-msg"
            />
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Re-Type New Password"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error-msg"
            />
            <div className="more-link">
              <button type="submit" className={classnames("btn btn-outline-secondary text-uppercase", { "disabled": isSubmitting })}>{LOGIN}</button>
            </div>
            <div className="extended">
              <Link className="forget-password underline" to="/reset-password">{RESEND_CODE}</Link>
              {/* <button type="button" className="forget-password" onClick={this.resend} name="">Resend Reset Code</button> */}
            </div>
          </Form>
        )}
      </Formik>
    )
  }
}

export default ForgotForm;

