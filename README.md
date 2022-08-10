# Surge global assignment

Internship Assignment For the Surge Global

**Project Discription**<br/>
In this project, users can enter, delete, edit, and search for notes. Also, the admin user can get details about each user's , search for each user. In this project, both the frontend and backend are created using Mern Stack technologies. For authentication, use a jwt token. In front-end management, this project uses the Redux state management library.

Backend : Node.Js,ExpressJs<br/>
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

> BackEnd-ExpressJs (manage routes)

- bcryptjs (encrypt password)
- cors (cross origin setting configuration)
- dotenv (environment variable)
- express-async-errors (handle async errors)
- http-status-codes (https status codes)
- jsonwebtoken (jwt token)
- mongoose (work with mongodb)
- nodemailer (send mail) - uuid (generate a random identifier)

**Installation**

> Environment variables setup

- `cd BackEnd `(Change directory to the frontend folder)

- Setup .env file in BackEnd directory

**_Environment variables _**
` MONGO_URI=MongoDb Atlas Url`</br>
`PORT= Server port ` </br>
`JWT_SECRET= JWT secret ` </br>
`ADMIN_MAIL = email for nodemailer ` </br>
`ADMIN_MAILAPP_PASSWORD = admin email mail password ` </br>

**How to get mailApp password in gmail**

- First login into the admin email and go your Google Account
- Then select security page
- In Signing to google title
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

> Backend Setup

- `cd BackEnd `(Change directory to the frontend folder)

- `npm install` (Install all the npm packages)

- `npm start || node index.js` (Start the development server)
