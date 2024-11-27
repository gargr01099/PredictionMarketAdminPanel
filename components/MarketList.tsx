// components/MarketList.tsx
import React from "react";

interface Market {
  id: string;
  question: string;
  image: string;
  liquidity: string;
}

const marketsData: Market[] = [
  {
    id: "503297",
    question: "Will the Cardinals win Super Bowl 2025?",
    image:
      "https://polymarket-upload.s3.us-east-2.amazonaws.com/will-the-cardinals-win-super-bowl-2025-MvVLogbHwCev.png",
    liquidity: "243929.22",
  },
  {
    id: "503298",
    question: "Will the Falcons win Super Bowl 2025?",
    image:
      "https://polymarket-upload.s3.us-east-2.amazonaws.com/will-the-falcons-win-super-bowl-2025-2ztVeYJViGuO.png",
    liquidity: "232407.78",
  },
  {
    id: "503299",
    question: "Will the Ravens win Super Bowl 2025?",
    image:
      "https://polymarket-upload.s3.us-east-2.amazonaws.com/will-the-ravens-win-super-bowl-2025-edqAMwss0S30.png",
    liquidity: "62299.49",
  },
  {
    id: "503300",
    question: "Will the Bills win Super Bowl 2025?",
    image:
      "https://polymarket-upload.s3.us-east-2.amazonaws.com/will-the-bills-win-super-bowl-2025-Vv15edK04PPY.png",
    liquidity: "203153.77",
  },
  {
    id: "503301",
    question: "Will the Panthers win Super Bowl 2025?",
    image:
      "https://polymarket-upload.s3.us-east-2.amazonaws.com/will-the-panthers-win-super-bowl-2025-xGO11DwcvobC.png",
    liquidity: "925099.33",
  },
];
interface MarketListProps {
  searchQuery: string;
}

const MarketList: React.FC<MarketListProps> = ({ searchQuery }) => {
  const filteredMarkets = marketsData.filter((market) =>
    market.question.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="flex flex-col space-y-4 p-4">
      {filteredMarkets.map((market) => (
        <div
          key={market.id}
          className="flex items-center border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={market.image}
            alt={market.question}
            className="w-16 h-16 mr-4 rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-lg">{market.question}</span>
            <span className="text-gray-600">
              Liquidity: ${market.liquidity}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketList;
