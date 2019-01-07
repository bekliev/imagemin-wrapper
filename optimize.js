const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminWebp = require('imagemin-webp');

(async () => {
	const mozjpegRes = await imagemin(['images/*.jpg'], 'images/mozjpeg', {
		use: [
			imageminMozjpeg({quality: 70})
		]
	});

    console.log('Images optimized (mozJPEG)');
    console.log('Result:', mozjpegRes.map(image => image.path))
    
    const webpRes = await imagemin(['images/mozjpeg/*.{jpg,png}'], 'images/webp', {
        use: [
            imageminWebp({quality: 70, method: 6})
        ]
    })
    console.log()
    console.log('Images optimized (webp)');
    console.log('Result:', webpRes.map(image => image.path))
})();