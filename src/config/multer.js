const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'temp', 'uploads'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'temp', 'uploads'))
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(5, (err, hash) => {
                if(err) {
                    cb(err)
                } else {
                    const fileName = `${hash.toString('hex')}-${file.originalname}`
                    cb(null, fileName)
                }
            })
        },
    }),
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    fileFiler: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
        ]

        if(allowedMimes.includes(file.mimetype)) {
            cb(null, true)
        } else {
            cb(new Error('Formato inválido!'))
        }
    }

}