## Udemy - React - Mastering Test Driven Development
- [Udemy course](https://www.udemy.com/course/react-tdd/)
- [github]()


## Setup
```
  npx create-react-app .

  npm i enzyme react-bootstrap -S

  npm i enzyme-adapter-react-16 -D
```
add setupTests.js for enyme



## Coverage
npm run test -- --coverage

config
```
"jest": {
    "collectCoverageFrom":[
      "src/**/*.js",
      "!src/index.js"
    ]
  }
```