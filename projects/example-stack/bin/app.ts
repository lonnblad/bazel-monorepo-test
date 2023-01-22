import { App, Stack } from "aws-cdk-lib";

import { HelloWorldService } from "@bazel-poc/hello-world-service";

const app = new App();
const stack = new Stack(app, "ExampleStack");

new HelloWorldService(stack, "HelloWorldService");
