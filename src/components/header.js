import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {
   
  static propTypes = {
    item: PropTypes.shape({
      data: PropTypes.string.isRequired,
    }).isRequired,
  }
	
	render() {
		return (
			<div>
				<Link to="/"> Retour </Link>
				<Link to="/1"> Suivant </Link>
				<Link to="/2"> Précédent </Link>
			</div>
		)
	}
}

export default Header;