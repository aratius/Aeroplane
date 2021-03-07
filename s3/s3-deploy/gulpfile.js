const gulp = require("gulp")
const awspublish = require("gulp-awspublish")

gulp.task("deploy", (cb) => {
  const publisher = awspublish.create({
    "accessKeyId": "AKIAUWPUYX7L23ENHQEG",
    "secretAccessKey": "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",
    "params": {
      "Bucket": "www.aualrxse.com"
    },
    "endpoint": "s3-ap-northeast-1.amazonaws.com"
  })
  gulp.src("build/**/*")
    .pipe(publisher.publish())
    .pipe(publisher.sync())
    .pipe(awspublish.reporter())
  cb()
})
