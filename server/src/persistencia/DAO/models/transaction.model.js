import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    tipo: {
      type: String,
      required: true,
    },
    monto: {
      type: Number,
      required: true,
    },
    mensaje: {
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
    destination_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  });
  
  const Transaction = mongoose.model('Transaction', transactionSchema);
  
  module.exports = Transaction;