# Supermarket

My very first React app

## How to run

You will need [Node.js](https://nodejs.org/en/) to run this app locally on your machine.

1. Clone the repo:

```
git clone https://github.com/youssef-attai/supermarket.git
cd supermarket
```

2. Install the dependencies:

```
npm install
```

3. Go to an empty directory, and create a new Node.js project for the dummy products database:

```
mkdir supermarket-db
cd supermarket-db
npm init -y
```

4. Create a file named `db.json` and paste the following in it:

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

5. Install [`json-server`](https://www.npmjs.com/package/json-server) globally:

```
sudo npm install -g json-server
```

6. Start the JSON server on port `3001`

```
json-server --watch db.json -p 3001
```

7. Go back to the React app, and run it:

```
cd supermarket
npm start
```