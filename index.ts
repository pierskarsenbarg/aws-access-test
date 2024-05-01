import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("my-bucket");

const bucketobject = new aws.s3.BucketObject("bucketobject", {
    source: new pulumi.asset.FileAsset("file.txt"),
    bucket: bucket.bucket
})

// Export the name of the bucket
export const bucketName = bucket.id;
