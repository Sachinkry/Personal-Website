import {mongoose, models, model} from 'mongoose';

const threadSchema = new mongoose.Schema({
  
  title: String,
  url: String,
  date: String,
});

export default models.Thread || model('Thread', threadSchema);
