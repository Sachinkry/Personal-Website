import connectDB from '../../utils/db';
import Thread from '../../models/threadSchema';

export default async function handler(req, res) {
  const { method } = req;

  try {
    await connectDB();

    if (method === 'GET') {
      res.setHeader('Cache-Control', 'public, max-age=3600');
      const threads = await Thread.find({});
      return res.status(200).json(threads);
    }

    if (method === 'POST') {
      const { title, url, date } = req.body;
      if (!title || !url || !date) return res.status(400).json({ message: 'Missing fields' });

      const newThread = new Thread({ title, url, date });
      await newThread.save();
      return res.status(201).json(newThread);
    }
  } catch (error) {
    return res.status(500).json({ message: 'Server Error', error });
  }
}
