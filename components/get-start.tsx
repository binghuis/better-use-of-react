import React from "react";

type Props = {} & React.HtmlHTMLAttributes<HTMLDivElement>;

const GetStart: React.FC<Props> = (props) => {
  return (
    <div {...props}>
      <a
        className="group relative inline-block overflow-hidden border border-slate-600 px-8 py-3 focus:outline-none focus:ring"
        href="/docs"
      >
        <span className="absolute inset-y-0 left-0 w-[2px] bg-slate-700 transition-all group-hover:w-full"></span>

        <span className="flex gap-1 relative text-md font-medium text-slate-600 transition-colors group-hover:text-white">
          开始
          <span>
            <svg
              className="h-6 w-6 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </span>
      </a>
    </div>
  );
};

export default GetStart;
