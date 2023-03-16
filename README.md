# ReserVAMOS

ReserVAMOS is a web application meant to support local business. Users get a list of local businesses close to their current location and create reservations. In more detail, clients have access to the location on the map of the store and its details and are allowed to create reservations. Business owners can create an account and register their own business.
![](files/mainPage.png)

## Authors

[Valentina Chacón Buitrago](https://github.com/ValentinaChaconBuitrago)

[Juan Diego Arango Ramos](https://github.com/juandarango98)

## Objectives

- Develop a dynamic web page that shows and updates a list of businesses, allowing users to obtain reserve a spot in a businesses close to their current location.
- Allow business owners to register their store and show it to people in the area.
- Allow clients to create reservations for their selected restaurant.
- Create a tool that persists user's information that uses authentication.

## Technologies used

- HTML, CSS, Bootstrap, Javascript, Node.js, Express.js, MongoDB, Mongo Atlas, React, Google Maps, WebSockets, Jest.

## Application deployment

This application has both a front and back end, and it is necessary to have a certain setup in order to use it.

### Requirements

#### Node.js

If you don't have Node.js installed, you can download it [here](https://nodejs.org/en/).

#### MongoDB

If you're storing your data locally, install Mongo following the instructions [here](https://www.mongodb.com/en).
Once you have installed Mongo, run the following command in your terminal:

```
mongod
mongo
```

In case you are using Mongo Atlas and your data is stored in the cloud, whitelist your IP address and create a new data base user. More details on how to configure this set up [here](https://docs.atlas.mongodb.com/driver-connection/).

### Yarn for MAC

This project was developed using MAC's iOS, if using this same OS install yarn using the following command:

```
brew install yarn
```

Because this project was implemented using Mongo Atlas, the database is already available so, to run the application, just follow these steps:

- Clone the repository
- Open a terminal window and in the root folder type to deploy the front-end of the application

```
cd front
yarn start
```

- Open another terminal window and in the root folder type to deploy the back-end of the application

```
yarn start
```

- In case you don't have all the dependencies needed for the deplyment just do

```
yarn add [dependency name]
```

After this, the application will be available at http://localhost:3000/

## Deployed Application

[reserVAMOS](https://reservamos.herokuapp.com/)

## License

[MIT License](https://github.com/ValentinaChaconBuitrago/local_business/blob/master/LICENSE)
