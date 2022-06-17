import * as pulumi from "@pulumi/pulumi";

const networking = new pulumi.StackReference("networking");
const vpcId = networking.requireOutput("vpcId");
vpcId.apply(console.log);
