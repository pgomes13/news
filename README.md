# News App 

Reference - https://thinkster.io/mean-stack-tutorial

<b>Prerequisites</b>
<a href="https://nodejs.org/en/">Install Node.js</a>
<a href="https://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/">Install MongoDB</a>

<b>Running MongoDB</b> <br>
Run 'mongod' in terminal

Options -

  mongod --port 12345 (on different port)
  
  mongod --shutdown (shutdown)
  
  pgrep mongo (list mongod instances)
  
  kill <mongod process ID>
  
Note - if 'mongod' does not run correctly, kill all the mongod instances and run 'mongod' again.


<b>Create a new Express project</b>

npm install -g express-generator

express --ejs news  (use ejs for the EJS templating engine for using standard HTML in the templates)

cd news

npm install


<b>Install Mongoose</b>

npm install --save mongoose

mkdir models (inside the express project scaffold)


<b>Starting Node Server</b>

npm start

http://localhost:3000


Note - run the express app and the mongo instance in two separate tabs in the terminal. 
Once the database connection is defined in express app.js, the express app automatically connects to the mongo database instance.







