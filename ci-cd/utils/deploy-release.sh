#!/usr/bin/env bash

# Copies a release from the release bucket to a final deployment bucket.
# This should be run after uploading a release ot the release bucket.
#
# Environment:
# * S3_SOURCE_BUCKET - Source bucket containing the pre-build release.
# * S3_TARGET_BUCKET - Destination bucket for release (e.g. staging bucket).
# * CI_COMMIT_SHA - Full git commit hash for the release

set -e

if [[ -z "${S3_SOURCE_BUCKET}" ]]; then
    >&2 echo "error: S3_SOURCE_BUCKET variable is not set"
    exit 1
fi

if [[ -z "${S3_TARGET_BUCKET}" ]]; then
    >&2 echo "error: S3_TARGET_BUCKET variable is not set"
    exit 1
fi

if [[ -z "${CI_COMMIT_SHA}" ]]; then
    >&2 echo "error: CI_COMMIT_SHA variable is not set"
    exit 1
fi

sync_source="s3://${S3_SOURCE_BUCKET}/${CI_COMMIT_SHA}/"
sync_target="s3://${S3_TARGET_BUCKET}/"

echo "[$(date)] syncing ${sync_source} -> ${sync_target}"

# sync all assets except for index.html first
aws s3 sync \
    --metadata "CommitHash=${CI_COMMIT_SHA}" \
    --cache-control 'max-age=604800' \
    --exclude index.html \
    "${sync_source}" "${sync_target}"

# sync index.html
aws s3 sync \
    --metadata "CommitHash=${CI_COMMIT_SHA}" \
    --cache-control 'no-cache' \
    "${sync_source}" "${sync_target}"

echo "[$(date)] syncing complete."
