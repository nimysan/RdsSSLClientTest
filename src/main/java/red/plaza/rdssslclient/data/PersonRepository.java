package red.plaza.rdssslclient.data;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PersonRepository extends CrudRepository<Person, Long> {

    List<Person> findByLastName(String lastName); // 自定义查询方法，查询特定姓氏的人

    Person findById(long id);
}
