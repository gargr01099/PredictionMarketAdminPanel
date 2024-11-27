import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";

const Admin = () => {
  const router = useRouter();
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [endTime, setEndTime] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // Handle the form submission to create a new market
  const handleCreateMarket = () => {
    const newMarket = {
      title,
      description,
      endTime,
      imageUrl,
    };

    // Save the new market in local storage
    const existingMarkets = JSON.parse(localStorage.getItem("markets") || "[]");
    const updatedMarkets = [...existingMarkets, newMarket];
    localStorage.setItem("markets", JSON.stringify(updatedMarkets));

    // Clear form fields
    setTitle("");
    setDescription("");
    setEndTime("");
    setImageUrl("");

    // Redirect to the Home Page to view all markets
    router.push("/");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-full p-5">
        <Head>
          <title>Create Market - Soren</title>
          <meta name="description" content="Create a new market on the Soren platform" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <main className="w-full flex flex-col py-4 max-w-5xl pb-6">
          <Link href="/admin/markets">
            <a className="mt-5 rounded-lg py-3 text-center w-full bg-blue-700 text-white font-bold mb-5">
              See All Markets
            </a>
          </Link>
          <div className="w-full flex flex-col pt-1 border border-gray-300 p-5 rounded-lg">
            <span className="text-lg font-semibold mt-4">Add New Market</span>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCreateMarket();
              }}
              className="flex flex-col gap-4"
            >
              <span className="text-lg font mt-6 mb-1">Market Title</span>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full py-3 px-3 text-base text-gray-700 bg-gray-100 rounded-md focus:outline-none"
                placeholder="Title"
              />
              <span className="text-lg font mt-6 mb-1">Market Description</span>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full py-3 px-3 text-base text-gray-700 bg-gray-100 rounded-md focus:outline-none"
                placeholder="Description"
              />
              <span className="text-lg font mt-6 mb-1">End Date</span>
              <input
                type="datetime-local"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                required
                className="w-full py-3 px-3 text-base text-gray-700 bg-gray-100 rounded-md focus:outline-none"
              />
              <span className="text-lg font mt-6 mb-1">Image URL</span>
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
                className="w-full py-3 px-3 text-base text-gray-700 bg-gray-100 rounded-md focus:outline-none"
                placeholder="Image URL"
              />
              <button
                type="submit"
                className="mt-5 rounded-lg py-3 text-center w-full bg-green-500 text-white font-bold"
              >
                Create Market
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default Admin;
