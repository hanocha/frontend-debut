import React, { Component } from 'react';
import SuperAgent from 'superagent'

class AwesomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: null
    };
  }

  componentDidMount() {
    this.getNumFromServer();
  }

  getNumFromServer() {
    console.log('getNumFromServer called!')
    SuperAgent
      .get("https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json")
      .end((function(err, res){
        if(err || !res.ok) {
          console.log(err)
        }
        else {
          console.log(res.body)
        }
      }));
  }

  render() {
    return (
      <p>
        {this.state.num}
      </p>
    );
  }
}

export default AwesomeComponent;
