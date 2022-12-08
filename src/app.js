import express from "express"
import { categoriesRoutes } from "./routers/categories.router"
import { productsRoutes } from "./routers/products.router"

const app = express()

app.use(express.json())
app.use('/categories', categoriesRoutes)
app.use('/products', productsRoutes)


export default app
