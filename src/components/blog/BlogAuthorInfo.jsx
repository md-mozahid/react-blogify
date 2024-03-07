export default function BlogAuthorInfo() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center capitalize space-x-2">
        <div className="avater-img bg-indigo-600 text-white">
          <span className="">S</span>
        </div>

        <div>
          <h5 className="text-slate-500 text-sm">Saad Hasan</h5>
          <div className="flex items-center text-xs text-slate-700">
            <span>June 28, 2018</span>
          </div>
        </div>
      </div>

      <div className="text-sm px-2 py-1 text-slate-700">
        <span>100 Likes</span>
      </div>
    </div>
  );
}
