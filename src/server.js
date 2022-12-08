import app from "./app";
import { startDatabase } from "./database";
import * as dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3000


export default app.listen(PORT,async () => {
    await startDatabase();
    console.log(`Server running on: http://localhost:${PORT}`);
});