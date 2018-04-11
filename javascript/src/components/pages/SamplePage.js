import React, {Component} from 'react';
import * as sampleService from '../services/SampleService';

export class SamplePage extends Component {

  state = {
    text: '',
    loading: true
  };

  componentDidMount() {
    sampleService.getSample()
      .then(text => this.setState({loading: false, text: text.sample}))
  }

  render() {
    if (this.state.loading)
      return "...loading";

    return (
      <div className="row">
        <div className="col-md-12">
          <h3>My first react page : {this.state.text}</h3>
        </div>
      </div>
    )
  }
}