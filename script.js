const React = require('react')
const ReactDOM = require('react-dom/client')

const rootElement = document.getElementById('root')


const heading = React.createElement("h1", {
    id: 'heading',
    className :'heading'
}, "This is heading")


const child = React.createElement("div", {
    id: 'child',
    className :'child'
}, heading)
const parent = React.createElement("div", {
    id: 'parent',
    className :'parent'
}, child)

const root = ReactDOM.createRoot(rootElement)
root.render(parent)
