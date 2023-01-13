import { App, Stack } from "aws-cdk-lib";

import { LambdaCronService } from "../lib";

const app = new App();
const stack = new Stack(app, "LambdaCronStack");

new LambdaCronService(stack, "LambdaCronService");
