import React from "react";

const Menu = () => {

  const posts = [
    {
      id: 1,
      title: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      img: "https://images.pexels.com/photos/839443/pexels-photo-839443.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      img: "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      img: "https://images.pexels.com/photos/3098619/pexels-photo-3098619.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ]

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) =>(
        <div className="post" key={post.id}>
            <img src={post.img} alt="" />
            <h2>{post.title}</h2>
            <button>Read more</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
