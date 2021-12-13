import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const yupSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  description: Yup.string().required("Description is required"),
  day: Yup.string().min(4, "Choose a day").required("Select a day"),
});

const AddTaskForm = (props) => {
  const taskSchema = {
    id: null,
    name: "",
    description: "",
    day: "",
  };

  const [task, setTask] = useState(taskSchema);

  return (
    <div>
      <h1>Task Form</h1>
      <Formik
        initialValues={taskSchema}
        validationSchema={yupSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          props.addTask(values, null, 2);
          setTask(taskSchema);
        }}
      >
        {({ errors, touched, handleChange }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field
              id="name"
              name="name"
              placeholder="Name of Task"
              onChange={handleChange}
            />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <label htmlFor="description">Description</label>
            <Field
              id="description"
              name="description"
              placeholder="Description of task"
              onChange={handleChange}
            />

            <Field as="select" name="day" onChange={handleChange}>
              <option value="">Select a day</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
            </Field>
            {errors.day && touched.day ? <div>{errors.day}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default AddTaskForm;
