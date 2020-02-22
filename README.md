# Bike Sharing APP

A simple React frontend to render NYC’s Citi bike station data.

## Dependencies

### Demo

- Docker
- Docker Compose

### Contribute

Demo ones and also:

- nvm

## How to run the app

- Just run `$ docker-compose up` and the app will be running on the port [**`:8000`**](localhost:8000).

## Development

- Go to `~/web/` and run:
  - `$ nvm install`
  - `$ npm i`
  - `$ npm start` and the app will be running at port **`:8080`**.

## Next steps

Besides an re-structure the FE add test for all the current process/components, we can improve the UIX by:

- On the homepage:
  - add sort buttons where the user can sort asc or desc by Available Docs or Docks on total. (LE: not so easy)
  - order the stations by name. (easy)
  - Give some kind of feedback if something goes wrong with the fetch request. (easy)
  - Add a refresh button to gather the state of all the stations and compare with the current one to just update the necessary ones. (not so easy)

- On the bikeshare details view:
  - Add google map support: since the payload of the data has the coordinates of the station and we have a lot of free space on the view. should be easy to implement. (easy)
  - implement a "Back button": the users have to click the title to go back see the list of stations. (easy)

- On the API
  - Implement some sort of cache, were we can hold on memory for like a minute the last request, so we don't hit the remote url so often. (easy)

- About the DX:
  - Add a new container with a nginx server to compile our FE and configure it to serve it.(medium)
  - Customize the endpoint url and the port: right now the FE make a fetch request to a hardcoded url. It could be better if these values come from an .env file or a webpack.config. The same goes to the API. (medium)
  - Implement pre commit/push steps to lint, test the code. (easy)

Calculating that the new designs for the two pages aren't that complicated to implement, I can say that this could take a week at most.
