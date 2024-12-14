"use client";

import { useEffect, useState } from "react";
import { api } from "../../../utils/url";

const OrderManagement = () => {
  const [data, setData] = useState<
    {
      storeName: string;
      aggregators: { aggregator: string; elapsedTime: string }[];
    }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api({
          url: "/order/latest-delivered-order-time",
          type: "get",
        });

        if (response.status) {
          const result: any = response.data;
          setData(result.storeAggregatorData);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  // Get unique aggregators for table headers
  const uniqueAggregators = Array.from(
    new Set(
      data.flatMap((store) => store.aggregators.map((agg) => agg.aggregator))
    )
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <h1 className="text-3xl font-bold text-yellow-300 mb-6 text-center">
          Order Management
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-700">
            <thead>
              <tr className="bg-gray-800">
                <th className="p-4 border border-gray-700 text-yellow-300">
                  Store
                </th>
                {uniqueAggregators.map((aggregator) => (
                  <th
                    key={aggregator}
                    className="p-4 border border-gray-700 text-yellow-300"
                  >
                    {aggregator}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((store) => (
                <tr
                  key={store.storeName}
                  className="odd:bg-gray-800 even:bg-gray-700"
                >
                  <td className="p-4 border border-gray-700 text-green-400">
                    {store.storeName}
                  </td>
                  {uniqueAggregators.map((aggregator) => {
                    const aggData = store.aggregators.find(
                      (agg) => agg.aggregator === aggregator
                    );
                    return (
                      <td
                        key={aggregator}
                        className="p-4 border border-gray-700"
                      >
                        {aggData ? aggData.elapsedTime : "N/A"}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
