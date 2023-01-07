import mongoose from 'mongoose';

/**
 * Database connection
 */
export const connectDatabase = async (): Promise<void> => {
  mongoose.connect(process.env.MONGO_URI!).then(() => {
    console.log('[DATABASE] Succesfulls Connected to MongoDB');
  });
};
