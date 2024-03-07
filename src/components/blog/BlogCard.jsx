import { UnderratedVideo } from "../../constant/images";
import BlogAuthorInfo from "./BlogAuthorInfo";
import BlogHeader from "./BlogHeader";

export default function BlogCard() {
  return (
    <div className="my-6 space-y-4">
      <div className="blog-card relative">
        <img className="blog-thumb" src={UnderratedVideo} alt="" />
        <div className="mt-2">
          <h3 className="text-slate-300 text-xl lg:text-2xl">
            React Fetch API
          </h3>
          <p className="mb-6 text-base text-slate-500 mt-1">
            Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
            dolor pretium donec dictum. Vici consequat justo enim. Venenatis
            eget adipiscing luctus lorem.
          </p>
          <BlogAuthorInfo />
          <BlogHeader />
        </div>
      </div>
    </div>
  );
}
