# Task Manager API


This project built using:
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JSON Web Token](https://jwt.io/)
- [express-validator](https://express-validator.github.io/docs/)
- [SuperTest](https://www.npmjs.com/package/supertest)

- [Nodemailer](https://nodemailer.com/about/)
- [Multer](https://www.npmjs.com/package/multer)



# Task Manager API

This is simple API that enables a logged in user to manage list of tasks via HTTP Requests. The API provides functionalities like
* Create an account
* Read logged in account's information
* Update logged in account
* Create a Task
* Read a Task
* Update a Task
* Delete a Task
* Get a list of all tasks sorted by
* Complete or Incomplete
* Upload Avatar Picture
* Update account details
* Delete Account  
 

**To run the API locally, read the instructions below**

## Prerequisites
* [NodeJS](https://nodejs.org/) required  
* [MongoDB](https://www.mongodb.com) required



## Installation
Install all the dependencies by running the following command from the root directory  

`npm install`
## Setup
1. Create a folder `config` in the root directory of the project  
1. Create a file `dev.env` inside `config`  
1. Paste the following code inside it  
`PORT=3000`    
`JWT_SECRET=`_YOUR SECRET_  
`MONGODB_URI=mongodb://127.0.0.1:27017/task-manager-api`

   `MY_EMAIL=` _YOUR EMAIL_

    `EMAIL_PASSWORD=`_YOUR EMAIL PASSWORD OR YOUR EMAIL PROVIDER SECURITY PASSWORD_

1. Create a file `test.env` inside `config`  
1. Paste the following code inside it 
 
`JWT_SECRET=`_YOUR SECRET_  
`MONGODB_URI=mongodb://127.0.0.1:27017/task-manager-api-test` 
## Start Project
`npm run dev`
## Test Project 
`npm run test`
## Endpoints
### Endpoints for users
* **Signup User**  
**`/users`** => POST endpoint. Provide `name` required, `email` required, `password` required in body.  
Set **Headers**  
KEY: `Content-Type`  
VALUE: `application/json`

* **Login User**  
**`/users/login`** => POST endpoint. Provide `email` and `password` in body.  
Set **Headers**  
KEY: `Content-Type`  
VALUE: `application/json`

For all the following endpoints, set **Headers**  
KEY: `Authorization`  
VALUE: `Bearer token`  
Replace `token` with the token value obtained after Login or Signup request

* **Logout User**  
**`/users/logout`** => POST endpoint. Log out from currently logged in session (from current device)

* **Logout from All**  
**`/users/logoutAll`** => POST endpoint. Log out from all logged in sessions (from all device)

* **Read Profile**  
**`/users/me`** => GET endpoint.

* **Update User**  
**`/users/me`** => PATCH endpoint. Set **Headers**  
KEY: `Content-Type`  
VALUE: `application/json`  

  Provide any or all of the following in the body
    * name
    * email
    * password
    * age  



* **Upload Avatar**  
**`/users/me/avatar`** => POST endpoint. In Postman, set **Body** to _from-data_ with KEY: `avatar` type File and VLAUE: select a image file of size less than 1 MB
* **Delete Avatar**  
**`/users/me/avatar`** => DELETE endpoint. Deletes avatar picture from the user's account

* **Delete User Account**  
**`/users/me`** => DELETE endpoint. Delete the users account and all the tasks associated with it

### endpoints for tasks
* **Create Task**  
**`/tasks`** => POST endpoint. Provide _String_ `description` (required) and _Boolean_ `completed` (optional).  
Set **Headers**  
KEY: `Content-Type`  
VALUE: `application/json`

* **Read a Task**  
**`/tasks/:id`** => GET endpoint. `id` of a task is obtained while creating or updating a task  

* **Read all Tasks**  
**`/tasks`** => GET endpoint. Simply fetch all task.  

  **Query Parameters**
  * `completed` optional   
   Provide _Boolean_ value to get list of all task that match the completion criteria
  * `sortBy` optional  
   Provide `createdAt:asc` to get list of tasks in ascending order of their creation time or `createdAt:desc` to get list 
   of tasks in descending order of their creation time  
  

* **Update Task**  
**`/tasks/:id`** => PATCH endpoint.  `id` of a task is obtained while creating or updating a task. Provide either or both of the parameters _String_ `description` or _Boolean_ `completed`.  
Set **Headers**  
KEY: `Content-Type`  
VALUE: `application/json`

* **Delete Task**  
**`/tasks/:id`** => DELETE endpoint. `id` of a task is obtained while creating or updating a task.
## Dependencies
* [nodemailer](https://nodemailer.com/about/)
* [bcryptjs](https://www.npmjs.com/package/bcryptjs)
* [express](https://www.npmjs.com/package/express)
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
* [mongodb](https://www.npmjs.com/package/mongodb)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [multer](https://www.npmjs.com/package/multer)
* [sharp](https://www.npmjs.com/package/sharp)
* [validator](https://www.npmjs.com/package/validator)

## Development Dependencies
* [env-cmd](https://www.npmjs.com/package/env-cmd)
* [jest](https://www.npmjs.com/package/jest)
* [nodemon](https://www.npmjs.com/package/nodemon)
* [supertest](https://www.npmjs.com/package/supertest)
