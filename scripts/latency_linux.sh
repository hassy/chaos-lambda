#!/bin/bash

sudo tc qdisc add dev eth0 root netem delay $CHAOS_LAMBDA_EXTRA_LATENCY
