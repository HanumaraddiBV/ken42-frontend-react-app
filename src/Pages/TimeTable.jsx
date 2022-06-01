import { useEffect, useState } from "react";
import axios from "axios";
import "./timeTable.css"
import { Link } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";                                
import { Button } from 'primereact/button';
export const TimeTable = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      getDataList();
    }, []);
  
    const getDataList = () => {
      axios
        .get("https://ken42-time-table.herokuapp.com/data/timetable")
        .then((list) => {
          setData(list.data);
        });
    };
  return (<div>
    <h1>Time Table</h1>
    <table className="table">
    <thead>
      <tr>
        <th>Class #</th>
        <th>Dept</th>
        <th>Course (number, max # of students)</th>
        <th>Room (Capacity)</th>
        <th>Instructor (Id)</th>
        <th>Meeting Time (Id)</th>
       
      </tr>
    </thead>
    <tbody>
    {data.map((ele,ind) => (
        <tr key={ele._id}>
          <td>{ind}</td>
          <td>{ele.dep}</td>
          <td>{ele.course.courseId} ({ele.course.courseNo}, {ele.course.maxNoOfStudents})</td>
          <td>{ele.room.roomName} ({ele.room.roomCapacity})</td>
          <td>{ele.instructor.instructorName} ({ele.instructor.instructorId})</td>
          <td>{ele.meetingTime.meetingDays.join("")} {ele.meetingTime.meetingStart} - {ele.meetingTime.meetingEnd} ({ele.meetingTime.meetingId})</td>
          
        </tr>
      ))}
    </tbody>
  </table>

  <Link  to="/schedule" style={{textDecoration:"none"}}>
      
  <Button label="Add schedule" aria-label="Submit"  style={{marginTop:"20px",fontSize:"18px"}}>
  </Button>
</Link>
  </div>);
};
