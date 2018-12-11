import React, { Component } from 'react';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';


class Cloudinary extends Component {
    constructor() {
        super()
        this.state = {
            cloudImg: ''
        }
    }

    uploadWidget = () => {
        
        window.cloudinary.openUploadWidget(
            { cloud_name: 'dzyljunq0',
            upload_preset: 'pzerapqx',
            multiple: 'false',
            autoMinimize: true,
            showCompletedButton: true,
            
        },
        (error, result) => {
            if (result.info.secure_url) {
                console.log(result.info.secure_url)
                this.setState({
                    cloudImg: result.info.secure_url
                })
            }
            
        })}

    render() {

        return (
            <div>
                <button onClick={this.uploadWidget}>Upload Image</button>
            </div>

        )
    }
  }

export default Cloudinary
// export default function Cloudinary() {
    
//     uploadWidget = () => {
        
//         window.cloudinary.openUploadWidget(
//             { cloud_name: 'dzyljunq0',
//             upload_preset: 'pzerapqx',
//             multiple: 'false',
//             autoMinimize: true,
//             showCompletedButton: true,
            
//         },
//         (error, result) => {
//             if (result.info.secure_url) {
//                 console.log(result.info.secure_url)
                
//             }
            
//         })
        
//         return (
//             <button onClick={this.uploadWidget}>Upload files</button>
//             // <button id="upload_widget" class="cloudinary-button">Upload files</button>
//         )
//      }
// }


// styles:{
//     palette: {
//       window: "#363636",
//       windowBorder: "#90A0B3",
//       tabIcon: "#0078FF",
//       menuIcons: "#FFFFFF",
//       textDark: "#000000",
//       textLight: "#FFFFFF",
//       link:  "#0078FF",
//       action:  "#000000",
//       inactiveTabIcon: "#FFFFFF",
//       error: "#F44235",
//       inProgress: "#0078FF",
//       complete: "#20B832",
//       sourceBg: "#5a5f6e"
//         },
//     }