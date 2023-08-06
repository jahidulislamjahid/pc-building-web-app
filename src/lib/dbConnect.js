
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
