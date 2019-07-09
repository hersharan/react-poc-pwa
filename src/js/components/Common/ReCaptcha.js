/*
  Provide React ReCaptcha
*/
import React, { Component } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const SITE_KEY = "6LcUOKwUAAAAAENNWGLGN7moLTMq8_eVyftAQ78t";
const DELAY = 1500;

class ReCaptcha extends Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      callback: "not fired",
      value: "[empty]",
      load: false,
      expired: "false"
    };
    this._reCaptchaRef = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ load: true });
    }, DELAY);
    console.log("didMount - reCaptcha Ref-", this._reCaptchaRef);
  }

  handleChange = value => {
    console.log("Captcha value:", value);
    this.setState({ value });
    // if value is null recaptcha expired
    if (value === null) this.setState({ expired: "true" });
  };

  asyncScriptOnLoad = () => {
    this.setState({ callback: "called!" });
    console.log("scriptLoad - reCaptcha Ref-", this._reCaptchaRef);
  };

  render() {
    const { load } = this.state || {};
    return (
      <div className="App">
        {load && (
          <ReCAPTCHA
            theme="light"
            ref={this._reCaptchaRef}
            sitekey={SITE_KEY}
            onChange={this.handleChange}
            asyncScriptOnLoad={this.asyncScriptOnLoad}
          />
        )}
      </div>
    )
  }
}

export default ReCaptcha;
