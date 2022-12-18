import multer from 'multer';

const fileStorage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, './images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '_' + file.originalname);
    }
})


var upload = multer({
    storage: fileStorage
});

export default upload;