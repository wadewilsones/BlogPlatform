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
    @Column(columnDefinition = "text")
    private String post_content;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "date_created", updatable = false, insertable = false)
    @CreationTimestamp
    private Date createdDate;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "date_created", insertable = false, updatable = true)
    @CreationTimestamp
    private Date updatedDate;
    private int authorId;
    private Blob pic;
    @Column(name = "tag")
    private String tag;
    @Column(name = "category")
    private int category;


    //Constructors
    public PostModel(){}
    public PostModel(String postTitle, String content, int authorId, Blob pic, String tag, int category){

        this.postTitle = postTitle;
        this.post_content = content;
        this.authorId = authorId;
        this.pic = pic;
        this.tag = tag;
        this.category = category;

    }

    //Update Post

    public void updatePost(String postTitle, String content, Blob pic, String tags, int category){

        setPostTitle(postTitle);
        setContent(content);
        setTags(tags);
        setCategory(category);
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
        return post_content;
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

    public String getTags(){
        return this.tag;
    }

    public int getCategory(){
        return this.category;
    }

    /** Setters **/
    public void setPostTitle(String postTitle) {
        this.postTitle = postTitle;
    }

    public void setContent(String content) {
        this.post_content = content;
    }

    /** Setters **/
    public void setCategory(int category) {

        this.category = category;
    }

    public void setTags(String tags) {

        this.tag = tags;
    }

    public void setPic(Blob pic) {
        this.pic = pic;
    }
}
