import React from 'react';

// function Macaron() {
//    return (
//       <h1>I Love macaron</h1>
//    );
// }

// 클래스형보다 함수형을 권장, React.Component 조상 Class(최상위 클래스의 모든 기능)을 상속받음
class Macaron extends React.Component {
   render() {
      return (
         <h1>I Love macaron</h1>
      );
   }
}

export default Macaron;