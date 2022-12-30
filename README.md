# Warbler

This is an implementation of the final exercise, Warbler, from [The Advanced Web Developer Bootcamp](https://www.udemy.com/course/the-advanced-web-developer-bootcamp/) Udemy training course.

It is implemented using:

- NodeJS and Express
- React and Redux
- MongoDB and Mongoose

As well as an impmlementation of the training exercise this repository contains:

- A script for using MongoDB in Docker during development, including access to the Mongo shell. `tools\devMongoDB.sh`
- Notes for using Mongo shell commands to validate the state of the Mongo database collections. `docs\mongo-cheatsheet.md`
- Notes for using Curl for manual validation of the functionality. `docs\curl-cheatsheet.md`

## Starting MongoDB for Development

Ensure Docker (e.g. Docker Desktop) is started.

```bash
cd tools
./devMongoDB.sh start
```

## Starting Warbler Server for Development

```bash
cd warbler-server
node index.js
```

N.B. For a production deployment: modify SECRET_KEY in `.env`, and add that file to `.gitignore`.

## Starting Warbler Client for Development

```bash
cd warbler-server
npm start
```
