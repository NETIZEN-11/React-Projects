import React from "react";
import ReactDOM from "react-dom/client";


import App from './App.jsx'

// const reactElement = {
//     type: 'a',
//     props: {
//         href:"https://google.com",
//         target:'_blank'
//     },
//     children:'Click me to visite google'
// }
// const anotherElement = (
//   <a href="https://google.com" target="_blank">visit the google</a>

    
// )

const anotherUser = "chai aur code"
const reactElement = React.createElement(
    'a',
    {href:'https://google.com', target:'_blank'},
    'click me the visit google',
    anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).render(
//   anotherElement
reactElement
/* <App/> */
)

