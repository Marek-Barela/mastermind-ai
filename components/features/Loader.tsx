import React from "react";

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="border-t-transparent border-solid animate-spin  rounded-full border-zinc-900 border-8 h-10 w-10"></div>
      <p className="text-sm text-muted-foreground">Content is generating...</p>
    </div>
  );
};

export default Loader;
