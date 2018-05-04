import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTopByLikes} from '../store/actions';

const mapStateToProps = function(state){
  return {
    topByLikes: state.topByLikes.data,
    isFetching: state.topByLikes.isFetching,
  }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    getTopByLikes: getTopByLikes,
  }, dispatch)
}


class Tops extends Component {
  componentDidMount(){
    if(!this.props.topByLikes.length)
      this.props.getTopByLikes();
  }

  render(){
    return (
      <section>
        <div>Loading: {this.props.isFetching.toString()}</div>
        <div className="top">
          {this.props.topByLikes.map(x => <div key={x._id}><div>{x.likes}</div><div>{x.text}</div></div>)}
        </div>
      </section> 
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tops)