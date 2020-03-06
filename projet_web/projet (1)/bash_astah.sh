#!/bin/bash
chmod 755 ./astah;
export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64/;
export PATH=/usr/lib/jvm/java-1.8.0-openjdk-amd64/bin:$PATH;
./astah;