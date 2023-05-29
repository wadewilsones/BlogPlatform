package main.database.post;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**Controller for posts model**/

@RestController
@RequestMapping("/api/posts")
@CrossOrigin
public class PostController {

    /**Define postRepository to access to a JPA interface**/
    private final postRepository postsRepo;

    /**Constructor, inject dependency of postRepository**/
    public PostController(postRepository postsRepo) {
        this.postsRepo = postsRepo;
    }

    /**Get method to display recent posts*/
    @GetMapping("/recentPosts")
    public List<PostModel> getPosts(){

        return postsRepo.findByCategory(2);
    }

    /**Get method to display popular posts*/
    @GetMapping("/popularPosts")
    public List<PostModel> getPopularPosts(){

        return postsRepo.findByCategory(1);
    }
}

