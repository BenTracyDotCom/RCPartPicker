# RC Part Picker (working title)

## Getting Started:
1. Clone repo
```
git clone https://github.com/BenTracyDotCom/RCPartPicker
```
2. If you haven't got MongoDB installed, you'll need to set up a local instance. This project is currently only configured to work on a local MongoDB instance.
 - https://www.mongodb.com/docs/manual/tutorial/getting-started/
 - I highly recommend installing MongoDB Compass to manage data
3. Environment variables.
 - Copy example.env to its own file called simply ".env".
4. Install dependencies.
```
npm install
```
5. Start server
```
npm run server
```
6. Start dev client
```
npm run dev
```
7. Look for ToDos and mind the linter! She'll let you know if you're about to break something.

## DB Parts Schema
An add-part modal to populate the database is the next construction item. Until then, you'll have to find an inelegant way to get parts into the database according to the following schema:

### Airframes
//TODO

### Batteries
//TODO

### ESC's
//TODO

### FC's
//TODO

### Motors
//TODO

### Propellers
//TODO

### Receivers
//TODO

### Servos
//TODO

### Transmitters
//TODO


## Tech Stack

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/-Axios-671ddf?logo=axios&logoColor=black&style=for-the-badge)
![Express](https://img.shields.io/badge/-Express-DCDCDC?logo=express&logoColor=black&style=for-the-badge)

## TODO:
- Implement add-part modal to get parts into DB
- Connect order-status checkmark status to build object to they persist
- Write web scraper to check all DB part page URLs for current prices
- Refactor airframe schema to accept part requirements