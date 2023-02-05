 import * as cdk from 'aws-cdk-lib';
 import { Template} from 'aws-cdk-lib/assertions';
 import * as Testinfra from '../lib/testinfra-stack';
import { Stack } from 'aws-cdk-lib';
import { aws_s3 as s3 } from 'aws-cdk-lib'


// example test. To run these tests, uncomment this file along with the
// example resource in lib/testinfra-stack.ts
test('S3 bucket name is not changed', () => {
   const app = new cdk.App();
   const stack = new Testinfra.TestinfraStack(app, 'MyTestStack');
   const template = Template.fromStack(stack);
   template.hasResourceProperties('AWS::S3::Bucket', {
    BucketName :'bt-firstappbucket1'
  });
});

test('S3 bucket public access is blocked', () => {
  const app = new cdk.App();
  const stack = new Testinfra.TestinfraStack(app, 'MyTestStack');
  const template = Template.fromStack(stack);
  template.hasResourceProperties('AWS::S3::Bucket', {
    PublicAccessBlockConfiguration: {
      "BlockPublicAcls": true,
      "BlockPublicPolicy": true,
      "IgnorePublicAcls": true,
      "RestrictPublicBuckets": true,
    },
  });
});

test('S3 bucket versioning is enabled', () => {
  const app = new cdk.App();
  const stack = new Testinfra.TestinfraStack(app, 'MyTestStack');
  const template = Template.fromStack(stack);
  template.hasResourceProperties('AWS::S3::Bucket', {
    VersioningConfiguration: {
      "Status": "Enabled"
    },
  });
});

describe("s3", () => {
    test("matches the snapshot", () => {
        const app = new cdk.App();
      const stack = new Testinfra.TestinfraStack(app, 'MyTestStack1');
      const template= Template.fromStack(stack);
      expect(template.toJSON()).toMatchSnapshot();

    });
  });
