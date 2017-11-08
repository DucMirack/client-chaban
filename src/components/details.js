import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Details extends Component {
 
  static propTypes = {
    item: PropTypes.shape({
      date: PropTypes.string.isRequired,
    }).isRequired,
  }


	render() {
		const { item } = this.props;

		return (
			<div>
				<p> {item.date} </p>
				<p> {item.start} </p>
				<p> {item.end} </p>
				<p> {item.reason} </p>
			</div>
		)
	}
}

export default Details;