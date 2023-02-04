# Welcome to your CDK TypeScript project

AWS CDK -  Migrate cloudformation(json) project to CDK

1. AWS CLI is configured : test using this command aws s3 ls  </br>
2. Account is bootstraped : cdk bootstrap aws://ACCOUNT-NUMBER/REGION </br>
3. Create directory : mkdir cfmigration & go inside that </br>
4. Create a cloudfomration project template for S3 & dynamoDB Table</br>
5. Create stack using command: aws cloudformation deploy --template-file .\migration-template.json --stack-name cfstack --region ap-southeast-2 </br>
6. Delete stack using command : aws cloudformation delete-stack --stack-name cfstack  --region ap-southeast-2 </br>
7. Command to list stack events : aws cloudformation describe-stack-events --stack-name cfstack --region ap-southeast-2 </br>
8. Create directory : mkdir cdk-migration & create CDK project inside that </br>
9. Use the cloud formation template in cdk project using cloudformation-include </br>
10. please keep the same stack name in cdk project which is used for cloudformation stack </br>
11. Deploy using command : cdk deploy 
12. All new changes should be done in cdk project

Refrences : 
Import (migrate) an AWS CloudFormation template : https://docs.aws.amazon.com/cdk/v2/guide/use_cfn_template.html
Migrating CloudFormation templates to the AWS CDK : https://aws.amazon.com/blogs/developer/migrating-cloudformation-templates-to-the-aws-cloud-development-kit/
