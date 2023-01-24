import { Duration } from "aws-cdk-lib";
import {
  Architecture,
  Code,
  Function as LambdaFunction,
  Runtime,
} from "aws-cdk-lib/aws-lambda";
import type { Construct } from "constructs";

export class GoLambdaFunction extends LambdaFunction {
  constructor(scope: Construct, id: string, props: { code: Code }) {
    super(scope, id, {
      ...props,
      handler: "bootstrap",
      timeout: Duration.seconds(300),
      runtime: Runtime.PROVIDED_AL2,
      architecture: Architecture.ARM_64,
    });
  }
}
