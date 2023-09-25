package red.plaza.rdssslclient.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import red.plaza.rdssslclient.data.Person;
import red.plaza.rdssslclient.data.PersonRepository;

import java.util.List;
import java.util.Random;

@RestController
@Slf4j
public class HelloController {

    private final PersonRepository personRepository;

    public HelloController(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @GetMapping("/read")
    public String index() {
//        List<Person> hello = personRepository.count();
//        log.info("hello jpa");
//        hello.forEach(System.out::println);
        return "count is " + personRepository.count();
    }

    @GetMapping("/write")
    public String write() {
        Person person = new Person();
        person.setFirstName("f_" + new Random().nextInt());
        person.setLastName("l_" + new Random().nextInt());
//        List<Person> hello = personRepository.findByLastName("hello");
        personRepository.save(person);
//        log.info("hello jpa");
//        hello.forEach(System.out::println);
        return "Generate Person OK";
    }


}