import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useTodo } from '../context/TodoContext';

const TodoForm = () => {
    const { addTodo } = useTodo();

    const validationSchema = Yup.object({
        title: Yup.string().required('Required'),
    });

    const handleSubmit = (values, { resetForm }) => {
        addTodo(values.title);
        resetForm();
    };

    return (
        <Formik
            initialValues={{ title: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="text" name="title" placeholder="Add a new task" />
                    <ErrorMessage name="title" component="div" />
                    <button type="submit" disabled={isSubmitting}>Add Todo</button>
                </Form>
            )}
        </Formik>
    );
};

export default TodoForm;
