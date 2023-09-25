import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class RdsReadSimulation extends Simulation {

  val httpConf = http.baseUrl("http://172.31.45.122:8080")

  val scn = scenario("Read Scenario")
    .during(2.minutes) {
      exec(http("Read Request")
        .get("/read")
        .check(status.is(200))) // 检查返回的HTTP状态码是200
    }
  setUp(scn.inject(
    atOnceUsers(1) // 一开始就有1个用户开始发送请求。你可以调整这个数字或改变用户注入策略，以达到你期望的测试压力
  )).protocols(httpConf)
}