import {
    Router
} from "express";
import {
    deleteCategoryController,
    editSpecificCategoryController,
    getCategoriesController, getSpecificCategoryController, postCategoryController
} from "../controllers/categoriesController";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createCategorySchema } from "../schemas/categories.schemas";

export const categoriesRoutes = Router()


categoriesRoutes.get("", getCategoriesController)
categoriesRoutes.post("",ensureDataIsValidMiddleware(createCategorySchema), postCategoryController)
categoriesRoutes.get("/:id",getSpecificCategoryController)
categoriesRoutes.patch("/:id",ensureDataIsValidMiddleware(createCategorySchema), editSpecificCategoryController)
categoriesRoutes.delete("/:id",deleteCategoryController)