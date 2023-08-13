import connectDB from "../../../db/dbConnection";



export default async function handler(req, res) {
  const clientdata = connectDB()
  if (req.method === "GET") {
    const { category } = req.query;

    try {
      const collectiondata = (await clientdata).db("rog-reboot").collection("products")
      const allProducts = await collectiondata.find({}).toArray({})

      if (category) {
        const filtered = allProducts.filter(
          (product) => product.category === category
        );

        res
          .status(200)
          .json({ message: "Products received successfully", data: filtered });
      } else {
        res.status(200).json({
          message: "Products received successfully",
          data: allProducts,
        });
      }
    } catch (error) {
      console.error("Error reading file:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
