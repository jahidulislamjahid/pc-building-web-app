
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DATABASE_URi
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run(req, res) {
  try {
    await client.connect();

    const pcProducts = client.db("rog-reboot").collection("products")

    if (req.method === "GET") {
      const product = await pcProducts.find({}).toArray()
      res.send({ message: "Sucess", status: 200, data: product })
      console.log(product)
    }
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
  }
}

export default run
