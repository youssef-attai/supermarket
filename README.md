# Supermarket

My very first React app

### Try it out 

[![GitHub pages link](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white)](https://youssef-attai.github.io/supermarket/)

## Setup the products fake REST API

### Prerequisites

- [Node.js](https://nodejs.org/en/)

### Steps

1. Go to an empty directory, and create a new Node.js project for the dummy products database:

```
mkdir supermarket-db
cd supermarket-db
npm init -y
```

2. Create a file named `db.json` and paste the following in it:

##### db.json

```
{
  "products": [
    {
      "id": 1,
      "image": "https://img.icons8.com/fluency/344/hamburger.png",
      "name": "Burger",
      "type": "food"
    },
    {
      "id": 2,
      "image": "https://img.icons8.com/fluency/344/french-fries.png",
      "name": "Fries",
      "type": "food"
    },
    {
      "id": 3,
      "image": "https://img.icons8.com/fluency/344/cola.png",
      "name": "Cola",
      "type": "drink"
    }
  ]
}
```

3. Install [`json-server`](https://www.npmjs.com/package/json-server) globally:

```
sudo npm install -g json-server
```

4. Start the JSON server on port `3001`

```
json-server --watch db.json -p 3001
```

5. Go back to the React app on [GitHub pages](https://youssef-attai.github.io/supermarket/) and refresh the [Products page](https://youssef-attai.github.io/supermarket/products)