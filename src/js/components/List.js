import React from "react";
import {connect} from "react-redux";
import {deleteArticle} from "../actions";
import { Component } from "react";

const mapStateToProps = state => {
  return {articles : state.articles};
}
// const mapDispatchToProps = dispatch => {
//   return {
//     handleClick: id => dispatch(deleteArticle(id))
//   };
// };

// const handleClick = (event) => {
//   event.preventDefault();
//   // console.log(event);
//   // console.log(event.target.getAttribute('data-value'));
//   // console.log(event.target.dataset['value']);
//   props.deleteArticle(event.target.dataset['value']);
// };

// presentational　component はrenderingのみ、state更新しない
// const ConnectedList = ({articles}) => (
//     <ul className='list-group list-group-flush'>
//       {articles.map(element => (
//           <li className='list-group-item' key={element.id} >
//             {element.title}
//           </li>
//       ))}
//     </ul>
// );
//
// const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
//
// export default List;

// Countainer　Component action があって、stateを更新するものはclassにしてpropsを引数にとる必要あり
class ConnectedList extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <ul className='list-group list-group-flush'>
      {this.props.articles.map(element => (
          <li className='list-group-item' key={element.id} >
            {element.title}
            <a href='#' onClick={() => this.props.dispatch(deleteArticle(element.id))} data-value={element.id}>X</a>
          </li>
      ))}
    </ul>
    )
  }
}
const List = connect(mapStateToProps)(ConnectedList)
export default List;