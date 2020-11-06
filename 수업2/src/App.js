import React from 'react';
import Cake from './Cake';

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log('constructor함수는 클래스형 컴포넌트가 생성될 때 호출됨');
  }

  componentDidMount() {
   console.log('componentDidMount함수는 컴포넌트가 처음 화면에 그려지면 실행되는 함수') 
  }

  componentDidUpdate() {
    console.log('componentDidUpdate함수는 화면이 새로 그려지면, 업데이트 되면 실행되는 함수')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount함수는 컴포넌트가 죽을 때 실행되는 함수')
  }

  state = {
    count: 0,
    sum: 0,
    avg: 0,
  };

 add = () => {
   console.log('더하기');
   this.setState(
     current => ({ count: current.count + 1 })
   );
  //  this.setState({ count: this.state.count + 1 });
  //  this.setState({ count: 1 });
  //  this.state.count += 1;
  }

 minus = () => {
   console.log('빼기');
   this.setState(
     current => ({ // current는 this.state
       count: current.count - 1,
       sum: current.sum + 1,
       avg: current.avg +1
     })
   );
  //  this.setState({ count: this.state.count - 1 });
  //  this.setState({ count: -1 });
  //  this.state.count -= 1;
  }

  render(){
    return (
      <div>
      <h1>현재 숫자는 {this.state.count}입니다</h1>
      <button onClick={this.add}>더하기</button>
        <button onClick={this.minus}>빼기</button>
        <Cake />
      </div>
    );
  }
}

export default App;
