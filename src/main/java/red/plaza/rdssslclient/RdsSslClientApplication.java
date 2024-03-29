package red.plaza.rdssslclient;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
//@EnableWebMvc
public class RdsSslClientApplication implements ApplicationRunner {

    public static void main(String[] args) {
        SpringApplication.run(RdsSslClientApplication.class, args);
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        System.out.println("test");
    }
}