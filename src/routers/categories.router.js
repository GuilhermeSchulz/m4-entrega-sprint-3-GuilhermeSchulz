import {
    Router
} from "express";
import {
    deleteCategoryController,
    editSpecificCategoryController,
    getCategoriesController, getSpecificCategoryController, postCategoryController
} from "../controllers/categoriesController";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { verifyCategoryId } from "../middlewares/ensureIdIsValid.middleware";
import { ensureCategoryExistsMiddleware } from "../middlewares/ensureProductNotExist.middleware";
import { createCategorySchema } from "../schemas/categories.schemas";

export const categoriesRoutes = Router()


categoriesRoutes.get("", getCategoriesController)
categoriesRoutes.post("",ensureCategoryExistsMiddleware, ensureDataIsValidMiddleware(createCategorySchema), postCategoryController)
categoriesRoutes.get("/:id",verifyCategoryId, getSpecificCategoryController)
categoriesRoutes.patch("/:id",verifyCategoryId, ensureDataIsValidMiddleware(createCategorySchema), editSpecificCategoryController)
categoriesRoutes.delete("/:id", verifyCategoryId, deleteCategoryController)