# React UI 

**Berry** is a creative **[React Dashboard](https://appseed.us/product/react-node-js-berry-dashboard)** build using the Material-UI. It is meant to be the best User Experience with highly customizable feature-riched pages. It is a complete game-changer **React Dashboard** with an easy and intuitive responsive design as on retina screens or laptops. The product comes with a simple JWT authentication flow: `login`/`register`/`logout` powered by an open-source **Node JS API** Backend via `Passport` Library.

> Features

- Modern aesthetics UI design - Designed by *CodedThemes*
- React, Redux, Redux-persist
- Authentication: JWT Login/Register/Logout

<br />

## Quick Start in [Docker](https://www.docker.com/)

> Get the code

```bash
$ git clone https://github.com/app-generator/react-flask-authentication.git
$ cd react-flask-authentication/react-ui
```

> Start the app in Docker

```bash
$ docker-compose pull   # download dependencies 
$ docker-compose build  # local set up
$ docker-compose up     # start the app 
```

Visit `http://localhost:3000` in your browser. The React UI should be up & running.

<br />

![React Nodejs Berry - Open-source full-stack seed project crafted by CodedThemes and AppSeed.](https://user-images.githubusercontent.com/51070104/137620059-07547eb2-0e7c-45e3-b825-67f5c72e4d3e.gif)

<br >

## How to use it

To use the product Node JS (>= 12.x) is required and GIT to clone/download the project from the public repository.

**Step #1** - Clone the project

```bash
$ git clone https://github.com/app-generator/react-flask-authentication.git
$ cd react-flask-authentication/react-ui
```

<br >

**Step #2** - Install dependencies via NPM or yarn

```bash
$ npm i
// OR
$ yarn
```

<br />

**Step #3** - Start in development mode

```bash
$ npm run start 
// OR
$ yarn start
```

<br />

## Configure the backend server

The product comes with a usable JWT Authentication flow that provides only the basic requests: login/logout/register. 

**API Server URL** - `src/config/constant.js` 

```javascript
const config = {
    ...
    API_SERVER: 'http://localhost:5000/api/'  // <-- The magic line
};
```

<br />

---
**React UI** - provided by AppSeed [App Generator](https://appseed.us)
