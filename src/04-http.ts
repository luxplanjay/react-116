/**
 * Типізація HTTP-запитів з Axios
 *
 * https://dummyjson.com/docs/posts
 */

import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  reactions: {
    likes: number;
    dislikes: number;
  };
}

interface GetPostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

const getAllPosts = async () => {
  const response = await axios.get<GetPostsResponse>(
    "https://dummyjson.com/posts"
  );
  return response.data;
};

getAllPosts().then((resp) => resp.posts.map((post) => post.reactions.likes));

const getPostById = async (postId: number) => {
  const response = await axios.get<Post>(
    `https://dummyjson.com/posts/${postId}`
  );
  return response.data;
};

interface NewPostData {
  title: string;
  body: string;
}

const createPost = async (newPost: NewPostData) => {
  const response = await axios.post<Post>(
    "https://dummyjson.com/posts/add",
    newPost
  );
  return response.data;
};
