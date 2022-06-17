import { getNetworkingOutput } from "infra-networking";
const vpcId = getNetworkingOutput("vpcId");
vpcId.apply(console.log);
