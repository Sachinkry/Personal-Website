import connectDB from '../../utils/db';
import Project from '../../models/projectSchema';
import mongoose from 'mongoose';

export default async function handler(req, res) {
  if (!mongoose.connections[0].readyState) await connectDB();

  const { method } = req;

  try {
    if (method === 'GET') {
      res.setHeader('Cache-Control', 'public, max-age=3600');
      const projects = await Project.find({});
      return res.status(200).json(projects);
    }

    if (method === 'POST') {
      const { name, description, url } = req.body;
      const newProject = new Project({ name, description, url });
      return res.status(201).json(await newProject.save());
    }
  } catch (error) {
    return res.status(500).json({ message: 'Server Error', error });
  }
}
