import * as pulumi from "@pulumi/pulumi";

export function onPulumiRun<T>(
  caller: typeof module,
  stack: string,
  main: () => T
) {
  if (caller.parent?.path.endsWith("@pulumi/pulumi/cmd/run")) {
    caller.exports = main();
  }

  return createOutputGetter<T>(stack);
}

const stackReferences: Record<string, pulumi.StackReference> = {};
function createOutputGetter<T>(stack: string) {
  return <K extends keyof T>(key: Extract<K, string>): T[K] => {
    let stackRef = stackReferences[stack];
    if (!stackRef) {
      stackReferences[stack] = stackRef = new pulumi.StackReference(stack);
    }
    return stackRef.requireOutput(key) as unknown as T[K];
  };
}
