# Issues when creating React App

- fixing the registry
  https://stackoverflow.com/questions/25826839/node-npm-install-failure-due-to-proxy-config-what-now
  npm config set registry "http://registry.npmjs.org/"

- fixing the socket timeout
  npm cache clear -f

# Questions for Jonny

- I had to set a registry for npm - what is that
- I saw something about my proxy - what is that? Is that something I need or can set?

# Common Commands

Success! Created beta-read at C:\Users\postupackl1\Documents\beta-read\beta-read
Inside that directory, you can run several commands:

npm start - Starts the development server.

npm run build - Bundles the app into static files for production.

npm test - Starts the test runner.

npm run eject
Removes this tool and copies build dependencies, configuration files
and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

cd beta-read
npm start

# Things I learned along the way

OMG okay so npm create-react-app beta-read gives you the file structure!
Go into the second beta-read and then do
'npm start'

it will tell you the localhost it launched on!
To stop the React when launched, terminate the batch job in the cmd window.

render has two arguments - the javascript element and the container
Javascript has attributes and expressions, but I'm not sure what the difference is.
Expressions are compiled into objects?

only call ReactDOM.render monospace

Two kinds of components Functional (which are functions lol) and Class

- functional components begin with a Capital Letter - lowercase letters are just regular HTML elements.
  - To render that functional component, create a corresponding JSX element (which looks like a new HTML tag)
  - Props are passed in with arguments
- class components are for heavier interactions, like forms.
  - Props are passed in with this.props.<whatever>

Hooks allow for state (which is usually a class component specific thing) to be used in functional components.
You use setState() in functional components. You CANNOT use it in class components.

Lifestyle methods

- componentDidUpdate - did the component update
- componentDidMount - is the component on the page
- componentWillUnmount - is the component off the page
- useEffect - combines all three
  These functions check the life of the DOM.

# Events:

- onChange for changes on the text fields (this calls handleChange)
- onSubmit for submits to a form (this calls handleSubmit, etc.)

# Spread operator ...

"allows an iterable such as an array expression or string to be expanded in places"
