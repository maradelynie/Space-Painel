# Space Painel - Frontend 

Space Painel is a web application that will keep the Rebels updated about the status of planest and allies all over the universe.

The application was made in ReactJs, using Redux, axios and other libraries. The Backend was made in NodeJs, a simple API using mongoose and simple ways to make autentication and keep the data safe, check it here: https://github.com/maradelynie/Space-painel-Backend .

## Getting Started

For to have this project running on your computer you just need to clone the the repo and run $ yarn or $ npm install.

### Prerequisites

First of all you will need NodeJs, a browser that can run V8 engine like Chrome and a packege manager like NPM (but I strongly recommend to use Yarn)


[Get Node Here](https://nodejs.org/en/) 

[Get Yarn Here](https://yarnpkg.com/) 

This project uses DataBase from MongoDB, for use that you will need to have an Cluster with a database "askMe" on atlas MongoDB.

[SingUp MongoDB Here](https://cloud.mongodb.com/)



### preparing;

The BASE URL of the api is already there for to use my API, but if you wish to change it just acesses src>api>inde.j and change the const base, at the top of the file.

### install;

At your terminal navigate to frontend folder and use the same;

```
$ npm install    (or)       $ yarn 
```
(wait till finished)


### run the app;

At your terminal past the following command line;

```
$ npm run start   (or)       $ yarn start
```

Now the application is running. It will open on your browser.(if not just open http://localhost:3000/ and wait till load)


## Deployment

The app is deployed on Vercel in the following url:

[Space Painel](https://space-painel.vercel.app/) 

For to login use the following credentials:

email:
```
mara@mara.com
```
password
```
123
```


## Supported on

```
Chrome
Safari
Firfox
```

## Made With

* reactJs ^16.13.1
* Redux ^4.0.5
* Sass (node-sass) ^4.14.1


* axios ^0.19.2
* Express 4.17.1
* mongoose 5.9.19
* mongoDB 3.5.9


* git
* opentdb
* vercel

-See more at packege.json on backend and frontend folder

## Authors

**Mara Oliveira** 


## License

 MIT
