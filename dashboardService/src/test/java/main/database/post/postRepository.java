package main.database.post;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;

import java.util.List;


/*Create an interface for controller and db interaction*/
@Repository
public interface postRepository extends JpaRepository<PostModel, Integer>{

     /**Get posts to separate by categories**/
     List<PostModel> findByCategory(int category);

     /**Get filtered by tag posts**/
     List<PostModel> findByTagContaining(String tag);


}
