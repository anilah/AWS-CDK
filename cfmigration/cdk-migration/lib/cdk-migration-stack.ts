import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cfn_inc from 'aws-cdk-lib/cloudformation-include';
import { aws_s3 as s3, RemovalPolicy } from 'aws-cdk-lib'
import { aws_dynamodb as dynamodb } from 'aws-cdk-lib'
import { RuleTargetInput } from 'aws-cdk-lib/aws-events';
import { ALPN_ENABLED } from 'constants';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkMigrationStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

   
    // The code that defines your stack goes here
    const template = new cfn_inc.CfnInclude(this, 'Template', { 
      templateFile: '../migration-template.json',
    });

    const cfnBucket = template.getResource('mymigrationbucket') as s3.CfnBucket;
    const bucket = s3.Bucket.fromBucketName(this, 'Bucket', cfnBucket.ref);
    
    // changing removal policy 
    cfnBucket.applyRemovalPolicy(RemovalPolicy.RETAIN);
    
    // block public access
    cfnBucket.publicAccessBlockConfiguration = {
      blockPublicAcls: true,
    };

    // enable versioning
    cfnBucket.versioningConfiguration = {
      status : "Enabled"
    }




    
    const CfnTable = template.getResource('DDBTable') as dynamodb.CfnTable;
    const table = dynamodb.Table.fromTableArn(this, 'ImportedTable', CfnTable.attrArn);

    // changing removal policy 
    CfnTable.applyRemovalPolicy(RemovalPolicy.RETAIN);
    
    // modifying time to live specification
    CfnTable.timeToLiveSpecification = {
      attributeName : "test",
      enabled : true
    }

    // enabling PITR

    CfnTable.pointInTimeRecoverySpecification = {
      pointInTimeRecoveryEnabled : true
    }
    




    //}
    //table.applyRemovalPolicy(RemovalPolicy.RETAIN);
    



    

  }
}
