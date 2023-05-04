import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import './index.css';

//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { CounterApp } from './01-useState/CounterApp';
//import { HooksApp } from './HooksApp';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import { MultipleCustomHooks } from './03-example/MultipleCustomHooks';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { Memorize } from './06-memos/Memorize';
//import { MemoHook } from './06-memos/MemoHook';
//import { CallbackHook } from './06-memos/CallbackHook';
//import { Padre } from './07-tarea-memo/Padre';
//import { TodoApp } from './08-useReducer/TodoApp';
//import './08-useReducer/intro-reducer'
import { MainApp } from './09-useContext/MainApp';


ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>

    {/* //<React.StrictMode> */}
        <MainApp  />
    {/* </React.StrictMode> */}
  
  </BrowserRouter>
);
