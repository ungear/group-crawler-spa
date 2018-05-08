import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTopByLikes} from '../store/actions';

const mapStateToProps = function(state){
  return {
    topByLikes: state.topByLikes.data,
    isFetching: state.topByLikes.isFetching,
    isFailed: state.topByLikes.isFailed,
  }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    getTopByLikes: getTopByLikes,
  }, dispatch)
}


class Tops extends Component {
  componentDidMount(){
    this.props.getTopByLikes();
  }

  render(){
    const loadingIndicator = this.props.isFetching
      ? <div>Loading...</div>
      : '';
    const errorReport = this.props.isFailed
      ? <div>Failed to load data</div>
      : '';

    return (
      <section>
        {loadingIndicator}
        {errorReport}
        <div className="top" style={style_grid}>
          {this.props.topByLikes.map(x => 
            <div key={x._id} style={style_row}>
              <div style={style_id}>{x.likes}</div>
              <div style={style_text}>{x.text}</div>
              <div style={style_link}>
                <a href={x.postLink}>link</a>
              </div>
              <div style={style_signer}>
                <a href={x.signerLink}>signer</a>
              </div>
            </div>
          )}
        </div>
      </section> 
    )
  }
}
const style_grid = {
  margin: "10px",
  border: "1px solid #ccc"
}
const style_row = {
  display: "flex",
  padding: "5px",
  borderBottom: "1px solid #ccc"
}
const style_id = {
  flex: "0 0 50px"  
}
const style_text = {
  flex: "1 1 100%"
}
const style_link = {
  flex: "0 0 50px"
}
const style_signer = {
  flex: "0 0 50px"
}
export default connect(mapStateToProps, mapDispatchToProps)(Tops)