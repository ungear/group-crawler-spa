import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTopByLikes} from '../store/actions';

const mapStateToProps = function(state){
  return {
    topByLikes: state.topByLikes,
  }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    getTopByLikes: getTopByLikes,
  }, dispatch)
}


class Tops extends Component {
  constructor(){
    super();
    this.state = {
      loading: false,
      topByLikes: [],
    }
  }

  componentDidMount(){
    if(this.props.topByLikes.length) return;
    this.props.getTopByLikes();
    // fetch('http://localhost:3008/api/getTopRecordsByLikes').then(async resp => {
    //   let topByLikes = await resp.json();
    //   //this.props.setTopByLikes(topByLikes)
    //   // this.setState({
    //   //   loading: false,
    //   //   topByLikes
    //   // })
    // })
  }

  render(){
    return (
      <section>
        <div>Loading: {this.state.loading.toString()}</div>
        <div className="top">
        {this.props.topByLikes.map(x => <div key={x._id}><div>{x.likes}</div><div>{x.text}</div></div>)}

        </div>
      </section> 
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tops)