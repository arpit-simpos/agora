

import * as Yup from 'yup';
import loginService from '../../services/login.service';
import { useDispatch } from 'react-redux'
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useHistory } from "react-router-dom";



export function Login() {
    const dispatch = useDispatch()
    let history = useHistory();

    
        return (
            <div className='container' >
                <div className='row justify-content-md-center'>
           
                    <div className="col-md-3 col-offset-1">
                        <Formik
                            initialValues={{
                                UserName: '',
                                Password: ''
                            }}
                            validationSchema={Yup.object().shape({
                                UserName: Yup.string().required("Email / Mobile Number is required"),
                                Password: Yup.string().required("Password is required")
                            })}
                            onSubmit={fields => {
                               // console.log(date);

                                var json = { email: fields.UserName, password: fields.Password }
                                //const action = {
                                //    type:
                                //        'Login', payload: json
                                //};

                             //   dispatch(action);
                              //  console.log(json);
                                //       http.post("users", json);
                                //loginService.login(json).then(response => "Record inserted");
                                // history.push('/login');  

                                loginService.login(json).then(function (result) {
                                    // debugger;
                                    if (result.data.length) {
                                        console.log(result.data)
//this.sta
                                        localStorage.setItem('LoggedUserName', result.data[0].name);
                                        console.log("name from session" + localStorage.getItem("LoggedUserName"))

                                 const action = {
                                    type:
                                         'LOGGED_USER', payload: result.data[0].name
                               
                                        };
                                        const action2 = {
                                            type:
                                                'ISLOGIN', payload: 1
                                        };
                                        dispatch(action);
                                        dispatch(action2);
                                   
                                         history.push('/dashboard');
                                    }
                                });
                    
                           //     dispatch(action);
                             //   console.log(json);
                               // loginService.create(json).then(response => "Login Sucessfully");
                             //   history.push('/login');

                            }}
                            render={({ errors, status, touched }) => (
                                <Form>
                                    <div className="form-group">

                                        <label htmlFor="lblUserName">Username: </label>
                                        <Field type="text" name="UserName" id="UserName" className={'form-control' + (errors.UserName && touched.UserName ? ' is-invalid' : '')} />
                                        <ErrorMessage name="UserName" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group">

                                        <label htmlFor="lblPassword">Password : </label>
                                        <Field type="text" name="Password" id="Password" className={'form-control' + (errors.Password && touched.Password ? ' is-invalid' : '')} />
                                        <ErrorMessage name="Password" component="div" className="invalid-feedback" />

                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-primary" />
                                    </div>
                                </Form>
                            )}
                        />
                    </div>
                </div>
            </div>
        )
    }


