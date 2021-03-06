# TV Shows App with VueJS
TV Shows catalog with listings by genres and ratings. Search the TV Show you want to know more about.

## Prerequisites
Download Node.js at https://nodejs.org/en/download/ (latest version - contains npm)

## Technologies
Here you can see the tech stack used to develop this project

### Main stack
- HTML5
- CSS
- ECMAScript 6 (ES6)
- VueJS

### Vue
Based on the exposure and experience working on multiple JavaScript frameworks such as jQuery, AngularJS, ReactJS for quite some time. This time I've chosen VueJS because it's a framework that helps you to enhance the structure of your code, it has an active community that makes it better every day.

Below are the packages used to develope the application:

- Vue cli
- HTTP client: Axios
- Unit testing: Jest
- Routes management: VueRouter
- Store management: Vuex
- Components design: Vuetify
- Code analysis: ES-Linter

### Project dependencies and devDependencies - In detail
1. axios:
   Promise based HTTP client for the browser.
   Please refer below url for more details:
   https://www.npmjs.com/package/axios   

2. Vuetify:
   Vuetify is a Vue UI Library with beautifully handcrafted Material Components. No design skills required — everything you need to create amazing applications is at your fingertips.
   Please refer below url for more details:
   https://vuetifyjs.com/en/introduction/why-vuetify/#guide

3. @vue/cli-plugin-unit-jest:
   Run unit tests with Jest. Jest as a JS unit testing framework and runner.
   Please refer below url for more details:
   https://jestjs.io/

   In jest.config.js: we can configure some key feature such as collectCoverage, collectCoverageFrom, coverageThreshold etc
   for getting exact code coverage with reports.

### Api
TV shows API: http://www.tvmaze.com/api

#### Endpoints
Shows List: http://api.tvmaze.com/shows
Show details: http://api.tvmaze.com/shows/:id 
Show Thumbnails: http://api.tvmaze.com/shows/:id/images
Search shows: http://api.tvmaze.com/search/shows?q=:query

## Installations
## Vue CLI
```
This has some advantages.
Please refer below urls

https://cli.vuejs.org/

https://cli.vuejs.org/guide/

```
## Installation of vue/cli
Note: You need administrator privileges to execute these unless npm was installed on your system through a Node.js version manager.

```
npm install -g @vue/cli

```
Note: You can check you have the right version with this command:
vue --version

## Project setup
First clone the repository:
```
git clone https://github.com/suryauday9/tvshows-catalog.git
```

To install dependencies and start working on the project run:
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run to see unit tests code coverage
```
npm run test:coverage
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Project Guidelines:

1) Method Naming Convention, 
   variable, object declaration : camelCase
   Example : showDetails, getGenres() etc..

2) Folder Naming Convention, File Naming Convention: PascalCase, kabab-case
   Example : ShowDetails, service.js
   Components in vue : PascalCase
   Example : ListContainer.vue 

3) Vuex Standards:
   a. mutations: camelCase
      ex: setShowDetails
   b. actions: camelCase
      ex: getShowThumbnails
   c. state: camelCase
      ex: genres 
