import { Duration } from "aws-cdk-lib";
import { Rule, Schedule } from "aws-cdk-lib/aws-events";
import { LambdaFunction as LambdaFunctionTarget } from "aws-cdk-lib/aws-events-targets";
import {
  InlineCode,
  Runtime,
  Function as LambdaFunction,
} from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import { readFileSync } from "fs";

export class LambdaCronService extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const lambdaFn = new LambdaFunction(this, "LambdaFunction", {
      code: new InlineCode(
        readFileSync("lambda-handler.py", { encoding: "utf-8" })
      ),
      handler: "index.main",
      timeout: Duration.seconds(300),
      runtime: Runtime.PYTHON_3_9,
    });

    // Run 6:00 PM UTC every Monday through Friday
    // See https://docs.aws.amazon.com/lambda/latest/dg/tutorial-scheduled-events-schedule-expressions.html
    const rule = new Rule(this, "Rule", {
      schedule: Schedule.expression("cron(0 18 ? * MON-FRI *)"),
    });

    rule.addTarget(new LambdaFunctionTarget(lambdaFn));
  }
}
