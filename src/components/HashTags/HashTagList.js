import '../HashTags/bootstrap.css';
import '../HashTags/style.css';
import 'react-dropdown/style.css';
import React from 'react';
import hashTagService from '../../services/hashTag.service';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const options = [
    '5', '10', '15', '20', '25'
];

let pageNo = 1;
let totalCount = 0;
let perPage = options[0];

export class HashTagList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            TagName: "",
            Rating: "",
        }
        this.dropdownChange = this.dropdownChange.bind(this)
    }

    componentDidMount() {
        this.fetchLanguages();
    }

    dropdownChange(option) {
        console.log(option.target.value)
        perPage = parseInt(option.target.value)
        pageNo = 1
        console.log(perPage);

        this.fetchLanguages();
    }

    handlePageClick = (data) => {
        let selected = data.selected + 1;
        console.log("selected" + selected);
        pageNo = selected

        this.fetchLanguages();
    };

    refreshPage() {
        this.fetchLanguages();
    }

    async fetchLanguages() {

        var payload = {
            "pageSize": perPage,
            "pageNumber": pageNo
        }

        console.log("page size " + payload.pageSize + " , page no" + payload.pageNumber);

        var a = await new Promise(function (resolve, reject) {
            hashTagService.getAll(payload).then(result => {
                resolve(result);
            }).catch(e => {
                console.log(e);
            })

        });

        totalCount = Math.ceil(a.data.totalCounts / perPage)
        this.setState({
            data: a.data.hashTags
        })
    }

    renderTableData() {
        this.state.data.forEach(x => {
        var date = new Date(x.modifiedAt).toLocaleString()
        x.modifiedAt = date
        })
        return this.state.data.map((a, index) => {
            //eslint-disable-next-line
            const { _Id, tagId, tagName, rating, modifiedAt } = a
            return (

                <tr key={index}>
                    <td>{a.tagName}</td>
                    <td>{a.rating}</td>
                    <td>{a.modifiedAt}</td>
                    <td>
                        <Link
                            to={"/hashTags/" + a.TagName}
                            className="badge badge-info">
                            Edit
                       </Link>
                    </td>
                    <td>
                        <Link
                            to={"/hashTags/" + a.TagName}
                            className="badge badge-danger">
                            Delete
                        </Link>
                    </td>
                </tr>
            )
        });
    }

    render() {
        return (
            <div className='card'>
                <div className='card-body'>
                    <div className='col-md-12'>
                        <div className="input-group-btn">
                            <Link to="/AddHashTag" className="btn btn-primary mr-2 float-right">

                                Add
                             </Link>
                        </div>
                        <select id="optPageSize" onChange={this.dropdownChange}>
                            {options.map((option) => (
                                <option value={option}>{option}</option>
                            ))}
                        </select>
                        <hr />
                        <table id='a' className="table table-bordered">
                            <thead className='thead-light'>
                                <tr>
                                    <th > Tag Name </th>
                                    <th> Ratings </th>
                                    <th> Modified At </th>
                                    <th> Edit </th>
                                    <th> Delete </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderTableData()}
                            </tbody>
                        </table>
                        <ReactPaginate variant="outlined" color="primary"
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={totalCount}
                            marginPagesDisplayed={10}
                            pageRangeDisplayed={5}
                            onPageChange={this.handlePageClick}
                            containerClassName={'pagination'}
                            activeClassName={'active'}
                        />
                    </div>
                </div>
            </div>
        )
    }

}
