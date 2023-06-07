import { connectDB } from '../../utils/db';
import Project from '../../models/projectSchema';
import mongoose from 'mongoose';

export default async function handler(req, res) {
  const { method } = req;
  // await connectDB();
  // instead of using connectDB() we can use this to avoid the error status code 500
  if (!mongoose.connections[0].readyState) {
    await connectDB();
  }

  try {

    if (method === 'GET') {
      const projects = await Project.find({});
      res.json(projects);
    }

    if (method === 'POST') {
      const { name, description, url } = req.body;
      console.log(name, description, url);
      const newProject = new Project({
        name,
        description,
        url,
      });

      // console.log('New project:', newProject);
      res.json(await newProject.save());
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
}
