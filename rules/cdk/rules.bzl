"A custom rule for synthesizing the CDK Stack"

def _synth_impl(ctx):
    cdk_out = ctx.actions.declare_directory("cdk.out")

    inputs = ctx.files.data

    ctx.actions.run(
        inputs = inputs,
        outputs = [cdk_out],
        arguments = [],
        env = {
            "CDK_OUTDIR": cdk_out.short_path,
            "GENDIR": ctx.genfiles_dir.path,
            "BAZEL_BINDIR": ctx.bin_dir.path,
        },
        progress_message = "Synthing into %s" % cdk_out.short_path,
        executable = ctx.executable.cdk_app,
    )

    return [DefaultInfo(files = depset([cdk_out]))]

synth = rule(
    implementation = _synth_impl,
    attrs = {
        "cdk_app": attr.label(
            executable = True,
            cfg = "exec",
            allow_files = True,
        ),
        "data": attr.label_list(allow_files = True, providers = [DefaultInfo]),
    },
)
