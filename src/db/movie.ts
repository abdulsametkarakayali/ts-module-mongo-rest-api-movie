import mongoose, { Document, Model } from 'mongoose';

export interface MovieAttributes {
  title: string;
  category: string;
  country: string;
  year: number;
  imdb_score: number;
  createdAt?: Date;
}

export interface MovieDocument extends Document, MovieAttributes {}

// MovieModel'i tanımlama
const movieSchema = new mongoose.Schema<MovieDocument>({
  // Schema ayarları
});

export const MovieModel: Model<MovieDocument> = mongoose.model<MovieDocument>('Movie', movieSchema);
