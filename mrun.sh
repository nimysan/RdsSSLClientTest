#!/bin/bash

#修改脚本并执行 rds普通连接RDS rds-ssl强制客户端使用ssl连接
mvn spring-boot:run -Dspring-boot.run.profiles=rds-ssl -Dspring-boot.run.arguments="--rds_username=admin --rds_password=admin123 --rds_endpoint=rds-cert-test-2.c3iilnukj9yy.us-east-1.rds.amazonaws.com --rds_database=dbtest"