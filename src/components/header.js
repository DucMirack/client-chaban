import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends Component {
   
  static propTypes = {
    item: PropTypes.shape({
      data: PropTypes.string.isRequired,
    }).isRequired,
  }

	render() {
		const prev = parseInt(this.props.id) - 1
		const next = parseInt(this.props.id) + 1

		return (
			<div>
				<Link to="/"> Retour </Link>
				<Link to={`/${prev}`}> Précédent </Link>
				<Link to={`/${next}`}> Suivant </Link>
			</div>
		)
	}
}

export default Header;