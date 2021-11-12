## Flask API Server

Flask Starter with JWT authentication, and **SQLite** persistance - Provided by **AppSeed** [App Generator](https://appseed.us/app-generator).
It has all the ready-to-use bare minimum essentials.

<br />

> Features:

- [API Definition](https://docs.appseed.us/boilerplate-code/api-unified-definition) - the unified API structure implemented by this server
- Simple, intuitive codebase - can be extended with ease. 
- Flask-restX, Flask-jwt_extended
- Docker, Unitary tests

<br />

## Quick Start in [Docker](https://www.docker.com/)

> Get the code

```bash
$ git clone https://github.com/app-generator/react-flask-authentication.git
$ cd react-flask-authentication/flask-api
```

> Start the app in Docker

```bash
$ docker-compose pull   # download dependencies 
$ docker-compose build  # local set up
$ docker-compose up     # start the app 
```

Visit `http://localhost:5000` in your browser. The app should be up & running.

<br />

![Flask API Server - Open-source Flask Starter provided by AppSeed.](https://user-images.githubusercontent.com/51070104/126349643-264d4cf4-6d0b-4c24-8185-adf69409fa4e.png)

<br />

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Modules](#modules)
4. [Testing](#testing)

## How to use the code

**Step #1** - Clone the project

```bash
$ git clone https://github.com/app-generator/react-flask-authentication.git
$ cd react-flask-authentication/flask-api
```

**Step #2** - create virtual environment using python3 and activate it (keep it outside our project directory)

```bash
$ # Virtualenv modules installation (Unix based systems)
$ virtualenv env
$ source env/bin/activate
$
$ # Virtualenv modules installation (Windows based systems)
$ # virtualenv env
$ # .\env\Scripts\activate
```

**Step #3** - Install dependencies in virtualenv

```bash
$ pip install -r requirements.txt
```

**Step #4** - setup `flask` command for our app

```bash
$ export FLASK_APP=run.py
$ export FLASK_ENV=development
```

> Or for Windows-based systems

```powershell
$ (Windows CMD) set FLASK_APP=run.py
$ (Windows CMD) set FLASK_ENV=development
$
$ (Powershell) $env:FLASK_APP = ".\run.py"
$ (Powershell) $env:FLASK_ENV = "development"
```

**Step #5** - start test APIs server at `localhost:5000`

```bash
$ flask run
```

**Step #6** - use `flask-restx` swagger dashboard to test APIs, or use `POSTMAN`

<br />

## Project Structure

```bash
api-server-flask/
├── api
│   ├── config.py
│   ├── __init__.py
│   ├── models.py
│   └── routes.py
├── Dockerfile
├── README.md
├── requirements.txt
├── run.py
└── tests.py
```

<br />

## API

For a fast set up, use this POSTMAN file: [api_sample](https://github.com/app-generator/api-server-nodejs-pro/blob/master/media/api.postman_collection.json)

> **Register** - `api/users/register` (**POST** request)

```
POST api/users/register
Content-Type: application/json

{
    "username":"test",
    "password":"pass", 
    "email":"test@appseed.us"
}
```

<br />

> **Login** - `api/users/login` (**POST** request)

```
POST /api/users/login
Content-Type: application/json

{
    "password":"pass", 
    "email":"test@appseed.us"
}
```

<br />

> **Logout** - `api/users/logout` (**POST** request)

```
POST api/users/logout
Content-Type: application/json
authorization: JWT_TOKEN (returned by Login request)

{
    "token":"JWT_TOKEN"
}
```

<br />

## Modules

This application uses the following modules

 - Flask==1.1.4
 - flask-restx==0.4.0
 - Flask-JWT-Extended
 - pytest

## Testing

Run tests using `pytest tests.py`

<br />

---
**Flask API Server** - provided by AppSeed [App Generator](https://appseed.us)
