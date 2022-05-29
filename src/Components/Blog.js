import React from "react";
import "./Blog.css";
const blog = [
  {
    id: 1,
    images: "./images/beauty.jfif",
    name: "Art 1",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod laborum voluptas placeat doloribus illo sint temporibus maxime modi unde velitLorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum animi, tempore rem deserunt alias maxime odio cupiditate non voluptate eum facilis distinctio ipsum assumenda omnis, qui aliquam eos repellat molestias impedit! Libero obcaecati consequatur, est adipisci architecto voluptatum molestiae id, perspiciatis eveniet enim vero? Aliquid ullam aliquam itaque fugiat facilis?",
  },
  {
    id: 2,
    images: "./images/eyeball.jfif",
    name: "Art 2",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod laborum voluptas placeat doloribus illo sint temporibus maxime modi unde velitLorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum animi, tempore rem deserunt alias maxime odio cupiditate non voluptate eum facilis distinctio ipsum assumenda omnis, qui aliquam eos repellat molestias impedit! Libero obcaecati consequatur, est adipisci architecto voluptatum molestiae id, perspiciatis eveniet enim vero? Aliquid ullam aliquam itaque fugiat facilis?",
  },
  {
    id: 3,
    images: "./images/feather.jfif",
    name: "Art 3",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod laborum voluptas placeat doloribus illo sint temporibus maxime modi unde velitLorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum animi, tempore rem deserunt alias maxime odio cupiditate non voluptate eum facilis distinctio ipsum assumenda omnis, qui aliquam eos repellat molestias impedit! Libero obcaecati consequatur, est adipisci architecto voluptatum molestiae id, perspiciatis eveniet enim vero? Aliquid ullam aliquam itaque fugiat facilis?",
  },
  {
    id: 4,
    images: "./images/forest.jfif",
    name: "Art 4",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod laborum voluptas placeat doloribus illo sint temporibus maxime modi unde velitLorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum animi, tempore rem deserunt alias maxime odio cupiditate non voluptate eum facilis distinctio ipsum assumenda omnis, qui aliquam eos repellat molestias impedit! Libero obcaecati consequatur, est adipisci architecto voluptatum molestiae id, perspiciatis eveniet enim vero? Aliquid ullam aliquam itaque fugiat facilis?",
  },
  {
    id: 5,
    images: "./images/guy.jfif",
    name: "Art 5",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod laborum voluptas placeat doloribus illo sint temporibus maxime modi unde velitLorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum animi, tempore rem deserunt alias maxime odio cupiditate non voluptate eum facilis distinctio ipsum assumenda omnis, qui aliquam eos repellat molestias impedit! Libero obcaecati consequatur, est adipisci architecto voluptatum molestiae id, perspiciatis eveniet enim vero? Aliquid ullam aliquam itaque fugiat facilis?",
  },
  {
    id: 6,
    images: "./images/happy-girl.jfif",
    name: "Art 6",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod laborum voluptas placeat doloribus illo sint temporibus maxime modi unde velitLorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum animi, tempore rem deserunt alias maxime odio cupiditate non voluptate eum facilis distinctio ipsum assumenda omnis, qui aliquam eos repellat molestias impedit! Libero obcaecati consequatur, est adipisci architecto voluptatum molestiae id, perspiciatis eveniet enim vero? Aliquid ullam aliquam itaque fugiat facilis?",
  },
];
const Blog = ({ images, name, detail }) => {
  return (
    <div className="blogMedia">
      <img src={images} alt="Art 1" />
      <div>
        <h1>{name}</h1>
        <p>{detail}</p>
        <button>EXPLORE</button>
      </div>
    </div>
  );
};

const BlogDisplay = () => {
  return (
    <div className="blogBody">
      <p className="info">
        You Can Always Find Put More About Us By Scrolling Down{" "}
        <span>EXPLORE OUR ARTS</span>
      </p>
      <div className="blog">
        {blog.map((index) => (
          <Blog
            key={index.id}
            images={index.images}
            name={index.name}
            detail={index.detail}
          />
        ))}
      </div>
    </div>
  );
};
export default BlogDisplay;
