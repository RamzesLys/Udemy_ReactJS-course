import React , {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

  state = {
    done: false,
    important: false
  };  

  //Old Method
  // constructor() {
  //   super();
  //   this.state = {
  //     done: false
  //   };
  // }
  // constructor () {
  //   super();
  //   this.onLabelClick = () => {
  //     console.log(`Done: ${this.props.label}`)
  //   }
  // }
// NEW METHOD
  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      }
    });
  };

  onMarkImportant = () => {
    this.setState (({important}) => {
      return {
        important: !important
      }
    });
  };

  render () {
    const { label, onDeleted, onToggleImportant, onToggleDone } = this.props;
    const { done, important} = this.state;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if(important) {
      classNames += ' important';
    }

    return (
      <span className= { classNames }>
        <span
          className="todo-list-item-label"
          onClick={onToggleDone}>
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-end"
                onClick={onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-end"
                onClick = {onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
