import mongoose from "mongoose";

const virtualWalletSchema = new mongoose.Schema({

    isInversor: {
      type: Boolean,
      required: true,
    },
    saldo: {
      type: Number,
      required: true,
    },
    intereses: {
      type: Number,
      required: true,
    },
    usuario_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  });
  
  const VirtualWallet = mongoose.model('VirtualWallet', virtualWalletSchema);
  
  module.exports = VirtualWallet;