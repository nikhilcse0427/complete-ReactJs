{
  /* <div id="container">
  <h1 id="heading1">I am heading 1</h1>
  <h2 id="heading2">I am heading 1</h2>
</div> */
}
import React from "react"
import ReactDOM from "react-dom/client"
const containerDiv = React.createElement("div", {id:"container"}, 
  [
    React.createElement("h1", {}, "I am heading 1"),
    React.createElement("h1", {}, "I am heading 2"),
  ]
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(containerDiv)

