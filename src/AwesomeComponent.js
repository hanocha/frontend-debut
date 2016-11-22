import React, { Component } from 'react';

class AwesomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: props.num
    };
  }

  componentDidMount() {
    /* コンポーネントレンダリング後に実行されるコード */
  }

  getNumFromServer() {
    /* ここにAPIを叩いてデータを取ってくるコード */
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
