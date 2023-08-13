import connectDB from "../../../db/dbConnection";

export default async function handler(req, res) {
  const client = await connectDB();
  const reviewCollections = client.db("rog-reboot").collection("reviews");

  if (req.method === "POST") {
    const publicReview = req.body;

    try {
      const response = await reviewCollections.insertOne(publicReview);

      res
        .status(200)
        .json({ message: "Review added successfully!", data: response });
    } catch (error) {
      console.error("Error reading file:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else if (req.method === "GET") {
    const { id } = req.query;

    try {
      const reviews = await reviewCollections.findOne({ productId: id }).toArray();
      console.log(reviews)
      res.status(200).json({
        message: "Reviews received successfully!",
        data: reviews,
      });
    } catch (error) {
      console.error("Error reading file:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
