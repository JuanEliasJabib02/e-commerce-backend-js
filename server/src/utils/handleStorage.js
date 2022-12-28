const multer = require('multer');
const multerS3 = require('multer-s3');
const { s3 } = require('../services/storage/storage.service');

const uploadFile = multer({
	storage: multerS3({
		s3,
		bucket: 'hideshi-store-dev',
		acl: 'public-read',
		contentType: multerS3.AUTO_CONTENT_TYPE,
		metadata: function (req, file, cb) {
			cb(null, { fieldName: file.fieldname });
		},
		key: function (req, file, cb) {
			const ext = file.originalname.split('.').pop();
			const filename = `file-${Date.now()}.${ext}`;
			cb(null, filename);
		},
	}),
});

module.exports = { uploadFile };
