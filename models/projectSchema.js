import mongoose, { models, model} from 'mongoose';

// Define the schema for the Project collection
const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  url: String,
});

// Create and export the Project model
export default models.Project || model('Project', projectSchema);
