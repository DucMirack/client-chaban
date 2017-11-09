import React, { Component } from 'react';
import Details from '../components/details'
import Header from '../components/header'
import { ProgressBar } from 'react-materialize';

class SinglePage extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      data: { data: null },
    }
  }

	componentDidMount() {
		fetch(`http://localhost:1337/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          data: json,
        });
      });
	}

  render() {

    const { data } = this.state;
    
    return (

      <div>

        <h2> SinglePage </h2>

        {!data ? (
          <ProgressBar />
        ) : (
          <div>
            <Header item={data} />
            <Details item={data} />
          </div>
        )}
      </div>
    );
  }

}

export default SinglePage;
