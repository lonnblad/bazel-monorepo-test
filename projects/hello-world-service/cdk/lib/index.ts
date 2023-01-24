import { Duration } from "aws-cdk-lib";
import { Rule, Schedule } from "aws-cdk-lib/aws-events";
import { LambdaFunction as LambdaFunctionTarget } from "aws-cdk-lib/aws-events-targets";
import {
  AssetCode,
} from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import { join } from "path";

import { GoLambdaFunction } from "@bazel-poc/cdk-core";

export class HelloWorldService extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const lambdaFn = new GoLambdaFunction(this, "LambdaFunction", {
      code: new AssetCode(join(__dirname, "../assets/lambda_deploy.zip")),
    });

    const rule = new Rule(this, "Rule", {
      schedule: Schedule.rate(Duration.minutes(1)),
    });

    rule.addTarget(new LambdaFunctionTarget(lambdaFn));
  }
}
