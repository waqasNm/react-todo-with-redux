import React from 'react';

export class TodoComponent extends React.Component {
    
    render() {
        return (
            <div>
                <div className = "main">
                    <h2>Todo App</h2>
                    <input type="text" id="item" className = "input-tab" value={this.props._componentState.item} onChange={this.props._onChangeEvent}/>
                    <span className="add-btn" onClick={this.props._addBtn}>Add Todo</span>
                </div>
                <ul className = "App-intro">
                    {this.props._reducerState.todos.map((val,ind)=>{
                        return(
                            <li key={val.id}>{val.item}
                            <span className = "edit" onClick={this.props._editItem.bind(this,ind)}>
                                <i className="fa fa-pencil" aria-hidden="true"></i>
                            </span>
                            <span className = "close" onClick={this.props._deleteItem.bind(this,val.id)}>&times;</span>
                            <br/>
                            {(this.props._reducerState.todos[ind].isEdit)?
                                <div className = "row">
                                    <div className = "col-6 col-md-6">
                                        <input type="text" id="editItem" className="form-control input" placeholder="Enter text..." value={this.props._componentState.editItem} onChange={this.props._onChangeEvent} />
                                        <span className = "save" onClick={this.props._saveEditValue.bind(this,val.id,ind)}><i className="fa fa-floppy-o" aria-hidden="true"></i></span>
                                        <span className = "edit-close" onClick={this.props._closeEdit.bind(this,ind)}><i className="fa fa-times" aria-hidden="true"></i></span>                         
                                    </div>
                                </div>
                                :
                                ""
                                
                            }
                            </li>
                        )

                    })}
                </ul>
            </div>
        )
    }
}
