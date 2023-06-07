import connectDB from '../../utils/db';
import Thread from '../../models/threadSchema';

export default async function handler(req, res) {
  const { method } = req;

  try {
    await connectDB();

    if (method === 'GET') {
      const threads = await Thread.find({});
      res.status(200).json(threads);
    }

    if (method === 'POST') {
      const { title, url, date } = req.body;

      if (!title || !url || !date) {
        res.status(400).json({ message: 'Missing required fields' });
        return;
      }

      const newThread = new Thread({ title, url, date });

      await newThread.save();

      res.status(201).json(newThread);
    }
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ message: 'Server Error', error });
  }
}
