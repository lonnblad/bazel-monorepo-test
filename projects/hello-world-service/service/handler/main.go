package main

import (
	"context"
	"log"

	runtime "github.com/aws/aws-lambda-go/lambda"
)

func handleRequest(ctx context.Context) error {
	log.Print("Hello World!!")
	return nil
}

func main() {
	runtime.Start(handleRequest)
}
