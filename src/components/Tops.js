import React, { Component } from 'react';

export class Tops extends Component {
  constructor(){
    super();
    this.state = {
      loading: false,
      topByLikes: [],
    }
  }

  componentDidMount(){
    this.setState(Object.assign({}, this.state, {loading: true}));
    fetch('http://localhost:3008/api/getTopRecordsByLikes').then(async resp => {
      let topByLikes = await resp.json();
      this.setState({
        loading: false,
        topByLikes
      })
    })
  }

  render(){
    return (
      <section>
        <div>Loading: {this.state.loading.toString()}</div>
        <div className="top">
        {this.state.topByLikes.map(x => <div key={x._id}><div>{x.likes}</div><div>{x.text}</div></div>)}

        </div>
      </section> 
    )
  }
}