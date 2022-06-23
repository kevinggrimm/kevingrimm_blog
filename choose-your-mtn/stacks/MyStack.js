import * as sst from "@serverless-stack/resources";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";
import { HostedZone } from "aws-cdk-lib/aws-route53";

export default class ChooseYourMountain extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const table = new sst.Table(this, "BlogTable", {
      fields: {
        PK: "string",
        SK: "string",
      },
      primaryIndex: {
        partitionKey: "PK",
        sortKey: "SK",
      },
    });

    const site = new sst.NextjsSite(this, "BlogSite", {
      path: "frontend",
      environment: {
        NEXT_PUBLIC_REGION: scope.region,
        NEXT_PUBLIC_TABLE_NAME: table.tableName,
      },
      // customDomain: {
        // domainName: "chooseyourmountain.com",
        // scope.stage === "prod"
        //   ? "chooseyourmountain.com"
        //   : `${scope.stage}.chooseyourmountain.com`,
        // domainAlias: "www.chooseyourmountain.com",
        // scope.stage === "prod" ? "www.chooseyourmountain.com" : undefined,
        // hostedZone: "chooseyourmountain.com",
        // hostedZone: HostedZone.fromHostedZoneAttributes(this,
        //   "ChooseYourMtnZone",{
        //     hostedZoneId: "Z04771733ICFQMWM917HW",
        //     zoneName: "chooseyourmountain.com",
        //   }
        // )
        // cdk: {
        //   certificate: Certificate.fromCertificateArn(
        //     this,
        //     "ChooseYourMountainCert",
        //     "arn:aws:acm:us-east-1:983976420942:certificate/adf8e676-a9c5-4e36-a315-c3d356338270",
        //     "arn:aws:acm:us-east-1:983976420942:certificate/adf8e676-a9c5-4e36-a315-c3d356338270"
        //   ),
        // },
      // },
    });

    site.attachPermissions([table]);

    this.addOutputs({
      URL: site.url,
      // CustomDomainUrl: site.customDomainUrl,
    });
  }
}
