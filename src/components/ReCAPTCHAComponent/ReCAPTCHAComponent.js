import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const DELAY = 1500;

let rerenders = 0;

class ReCAPTCHAComponent extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      fireRerender: rerenders,
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
  };

  asyncScriptOnLoad = () => {
    this.setState({ callback: "called!" });
    console.log("scriptLoad - reCaptcha Ref-", this._reCaptchaRef);
  };
  handleExpired = () => {
    this.setState({ expired: "true" });
  };
  handleExpired2 = () => {
    this.setState({ expired2: "true" });
  };

  render() {
    const { value, callback, load, expired } = this.state || {};
    return (
      <div className="reCAPTCHA">
        {load && (
          <ReCAPTCHA
            style={{ display: "inline-block" }}
            theme="dark"
            ref={this._reCaptchaRef}
            sitekey={process.env.REACT_APP_SITEKEY}
            onChange={this.handleChange}
            asyncScriptOnLoad={this.asyncScriptOnLoad}
          />
        )}
      </div>
    );
  }
}

export default ReCAPTCHAComponent