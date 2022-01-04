// ANCHOR: AWS SDK
import AWS from 'aws-sdk';

// ANCHOR: Upload Data
export function uploadData(file) {
  AWS.config.update({
    accessKeyId: process.env.S3_AWS_ACCESS_KEY,
    secretAccessKey: process.env.S3_AWS_SECRET_KEY,
  });

  const bucket = new AWS.S3({
    region: process.env.S3_AWS_REGION,
  });

  const params = {
    ACL: 'public-read',
    Bucket: process.env.S3_AWS_BUCKET_NAME,
    Key: `photos/display-photo/${file.name}`,
    ContentType: file.type,
    Body: file,
  }

  bucket.upload (params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } if (data) {
      console.log("Upload Success", data.Location);
    }
  });
};
