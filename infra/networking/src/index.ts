import * as awsx from "@pulumi/awsx";
import { onPulumiRun } from "./on-pulumi-run";

export const getNetworkingOutput = onPulumiRun(module, "networking", () => {
  const vpc = new awsx.ec2.Vpc("my-vpc", {
    cidrBlock: `10.10.0.0/16`,
    numberOfAvailabilityZones: 1,
  });

  return {
    vpcId: vpc.vpcId,
    privateSubnetIds: vpc.privateSubnetIds,
  };
});
