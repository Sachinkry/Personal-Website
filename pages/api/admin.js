import connectDB from '../../utils/db';
import Admin from '../../models/adminSchema';
import mongoose from 'mongoose';

export default async function handler(req, res) {
  if (!mongoose.connections[0].readyState) await connectDB();

  const { method } = req;

  try {
    if (method === 'GET') {
      res.setHeader('Cache-Control', 'public, max-age=3600');
      const adminData = await Admin.find({});
      return res.status(200).json(adminData);
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Server Error', error });
  }
}
