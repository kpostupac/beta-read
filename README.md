#Issues when creating React App

- fixing the registry
  https://stackoverflow.com/questions/25826839/node-npm-install-failure-due-to-proxy-config-what-now
  npm config set registry "http://registry.npmjs.org/"

- fixing the socket timeout
  npm cache clear -f

#Questions for Jonny

- I had to set a registry for npm - what is that
- I saw something about my proxy - what is that? Is that something I need or can set?

# Common Commands

Success! Created beta-read at C:\Users\postupackl1\Documents\beta-read\beta-read
Inside that directory, you can run several commands:

npm start
Starts the development server.

npm run build
Bundles the app into static files for production.

npm test
Starts the test runner.

npm run eject
Removes this tool and copies build dependencies, configuration files
and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

cd beta-read
npm start

#Things I learned along the way
OMG okay so npm create-react-app beta-read gives you the file structure!
Go into the second beta-read and then do
'npm start'

it will tell you the localhost it launched on!

render has two arguments - the javascript element and the container
