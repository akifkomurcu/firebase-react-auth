import { useState } from "react";
import { signUp, signIn } from "../config/firebase";
import validationSchema from "./validations";
import styles from "./styles.module.css";
import { Formik, Field, Form, useFormik } from "formik";

function Register() {
  const [ok, setOk] = useState(false);
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
        email: "",
      },
      onSubmit: (values) => {
        console.log(values);
        signUp(values.username, values.email, values.password)
          .then(() => {
            signIn(values.email, values.password)
              .then((data) => {
                console.log("data", data);
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      },
      validationSchema,
    });

  return (
    <div>
      <div className={styles.container}>
        <Formik>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <br />

            <input
              className={styles.email}
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <div className={styles.error}>{errors.email}</div>
            )}
            <br />

            <label htmlFor="username">Username</label>
            <br />
            <input
              className={styles.username}
              id="username"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.username && touched.username && (
              <div className={styles.error}>{errors.username}</div>
            )}

            <br />

            <label htmlFor="password">Password</label>
            <br />

            <input
              className={styles.password}
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <div className={styles.error}>{errors.password}</div>
            )}

            <br />
            <br />
            <a href="/Login">
              <button className={styles.gonder}>Submit</button>
            </a>

            <br />
          </form>
        </Formik>
      </div>
    </div>
  );
}

export default Register;
