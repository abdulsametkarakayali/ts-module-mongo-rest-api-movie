import { Request, Response } from "express";
import { MovieModel,MovieDocument } from "../db/movie";

export const createMovie = async (req:Request, res: Response )=> {
    try {
        const movie = await MovieModel.create(req.body);
        res.status(201).json(movie);
    } catch (error) {
        console.error('Movie creation error:', error);
        res.status(500).json({ error: 'An error occurred while creating the movie.'})
    }
};