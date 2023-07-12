import express from 'express'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
import { categoryControlller, createCategoryController, deleteCategoryCOntroller, singleCategoryControlller, updateCategoryController } from '../controller/categoryControllerr.js'
const router = express.Router();
router.post('/create-category',requireSignIn,isAdmin,createCategoryController)
router.put("/update-category/:id",requireSignIn,isAdmin,updateCategoryController)
router.get("/get-category",categoryControlller)
router.get("/single-category/:slug",singleCategoryControlller)
router.delete("/delete-category/:id",requireSignIn,isAdmin,deleteCategoryCOntroller)
export default router