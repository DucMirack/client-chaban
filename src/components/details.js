import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Details extends Component {
 
  static propTypes = {
    item: PropTypes.shape({
      data: PropTypes.string.isRequired,
    }).isRequired,
  }

	render() {
		const { item } = this.props;

		return (
			<div>
				<p> Date de fermeture : {item.date} </p>
				<p> De : {item.start} </p>
				<p> Jusqu'à : {item.end} </p>
				<p> Raison de la fermeture : {item.reason} </p>
				<br/>
				<a href={item.link}> Voir sur le site</a>
			</div>
		)
	}
}

export default Details;