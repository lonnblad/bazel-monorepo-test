import { Duration } from "aws-cdk-lib";
import { Rule, Schedule } from "aws-cdk-lib/aws-events";
import { LambdaFunction as LambdaFunctionTarget } from "aws-cdk-lib/aws-events-targets";
import {
  Runtime,
  Function as LambdaFunction,
  AssetCode,
  Architecture,
} from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import { join } from "path";

export class HelloWorldService extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const lambdaFn = new LambdaFunction(this, "LambdaFunction", {
      code: new AssetCode(
        join(__dirname, "../projects/hello-world/handler/lambda_deploy.zip")
      ),
      handler: "bootstrap",
      timeout: Duration.seconds(300),
      runtime: Runtime.PROVIDED_AL2,
      architecture: Architecture.ARM_64,
    });

    const rule = new Rule(this, "Rule", {
      schedule: Schedule.rate(Duration.minutes(1)),
    });

    rule.addTarget(new LambdaFunctionTarget(lambdaFn));
  }
}
