import React, { forwardRef } from "react";
import "./Blog.css";
const blog = [
  {
    id: 1,
    images: "./images/beauty.jfif",
    name: "Art 1",
    dataaos1: "flip-right",
    datadelay: "300",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod laborum voluptas placeat doloribus illo sint temporibus maxime modi unde velitLorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum animi, tempore rem deserunt alias maxime odio cupiditate non voluptate eum facilis distinctio ipsum assumenda omnis, qui aliquam eos repellat molestias impedit! Libero obcaecati consequatur, est adipisci architecto voluptatum molestiae id, perspiciatis eveniet enim vero? Aliquid ullam aliquam itaque fugiat facilis?",
  },
  {
    id: 2,
    images: "./images/art2.jpg",
    name: "Art 2",
    dataaos1: "fade-right",
    datadelay: "200",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod laborum voluptas placeat doloribus illo sint temporibus maxime modi unde velitLorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum animi, tempore rem deserunt alias maxime odio cupiditate non voluptate eum facilis distinctio ipsum assumenda omnis, qui aliquam eos repellat molestias impedit! Libero obcaecati consequatur, est adipisci architecto voluptatum molestiae id, perspiciatis eveniet enim vero? Aliquid ullam aliquam itaque fugiat facilis?",
  },
  {
    id: 3,
    images: "./images/art3.jpg",
    name: "Art 3",
    dataaos1: "fade-up",
    datadelay: "300",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod laborum voluptas placeat doloribus illo sint temporibus maxime modi unde velitLorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum animi, tempore rem deserunt alias maxime odio cupiditate non voluptate eum facilis distinctio ipsum assumenda omnis, qui aliquam eos repellat molestias impedit! Libero obcaecati consequatur, est adipisci architecto voluptatum molestiae id, perspiciatis eveniet enim vero? Aliquid ullam aliquam itaque fugiat facilis?",
  },
  {
    id: 4,
    images: "./images/art4.jpg",
    name: "Art 4",
    dataaos1: "fade-right",
    datadelay: "200",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod laborum voluptas placeat doloribus illo sint temporibus maxime modi unde velitLorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum animi, tempore rem deserunt alias maxime odio cupiditate non voluptate eum facilis distinctio ipsum assumenda omnis, qui aliquam eos repellat molestias impedit! Libero obcaecati consequatur, est adipisci architecto voluptatum molestiae id, perspiciatis eveniet enim vero? Aliquid ullam aliquam itaque fugiat facilis?",
  },
  {
    id: 5,
    images: "./images/art5.jpg",
    name: "Art 5",
    dataaos1: "fade-left",
    datadelay: "200",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod laborum voluptas placeat doloribus illo sint temporibus maxime modi unde velitLorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum animi, tempore rem deserunt alias maxime odio cupiditate non voluptate eum facilis distinctio ipsum assumenda omnis, qui aliquam eos repellat molestias impedit! Libero obcaecati consequatur, est adipisci architecto voluptatum molestiae id, perspiciatis eveniet enim vero? Aliquid ullam aliquam itaque fugiat facilis?",
  },
  {
    id: 6,
    images: "./images/art6.jpg",
    name: "Art 6",
    dataaos1: "zoom-in",
    datadelay: "300",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod laborum voluptas placeat doloribus illo sint temporibus maxime modi unde velitLorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum animi, tempore rem deserunt alias maxime odio cupiditate non voluptate eum facilis distinctio ipsum assumenda omnis, qui aliquam eos repellat molestias impedit! Libero obcaecati consequatur, est adipisci architecto voluptatum molestiae id, perspiciatis eveniet enim vero? Aliquid ullam aliquam itaque fugiat facilis?",
  },
];
const Blog = ({ images, name, detail, dataaos1, datadelay }) => {
  return (
    <div className="blogMedia">
      <img
        src={images}
        alt="Art 1"
        data-aos={dataaos1}
        data-aos-delay={datadelay}
      />
      <div className="blogInfo" data-aos={dataaos1} data-aos-delay={datadelay}>
        <h1>{name}</h1>
        <p>{detail}</p>
        <button>EXPLORE</button>
      </div>
    </div>
  );
};

const BlogDisplay = forwardRef((props, ref) => {
  return (
    <div className="blogBody" ref={ref}>
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
            dataaos1={index.dataaos1}
            datadelay={index.datadelay}
          />
        ))}
      </div>
    </div>
  );
});
export default BlogDisplay;
