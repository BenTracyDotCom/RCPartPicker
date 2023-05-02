# RC Part Picker

### Build Page

![Imgur](https://i.imgur.com/tqGCIXc.jpg)
![Imgur](https://i.imgur.com/pOD6PPC.jpg)

### Add parts

![Imgur](https://i.imgur.com/yl51NVr.jpg)

### Part validation

![Imgur](https://i.imgur.com/UaESxkd.jpg)

### Part list

![Imgur](https://i.imgur.com/M5O8BYA.jpg)

## Getting Started
1. Clone repo
```
git clone https://github.com/BenTracyDotCom/RCPartPicker
```
2. If you haven't got MongoDB installed, you'll need to set up a local instance. This project is currently only configured to work on a local MongoDB instance.
 - https://www.mongodb.com/docs/manual/tutorial/getting-started/
 - I highly recommend installing MongoDB Compass to manage data
3. Environment variables
 - Copy example.env to its own file called simply ".env".
4. Install dependencies
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

## Parts Schema
An add-part modal to populate the database is the next construction item. Until then, you'll have to find an inelegant way to get parts into the database according to the following schema:

### Airframes
```
name: String,
type: "airframe",
data: {
  engines: Number (determines required motors, props),
  wingspan: String(opt),
  anythingYouFindWorthNoting: String,
  includes: [
    {
      type: String (lowercase, must be valid part type!)
      name: String,
      qty: Number
    },
    {
      type: "esc" or "servo" etc,
      name: "Example Plane ESC",
      qty: 1
    }
  ],
  photoUrl: String,
  prices: [
    {
      host: String,
      url: String,
      price: String
    },
    {
      host: "domain name, might be used for trend analysis someday"
      url: "thisWillBeTheActiveLinkOnAllIncludedComponents.com",
      price: "thisWillBeComparedAndOnlyTheLowestWillShowWithItsAssociatedURL.99"
    }
  ]
}
```
### Batteries
```
name: String,
type: "battery",
data: {
  voltage: String (e.g. "3S"),
  capacity: String (e.g. "2200mAh"),
  connector: String (e.g. "IC3"),
  c_rating: String (e/g/ 30C)
},
photoUrl: String,
prices: [same as above]
```
### ESC's
```
name: String,
type: "esc",
data: {
  battery: String range (e.g. "2s-4s"),
  connector: String (e.g. "IC3")
}
photoUrl: String,
prices: [same as above]
```
### FC's
```
name: String,
type: "esc",
data: TODO
photoUrl: String,
prices: [same as above]
```
### Motors
```
name: String,
type: "motor",
data: TODO
photoUrl: String,
prices: [same as above]
```
### Propellers
```
name: String,
type: "propeller",
data: TODO
photoUrl: String,
prices: [same as above]
```
### Receivers
```
name: String,
type: "receiver",
data: {
  protocol: String separated by commas (e.g. "DSM2, DSMX"),
  channels: Number,
  weight: String(opt),
  dimensions: String separated by x (e.g. "15mm x 49mm x 30mm")(opt)
},
photoUrl: String,
prices: [same as above]
```
### Servos
```
name: String,
type: "servo",
data: TODO
photoUrl: String,
prices: [same as above]
```
### Transmitters
```
name: String,
type: "transmitter",
data: {
  protocol: String(currently only "DSMX", "CRSF", and "ACCESS" are supported in the validator),
  channels: Number
},
photoUrl: String,
prices: [same as above]
```

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