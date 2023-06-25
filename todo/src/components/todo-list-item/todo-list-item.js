import React , {Component} from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {

  //Old Method
  // constructor () {
  //   super();
  //   this.onLabelClick = () => {
  //     console.log(`Done: ${this.props.label}`)
  //   }
  // }
// NEW METHOD
  onLabelClick = () => {
    console.log(`Done: ${this.props.label}`)
  }

  render () {

    const { label, important = false } = this.props;
    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };
  
    return (
      <span className="todo-list-item">
        <span
          className="todo-list-item-label"
          style={style}
          onClick={this.onLabelClick}>
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-end">
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-end">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
