## ------------ Episode 1 (Inception) ----------

### What is CDN?
- Is a globally distributed list of servers that cache our content, so that when user try to access our content, ot is served from nearest server.
- Offers: 
    a) Performance (cache our content so request doesnot come to our server everytime, decreases the load on server)
    b) Less Latency (content served from nearest server)
    c) Security ( our server are hidden behind CDN, and CDN also provides more security for our content like protected DDOS attack)
    d) when your content is out of date it can be easily removed & new copy will be cached. 

### Diff between Library & Framework.
- Library: More flexible, can be applicable on some part of the application also.
- Framework: Has some rule & constraints that has to be followed, has more in built functionality as compared to library.

### Why is React called React?
- Because it “react” to when there is any change in data.

### React
- is a Library, it can be used in small portion of the application also (like when we used rootElement as a root to render the content, only the rootElement will be affected & manipulated by react, except it whole webpage remains the same)

### React.createElement 
- takes 3 arguments :- element tagname(u want to create), element attribute(like id, class etc), content
- return a js obj
- to pass multiple children to the method, use array

### ReactDOM 
- inside react dom, react does all the dom manipulation 
- used for rendering the content(inside root u render all ur content)
- takes the js obj(react elements) convert it into html tag and render in root
- when u render the any element in rootElement (using .render method), existing stuff within the rootElement get replaced with ur element





## ----------- Episode 2 (Igniting Our App) ----------
### package.json 
- is a configuration file for npm

### package-lock.json
- store exact version of installed package, it locks the version of packages

### diffrence between carot & tilde
- carot : ^version “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to <2.0.0.
- tilde : ~version “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

### transitive dependency
- when there is indirect relationship, then there is transivtive dependency. eg. P->R is true, R->Q is true, then P->Q is also true (this is transitive dependency P is indirectly related to R)

###  what is npx?
- used to execite the npm package

### parcel  (read from documentation)
- is a bundler(builds the code, compress, compiles & optimises the code to be served)
- build the application
- host application on local server
- HMR [ie. Hot Module Reload (automatically reload when there is some change in content)]
- File Matching Algorithm -> written in C++ (it keeps track to the content & when new changes then compares the changes)
- Caching (for faster builds)
- Image optimization
- Consistent Hashing -> read about it
- Code spiltting (split the code into parts)
- Diffrential bundling -> support older browser (ie. used so that our application support  on older browser as well)
- Diagnostic (so that we can daignose the errors-> syntax highlight pointing to exact location where error occured, hints to solve the error)
- Error Handling
-- Tree Shaking (remove the unused code -> the code that is not used will remove thay code & compress the code) <- read about it

### Note
- import/export statement not supported in Browser scripts (ie. script.js file)




## ---------- Episode 3 (Laying the foundation) ----------

### JSX
- is a HTML-like or XML-like syntax
- JSX is independent of react & can be used seperately
- used in React to create React element easily 

### Babel
- jsx is transpiled before it reaches to js [Parcel is the compiler it compiles the code & babel is used to convert jsx to react elements]
- jsx -> react.createElement -> react element or js obj -> html element

### types of components in react
- class components = uses js class to create component
- function components = uses js fun to create component ( a fun that return jsx code is functional comp)


### component composition 
- render one comp inside another



## ---------- Episode 4 (Talk is Cheap show me the code) ----------

### Functional components
-  made of js functions
- ways to call a functional comp
    a) <Component_Name/>
    b) <Component_Name></Component_Name>
    c) Component_Name()

### Class components
-  made of js class

### Config Driven UI
### Props 
### Giving Style in react style = {{}}




## ---------- Episode 5 (Lets Get Hooked) ----------

### What happens when you update state var
- when state var is updated the Reconciliation cycle is executed(new virtual dom is created, diffing algo, component rerender)
- if you update state var directly, i.e. stateVar=value, then the value will be updated but the Reconciliation cycle will not happen beacuse React think that state has'nt been updated and thus component will not re-render
