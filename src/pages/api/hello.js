// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import dbConnect from '../../lib/dbConnect';

export default async function handler(req, res) {
  const client = await dbConnect();

  try {
    const collection = client.db().collection('rog-reboot');
    const rogReboot = await collection.find({}).toArray();
    res.status(200).json(rogReboot);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}

