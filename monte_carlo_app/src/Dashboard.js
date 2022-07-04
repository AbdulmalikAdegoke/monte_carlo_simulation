import React from 'react'
import ProjectDescription from './ProjectDescription'; // project description component import
import TaskScheduling from './TaskScheduling'; // task scheduling component import
import Output from './Output'; // output component import
import d from './'; // component import

export default function Dashboard() {
  // states: ProjectDescription, TaskScheduling, Output

  return (
    <div>Dashboard
      <div>
        <div><div id='numContainer'>1</div>Project Description</div>

        <div><div id='numContainer'>2</div>Task Scheduling</div>

        <div><div id='numContainer'>3</div>Output</div>
      </div>
      {/* the multi level forms */}
    </div>
  )
}
