const gulp = require("gulp")
const awspublish = require("gulp-awspublish")

// aws s3 へのデプロイ
gulp.task("deploy", (done) => {
  const publisher = awspublish.create({
    "accessKeyId": "AKIAUWPUYX7L23ENHQEG",  //ここには記述したくない
    "secretAccessKey": "TXG4XQc90kSZ7t9lD9ZzLF4eXsoJwyyHv2xXBw1z",  //ここには記述したくない
    "params": {
      "Bucket": "www.aualrxse.com"
    },
    "endpoint": "s3-ap-northeast-1.amazonaws.com"  //公開先のエンドポイント
  })
  gulp.src("build/**/*")
    .pipe(publisher.publish())
    .pipe(publisher.sync())
    .pipe(awspublish.reporter())
  done()
})
