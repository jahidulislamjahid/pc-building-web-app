import connectDB from "../../../../db/dbConnection";

export default async function handler(req, res) {
  const client = connectDB()
  if (req.method === "GET") {
    try {
      const { productId } = req.query;

      const collection = (await client).db("rog-reboot").collection("products")
      const allProducts = await collection.find({}).toArray({})
      const product = allProducts.find(
        (product) => product.id.toString() === productId
      );

      // console.log(product);

      if (!product) {
        res.status(404).json({ message: "Product not found" });
      }
      const relatedProduct = allProducts
        .filter(
          (related) =>
            related.category === product.category &&
            related.name !== product.name
        )
        .slice(0, 5);

      product.related = relatedProduct;

      res.status(200).json({
        message: "Product received successfully",
        data: product,
      });
    } catch (error) {
      console.error("Error reading file:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
