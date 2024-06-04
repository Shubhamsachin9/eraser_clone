import { Button } from "@/components/ui/button";
import { Link, Save } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function WorkspaceHeader({ onSave }: any) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    // Assuming you have a link to copy in a variable called 'shareLink'
    const shareLink =
      "http://localhost:3000/workspace/jh74vf9ahezazp8c3r57h4bndh6tdy2t";
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
  };
  return (
    <div className="p-3 border-b flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Image src={"/logo-1.png"} alt="logo" height={40} width={40} />
        <h2>File Name</h2>
      </div>
      <div className="flex items-center gap-4">
        <Button
          className="h-8 text-[12px]
        gap-2 bg-yellow-500 hover:bg-yellow-600"
          onClick={() => onSave()}
        >
          <Save className="h-4 w-4" /> Save{" "}
        </Button>
        <Button
          className="h-8 text-[12px]
        gap-2 bg-blue-600 hover:bg-blue-700"
          onClick={handleClick}
        >
          {copied ? "Copied!" : "Share"} <Link className="h-4 w-4" />{" "}
        </Button>
      </div>
    </div>
  );
}

export default WorkspaceHeader;
