const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Generate unique filename
    },
  });
  const upload = multer({ storage }).array('images', 10); // Adjust max number of files

module.exports = upload;
