import React from "react";
import {connect} from "react-redux";

const mapStateToProps = state => {
  return {articles : state.articles};
}

const ConnectedList = ({articles}) => (
    <ul className='list-group list-group-flush'>
      {articles.map(element => (
          <li className='list-group-item' key={element.id}>
            {element.title}
          </li>
      ))}
    </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
