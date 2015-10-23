#!/bin/bash

sudo ipfw add pipe 1 ip from any to any out
ipfw pipe 1 config delay $CHAOS_LAMBDA_EXTRA_LATENCY
