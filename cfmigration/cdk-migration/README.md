# Welcome to your CDK TypeScript project

AWS CDK -  Migrate cloudformation(json) project to CDK

AWS CLI is configured : test using this command aws s3 ls 
Account is bootstraped : cdk bootstrap aws://ACCOUNT-NUMBER/REGION
Create directory : mkdir cfmigration & go inside that
Create a cloudfomration project template for S3 & dynamoDB Table
create stack using command: aws cloudformation deploy --template-file .\migration-template.json --stack-name cfstack --region ap-southeast-2
delete stack using command : aws cloudformation delete-stack --stack-name cfstack  --region ap-southeast-2
Command to list stack events : aws cloudformation describe-stack-events --stack-name cfstack --region ap-southeast-2
Create directory : mkdir cdk-migration & go inside that
use the cloud formation template in cdk project using cloudformation-include
please keep the same stack name in cdk project which is used for cloudformation stack
Deploy using command : cdk deploy 
All new changes should be done in cdk project

Refrences : 
Import (migrate) an AWS CloudFormation template : https://docs.aws.amazon.com/cdk/v2/guide/use_cfn_template.html
Migrating CloudFormation templates to the AWS CDK : https://aws.amazon.com/blogs/developer/migrating-cloudformation-templates-to-the-aws-cloud-development-kit/
