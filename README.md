### Maintainable JavaScript

#### Get started

First checkout the code:

```sh
git clone git@github.com:abruzzi/tw-testable-javascript.git
```

and initialize the environment:

```sh
cd tw-testable-javascript
bower install
```

once the installation is finished, you should make sure the backend service is working as expected:

```sh
curl http://locations-backend.herokuapp.com/locations
```

Note that you can perform a serach by city name, like:

```sh
curl http://locations-backend.herokuapp.com/locations/Melbourne
```

will return all locations that are contain `Melbourne`.

#### Launch the app

Once you have done the previous steps, you can run the server by:

```sh
./server.sh
```

If everything goes well, you can see some location information in the console of the brower if you
open `http://localhost:9999/`.

