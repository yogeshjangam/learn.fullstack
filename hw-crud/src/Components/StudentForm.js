import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const StudentForm = (props) => {
    const validationSchema =
    Yup.object().shape({
        name: Yup.string().required("Required"),
        email: Yup.string()
            .email(
`You have enter an invalid email address`
            )
            .required("Required"),
        rollno: Yup.number()
            .positive("Invalid roll number")
            .integer("Invalid roll number")
            .required("Required"),
    });
    console.log(props);

};
