import React from "react";
function Footer() {
  return (
    <div className="w-full bg-zinc-900">
      <div className="max-w-screen-xl  mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
            <h1 className="text-[12rem] font-semibold leading-none tracking-tight">refokus.</h1>
        </div>
        <div className="basis-1/2 flex gap-4">
            <div className="basis-1/3">
                <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
               { ["Instagram", "Twitter", "LinkedIn"].map((item,index)=><a className="block mt-3 text-zinc-600 capitalize">{item}</a>)}
            </div>
            <div className="basis-1/3">
                <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
               { ["Instagram", "Twitter", "LinkedIn"].map((item,index)=><a className="block mt-3 text-zinc-600 capitalize">{item}</a>)}
            </div>
            <div className="basis-1/2">
                <p>Discover why Refokus is the preferred digital agency for venture capital firms, providing innovative web solutions that effectively showcase their strategic vision and investment prowess.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
