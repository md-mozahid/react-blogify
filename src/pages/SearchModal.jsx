import { useState } from "react";
import SearchContent from "../components/search/SearchContent";
import SearchHeader from "../components/search/SearchHeader";
import { CloseIcon } from "../constant/images";
import { useBlog } from "../hooks";

export default function SearchModal({ onClose }) {
  const [search, setSearch] = useState("");
  const { state } = useBlog();

  // searching...
  const searchByString = (blog) =>
    blog?.title?.toLowerCase().includes(state?.search?.toLowerCase());
  return (
    <>
      <section className="absolute left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-50">
        <div className="relative w-6/12 mx-auto bg-slate-900 p-4 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10">
          <SearchHeader search={search} onSearch={setSearch} />
          <div className="">
            <h3 className="text-slate-400 font-bold mt-6">Search Results</h3>
            <div className="my-4 divide-y-2 divide-slate-500/30 max-h-[440px] overflow-y-scroll overscroll-contain">
              {state?.blogs?.filter(searchByString).map((blog) => (
                <SearchContent key={blog.id} blog={blog} onClose={onClose} />
              ))}
            </div>
          </div>

          <img
            src={CloseIcon}
            alt="Close"
            className="absolute right-2 top-2 cursor-pointer w-8 h-8"
            onClick={() => onClose(false)}
          />
        </div>
      </section>
    </>
  );
}
