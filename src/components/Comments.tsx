"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const comments = [
  {
    id: 1,
    name: "Student Name Goes Here",
    date: "Oct 10, 2021",
    avatar: "/placeholder.jpg",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Student Name Goes Here",
    date: "Oct 15, 2021",
    avatar: "/placeholder.jpg",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
function Comments() {
  const [newComment, setNewComment] = useState("");
  return (
    <div id="comments" className=" py-5">
      <h2 className="text-2xl font-bold mb-4 mt-5">Comments</h2>
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b pb-4">
            <div className="flex items-start space-x-4">
              <Image
                src={comment.avatar}
                alt="avatar"
                className="w-12 h-12 rounded-full border"
                width={48}
                height={48}
              />
              <div className="space-y-2">
                <Link
                  href="#"
                  className="text-zinc-600 font-semibold hover:underline"
                >
                  {comment.name}
                </Link>
                <p className="text-gray-500 text-sm">{comment.date}</p>
                <p className="text-gray-700">{comment.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-sm">
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
          rows={4}
          placeholder="Write a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button
          onClick={() => {
            // Here i can send the question to backend
            if (!newComment) {
              // Here i can make it better with form validation and toast messages but for now i will use alert
              alert("You need to write something!");
              return;
            }
            comments.push({
              id: comments.length + 1,
              name: "Student Name Goes Here",
              date: "Oct 20, 2021",
              avatar: "/placeholder.jpg",
              comment: newComment,
            });
            setNewComment("");
          }}
          className="mt-3 px-5 py-2 bg-green-500 soft cursor-pointer text-white rounded-md flex items-center justify-center gap-2 hover:bg-green-600"
        >
          Submit Review →
        </button>
      </div>
    </div>
  );
}
export default Comments;
