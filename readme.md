<h1 align="center">Round 1 submission: NodeJS API </h1>
<p>
  <a href="https://github/arpitjaswal/assignment" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> The task was to create a basic NodeJS API with functionality to create new user, update existing user, delete existing user, login functionality, authorization, forgotPassword functionality&#34;

## Endpoints

- `/users/`: Creates a new user
- `/users/:userID`: Edits user details for the user ID
- `/users/:userID`: Deletes the user corresponding to the user ID
- `/users/forgotPassword`: Retrieves forgotten password
- `/users/login`: User authentication


### 🏠 [Homepage](https://localhost:4567/)

### ✨ [Demo](Not deployed because no database connection or dummy db)

## Install

```sh
npm i 
```

## Usage
Create an env file with required fields, install dependencies, run using npm start

## Create an Environment File

Create a `.env` file in the root directory of the project and add the following content:

```plaintext
PORT=4567
MODE=development
SECRETKEY="RudraInnovative"
email="xyz@gmail.com"
password="Password"

```

## Run local server

```sh
npm start
```

## Author

👤 **Arpit Jaswal**

* Website: https://linkedin.com/in/arpitjaswal
* Github: [@arpitjaswal](https://github.com/arpitjaswal)

