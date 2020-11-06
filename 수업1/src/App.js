import React from 'react';
import Macaron from './Macaron';
import Coffee from './Coffee';
import propTypes from 'prop-types';

// function Food(props) { // 자식 컴포넌트
//   return (
//     <h3>I Like {props.propsName}</h3>
//   );
// }

// 객체 {} < 이렇게만 해줘도 객체
// function Food(props) { // 자식 컴포넌트, 구조 분해 할당 - 자주씀
//   const { propsName } = props;
//   return (
//     <h3>I Like {propsName}</h3>
//     );
// }
  
// function Food({ propsName }) { // 자식 컴포넌트, 구조 분해 할당 - 자주씀
//     return (
//       <h3>I Like {propsName}</h3>
//     );
// }

function Food({name, rating, image}) {
  return (
    <div>
      <h1>I Love {name}</h1>
      <h2>{rating} / 5.0</h2>
      <img src={image} alt={name} />
    </div>
  )
}

function Cake({ name, id, rating, image }) {
  return (
    <div>
      <h1>{name} No.{id}</h1>
      <img src={image} alt={name} />
      <h2>Rating: {rating} / 5</h2>
    </div>
  )
}
  
// 서버에서 가져온 데이터를 저장하는 변수
// const foodLike = [];

const cakeLike = [
  {
    id: 1,
    name: 'cake',
    image: 'https://i.pinimg.com/236x/0e/11/1d/0e111d11dd274641805cdb52381b4b78.jpg',
    rating: 1
  },
  {
    id: 2,
    name: 'cake',
    image: 'https://i.pinimg.com/236x/73/d7/be/73d7be29a2a556f36fc7762c03619a74.jpg',
    rating: 2
  },
  {
    id: 3,
    name: 'cake',
    image: 'https://i.pinimg.com/236x/76/a4/3f/76a43fd75e286426d69f4c84455bc28a.jpg',
    rating: 3
  }
];

const foodLike = [
  {
    id: 1,
    name: 'macaron1',
    image: 'https://i.pinimg.com/236x/0f/85/0c/0f850c4ea23a6060ffdab4a5d9ea873f.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'macaron2',
    image: 'https://i.pinimg.com/236x/44/79/d4/4479d46651157130bed81c48e09f418e.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'macaron3',
    image: 'https://i.pinimg.com/236x/8c/42/26/8c42261a2083fe227e24518e6e284376.jpg',
    rating: 4.5,
  },
  {
    id: 4,
    name: 'macaron4',
    image: 'https://i.pinimg.com/236x/54/3d/64/543d6459a2bcb70320b17e8c36d0b654.jpg',
    rating: 5,
  },
  {
    id: 5,
    name: 'macaron5',
    image: 'https://i.pinimg.com/236x/65/42/d1/6542d15ac5cc304fa1d792e3a4b18e5b.jpg',
    rating: 3.5,
  }
];
// 배열: [] / 객체: {}
  
// function App() { // 부모 컴포넌트
//   return (
//     <>
//       <div>안녕하세요!!</div>
//       <Macaron />
//       <Coffee />
//       <Food propsName = "Jelly" />
//       <Food propsName = "Tea" />
//       <Food propsName = "Latte" />
//       <Food propsName = "Ice coffee" />
//       <Food propsName = "Cake" />
//     </>
//   );
// }
class App extends React.Component{
  render(){
    return (
      <>
       <div>안녕하세요!!</div>
        <Macaron />
        {/* {foodLike.map(dish => (
                                <Food
                                  name={dish.name}
                                  rating={dish.rating}
                                  image={dish.image}
                                />
                              ))} */}
        {cakeLike.map(cakes => (
                              <Cake
                                name={cakes.name}
                                id={cakes.id}
                                image={cakes.image}
                                rating={cakes.rating}
                              />
                            ))}
     </>
    );
  }
}
// => 화살표 함수 function의 생략
// dish 요소 이름, 상관없음

// map()함수: 배열의 모든 원소마다 특정 작업을 하는 함수를 적용하고, 그 함수가 반환한 결과를 모아서 배열로 반환
// {/* JSX 주석 */}

Cake.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  image: propTypes.string  
}

export default App;
