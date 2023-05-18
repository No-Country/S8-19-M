import mongoose from "mongoose";

const investmentSchema = new mongoose.Schema({
    tipo: {
      type: String,
      required: true,
    },
    cantidad: {
      type: Number,
      required: true,
    },
    fecha: {
      type: Date,
      default: Date.now,
    },
    usuario_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  });
  
  const Investment = mongoose.model('Investment', investmentSchema);
  
  module.exports = Investment;