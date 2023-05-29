//Create model for post
export interface Side {

  id: number;
  postTitle: string;
  content: string;
  createdDate: Date;
  updatedDate: Date;
  authorId: number;
  pic: string;
  tag: string;
  category: number;

}

