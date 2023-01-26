package main

import (
	"bytes"
	"context"
	"log"
	"testing"

	"github.com/stretchr/testify/assert"
)

func Test_Main(t *testing.T) {
	var buf bytes.Buffer
	log.SetOutput(&buf)

	handleRequest(context.Background())

	assert.Contains(t, buf.String(), "Hello World!")
}
