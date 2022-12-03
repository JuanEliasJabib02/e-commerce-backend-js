const multer = require('multer');

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		const pathStorage = __dirname;
		console.log(pathStorage);
		cb(null, pathStorage);
	},
	filename: function (req, file, cb) {
		const ext = file.originalNname.split('.').pop();
		const fileName = `file- ${Date.now()}.${ext}}`;
		cb(null, fileName);
	},
});

const uploadFile = multer({ storage });

module.exports = { uploadFile };
