# OzPoints [![CircleCI](https://circleci.com/gh/robhung/ozpoints/tree/master.svg?style=svg)](https://circleci.com/gh/robhung/ozpoints)

This project was made for comparing credit cards in Australia which offer a sign up bonus.

Motivated to help consumers maximise their frequent flyer points with minimal spending.

Inspired by [OzBargain](https://www.ozbargain.com.au) and [MadFientest](http://madfientist.cardratings.com/).

### Getting Started

Install dependancies

```shell
$ yarn install                  # Same as `npm install`
```

Run the app in the development mode. Open http://localhost:3000 to view it in the browser.

```shell
$ yarn start                    # Same as `npm start`
```

### Testing

Launch the test runner in the interactive watch mode.

```shell
$ yarn test                     # Same as `npm run start`
```

### Build

Build the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

```shell
$ yarn build                    # Same as `npm run build`
```

### Deployment

```shell
$ firebase deploy               # Requires authentication
```

### Continous Integration 

CI and CD is run through [CircleCI](https://circleci.com/gh/robhung/ozpoints) and can be configured [here]('./.circleci/config.yml').

For all pull requests, it will run linters and tests. On `master` branch, it will automatically build and deploy to Firebase.

### Create-React-App

This project was bootstrapped with CRA. View its [full user guide](./README-CRA.md) (some of it may no longer be relevant).
