import  ActionType  from '../constant/constant';
import * as firebase from 'firebase';
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCwTDnTmu6XmUqNcClx3edEzlgPe2dd4ys",
    authDomain: "react-practice-21edd.firebaseapp.com",
    databaseURL: "https://react-practice-21edd.firebaseio.com",
    projectId: "react-practice-21edd",
    storageBucket: "react-practice-21edd.appspot.com",
    messagingSenderId: "1061586561668"
  };
  firebase.initializeApp(config);


export function changeClick(){
    return dispatch => {
        dispatch({type:ActionType.NAME, payload:"Waqas"})
    }
}


export function viewTodo(){
    return dispatch =>{
        let array = [];
        firebase.database().ref('/todos').once('value',(snap)=>{
            array =[];
            if(snap.val() !== null){
                snap.forEach((elem)=>{
                    console.log(elem.val(),elem.key)
                    let value ={
                        item:elem.val().item,
                        isEdit:elem.val().isEdit,
                        id:elem.key
                    }
                    array.push(value)
                    dispatch({type:ActionType.VIEW_TODO,payload:array})
                })
            }else{
                dispatch({type:ActionType.VIEW_TODO,payload:[]})
                
            }
            
        })     
    }
}

export function addTodo(data){
    return dispatch => {
       
        firebase.database().ref('/').child("todos").push(data)
        .then((val)=>{
            console.log(val)
        })
        dispatch({type:ActionType.ADD_TODO, payload:data})
    }
}

export function deleteTodo(id){
    return dispatch =>{
        firebase.database().ref(`/todos/${id}`).remove();
        // dispatch({type:ActionType.DELETE_TODO,payload:id})
    }
}

export function editTodo(id){
    console.log(id)
    return dispatch =>{
        dispatch({type:ActionType.EDIT_TODO,payload:{id:id}})
    }
}

export function saveEditTodo(id,data,index){
    console.log(id,data)
    firebase.database().ref('/').child(`todos/${id}`).update(data)
    .then((val)=>{
        console.log(val)
    })
    return dispatch =>{
        dispatch({type:ActionType.EDIT_TODO,payload:{id:index}})
    }
}

export function closeEdit(id){
    console.log(id,)
    return dispatch =>{
        dispatch({type:ActionType.CLOSE_EDIT,payload:{id:id}})
    }
}
