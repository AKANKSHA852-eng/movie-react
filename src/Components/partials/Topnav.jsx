import React, { useState } from "react";



function TopNav() {
  const [query, setQuery] =useState("");
 



  return (
    <div className="fixed top-0 left-0 w-full h-[10vh]  flex justify-start items-center ml-[35%]">
      <i className=" text-zinc-200 text-2xl ri-search-2-line"></i>{" "}
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-100 mx-10 p-5 text-m outline-none border-none bg-transparent"
        type="text"
        placeholder="search anything"
      />
      
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="  text-zinc-400 text-3xl ri-close-line"
        ></i>
      )}
      
      </div>
       
        
     
  );
}

export default TopNav;