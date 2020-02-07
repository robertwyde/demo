#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { NewStackStack } from '../lib/new-stack-stack';

const app = new cdk.App();
new NewStackStack(app, 'NewStackStack');
