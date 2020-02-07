import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import NewStack = require('../lib/new-stack-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new NewStack.NewStackStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
