import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading: true, // key: key value
    movies: [],
  }  

  getMovies = async () => {
    const {
      data: {
        data: {movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
    // console.log(movies.data.data.movies);
    this.setState({ movies, isLoading: false }); // 키와 키값이 동일하면 하나만 씀
  }
  // axios로 영화 API를 호출
  // axios는 네트워크를 사용해서 느림, 별도의 함수로 만들어서 자바스크립트에게 이 함수는 시간이 필요하고(async) 비동기이다,
  // axsio.get()의 실행 완료를 기다려 달라고(await)알려줘야 함

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 6000) // 6s 후 실행
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state; // 구조 분해 할당
    return (
      <div>{isLoading ? 'Loading...' :
        movies.map(movie => (<Movie
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
          genre={movie.genres}
        />))
      }</div>
      // 삼항연산자 ? true일 때, : false일 때
    );
  }
}


export default App;
