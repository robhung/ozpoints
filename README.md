# OzPoints

### Directory Layout

```shell
.
├── /node_modules/                # Third-party libraries and utilities
├── /build/                       # Project compiled for production
├── /public/                      # Static files such as favicon.ico etc.
├── /src/                         # Source files to be compiled
│   ├── /components               # Components
│   ├── /containers               # Containers
│   ├── App.js                    # App
│   ├── index.js                  # Initial component to render the virtual DOM
│   ├── serviceWorker.js          # Service worker script to allow offline features
│   └── /...                      # etc.
│── package.json                  # The list of project dependencies and NPM scripts
└── yarn.lock                     # Lockfile for yarn to install dependencies in order
```

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
$ yarn test                    # Same as `npm run start`
```

### Build

Build the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

```shell
$ yarn build                    # Same as `npm run build`
```

### Deployment

```shell
$ firebase deploy
```

### Create-React-App

This project was bootstrapped with CRA. View its [full user guide](./README-CRA.md) (some of it may no longer be relevant).
