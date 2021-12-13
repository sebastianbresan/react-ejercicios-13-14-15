import React from "react";

const TaskTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Task</th>
        <th>Description</th>
        <th>Day</th>
      </tr>
    </thead>
    <tbody>
      {props.tasks.length > 0 ? (
        props.tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.name}</td>
            <td>{task.description}</td>
            <td>{task.day}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No tasks in database</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default TaskTable;
