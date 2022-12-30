import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {

  const posts = [
    {
      id: 1,
      title: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4245826%2Fpexels-photo-4245826.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-riccardo-bertolo-4245826.jpg%26fm%3Djpg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Flandscape%2F&tbnid=87_I_JiMjGQuqM&vet=12ahUKEwiQxK6Rk6D8AhUCkYQIHaqOAicQMygCegUIARDJAQ..i&docid=OKY9mIZ1M32xNM&w=5184&h=2920&q=image%20free%20copyright&ved=2ahUKEwiQxK6Rk6D8AhUCkYQIHaqOAicQMygCegUIARDJAQ"
    },
    {
      id: 2,
      title: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      img: ""
    },
    {
      id: 3,
      title: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      img: ""
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