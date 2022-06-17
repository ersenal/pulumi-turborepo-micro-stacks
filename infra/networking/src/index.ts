import * as awsx from "@pulumi/awsx";

const vpc = new awsx.ec2.Vpc("my-vpc", {
  cidrBlock: `10.10.0.0/16`,
  numberOfAvailabilityZones: 1
});

export const vpcId = vpc.vpcId;
