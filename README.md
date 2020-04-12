# Getting started

Clone this repository, and run the install command (preferrably Yarn):

```
yarn install

// or

npm install
```
Start the proyect with Yarn or Npm:

```
yarn start

// or

npm start
```
# Available end-points

### GET /reviews

Gets all the reviews.

### POST /reviews

Creates a review (be sure you are sending the headers via your library).

**Headers**

Content-Type : application/json

**Request body (raw)**

```
{
    "name": "Roy Vargas",
    "rating": "2",
    "date": "10/11/2020",
    "comment": "Estos Cinammon Rolls son excelentes."
}
```

### PUT /reviews/:id

Updates a review. The JSON object must be passed in the request body.

**Headers**

Content-Type : application/json

**Request body (raw)**

```
{
    "name": "Roy Vargas",
    "rating": "2",
    "date": "10/11/2020",
    "comment": "Estos Cinammon Rolls son excelentes."
}
```

### DELETE /reviews/:id

Removes an review given its id.

# Authors
* [Leonel Vega](https://github.com/Leonelcode)

* [Roy Vargas](https://github.com/Royvargas55)

