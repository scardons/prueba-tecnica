import app from "./index"; 
import { swaggerDocs } from "./config/swagger"; 

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  swaggerDocs(app, PORT); 
});
