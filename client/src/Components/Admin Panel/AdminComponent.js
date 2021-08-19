import React from "react";
import ImageUpload from "./ImageUpload";

function AdminComponent() {
  return (
    <div>
      <div className="flex flex-wrap mb-20">
        <div className="md:w-1/2 p-20 bg-gradient-to-r from-blue-100">
          <p className="mb-5 text-xl uppercase tracking-widest">
            {" "}
            <span className="text-blue-400 text-5xl">Admin Portal</span> <br />
            <br />
            <br />
            Librarian Dashboard <br />
          </p>
          <p className="mb-7 text-sm leading-snug text-black">
            Easily Manage Users, Books, Newsletters etc. from a Powerful
            Dashboard! Enter the Book/Journal/Newsletter:
          </p>
        </div>
        <div className="md:w-1/2">
          <ImageUpload/>
        </div>
      </div>
    </div>
  );
}

export default AdminComponent;
