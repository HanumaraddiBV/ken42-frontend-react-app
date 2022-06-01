import { useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
import axios from "axios";
import "./shedule.css"
export const Schedule = () => {
  const [dept, setDept] = useState("");
  const [courseId, setCourseId] = useState("");
  const [courseNo, setCourseNo] = useState("");
  const [maxNoStd, setMaxNoStd] = useState(0);
  const [roomName, setRoomName] = useState("");
  const [roomCapacity, setRoomCapacity] = useState(0);
  const [instructorName, setInstructorName] = useState("");
  const [instructorId, setInstructorId] = useState("");
  const [meetDays, setMeetDays] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [meetId, setMeetId] = useState("");

  const handleSubmit = () => {
    axios
      .post("https://ken42-time-table.herokuapp.com/data/schedule", {
        dep: dept,
        course: {
          courseId: courseId,
          courseNo: courseNo,
          maxNoOfStudents: maxNoStd,
        },
        room: {
          roomName: roomName,
          roomCapacity: roomCapacity,
        },
        instructor: {
          instructorName: instructorName,
          instructorId: instructorId,
        },
        meetingTime: {
          meetingDays: meetDays == "TTH" ? ["T", "TH"] : ["M", "W", "F"],
          meetingStart: startTime,
          meetingEnd: endTime,
          meetingId: meetId,
        },
      })
      .then(function (response) {
        console.log(response);
        response.status == 201
          ? alert("Successfully updated the Time Table")
          : alert(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
      <h1>Add Schedule</h1>
        <input
          type="text"
          placeholder="Add Department Name"
          onChange={(e) => setDept(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Enter Course ID"
          onChange={(e) => setCourseId(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Enter Course Number"
          onChange={(e) => setCourseNo(e.target.value)}
        ></input>
        <input
          type="Number"
          placeholder="Maximum number of students"
          onChange={(e) => setMaxNoStd(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Enter Room Name"
          onChange={(e) => setRoomName(e.target.value)}
        ></input>
        <input
          type="Number"
          placeholder="Enter Room Capacity"
          onChange={(e) => setRoomCapacity(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Enter Instructor Name"
          onChange={(e) => setInstructorName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Enter InstructorID"
          onChange={(e) => setInstructorId(e.target.value)}
        ></input>
        <select>
          <option value="TTH">"TTH"</option>
          <option value="MWF">"MWF"</option>
        </select>
        <input
          type="text"
          placeholder="Enter Start time (Time is 24 hour format) eg: 13:00"
          onChange={(e) => setStartTime(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Enter End time (Time is 24 hour format) eg: 14:00"
          onChange={(e) => setEndTime(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Enter Meeting Id"
          onChange={(e) => setMeetId(e.target.value)}
        ></input>
        <Button
          label="Submit"
          aria-label="Submit"
          onClick={handleSubmit}
        ></Button>
      </div>
    </>
  );
};
