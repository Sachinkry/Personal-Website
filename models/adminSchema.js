import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: String,
    github: String,
    twitter: String,
    goodreads: String,
    email: String,
    music: String,
    drawing: String,
})

export default mongoose.models.Admin || mongoose.model('Admin', adminSchema);