import { Route, Routes } from "react-router-dom"
import { Schedule } from "../Pages/Schedule"
import { TimeTable } from "../Pages/TimeTable"


export const RouterComponent = ()=>{

    return(<>
        <Routes>
            <Route path="/" element={<TimeTable/>}></Route>
            <Route path="/schedule" element={<Schedule/>}>
            </Route>
        </Routes>
    </>)
}