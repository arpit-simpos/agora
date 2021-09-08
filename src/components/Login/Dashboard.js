
// eslint-disable-next-line
import * as Yup from 'yup';
//import loginService from '../../services/login.service';

import React from 'react';
// eslint-disable-next-line

import { AgoraEduSDK } from 'agora-classroom-sdk';
//const html = ''
//var htmlContent = require('./agora.html');



export default class Dashboard extends React.Component{
    
    
    componentDidMount() {


        var loggedUserName = localStorage.getItem("LoggedUserName");
        if (loggedUserName === "Sachin Patel") {
            this.setupClassroom("00697e6ada7e8c2401faa7267385d3907f5IADsfIxaZIBKO9IRA4QRMpU1e/ueZiMAvig55Ij31GooS9QYwWoAAAAAEACU1JMAItw5YQEA6AOymDhh", "56780", "student", 2);

        }
        else {
            this.setupClassroom("00697e6ada7e8c2401faa7267385d3907f5IAB4j2Zd0zKoVeYm2vfCkzQc3OcUi0PulQoh/ndjSachLVR2EeAAAAAAEACwuJsFiOI5YQEA6AMYnzhh","123450","teacher",1);

        }
    }
    render() {
   //     window.location.reload(true);
    return(
        <div>
            <div id="app" > </div>
                  {/* {homes.map(home => <div>{this.setupClassroom()}</div>)} */}

        </div>
    )
}
    setupClassroom(rtmToken, Uuid, username, roleType) {
        console.log("username" + username);
     console.log("THis is called");         
    AgoraEduSDK.config({
        appId: "97e6ada7e8c2401faa7267385d3907f5",
    })
    console.log("hello"+ document.getElementById("app"));
     AgoraEduSDK.launch(
         document.getElementById("app"), {
         rtmToken: rtmToken,
             userUuid: Uuid,
             userName: username,
        roomUuid: "4321010156",
             roleType: roleType,
        roomType: 0,
        roomName: "demo-class",
        pretest: false,
        language: "en",
        startTime: new Date().getTime(),
        duration: 60 * 30,
        courseWareList: [],
            recordUrl: 'https://srv-store6.gofile.io/uploadFile',
        listener: (evt) => {
          console.log("evt", evt)
        }
      }
    ).then(function(result){console.log(result)}).catch(function(error){console.log("error = >" + error)});
    //console.log("console.log ->"   +a);
  }
}

// ReactDOM.render(AgoraEduSDK.launch(
//     {
//     rtmToken: "00697e6ada7e8c2401faa7267385d3907f5IAAO5eWyk9TZl3hxWkteIe0sRvZaAJAn9dwpKL+1yDhimKPg45sAAAAAEACU/CoEehEWYQEA6AMKzhRh",
//     userUuid: "1234",
//     userName: "teacher",
//     roomUuid: "4321",
//     roleType: 1,
//     roomType: 0,
//     roomName: "demo-class",
//     pretest: true,
//     language: "en",
//     startTime: new Date().getTime(),
//     duration: 60 * 30,
//     courseWareList: [],
//     recordUrl: 'https://srv-store6.gofile.io/uploadFile',
//     listener: (evt) => {
//         console.log("evt", evt)
//     }
// }, document.getElementById('app')))
// }


   
       

