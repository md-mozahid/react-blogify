import { Link } from 'react-router-dom'
import {
  Delete,
  Edit,
  ReactRoadmap,
  TailwindCnThumb,
  ThreeDots,
  UnderratedVideo,
} from '../constant/images'

export default function HomePage() {
  return (
    <>
      <main>
        {/* <!-- Begin Blogs --> */}
        <section>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {/* <!-- Blog Contents --> */}
              <div className="space-y-3 md:col-span-5">
                {/* <!-- Blog Card Start --> */}
                <div className="blog-card">
                  <img className="blog-thumb" src={ReactRoadmap} alt="" />
                  <div className="mt-2 relative">
                    <Link to="/single-blog">
                      <h3 className="text-slate-300 text-xl lg:text-2xl">
                        <Link to="/single-blog">React Roadmap in 2024</Link>
                      </h3>
                    </Link>
                    <p className="mb-6 text-base text-slate-500 mt-1">
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem.
                    </p>

                    {/* <!-- Meta Informations --> */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center capitalize space-x-2">
                        <div className="avater-img bg-indigo-600 text-white">
                          <span className="">S</span>
                        </div>

                        <div>
                          <h5 className="text-slate-500 text-sm">
                            <Link to="/profile">Saad Hasan</Link>
                          </h5>
                          <div className="flex items-center text-xs text-slate-700">
                            <span>June 28, 2018</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-sm px-2 py-1 text-slate-700">
                        <span>100 Likes</span>
                      </div>
                    </div>

                    {/* <!-- action dot --> */}
                    <div className="absolute right-0 top-0">
                      <button>
                        <img src={ThreeDots} alt="3dots of Action" />
                      </button>

                      {/* <!-- Action Menus Popup --> */}
                      <div className="action-modal-container">
                        <button className="action-menu-item hover:text-lwsGreen">
                          <img src={Edit} alt="Edit" />
                          Edit
                        </button>
                        <button className="action-menu-item hover:text-red-500">
                          <img src={Delete} alt="Delete" />
                          Delete
                        </button>
                      </div>
                    </div>
                    {/* <!-- action dot ends --> */}
                  </div>
                </div>
                {/* <!-- Blog Card End --> */}

                {/* <!-- Blog Card Start --> */}
                <div className="blog-card">
                  <img
                    className="blog-thumb"
                    src="./assets/blogs/Underrated Video.jpg"
                    alt=""
                  />
                  <div className="mt-2">
                    <h3 className="text-slate-300 text-xl lg:text-2xl">
                      <Link to="/single-blog">React Fetch API</Link>
                    </h3>
                    <p className="mb-6 text-base text-slate-500 mt-1">
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem.
                    </p>

                    {/* <!-- Meta Informations --> */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center capitalize space-x-2">
                        <div className="avater-img bg-indigo-600 text-white">
                          <Link to="/profile">
                            <span className="">S</span>
                          </Link>
                        </div>

                        <div>
                          <h5 className="text-slate-500 text-sm">
                            <Link to="/profile">Saad Hasan</Link>
                          </h5>
                          <div className="flex items-center text-xs text-slate-700">
                            <span>June 28, 2018</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-sm px-2 py-1 text-slate-700">
                        <span>100 Likes</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Blog Card End --> */}

                {/* <!-- Blog Card Start --> */}
                <div className="blog-card">
                  <img className="blog-thumb" src={TailwindCnThumb} alt="" />
                  <div className="mt-2">
                    <h3 className="text-slate-300 text-xl lg:text-2xl">
                      Style your components with TailwindCSS
                    </h3>
                    <p className="mb-6 text-base text-slate-500 mt-1">
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem.
                    </p>

                    {/* <!-- Meta Informations --> */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center capitalize space-x-2">
                        <div className="avater-img bg-indigo-600 text-white">
                          <span className="">S</span>
                        </div>

                        <div>
                          <h5 className="text-slate-500 text-sm">
                            <Link to="/profile">Saad Hasan</Link>
                          </h5>
                          <div className="flex items-center text-xs text-slate-700">
                            <span>June 28, 2018</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-sm px-2 py-1 text-slate-700">
                        <span>100 Likes</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Blog Card End --> */}

                {/* <!-- Blog Card Start --> */}
                <div className="blog-card">
                  <img className="blog-thumb" src={ReactRoadmap} alt="" />
                  <div className="mt-2">
                    <Link to="/single-blog">
                      <h3 className="text-slate-300 text-xl lg:text-2xl">
                        React Roadmap in 2024
                      </h3>
                    </Link>
                    <p className="mb-6 text-base text-slate-500 mt-1">
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem.
                    </p>

                    {/* <!-- Meta Informations --> */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center capitalize space-x-2">
                        <div className="avater-img bg-indigo-600 text-white">
                          <span className="">S</span>
                        </div>

                        <div>
                          <h5 className="text-slate-500 text-sm">
                            <Link to="/profile">Saad Hasan</Link>
                          </h5>
                          <div className="flex items-center text-xs text-slate-700">
                            <span>June 28, 2018</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-sm px-2 py-1 text-slate-700">
                        <span>100 Likes</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Blog Card End --> */}

                {/* <!-- Blog Card Start --> */}
                <div className="blog-card">
                  <img className="blog-thumb" src={UnderratedVideo} alt="" />
                  <div className="mt-2">
                    <h3 className="text-slate-300 text-xl lg:text-2xl">
                      React Fetch API
                    </h3>
                    <p className="mb-6 text-base text-slate-500 mt-1">
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem.
                    </p>

                    {/* <!-- Meta Informations --> */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center capitalize space-x-2">
                        <div className="avater-img bg-indigo-600 text-white">
                          <span className="">S</span>
                        </div>

                        <div>
                          <h5 className="text-slate-500 text-sm">
                            <Link to="/profile">Saad Hasan</Link>
                          </h5>
                          <div className="flex items-center text-xs text-slate-700">
                            <span>June 28, 2018</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-sm px-2 py-1 text-slate-700">
                        <span>100 Likes</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Blog Card End --> */}

                {/* <!-- Blog Card Start --> */}
                <div className="blog-card">
                  <img className="blog-thumb" src={TailwindCnThumb} alt="" />
                  <div className="mt-2">
                    <h3 className="text-slate-300 text-xl lg:text-2xl">
                      Style your components with TailwindCSS
                    </h3>
                    <p className="mb-6 text-base text-slate-500 mt-1">
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem.
                    </p>

                    {/* <!-- Meta Informations --> */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center capitalize space-x-2">
                        <div className="avater-img bg-indigo-600 text-white">
                          <span className="">S</span>
                        </div>

                        <div>
                          <h5 className="text-slate-500 text-sm">
                            <Link to="/profile">Saad Hasan</Link>
                          </h5>
                          <div className="flex items-center text-xs text-slate-700">
                            <span>June 28, 2018</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-sm px-2 py-1 text-slate-700">
                        <span>100 Likes</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Blog Card End --> */}
              </div>

              {/* <!-- Sidebar --> */}
              <div className="md:col-span-2 h-full w-full space-y-5">
                <div className="sidebar-card">
                  <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
                    Most Popular 👍️
                  </h3>

                  <ul className="space-y-5 my-5">
                    <li>
                      <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                        How to Auto Deploy a Next.js App on Ubuntu from GitHub
                      </h3>
                      <p className="text-slate-600 text-sm">
                        by
                        <Link to="/profile">Saad Hasan</Link>
                        <span>·</span> 100 Likes
                      </p>
                    </li>

                    <li>
                      <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                        How to Auto Deploy a Next.js App on Ubuntu from GitHub
                      </h3>
                      <p className="text-slate-600 text-sm">
                        by
                        <Link to="/profile">Saad Hasan</Link>
                        <span>·</span> 100 Likes
                      </p>
                    </li>

                    <li>
                      <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                        How to Auto Deploy a Next.js App on Ubuntu from GitHub
                      </h3>
                      <p className="text-slate-600 text-sm">
                        by
                        <Link to="/profile">Saad Hasan</Link>
                        <span>·</span> 100 Likes
                      </p>
                    </li>

                    <li>
                      <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                        How to Auto Deploy a Next.js App on Ubuntu from GitHub
                      </h3>
                      <p className="text-slate-600 text-sm">
                        by
                        <Link to="/profile">Saad Hasan</Link>
                        <span>·</span> 100 Likes
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-card">
                  <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
                    Your Favourites ❤️
                  </h3>

                  <ul className="space-y-5 my-5">
                    <li>
                      <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                        How to Auto Deploy a Next.js App on Ubuntu from GitHub
                      </h3>
                      <p className="text-slate-600 text-sm">
                        #tailwindcss, #server, #ubuntu
                      </p>
                    </li>

                    <li>
                      <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                        How to Auto Deploy a Next.js App on Ubuntu from GitHub
                      </h3>
                      <p className="text-slate-600 text-sm">
                        #tailwindcss, #server, #ubuntu
                      </p>
                    </li>

                    <li>
                      <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                        How to Auto Deploy a Next.js App on Ubuntu from GitHub
                      </h3>
                      <p className="text-slate-600 text-sm">
                        #tailwindcss, #server, #ubuntu
                      </p>
                    </li>

                    <li>
                      <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                        How to Auto Deploy a Next.js App on Ubuntu from GitHub
                      </h3>
                      <p className="text-slate-600 text-sm">
                        #tailwindcss, #server, #ubuntu
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Blogs --> */}
      </main>
    </>
  )
}
