import React, { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { MyContext } from "../../../store/store";

import { formatDate, getRandomImage } from "../../../utils/utils";
import { TBlogPost } from "../../../types/BlogPost";
import "./post-detail.styles.scss";
import { GoToTop } from "../../../utils/GoToTop";
import Divider from "../../divider/divider.component";
import { CustomButton } from "../../button/custom-button.component";

interface BlogPostProps {
  post: TBlogPost;
  handleShowComments: () => void;
}

const BlogPostDisplay: React.FC<BlogPostProps> = ({
  post,
  handleShowComments,
}) => {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  const handleLikeClick = () => {
    context?.updatePostLikes(post.id);
  };

  const bgUrl = useMemo(() => getRandomImage(), []);

  return (
    <>
      <GoToTop />
      <div
        className="shadow"
        style={{
          backgroundImage: `${bgUrl}`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "30vh",
        }}
      ></div>
      <div className="post-detail-container">
        <div className="post-detail-component">
          <CustomButton text="← Go back" onClick={() => navigate(-1)} />
          <h1>{post.title}</h1>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>{post.author}</p>
            <p>{formatDate(post.publishedAt)}</p>
          </div>
          <Divider />
          <div className="animated animatedFadeInUp fadeInUp">
            <p>{post.content}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce
              nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Nam sed tellus id magna elementum tincidunt. Etiam ligula pede,
              sagittis quis, interdum ultricies, scelerisque eu. In convallis.
              Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus
              purus, vel sagittis velit mauris vel metus. Fusce tellus odio,
              dapibus id fermentum quis, suscipit id erat. Nullam dapibus
              fermentum ipsum. Nullam lectus justo, vulputate eget mollis sed,
              tempor sed magna. In enim a arcu imperdiet malesuada. Maecenas
              libero. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Nullam sapien sem, ornare ac, nonummy non, lobortis
              a enim. Proin in tellus sit amet nibh dignissim sagittis. Proin
              pede metus, vulputate nec, fermentum fringilla, vehicula vitae,
              justo. Cras pede libero, dapibus nec, pretium sit amet, tempor
              quis. Duis risus.
            </p>

            <p>
              Nunc auctor. Morbi imperdiet, mauris ac auctor dictum, nisl ligula
              egestas nulla, et sollicitudin sem purus in lacus. Phasellus enim
              erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sit
              amet magna in magna gravida vehicula. Etiam dictum tincidunt diam.
              Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus.
              Vivamus ac leo pretium faucibus. Nam sed tellus id magna elementum
              tincidunt. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Nullam dapibus fermentum ipsum.
            </p>

            <p>
              Quisque porta. Duis condimentum augue id magna semper rutrum.
              Suspendisse nisl. Mauris metus. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Praesent in mauris eu tortor
              porttitor accumsan. Nullam justo enim, consectetuer nec,
              ullamcorper ac, vestibulum in, elit. Donec ipsum massa,
              ullamcorper in, auctor et, scelerisque sed, est. Aliquam erat
              volutpat. Etiam posuere lacus quis dolor. Etiam sapien elit,
              consequat eget, tristique non, venenatis quis, ante. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos hymenaeos. Fusce nibh. Donec vitae arcu. Nulla quis diam.
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </p>
          </div>
          <div
            style={{ display: "flex", gap: "1em", justifyContent: "flex-end" }}
          >
            <CustomButton
              text={`❤︎ ${post.likes.toString()}`}
              shadow={true}
              onClick={handleLikeClick}
              isDisabled={context?.hasUserLikedPost(post.id)}
            />
            <CustomButton
              text="🗨️ Comments"
              shadow={true}
              onClick={handleShowComments}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostDisplay;
