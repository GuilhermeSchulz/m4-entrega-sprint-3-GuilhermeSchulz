import "express-async-errors"
import express from "express"
import { errorHandler } from "./errors"
import { categoriesRoutes } from "./routers/categories.router"
import { productsRoutes } from "./routers/products.router"

const app = express()

app.use(express.json())

app.use('/categories', categoriesRoutes)
app.use('/products', productsRoutes)
app.use(errorHandler)

export default app
