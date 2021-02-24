### Conceptual Exercise

Answer the following questions below:

#### What is the purpose of the React Router?

React Router provides components than enable client-side routing. 

####  What is a single page application?

A single page application lets a user navigate through it without refreshing. SPAs heavily depend on JavaScripts.

	
####  What are some differences between client side and server side routing?

* Server-side routing
	* 	an entire new webpage is downloaded whenever a link in clicked
	*  the server processes the request and sends a new document as a response
	*  old webpage is discarded and newly downloaded one is displayed 
* Client-side routing
	*  When a link is clicked, the app downloads, processes and displays specific bits of data
	*  the browser is prevented from making the request and the URL is manually changed
	*  state of the app is changed and new componens are rendered
	*  if needed, new data is requested from the server, but the response is not necessarily an entire new webpage but specific bits of raw data

####  What are two ways of handling redirects with React Router? When would you use each?

* push on windows.history object: used when redirecting intentionally
* redirect component: when no match for URL

####  What are two different ways to handle page-not-found user experiences using React Router? 



####  How do you grab URL parameters from within a component using React Router?

By using the hook `useParams()`. The param is passed into the route via the Route component like so: 

```
<Route exact path="/companies/:handle">
        <Company />
</Route>
```
   and can then be retrieved in the Company component via the aforementioned hook. 

####  What is context in React? When would you use it?

Context enables data sharing between components and prevents prop drilling and code repetition. It is useful if there are many layers of components that neeed access to the same data. It is commonly used to handle global themes.

####  Describe some differences between class-based components and function components in React.

* Functional components: 
	* are typically arrow functions
	* do not use lifecycle methods
	* handle state via hooks


* Class-based components: 
	* are defined as classes
	* need to be initialised via constructor(props) and render() methods
	* use lifecycle methods
	* access state as this.state and set it via this.setState()

	

####  What are some of the problems that hooks were designed to solve?

Hooks were created to address issues with data sharing between components. Previous methods included: mixins, higher order components and render props. Hooks use closure to handle state. 