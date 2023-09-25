# RDS测试激活

```bash
#--spring.profiles.active=rds
# mvn spring-boot:run -Dspring.profiles.active=rds
mvn spring-boot:run -Dspring-boot.run.profiles=rds -Dspring-boot.run.arguments=“--rds_username=value --rds_password=value --rds_endpoint=value --rds_database=value”
```

## gating 压力测试工具来测试过程总是否中断

```bash

#同步Gating报告到s3
aws s3 sync /home/ec2-user/gatling-charts-highcharts-bundle-3.7.3/results/ s3://s3.plaza.red/gating/results/
```

## 应用连接到RDS database server使用SSL

1. 下载RDS SSL证书。你可以从AWS文档的使用SSL连接到MySQL数据库实例 部分下载RDS SSL证书。
2. 将证书添加到Java的信任存储库（truststore）中。你可以使用keytool命令来完成此步骤，例如:
```bash
keytool -import -alias rds -file rds-ca-2019-root.pem -keystore cacerts


```
3. 在application.properties或application.yml中启用SSL并设置SSL属性

> truststore直接再url内设置, 是有效的

```bash
spring.datasource.url=jdbc:mysql://${rds_endpoint}/${rds_database}?useSSL=true&requireSSL=true&verifyServerCertificate=true&enabledSslProtocolSuites=TLSv1.2,TLSv1.1,TLSv1,SSLv3&&verifyServerCertificate=true&trustCertificateKeyStoreUrl=file:/home/ec2-user/RdsSSLClientTest/tmp/certs/rds-truststore.jks&trustCertificateKeyStorePassword=changeit
spring.datasource.username=your-username
spring.datasource.password=your-password
spring.jpa.hibernate.ddl-auto=update

```



其中，useSSL=true启用SSL，requireSSL=true指示连接需要使用SSL，verifyServerCertificate=true要求验证服务器的SSL证书。enabledSslProtocolSuites参数创建使用特定TLS和SSL协议的逗号分隔列表。这里的URL是你的数据库实例URL，your-username和your-password应该替换为你的数据库用户名和密码。

4. 查看并确认

## 几个测试效果

| 场景                   | 结果                                                         |
|----------------------|------------------------------------------------------------|
| 客户端采用SSL, 过程中更新RDS证书 | [Gating Result](./gating/results/write-写过程中更新证书/index.html) |
| 客户端不采用SSL, 更新RDS证书   | [Gating Result](./gating/results/write-2-minutes-正常/index.html) |

## Keytool管理

```bash
keytool -list -noprompt   -keystore /home/ec2-user/RdsSSLClientTest/tmp/certs/rds-truststore.jks  -storepass changeit
keytool -delete -noprompt -alias "Amazon RDS us-east-1 Root CA ECC384 G1, L = Seattle"  -keystore /home/ec2-user/RdsSSLClientTest/tmp/certs/rds-truststore.jks  -storepass changeit

```

## 一个临时的测试

```bash
mvn exec:java -Dexec.mainClass="red.plaza.rdssslclient.MySQLSSLTest" -Dexec.args="username pwd /home/ec2-user/RdsSSLClientTest/tmp/certs/rds-truststore.jks changeit"
```