import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_s3 as s3 } from 'aws-cdk-lib'
import { BlockPublicAccess } from 'aws-cdk-lib/aws-s3';

export class TestinfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new s3.Bucket(this, 'MyFirstBucket', {
      versioned: true,
      bucketName: 'bt-firstappbucket1',     // change bucket name if you get error <bucket name > already exists
      blockPublicAccess : s3.BlockPublicAccess.BLOCK_ALL,
      enforceSSL: false,
    });

  }
}
