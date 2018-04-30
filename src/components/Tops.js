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
    setTimeout(_ => {
      this.setState({
        loading: false,
        topByLikes: [
          {id: 1, name: "Aaaaaa"},
          {id: 2, name: "Bbbbbbbb"},
        ]
      })
    }, 2000)
  }

  render(){
    return (
      <section>
        <div>Loading: {this.state.loading.toString()}</div>
        <div className="top">
        {this.state.topByLikes.map(x => <div>{x.name}</div>)}

        </div>
      </section> 
    )
  }
}