



const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false,
}];


/*
El reducer debe recibir 2 argumentos el primero es el estado, si no se le proporcion un estado, le inical
será el estado de la funcion initialState, y el segundo es el action, es quien va a decirle al reducer
Como quiero que cambie el estado. Una de las condiciones del reducer es que siempre debe retornar un estado
*/
const todoReducer = ( state = initialState, action = {} ) => {

    if ( action.type === '[TODO] add todo' ) {
        return[ ...state, action.payload ];
    }
     
    return state;
};  




let todos = todoReducer();

//Nuevo objeto que se va a agregar al state
const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false,
};


//Se crea la accion que se envia en los parametros del todos
const addTodoAction = {
    //El type es la descripcion de lo que va a hacer
    type: '[TODO] add todo',
    //El payload es lo que se le va a mandar a la acción
    payload: newTodo    
};



/*Envia el estado anterior en el primer argumento y en el segundo envia una accion */
todos = todoReducer( todos, addTodoAction );


console.log({ state : todos })




