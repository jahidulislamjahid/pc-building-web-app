import connectDB from "../../../db/dbConnection";

export default async function handler(req, res) {
  const client = await connectDB()
  if (req.method === "GET") {
    try {
      const collection = client.db("rog-reboot").collection("products")
      const productsDB = await collection.find({}).toArray({})

      res.status(200).json({
        message: "Products received successfully",
        data: productsDB
          .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
          .slice(0, 20),
      });
    } catch (error) {
      console.error("Error reading file:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    // For other HTTP methods, return an error
    res.status(405).json({ message: "Method not allowed" });
  }
}
