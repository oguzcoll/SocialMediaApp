import Posts from "../../components/posts/Posts";
import Stories from "../../components/stories/Strories";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <Stories />
      <Posts />
    </div>
  );
}

export default Home;
