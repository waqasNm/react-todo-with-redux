import React from 'react';
import { connect } from 'react-redux'
import { addTodo,deleteTodo,editTodo,viewTodo,saveEditTodo,closeEdit } from '../store/actions/action'
import { TodoComponent } from '../components/todo';

class TodoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item:"",
            isEdit:false,
            editItem:""
        }

        console.log(this.props.todoState)
    }
    componentDidMount(){
        console.log("did mount")
        this.props.viewTodo();
    }

    onChangeEvent(e){
        this.setState({[e.target.id]:e.target.value})
    }

    addItem(){
        let todo ={
            item:this.state.item,
            isEdit:this.state.isEdit
        }
        this.props.addTodo(todo)
        this.props.viewTodo();
        this.setState({item:""})

    }
    deleteItem(key){
        console.log("key",key)
        this.props.deleteTodo(key)
        this.props.viewTodo();
        
    }
    editItem(key){
        console.log("edit KEy",key)
        this.props.editTodo(key);
    }

    saveEditValue(id,index){
        console.log(this.state.editItem)
        console.log(id,index)
        let value ={
            item:this.state.editItem,
            isEdit:this.state.isEdit
        }
        this.props.saveEditTodo(id,value,index)
        this.setState({editItem:""})
        this.props.viewTodo();
        
    }
    closeEditItem(id){
        this.props.closeEdit(id);
    }
    render() {
        return (
            <div>
                <TodoComponent _addBtn={this.addItem.bind(this)} _onChangeEvent={this.onChangeEvent.bind(this)}
                _reducerState={this.props.todoState}
                 _componentState={this.state}  
                _deleteItem={this.deleteItem.bind(this)} _editItem={this.editItem.bind(this)}
                _saveEditValue={this.saveEditValue.bind(this)} _closeEdit={this.closeEditItem.bind(this)}/>
            </div>
        )
    }
}

// function mapStateToProps(state){
//     console.log(state)
//     return({
//         reducerState: state.todoReducer
//     })
// }
// function mapDispatchToProps(dispatch){
//     return({
//         addBtn: (data)=>{dispatch(addTodo(data))},
//         deleteBtn: (id)=>{dispatch(deleteTodo(id))},
//         editBtn: (data,id)=>{dispatch(editTodo(data,id))},
//         views: ()=>{dispatch(viewTodo())}
        
//     })
// }

// export default connect(mapStateToProps,mapDispatchToProps)(TodoContainer);
export default connect(
    state =>(
        {
            todoState:state.todoReducer
        }
    ),
    {viewTodo,addTodo,deleteTodo,editTodo,saveEditTodo,closeEdit}
)(TodoContainer)