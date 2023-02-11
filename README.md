# [React Flask Authentication](https://blog.appseed.us/react-flask-authentication/)

Open-source full-stack seed project that uses a `React UI` powered by a simple `Flask API Server`. **[React Flask Authentication](https://blog.appseed.us/react-flask-authentication/)** sample can be used to bootstrap fast a new project using a tested `development-ready` stack or simply for eLearning purposes by beginners. For newcomers, **React** is a popular Javascript library for coding user interfaces baked by Facebook and Flask is a leading web framework written in Python. 

- 👉 [React Flask Authentication](https://react-flask-authentication.appseed-srv1.com/) - LIVE Demo
- 👉 LIVE [Support](https://react-flask-authentication.appseed-srv1.com/) via [Discord](https://discord.gg/fZC6hup) - provided by AppSeed

<br />

## ✨ **Start the Flask API** via `Docker`

```bash
$ cd api-server-flask
$ docker-compose up --build  # Start with Docker
```

At this point, the API should be up & running at `http://localhost:5000`, and we can test the interface using POSTMAN or `curl`.

<br />

## ✨ **Start the React UI** (use another terminal)

> 👉 **Step 1** - Once the project is downloaded, change the directory to `react-ui`. 

```bash
$ cd react-ui
```

<br >

> 👉 **Step 2** - Install dependencies via NPM or yarn

```bash
$ npm i
// OR
$ yarn
```

<br />

> 👉 **Step 3** - Start in development mode

```bash
$ npm run start 
// OR
$ yarn start
```

Once all the above commands are executed, the `React UI` should be visible in the browser. By default, the app redirects the guest users to authenticate. 
After we register a new user and signIN, all the private pages become accessible. 

<br />

![React Flask Authentication - Open-source full-stack seed project crafted by CodedThemes and AppSeed.](https://user-images.githubusercontent.com/51070104/137620059-07547eb2-0e7c-45e3-b825-67f5c72e4d3e.gif)

<br />

## ✨ General Information

The product is built using a `two-tier` pattern where the React frontend is decoupled logically and physically from the API backend. In order to use the product in a local environment, a few simple steps are required: 

- `Compile and start` the **Flask API Backend**
  - be default the server starts on port `5000`
- `Compile and start` the **React UI**
  - UI will start on port `3000` and expects a running backend on port `5000`
- `Configuration` (Optional)
  - Change the API port
  - Configure the API port used by the React UI to communicate with the backend 

<br />

## ✨ Manual build

> 👉 **Start the Flask API** 

```bash
$ cd api-server-flask
$ 
$ # Create a virtual environment
$ virtualenv env
$ source env/bin/activate
$
$ # Install modules
$ pip install -r requirements.txt
$
$ # Set Up the Environment
$ export FLASK_APP=run.py
$ export FLASK_ENV=development
$ 
$ # Start the API
$ flask run 
```

<br />

> 👉 **Compile & start the React UI**

```bash
$ cd react-ui
$
$ # Install Modules
$ yarn
$
$ # Start for development (LIVE Reload)
$ yarn start 
```

<br />

### Configuration (Optional)

> Change the port exposed by the Flask API

```bash
$ flask run --port 5001
```

Now, the API can be accessed on port `5001`

<br />

> Update the API port used by the React Frontend

**API Server URL** - `src/config/constant.js` 

```javascript
const config = {
    ...
    API_SERVER: 'http://localhost:5000/api/'  // <-- The magic line
};
```

<br />

## ✨ API

For a fast set up, this [POSTMAN](https://docs.appseed.us/boilerplate-code/api-server/api-unified-definition) definition can be used.

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

## ✨ Product UI

> React Flask Authentication - Login 

![React Flask Authentication - Login.](https://user-images.githubusercontent.com/51070104/141444378-763ca3fb-c18c-4558-9730-b42a341a7b22.jpg)

<br />

> React Flask Authentication - Icons

![React Flask Authentication - Icons.](https://user-images.githubusercontent.com/51070104/141444472-8c966396-69dc-46c3-835e-b64329fdbf7d.jpg)

<br />

> React Flask Authentication - Colors

![React Flask Authentication - Colors.](https://user-images.githubusercontent.com/51070104/141444532-46a3bcd0-841b-4725-aa82-122569cd678a.jpg)

<br />

## ✨ Links & Resources

- Ask for [Support](https://appseed.us/support) on [Discord](https://discord.gg/fZC6hup)
- See for [React Starters](https://appseed.us/apps/react) - index provided by AppSeed

<br />

---
**[React Flask Authentication](https://blog.appseed.us/react-flask-authentication/)** - Open-source full-stack seed project provided by **[AppSeed](https://appseed.us/)**
