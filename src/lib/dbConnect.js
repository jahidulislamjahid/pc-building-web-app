
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.DATABASE_URi
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let cachedClient = null;

export default async function dbConnect() {
  if (cachedClient) {
    return cachedClient;
  }

  if (!MONGODB_URI) {
    throw new Error(
      'Please define the MONGODB_URI environment variable inside .env.local'
    );
  }

  const client = new MongoClient(MONGODB_URI, options);
  await client.connect();
  cachedClient = client;

  return client;
}




// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = process.env.DATABASE_URi
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
//
// async function run() {
//   try {
//     await client.connect();
//     console.log("database connected successfully")
//     // const pcProducts = client.db("rog-reboot").collection("products")
//
//     // if (req.method === "GET") {
//     //   const product = await pcProducts.find({}).toArray()
//     //   res.send({ message: "Sucess", status: 200, data: product })
//     //   // console.log(product)
//     // }
//     // console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//   }
// }
//
// // run().catch(console.dir);
// export default run
