# Valid Chess Movements

Valid Chess Movements is a Ruby on Rails + ReactJS application that provides Chess Knight movements.

## Running

Use [Docker](https://docs.docker.com/) to run the application.

```bash
# Use --build arg in the first running to generate Docker builds.
docker-compose up --build
```

After lifting the application, just go to `http://localhost:3000` and enjoy. ;)

### Important

If you are on Linux OS, go to `./docker-compose.yml` and change `REACT_APP_API` environment to correct path.

## Running the tests

### Ruby on Rails

```bash
docker-compose exec api bash && rspec
```

### ReactJS

```bash
docker-compose exec web bash && yarn test
```

## Built With

- [Ruby on Rails](http://www.dropwizard.io/1.0.2/docs/) - The web framework used in the back-end.
- [ReactJS](https://maven.apache.org/) - The web framework used in the front-end.

## Contributing

- Pull requests are welcome.
- For major changes, please open an issue first to discuss what you would like to change.
- Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
