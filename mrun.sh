#!/bin/bash

#修改脚本并执行
mvn spring-boot:run -Dspring-boot.run.profiles=rds -Dspring-boot.run.arguments="--rds_username=xxxx --rds_password=xxxx --rds_endpoint=tls-cert-test.xx.us-east-1.rds.amazonaws.com --rds_database=dbtest"