import connectDB from '../../utils/db';
import Admin from '../../models/adminSchema';
import mongoose from 'mongoose';

export default async function handler(req, res) {
  const { method } = req;
  if (!mongoose.connections[0].readyState) {
    await connectDB();
  }

  try {
    

    if (method === 'GET') {
      const adminData = await Admin.find({});
      res.status(200).json(adminData);
    }

    
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ message: 'Server Error', error });
  }
}

