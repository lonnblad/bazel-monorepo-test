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

```sh
bazel run -- @pnpm//:pnpm --dir $PWD install
```

### Adding a Dependency

```sh
bazel run -- @pnpm//:pnpm --dir $PWD add <dependency>
```

## TODO

- publish to github package registry
