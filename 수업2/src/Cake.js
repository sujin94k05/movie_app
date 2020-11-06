import { render } from "@testing-library/react";
import { Component } from "react";
import React from 'react';

// Cake 클래스형 컴포넌트
// <h1>케이크 가격</h1>
// 버튼 누르면 30%할인 가격

class Cake extends React.Component{
   state = {
      price: 7000,
   };
   
   price = () => {
      console.log('할인가');
      this.setState(current => ({
         price: current.price * 0.7,
      }));
}


render(){
   return (
      <>
      <h1> 케이크 가격: {this.state.price}</h1>
      <button onClick={this.price}>할인가</button>
      </>
   );
   }
}

export default Cake;