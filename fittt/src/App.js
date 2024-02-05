import React from 'react'

// import './App.css'
import Login from './components/Auth/Login/Login'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Rung from './components/Graph/Rung';
import Signup from './components/Auth/Signup/Signup'
import Friend from './components/Activity/Friend'
import Home from './components/Home/Home'
import Nutri from './components/Nutrition/nutrition'
import CalorieCalculator from './components/Calories/calories'
import Forum from './components/Forum/Forum';
import NutritionTracker from './components/introcal/ic'
import RunningTracker from './components/Running/RunningTracker'
import Todo from './components/TT/Todo';
import Challenge from './components/Challenges/Challenge'
import Swim from './components/Swim/Todo';
import Run from './components/Run/Todo';
function App() {  return (    
<BrowserRouter>        
<Routes>            
  <Route path='/' element={<Login />}>
    </Route>   
      <Route path='/signup' element={<Signup />}>
      </Route>            
      <Route path='/home' element={< Home/>}>
        </Route>   
        <Route path='/calories' element={<NutritionTracker />}>
        </Route>    
        <Route path='/Todo' element={<Todo />}>
        </Route> 
       <Route path='/Forum' element={<Forum />}>
        </Route>
        <Route path='/Challenge' element={<Challenge />}>
        </Route> 
        <Route path='/Swim' element={<Swim />}>
        </Route>
        <Route path='/Run' element={<Run/>}>
        </Route> 
        <Route path='/week' element={<Nutri/>}>
        </Route> 
        <Route path='/cal' element={<CalorieCalculator/>}>
          </Route>
          <Route path='/Friend' element={<Friend/>}>
            </Route>
            <Route path='/Rung' element={<Rung/>}>
              </Route>
        </Routes>    
        </BrowserRouter>  )}
export default App