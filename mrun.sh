#!/bin/bash

#修改脚本并执行
mvn spring-boot:run -Dspring-boot.run.profiles=rds -Dspring-boot.run.arguments="--rds_username=admin --rds_password=admin123 --rds_endpoint=tls-cert-test.c3iilnukj9yy.us-east-1.rds.amazonaws.com --rds_database=dbtest"