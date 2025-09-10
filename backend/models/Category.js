const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    description: { type: String, default: '' },
  },
  { timestamps: true }
);

categorySchema.index({ name: 1 });

module.exports = mongoose.model('Category', categorySchema);


