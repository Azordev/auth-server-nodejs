<!-- PROJECT SHIELDS -->
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues-open][issues-open-shield]][issues-url]
[![Issues-closed][issues-closed-shield]][issues-url]
[![Contributors][contributors-shield]][contributors-url]
[![contributions welcome][contributions-welcome]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://">
	  <img src="https://img.icons8.com/clouds/100/000000/key-security.png" alt="Logo"/>
  </a>

  <h1 align="center">
	Azordev SSO Server
  </h1>

  <p align="center">
    Login once, use in all our projects!
    <br />
	  🖊️
    🐞
    <a href="https://github.com/Israel-Laguan/<express-production-template/issues">Report a Bug</a>
    🙋‍♂️
    <a href="https://github.com/Azordev/auth-server-nodejs/issues">Request Feature</a>
  </p>
</p>

Live at [azordev-auth.herokuapp.com](https://azordev-auth.herokuapp.com/)

## Table of Contents

1. [Features](#features)
2. [Getting Started](#getting-started)
3. [Code Overview](#code-overview)
4. [Author](#author)
5. [Contributing](#contributing)
6. [Show your support](#show-your-support)
7. [License](#license)


# Features

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

[![Framework][badge-framework]][framework-url]
![javascript][]
![nodejs][]
![mongodb][]
![heroku][]

# Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Install MongoDB Community Edition ([instructions](https://docs.mongodb.com/manual/installation/#tutorials)) and run it by executing `mongod`
- `npm run dev` to start the local server

# Code Overview

## Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [express-jwt](https://github.com/auth0/express-jwt) - Middleware for validating JWTs for authentication
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - For generating JWTs used by authentication
- [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript

## Application Structure

- `index.js` - The entry point to our application. This file defines our express server and connects it to all the middlewares needed. It also requires the routes and models we'll be using in the application.
- `server/` - This folder contains configuration for the app as well as a central location for configuration/environment variables.
- `api/` - This folder contains the route definitions for our API.
- `service/` - This folder contains the schema definitions for our Mongoose models.

## Error Handling

In `api/v1/index.js`, we define a error-handling middleware for handling Mongoose's `ValidationError`. This middleware will respond with a 422 status code and format the response to have error messages the clients can understand

## Authentication

Requests are authenticated using the `Authorization` header with a valid JWT. We define two express middlewares in `service/auth.js` that can be used to authenticate requests. The `required` middleware configures the `express-jwt` middleware using our application's secret and will return a 401 status code if the request cannot be authenticated. The payload of the JWT can then be accessed from `req.payload` in the endpoint. The `optional` middleware configures the `express-jwt` in the same way as `required`, but will *not* return a 401 status code if the request cannot be authenticated.

# Author

<table style="width:100%">
  <tr>
    <td>
        <div align="center">
            <a href="./docs/img/photo.png" target="_blank" rel="author">
                <img src="https://avatars2.githubusercontent.com/u/36519478?s=460&v=4" style="border-radius: 10%; min-width: 100px;" alt="Israel Laguan's Photo" width="200px">
            </a>
            <h2>
                <a href="https://israel-laguan.github.io/" target="_blank" rel="author">
                    Israel Laguan
                </a>
            </h2>
        </div>
    </td>
    <td>
        <div align="center">
            <a href="mailto:israellaguan@gmail.com" target="_blank" rel="author">
                <img src="https://img.icons8.com/color/48/000000/message-squared.png" style="border-radius: 10%" alt="My GitHub" height="45px">
                <h3>
                    Email me to 
                    <a href="mailto:israellaguan@gmail.com">
                        israellaguan@gmail.com
                    </a>
                </h3>
            </a>
            <a href="https://www.linkedin.com/in/israellaguan/" target="_blank" rel="author">
                <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="My Linkedin" height="45px">
                <h3>
                    Connect to my Linkedin
                </h3>
            </a>
            <a href="https://github.com/Israel-Laguan" target="_blank" rel="author">
                <img src="https://img.icons8.com/color/48/000000/github--v1.png" 
			style="border-radius: 10%" alt="My GitHub" height="45px"
		>
                <h3>
                    Check my GitHub Profile
                </h3>
            </a>
        </div>
    </td>
  </tr>
</table> 

# Contributing

[![contributions welcome][contributions-welcome]][issues-url]

🤝 Contributions, issues and feature requests are welcome!
Feel free to check the [issues page][issues-url].

# Show your support

🤗 Give a ⭐️ if you like this project!

Icons from:

<a href="https://icons8.com/icon/13917/full-image">Icons8</a>

# License

[![License][badge-apache]][apache-license]

📝 This project is licensed under the [Apache 2](LICENSE)\
Feel free to fork this project and improve it

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/Azordev/auth-server-nodejs?style=for-the-badge
[contributors-url]: https://github.com/Azordev/auth-server-nodejs/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Azordev/auth-server-nodejs?style=for-the-badge
[forks-url]: https://github.com/Azordev/auth-server-nodejs/network/members
[stars-shield]: https://img.shields.io/github/stars/Azordev/auth-server-nodejs?style=for-the-badge
[stars-url]: https://github.com/Azordev/auth-server-nodejs/stargazers
[issues-open-shield]: https://img.shields.io/github/issues/Azordev/auth-server-nodejs?style=for-the-badge
[issues-url]: https://github.com/Azordev/auth-server-nodejs/issues
[issues-closed-shield]: https://img.shields.io/github/issues-closed/Azordev/auth-server-nodejs?style=for-the-badge
[badge-framework]: https://img.shields.io/badge/express.js-v4.x-9cf?style=for-the-badge
[framework-url]: https://expressjs.com/
[contributions-welcome]: https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=for-the-badge
[badge-license]: https://img.shields.io/:license-mit-blue.svg?style=for-the-badge
[javascript]: https://img.shields.io/badge/JAVASCRIPT-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript
[nodejs]: https://img.shields.io/badge/node.js-V14.x-339933?style=for-the-badge&logo=node.js
[heroku]: https://img.shields.io/badge/Hosting-heroku-430098?style=for-the-badge&logo=heroku
[mongodb]: https://img.shields.io/badge/database-mongodb-47A248?style=for-the-badge&logo=mongodb
[badge-apache]: https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=for-the-badge
[apache-license]: https://opensource.org/licenses/Apache-2.0
