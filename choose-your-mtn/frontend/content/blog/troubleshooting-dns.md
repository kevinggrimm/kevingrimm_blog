---
title: Troubleshooting DNS
summary: Debuggina a failed SST site deployment
date: 2020-06-22T11:00:00.000Z
tags: ['aws', 'cloudfront', 'sst']
draft: true
---

# Steps
Resource: https://aws.amazon.com/premiumsupport/knowledge-center/route-53-troubleshoot-nxdomain-responses/

1. Checked for DNS records, compared to site (which is working)
```bash
dig +trace chooseyourmountain.com > blogDns.txt
dig +trace formfore.io > formForeDns.txt

dig www.chooseyourmountain.com @ns-1421.awsdns-49.org

```

# Updates - 6.23.22
- Still propagating - ACM certificates can take up to 48 hours to propagate
- Defaulted to a CloudFront distribution URL, going to give this time to refresh