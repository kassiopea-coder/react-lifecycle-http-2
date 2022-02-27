import { Component } from 'react';
import PropTypes from 'prop-types';

export default class CRUDNote extends Component {
  render() {
    return (
      <li className="CRUDNote">
        <div className="CRUDNote-container">
          <div className="CRUDNote-content">
            {this.props.content}
          </div>
          {this.props.children}
        </div>
      </li>
    );
  }
}

CRUDNote.propTypes = {
  content: PropTypes.string.isRequired,
};