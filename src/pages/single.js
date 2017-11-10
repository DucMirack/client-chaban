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
      this.getData(this.props.match.params.id);  
  }

  componentWillReceiveProps(nextProps) {
     if(this.props.match.params.id !== nextProps.match.params.id) {
         this.getData(nextProps.match.params.id);
     }
  }

  getData = (param) => {
     fetch(`http://localhost:1337/${param}`)
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            data: json,
          });
        });
  }
	// componentDidMount() {
	// 	fetch(`http://localhost:1337/${this.props.match.params.id}`)
 //      .then((res) => res.json())
 //      .then((json) => {
 //        this.setState({
 //          data: json,
 //        });
 //      });
	// }

  render() {

    const { data } = this.state;
    
    return (

      <div>

        <h2> SinglePage </h2>

        {!data ? (
          <ProgressBar />
        ) : (
          <div>
            <Header id={this.props.match.params.id} />
            <Details item={data} />
          </div>
        )}
      </div>
    );
  }

}

export default SinglePage;
