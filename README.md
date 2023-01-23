# Bazel Monorepo Test

## Tools

- bazel
- bazelisk
- Bazel plugin for Visual Studio Code
  - buildifier
- pnpm
- golang

## Testing

```sh
bazel test //...
```

## Building

```sh
bazel build //...
```

## Example Stack

```sh
bazel run :deploy-example-stack
```

## Golang

### Generate Bazel build-files

```sh
bazel run //:gazelle
```

### Adding a Dependency

```sh
go get <dependency>
bazel run //:gazelle-update-repos
```

## Typescript

### Bazel build-files

### Adding a Dependency

```sh
pnpm add <dependency>
```

## TODO

- publish to github package registry
