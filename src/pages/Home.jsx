import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {

  const posts = [
    {
      id: 1,
      title: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      img: "https://images.pexels.com/photos/839443/pexels-photo-839443.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      img: "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      img: "https://images.pexels.com/photos/3098619/pexels-photo-3098619.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
  ]

  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
              <div className="bg"></div>
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
                <p>{post.desc}</p>
                <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home