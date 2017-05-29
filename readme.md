# Reduxstagram

A simple React + Redux based clone of Instagram. With basic features such as liking, commenting, and removing comments on posts implemented using Redux while React covers rendering any changes to the underlying data. Attempting to follow latest practices in terms of using ES6 features (arrow functions, rest/spread operator, destructuring, object shorthand, computed keys, etc) as well as good React practices such as maximizing stateless functional component use and making component code pretty using ES6 sugar.

Take it for a test drive [here](https://shawn-reduxtagram.herokuapp.com/)!

## Running

First `npm install` to grab all the necessary dependencies.

Then run `npm start` and open <localhost:7770> in your browser.

## Production Build

Run `npm build` to create a dist folder and a bundle.js file.

---

## Some TODOs/Nice to haves

- The provided CSS isn't great on mobile
- It'd be great if there were User accounts so you could add/remove posts
- Add an external data source (MongoDB) and get/add data asynchronously with redux-thunk/sagas/RxJS Epics
