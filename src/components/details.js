import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-materialize';

class Details extends Component {
 
  static propTypes = {
    item: PropTypes.shape({
      data: PropTypes.string.isRequired,
    }).isRequired,
  }

	render() {
		const { item } = this.props;

		return (
				<Card className='blue-grey darken-1' actions={<a href={item.link}>Plus d'infos ici</a>}>
					Date de fermeture : {item.date}
					<br/>
					De : {item.start}
					<br/>
					Jusqu'à : {item.end}
					<br/>
					Raison de la fermeture : {item.reason}
					<br/>
				</Card>
		)
	}
}

export default Details;