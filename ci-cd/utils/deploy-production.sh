#!/usr/bin/env bash

RELEASE_BUCKET=thoriumdev.com-cloudfront-release
STAGING_CONTENT_BUCKET=thoriumdev.com-cloudfront-staging
PRODUCTION_CONTENT_BUCKET=thoriumdev.com-cloudfront-production

echo "looking up staging commit hash"
metadata=$(aws s3api head-object --bucket $STAGING_CONTENT_BUCKET --key index.html)
staging_commit_hash=$(echo $metadata | jq --raw-output '.Metadata.commithash')

echo "deploying $staging_commit_hash to $PRODUCTION_CONTENT_BUCKET"

export S3_SOURCE_BUCKET="${RELEASE_BUCKET}"
export S3_TARGET_BUCKET="${PRODUCTION_CONTENT_BUCKET}"
export CI_COMMIT_SHA="${staging_commit_hash}"

./deploy-release.sh
