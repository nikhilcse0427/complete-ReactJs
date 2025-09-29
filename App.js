// {
//   /* <div id="container">
//   <h1 id="heading1">I am heading 1</h1>
//   <h2 id="heading2">I am heading 1</h2>
// </div> */
// }
// import React from "react"
// import ReactDOM from "react-dom/client"
// const containerDiv = React.createElement("div", {id:"container"}, 
//   [
//     React.createElement("h1", {}, "I am heading 1"),
//     React.createElement("h1", {}, "I am heading 2"),
//   ]
// )
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(containerDiv)




import React from "react"
import ReactDOM from "react-dom/client"

const containerDiv = React.createElement("div", {id:"container"}, "Welcome JSX")

const a = 28;
//JSX -> look like HTML/XML
const jsxHeading =(
  <div className="container">
    <h1>{a}</h1>
    <h1>This is heading 1</h1>
    <h1>This is heading 1</h1>
  </div>
  
)
//jsx -> babel(transpilation) -> React
const jsxHeading1 = (
  <div>
    <h2>This is heading 1</h2>
  </div>
)
console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(jsxHeading)


