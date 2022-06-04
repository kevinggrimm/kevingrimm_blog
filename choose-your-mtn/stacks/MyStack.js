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
      customDomain: {
        cdk: {
          hostedZone: HostedZone.fromHostedZoneAttributes(
            this,
            "ChooseYourMtnZone",
            {
              // hostedZoneId: process.env.HOSTED_ZONE_ID,
              // zoneName: process.env.ZONE_NAME,
              hostedZoneId: "Z04771733ICFQMWM917HW",
              zoneName: "chooseyourmountain.com",
            }
          ),
          certificate: Certificate.fromCertificateArn(
            this,
            "ChooseYourMountainCert",
            // process.env.CERTIFICATE_ARN
            "arn:aws:acm:us-east-1:983976420942:certificate/adf8e676-a9c5-4e36-a315-c3d356338270",
          ),
        },
        domainName:
          scope.stage === "prod"
            ? "chooseyourmountain.com"
            : `${scope.stage}.chooseyourmountain.com`,
        domainAlias:
          scope.stage === "prod" ? "www.chooseyourmountain.com" : undefined,
      },
    });

    site.attachPermissions([table]);

    this.addOutputs({
      URL: site.url,
      CustomDomainUrl: site.customDomainUrl,
    });
  }
}
