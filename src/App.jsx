import React from "react"
import { Link, Route, Routes, Navigate } from "react-router-dom"

import ToDoRedux from "./modules/ToDoRedux"
import ToDoState from "./modules/ToDoState"
import ToDoReducer from "./modules/ToDoReducer"
import ToDoClass from "./modules/ToDoClass"

function App() {
    return (
        <React.Fragment>
             <div className="nav">
                <ul className="nav_list">
                    <li className="nav_item">
                        <Link to="/state">State</Link>
                    </li>
                    <li className="nav_item">
                        <Link to="/redux">Redux</Link>
                    </li>
                    <li className="nav_item">
                        <Link to="/reducer">Reducer + ImmerJs</Link>
                    </li>
                    <li className="nav_item">
                        <Link to="/class">Class</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route index element={<Navigate to="state" />} />
                <Route path="/state" element={<ToDoState />}/>
                <Route path="/redux" element={<ToDoRedux />}/>
                <Route path="/reducer" element={<ToDoReducer />}/>
                <Route path="/class" element={<ToDoClass />}/>
            </Routes>
        </React.Fragment>
    )
}

export default App
