# Surge global assignment

Internship Assignment For the Surge Global

**Project Discription**<br/>
In this project, users can enter, delete, edit, and search for notes. Also, the admin user can get details about each user's , search for each user. In this project, both the frontend and server are created using Mern Stack technologies. For authentication, use a jwt token. In front-end management, this project uses the Redux state management library,Nodemailer package use for send emails.

server : Node.Js,ExpressJs<br/>
Frontend : React.js<br/>
Database : MongoDB<br/>

**Project Flow**<br/>

- The first user can sign up using their email address.

- After the signup, the server will send an email to the user with a temporary password.

- using temporary password user will be able to sign in to the application.

- if user status is true, it is considered a new user and the user will be redirected to the new user profile details form.

- after updating user details, the user will be directed to the notes list page.

- The user can see all of the crud operations on the NoteList page.

- If an admin user signs in, he will be redirected to the userlist page.

- Administrators can view and search all user details on the userlist page.

**Library && Packages**

> FrontEnd

- Axios ( make HTTP requests)
- framer-motion (for animations)
- redux-toolkit and redux-presist (state management and persist data)
- mui (Ui Component)

> server

- ExpressJs (manage routes)
- bcryptjs (encrypt password)
- cors (cross origin setting configuration)
- dotenv (environment variable)
- express-async-errors (handle async errors)
- http-status-codes (https status codes)
- jsonwebtoken (jwt token)
- mongoose (work with mongodb)
- nodemailer (send mail) - uuid (generate a random identifier)

**Default Admin Acount**

-There will be default admin account check server/SeedFile/SeedAdmin Path for login details

**Installation**

> Docker Setup

- `docker-compose up`

> Environment variables setup

- `cd server `(Change directory to the server folder)

- Setup .env file in server directory

**_Environment variables _**</br>

` MONGO_URI=MongoDb Atlas Url`</br>
`PORT= Server port ` </br>
`JWT_SECRET= JWT secret ` </br>
`ADMIN_MAIL = email for nodemailer ` </br>
`ADMIN_MAILAPP_PASSWORD = admin email mail password ` </br>

**How to get mailApp password in gmail**

- First login into the admin email and go to your Google Account
- Then select security page
- Inside Signing to google title
- You will see app passwords button
- After click app passwords button it will asks again to login
- After login you will redirect to page from there
- Select app as other and enter any custom name
- After setup name click generate
- Then it will pop up password for the mailApp

> Front End Setup

- `cd frontend `(Change directory to the frontend folder)

- `npm install `(Install all the npm packages)

- `npm start `(Start the development server)

> server Setup

- `cd server `(Change directory to the frontend folder)

- `npm install` (Install all the npm packages)

- `npm start || node index.js` (Start the development server)

**Written Questionnaire**

> Explaining what is design pattern and how we can use design patterns in
> projects.

- Design patterns represent the best practices used in object-oriented software development. Design patterns are general problems that come up in software development .As an example, when we need to implement undo data, we can use the memento design pattern. As such, there are different design patterns for different use cases. We have three main design pattern types in the Gang of Four design patterns, such as

  - Creational Patterns:-based solutions for object creation
  - Structural Patterns: Using the concept of inharitance, how do we obtain new functionalities?
  - Behavioral Patterns-solution for ommunation between objects

> What is DTO and explain the use of it.

- DTO mean (Data transfer object).DTO is used for facilitating communication between two systems without exposing sensitive information.DTO minimize boilerplate and make it more readable the code

> How are you going to store secrets in an application without exposing it to the
> internet?

- we use the env(environment variables) file to store secrets without exposing them to the outside

> What is JWT and how does it work?

- Token, is a compact and self-contained way for securely transmitting information between parties as a JSON object. JWT Token is created in the 3 parts and they are
  Header - This header tells the server what type of signature is being used
  Payload - data that we can provide usually we store data to identify the user (ex - userid,usertype)
  Signature-mark the token

First Jwt combined header, payload, and secret then encrypt after that it will add a signature and return the token

> What is the difference between SQL and NoSQL databases?

- SQL

  - SQL databases are relational
  - used with multi-row transactions
  - save data in table-based

- NoSQL
  - NoSQL databases are non-relational
  - used with unstructured data like documents or JSON
  - save data in document, key-value pair, graph

> Suggest a good state management for frontend application and explain why you recommend it.

- We use state management to store states that can access the whole app when the state changes reflect that change everywhere that state is used. According to my experience in React, there is a built-in state management tool called contextapi. The main problem with the context API is that if we change the state of one state, it will re-render every component that the state used. As a result, the redux state management library will resolve this issue. In my experience, I would recommend Redux as good state management.
