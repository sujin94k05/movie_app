import React from 'react';
import axios from 'axios';

class Movie2 extends React.component{
   state = {
      Loading = true,
      Place = []
   };
}

getPlace = async () => {
   const { } = await axios.get('https://jsonplaceholder.typicode.com/photos/');
   this.setState = ({ Place, Loading: false });
}

componentDidMount(){
   this.getPlace;
}

render(){
   const { Loading, Place } = this.state;
   return (
      <div>{Loading ? 'Loading...' : Place.map(place => (<Place
                                                            title={Place.title}
                                                            id={Place.id}
                                                            url={Place.url}))
      }</div>
   );
}

export default App2;