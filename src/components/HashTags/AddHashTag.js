import "react-datepicker/dist/react-datepicker.css";
import '../HashTags/bootstrap.css';
import Counter from "./Counter";
import DatePicker from "react-datepicker";
import * as Yup from 'yup';
import hashTagService from '../../services/hashTag.service';
import { useDispatch } from 'react-redux'
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useHistory } from "react-router-dom";

export function AddHashTag() {

    const dispatch = useDispatch()
    const [date, setDate] = useState(new Date());
    let history = useHistory();

        return (
            <div className='container' >
                <div className='row justify-content-md-center'>
                    <Counter/>
                    <div className="col-md-3 col-offset-1">
                        <Formik
                            initialValues={{
                                TagName: '',
                                Rating: ''
                            }}
                            validationSchema={Yup.object().shape({
                                TagName: Yup.string().required("Tag Name is required"),
                                Rating: Yup.string().required("Ratings is required")
                            })}
                            onSubmit={fields => {
                                console.log(date);

                                var json = { TagId: 3, TagName: fields.TagName, Rating: fields.Rating, VideosCount: 0, ModifiedAt: date}
                                const action = {
                                    type:
                                        'ADD_HASHTAG', payload: json
                                };

                                dispatch(action);
                                console.log(json);
                                hashTagService.create(json).then(response => "Record inserted");
                                history.push('/hashTagList');

                            }}
                            render={({ errors, status, touched }) => (
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="lblTName">Enter the Tag Name: </label>
                                        <Field type="text" name="TagName" id="TagName" className={'form-control' + (errors.TagName && touched.TagName ? ' is-invalid' : '')} />
                                        <ErrorMessage name="TagName" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lblRatings">Enter the Ratings of hashTags: </label>
                                        <Field type="text" name="Rating" id="Rating" className={'form-control' + (errors.Rating && touched.Rating ? ' is-invalid' : '')} />
                                        <ErrorMessage name="Rating" component="div" className="invalid-feedback" />
                                    </div>
                                    <DatePicker selected={date} onChange={date => setDate(date)} />
                                    <div className="form-group">
                                        <input type="submit" className="btn-primary" />
                                    </div>
                                </Form>
                            )}
                        />
                    </div>
                </div>
            </div>
        )
}


