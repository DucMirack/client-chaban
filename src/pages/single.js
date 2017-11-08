import React, { Component } from 'react';
import Details from '../components/details'
import { ProgressBar } from 'react-materialize';
import { Route, Link } from 'react-router-dom';

const Test = () => (
  <div> RENDER PAGE 1</div>
)

class SinglePage extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      data: { date: null },
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
            <Details item={data} />
          </div>
        )}
      </div>
    );
  }

}

export default SinglePage;
