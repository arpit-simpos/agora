import * as moment from 'moment';

const someCommonValues = ['common', 'values'];

export const doSomethingWithInput = (theInput) => {
    //Do something with the input
    console.log("input " + theInput);
    return theInput;
};

export const justAnAlert = () => {
    alert('hello');
};


export const formatDate = (date) => {
    const formatDate = moment(date, 'MMMM Do YYYY')
    console.log(formatDate);


    return formatDate
}
