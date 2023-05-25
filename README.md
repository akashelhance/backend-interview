## Requirements

For development, you will need Node.js and a node global package, npm, postgresql,pgadmin installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  
 ### Postgresql
 
 - #### Postgresql installation on Windows

  Just go on https://www.postgresql.org/download/windows/ and download the installer.
  
  While installing the postgresql it will ask for the password, set the password for postgresql
  
  Pgadmin will automatically install along with postgres database.
  
 
### Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/akashelhance/backend-interview.git 
cd backend-interview
```
Create the database in postgresql using the pgadmin

To install the required the pqackages run the command:
```bash
npm install
```
 ### Config the database setting in the project


Open the project in code editor

Go the config.json file inside the config folder

Set the username, password, database name in the config file

### Run the server

  To Run the server go to the command prompt 
  
  Run the command npm start
  
  Server will start on port 5000
  
  
  


 
