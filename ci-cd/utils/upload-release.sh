#!/usr/bin/env bash

# Copies a pre-built static release to the release bucket.
# This should be run after producing a static build.
#
# Environment:
# * BUILD_PATH - Source bucket containing the pre-build release.
# * S3_TARGET_BUCKET - Destination release bucket.
# * CI_COMMIT_SHA - Full git commit hash for the release

set -e

if [[ -z "${BUILD_PATH}" ]]; then
    >&2 echo "error: BUILD_PATH variable is not set"
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

sync_source="${BUILD_PATH}/"
sync_target="s3://${S3_TARGET_BUCKET}/${CI_COMMIT_SHA}/"

echo "[$(date)] syncing ${sync_source} -> ${sync_target}"

aws s3 sync \
    --metadata "CommitHash=${CI_COMMIT_SHA}" \
    "${sync_source}" "${sync_target}"

echo "[$(date)] syncing complete."
