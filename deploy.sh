#!/usr/bin/env bash

aws s3 cp index.html s3://grassparty-frontend/
aws s3 sync dist s3://grassparty-frontend/dist --delete
aws s3 sync assets s3://grassparty-frontend/assets --delete
