#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkMigrationStack } from '../lib/cdk-migration-stack';
import { Tags } from 'aws-cdk-lib';

const app = new cdk.App();
const migrationstack=new CdkMigrationStack(app, 'cfstack', {
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */


  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  
  env: { account: '323619686659', region: 'ap-southeast-2' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});

// adding TAG at stack level
Tags.of(migrationstack).add('StackType', 'TheBest');
Tags.of(migrationstack).add('DDBE', 'DDBEV1', {
  includeResourceTypes: ['AWS::DynamoDB::Table'],
});

Tags.of(migrationstack).add('S3E', 'S3EV', {
  includeResourceTypes: ['AWS::S3::Bucket'],
});