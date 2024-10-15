const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // await mongoose.connect('mongodb+srv://AdarshKumar:7903848803@cluster0.bpglqqv.mongodb.net/schoolfee', {
    await mongoose.connect('mongodb+srv://AdarshKumar:7903848803@cluster0.bpglqqv.mongodb.net/svnfee',{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
