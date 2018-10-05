import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color:'#fff'
};
let fakeServerData = {
  user:{
    name: 'David',
    playlist:[
      {
        name: 'Nafla',
        songs: ['apple box','Wu','angel'],
      },
      {
        name: 'My favorite',
        songs: ['Internet war','Stanky','beautiful'],
      },
      {
        name: 'Another playlist - the best!',
        songs: ['Oasis','Okey Dokey','Eureka'],
      },
      {
        name: 'Korean HipHop',
        songs: ['SEARCH','Boys and Girls','She is baby'],
      },
    ]
  }
};
class Aggregate extends Component{
  render (){
    return (
      <div style={{...defaultStyle,width:"40%", display: 'inline-block'}}>
      <h2>{this.props.playlists && this.props.playlists.length} Text</h2>
      </div>
    );
  }
}
class Filter extends Component{
  render() {
    return(
      <div style={{...defaultStyle}}>
      <img/>
      <input type="text"/>
      </div>
    );
  }
}

class Playlist extends Component{
  render() {
    return(
      <div style={{...defaultStyle, display: 'inline-block', width: "25%"}}>
      <img />
      <h3>Playlist Name</h3>
      <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
      </div>
    );
  }
}
class App extends Component {
  constructor(){
    super();
    this.state = {serverData: {}}
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({serverData: fakeServerData});
    }, 1000);
  }
  render() {
      return (
      <div className="App">
      {this.state.serverData.user &&
      <h1 style={{...defaultStyle, 'font-size': '54px'}}>
        {this.state.serverData.user.name}s Playlists
        </h1>}
      <Aggregate playlists={this.state.serverData.user &&
                             this.state.serverData.user.playlists}/>
      <Aggregate/>
      <Filter/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      </div>
    );
  }
}

export default App;
