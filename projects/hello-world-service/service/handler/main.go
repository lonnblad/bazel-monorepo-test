package main

import (
	"context"

	runtime "github.com/aws/aws-lambda-go/lambda"

	"github.com/lonnblad/bazel-poc/projects/go-core/log"
)

func handleRequest(ctx context.Context) error {
	log.Print("Hello World!!")
	return nil
}

func main() {
	runtime.Start(handleRequest)
}
