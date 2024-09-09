import axios from "axios";

const getData = async (userId) => {
  try {
    const userResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const user = userResponse.data;

    const postsResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const posts = postsResponse.data;

    const result = {
      user,
      posts,
    };

    return console.log(result);
  } catch (error) {
    console.error("ERROR:", error);
  }
};

export default getData;
