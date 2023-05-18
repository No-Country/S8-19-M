import mongoose from "mongoose"

const supporterSchema = new mongoose.Schema({
    consulta: {
      type: String,
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
  
  const Supporter = mongoose.model('Supporter', supporterSchema);
  
  module.exports = Supporter;