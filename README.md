##Commands:
ng new ecomapp --routing true --style css --skip-git --skip-tests
cd ecomapp
npm install bootstrap@next
npm install @fortawesome/fontawesome-free@5.12.1
npm install --save-dev json-server@0.16.0
npm install --save-dev jsonwebtoken@8.5.1

Adding CSS and JS to the angular.json File
"styles": [
    "src/styles.css",
    "./node_modules/bootstrap/dist/css/bootstrap.min.css",
    "./node_modules/@fortawesome/fontawesome-free/css/all.min.css"
],
"scripts": [
    "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]

Adding a Script in the package.json
"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "json": "json-server data.js -p 3500 -m authMiddleware.js"
}

add data.js and authMiddleware.js on ecomapp folder

ng serve --open
http://localhost:4200

npm run json
http://localhost:3500/products/1


# Ecomapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
