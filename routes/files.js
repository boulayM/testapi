const express = require ('express');
const router = express.Router();
const multer = require ('multer');
const { storage } = require ('../middlewares/files-storage');
const filesService = require ('../services/files');
const Files = require ('../models/file');
const { checkJWT } = require ('../middlewares/private');

const upload = multer ({ storage: storage });


/*router.get('/', checkJWT, async (req, res) => {
    try {
        const files = await File.find();
        res.json(files);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});*/

router.get('/', checkJWT, filesService.getOneFile);

router.post('/', upload.single ('upload_file'), filesService.createOneFile);
router.put('/:id', checkJWT, upload.single ('upload_file'), filesService.modifyOneFile);
   
/*router.put('/:id', checkJWT, async (req, res) => {
    try {
        const files = await File.find();
        res.json(files);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});*/
router.delete('/delete', checkJWT, filesService.deleteOneFile)

/*router.delete('/delete', checkJWT, async (req, res)=>{
    try {
        const files = await File.find();
        res.json(files);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});*/

module.exports = router;