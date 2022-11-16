import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import multer from "multer";
const app = express();
app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
  })
const upload = multer({ storage: storage })
app.post('/api/upload', upload.single('file'), function (req, res) {
    const file  = req.file
    res.status(200).json(file.filename)
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
  })

app.use(express.json());
app.use(cookieParser());

app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(8800, () => {
    console.log("Connected!!!!");
});