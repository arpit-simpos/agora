import React from 'react';
import '../HashTags/bootstrap.css'
import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


export class hashTags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            TagName: "",
            Rating: ""
        };
        this.FetchData = this.FetchData.bind(this);
    //    this.handleSubmit = this.handleSubmit.bind(this);
     //   this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.refreshPage();
    }

    refreshPage() {
        this.fetchLanguages();
    }

    fetchLanguages() {
        var api = 'https://localhost:44303/api/HashTag/hashtags'

        axios.get(api).then(result => {

            this.setState({
                data: result.data
            })

        });
    }


    //handleChange(event) {
    //    let name = event.target.name;
    //    let value = event.target.value;
    //    this.setState({ [name]: value });
    //}

    //handleSubmit(event) {
    //    event.preventDefault();
    //    let TagName = this.state.TagName;
    //    let Ratings = this.state.Rating;
    //    var json = { TagId: 3, TagName: TagName, Rating: Ratings, VideosCount: 0 }
    //    var api = 'https://localhost:44303/api/HashTag/insert';
    //    axios.post(api, json).then(response => "Record inserted");
    //    console.log("TagName : " + TagName + " ,Ratings : " + Ratings);
    //    this.refreshPage();

    //}


    renderTableData() {
        console.log(this.state.data);
        return this.state.data.map((a, index) => {

            const { _Id, tagId, tagName, rating, modifiedAt } = a

            return (

                <tr key={a._Id.increment}>
                    <td>{a.tagId}</td>
                    <td>{a.tagName}</td>
                    <td>{a.rating}</td>
                    <td><a onClick={this.FetchData(a.tagName)}>Edit</a></td>
                    <td><a onClick=''>Delete </a></td>
                </tr>

            )
        });

        FetchData(tagName)
        {
            var api = "https://localhost:44303/api/HashTag/getbyId?TagName=" + tagName;
            axios.get(api).then(result => {
                Formik.fields.TagName = result.TagName;
                Formik.fields.Rating = result.rating;
            })
        }
    }

    render() {
        return (
            <div className='container' >
                <div className='row justify-content-md-center'>
                    <div className='col-md-3 col-offset-1'>
                        <table id='a' width='300px'>
                            <thead className='thead-light'>
                                <tr>
                                    <th> Tag Id </th>
                                    <th> Tag Name </th>
                                    <th> Ratings </th>
                                    <th> Edit </th>
                                    <th> Delete </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderTableData()}
                            </tbody>
                        </table>
                    </div>
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
                                var api = 'https://localhost:44303/api/HashTag/insert';

                           //     var json = JSON.stringify(fields,null);
                                var json = { TagId: 3, TagName: fields.TagName, Rating: fields.Rating, VideosCount: 0 }
                                console.log(json);
                                axios.post(api, json).then(response => "Record inserted");
                                this.refreshPage();

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
                                        <Field  type="text" name="Rating" id="Rating" className={'form-control' + (errors.Rating && touched.Rating ? ' is-invalid' : '')} />
                                        <ErrorMessage name="Rating" component="div" className="invalid-feedback" />

                                    </div>
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

}
