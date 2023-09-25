# RDS测试激活

```bash
#--spring.profiles.active=rds
# mvn spring-boot:run -Dspring.profiles.active=rds
mvn spring-boot:run -Dspring-boot.run.profiles=rds -Dspring-boot.run.arguments=“--rds_username=value --rds_password=value --rds_endpoint=value --rds_database=value”
```