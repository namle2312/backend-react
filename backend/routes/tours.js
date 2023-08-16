import express from 'express'
import {
    createTour,
    deleteTour,
    getAllTour,
    getSingleTour,
    updateTour,
    getTourBySearch,
    getFeaturedTour,
    getTourCount
} from '../controllers/tourController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router()

// create new tour(admin)
router.post('/', verifyAdmin, createTour);

// update new tour(admin)
router.put('/:id', verifyAdmin, updateTour);

// delete new tour(admin)
router.delete('/:id', verifyAdmin, deleteTour);

// get single tour
router.get('/:id', getSingleTour);

// get all tour
router.get('/', getAllTour);

// get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCount)


export default router;