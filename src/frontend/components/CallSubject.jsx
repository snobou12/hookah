import React, { Component } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import '../css/CallSubject.css';

export default class CallSubject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener('scroll', function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 1000) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className="scroll-to-top">
        {is_visible && (
          <div>
            <a href="tel:+79119266010">
              {' '}
              <FiPhoneCall className="text-light" style={{ height: '50px', width: '50px' }} />{' '}
            </a>
          </div>
        )}
      </div>
    );
  }
}
