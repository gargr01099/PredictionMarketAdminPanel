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
  {
    id: "503302",
    question: "Will Bitcoin reach $100k by 2025?",
    image: "https://example.com/images/bitcoin-market.png",
    liquidity: "1234567.89",
  },
  {
    id: "503303",
    question: "Will Ethereum surpass Bitcoin in market cap?",
    image: "https://example.com/images/ethereum-market.png",
    liquidity: "987654.32",
  },
  {
    id: "503304",
    question: "Will Tesla's stock price double by 2026?",
    image: "https://example.com/images/tesla-market.png",
    liquidity: "456789.12",
  },
  {
    id: "503305",
    question: "Will the US Federal Reserve lower interest rates in 2024?",
    image: "https://example.com/images/fed-rates-market.png",
    liquidity: "789456.23",
  },
  {
    id: "503306",
    question: "Will AI dominate more than 50% of the tech market by 2030?",
    image: "https://example.com/images/ai-market.png",
    liquidity: "654321.77",
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {filteredMarkets.map((market) => (
        <div
          key={market.id}
          className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-blue-100"
        >
          <img
            src={market.image}
            alt={market.question}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <div className="text-base">
            <p className="font-semibold text-lg mb-2 truncate">{market.question}</p>
            <p className="text-gray-600">Liquidity: ${market.liquidity}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketList;
