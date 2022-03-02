# nusmoney sample backend
Sample Node.js backend for NUSmoney app, included Auth0 integration and sample data in lieu of database

This repo consists of the files:  
**data.js**         sample data and functions to demonstrate data retrieval  
**main1.js**        demonstrates simple use of express to listen for and handle API requests  
**authdemo.js**     example code to use Auth0 to require a logged in user to make a request  
**.env_sample**     example configuration parameters you need to set in your .env file  
**main2.js**        more complex main program relying on functions in router.js  
**router.js**       request handling requiring logged in user  
**Procfile**        required so Heroku knows which app to run on startup  

