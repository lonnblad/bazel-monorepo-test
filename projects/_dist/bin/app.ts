import { App, Stack } from "aws-cdk-lib";

import { HelloWorldService } from "@bazel-poc/hello-world-service";

const app = new App();
const stack = new Stack(app, "Stack");

new HelloWorldService(stack, "HelloWorldService");
