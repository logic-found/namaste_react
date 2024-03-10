#### ------------ Episode 1 ----------

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
Because it “react” to when there is any change in data.

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
