package main.database.post;
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import jakarta.persistence.Entity;

import java.sql.Blob;
import java.util.Date;

/**This entity class represents a database single rows of data*/
@Entity
@Table(name = "posts")
public class PostModel {

    @Id  //indicate primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // set up auto incrementing
    private int postId;
    private String postTitle;
    private String content;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "date_created", updatable = false)
    @CreationTimestamp
    private Date createdDate;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "date_created", updatable = true)
    @CreationTimestamp
    private Date updatedDate;
    private int authorId;
    //String tags;
    private Blob pic;


    //Constructor
    public PostModel(String postTitle, String content, int authorId, Blob pic){

        this.postTitle = postTitle;
        this.content = content;
        this.authorId = authorId;
        this.pic = pic;

    }

    //Update Post

    public void updatePost(String postTitle, String content, Blob pic){

        setPostTitle(postTitle);
        setContent(content);
        setPic(pic);

    }

    /** Getters **/
    public int getPostId() {
        return postId;
    }

    public String getPostTitle() {
        return postTitle;
    }

    public String getContent() {
        return content;
    }

    public Date getUpdatedDate() {
        return updatedDate;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public int getAuthorId() {
        return authorId;
    }

    public Blob getPic() {
        return pic;
    }

    /** Setters **/
    public void setPostTitle(String postTitle) {
        this.postTitle = postTitle;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setPic(Blob pic) {
        this.pic = pic;
    }
}
