package main.database.post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import main.database.post.PostModel;

import java.util.List;


/*Create an interface for controller and db interaction*/
@Repository
public interface postRepository extends JpaRepository<PostModel, Integer>{

    /**Get all Posts**/
    static List<PostModel> findAll();

}
