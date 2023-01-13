# Bazel Monorepo Test

## Tools
- bazel
- bazelisk
- Bazel plugin for Visual Studio Code
  - buildifier

## Golang

### Generate Bazel build-files
- bazel run //:gazelle

### Manage Dependencies
- go mod tidy
- bazel run //:gazelle-update-repos

## Typescript

### Bazel build-files

### Dependencies