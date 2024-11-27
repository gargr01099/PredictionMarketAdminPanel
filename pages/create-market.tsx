import { useState } from "react";
import { useData } from "../contexts/DataContext";
import Navbar from "../components/Navbar";
import Head from "next/head";

export default function CreateMarket() {
  const { account, polymarket, loadWeb3, loading } = useData();
  const [newMarketTitle, setNewMarketTitle] = useState("");
  const [isCreatingMarket, setIsCreatingMarket] = useState(false);

  const handleCreateMarket = async () => {
    if (newMarketTitle.trim() === "") {
      alert("Market title cannot be empty");
      return;
    }

    setIsCreatingMarket(true);
    try {
      const marketCreated = await createMarket(
        polymarket,
        account,
        newMarketTitle
      );
      if (marketCreated) {
        setNewMarketTitle(""); // Clear the input
      }
    } catch (error) {
      console.error("Error creating market", error);
    } finally {
      setIsCreatingMarket(false);
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Create Market</title>
        <meta name="description" content="Create a new market on Soren" />
      </Head>
      <Navbar />
      <main className="w-full flex flex-col py-4">
        <div className="w-full flex flex-col pt-1">
          <h2 className="text-xl font-semibold mb-4">Create New Market</h2>
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Enter market title"
              className="w-64 p-2 border rounded-md"
              value={newMarketTitle}
              onChange={(e) => setNewMarketTitle(e.target.value)}
            />
            <button
              onClick={handleCreateMarket}
              disabled={isCreatingMarket}
              className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
            >
              {isCreatingMarket ? "Creating..." : "Create Market"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export const createMarket = async (
  polymarket: any,
  account: string,
  title: string
) => {
  try {
    const result = await polymarket.methods
      .createMarket(title) // Assuming `createMarket` method exists in your contract
      .send({ from: account });
    console.log("Market created successfully:", result);
    return true;
  } catch (error) {
    console.error("Error creating market", error);
    return false;
  }
};
