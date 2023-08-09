//
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
// async function run(req, res) {
//   try {
//     await client.connect();
//
//     const pcProducts = client.db("rog-reboot").collection("products")
//
//     if (req.method === "GET") {
//       const product = await pcProducts.find({}).toArray()
//       res.send({ message: "Sucess", status: 200, data: product })
//       // console.log(product)
//     }
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//   }
// }
//
// export default run
//


// pages/api/examples.js
import dbConnect from '../../lib/dbConnect';

export default async function handler(req, res) {
  const client = await dbConnect();
  if (req.method === "GET") {
    const { category } = req.query;

    try {
      const collection = client.db("rog-reboot").collection("products");
      const productsDB = await collection.find({}).toArray();
      // res.status(200).json(productsDB);


      if (category) {
        const filtered = productsDB.filter(
          (product) => product.category === category
        );
        res
          .status(200)
          .json({ message: "Products received successfully", data: filtered });
      } else {
        res.status(200).json(productsDB)
        // res.status(200).json({
        //   message: "Products received successfully",
        //   data: productsDB,
        // });
      }
      // console.log(productsDB)
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  }
}

// export default async function handler(req, res) {
//   if (req.method === "GET") {
//     const { category } = req.query;
//
//     try {
//       const data = fs.readFileSync(filePath, "utf8");
//       const products = JSON.parse(data);
//
//       if (category) {
//         const filtered = products.filter(
//           (product) => product.category === category
//         );
//
//         res
//           .status(200)
//           .json({ message: "Products received successfully", data: filtered });
//       } else {
//         res.status(200).json({
//           message: "Products received successfully",
//           data: products,
//         });
//       }
//     } catch (error) {
//       console.error("Error reading file:", error);
//       res.status(500).json({ message: "Internal server error" });
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }
