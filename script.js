const React = require('react')
const ReactDOM = require('react-dom/client')

const rootElement = document.getElementById('root')


// both of them are react elements only (jsx will be converted to react element by babel when js code is compiled)
const head1 = React.createElement(
    "h1",
    {
        id: "heading",
        className: "heading",
    },
    "This is heading 1"
);

// jsx
const head2 = <h1>This is heading 2</h1> 

//() are way to tell that inside () jsx will be presnt
const head3 = (
    <>
        <h1>This is heading 3</h1>
    </>
);


const root = ReactDOM.createRoot(rootElement)
root.render([head1, head2, head3])
