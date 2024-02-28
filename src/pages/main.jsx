import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useOutletContext } from "react-router-dom";

const nftOrder = [
  9, 27, 16, 6, 28, 5, 10, 23, 13, 2, 35, 4, 31, 18, 7, 14, 29, 19, 25, 24, 33,
  22, 30, 32, 20, 26, 21, 15, 3, 11, 1, 17, 12, 8, 34,
];

const Main = () => {
  const [nftMetadata, setNftMetadata] = useState([]);
  const [totalSupply, setTotalSupply] = useState();

  const { contract } = useOutletContext();

  const getNFTs = async () => {
    try {
      const temp = [];

      for (let i = 0; i < 35; i++) {
        const response = await axios.get(
          `https://emerald-junior-loon-340.mypinata.cloud/ipfs/QmXdGav1s8hyF2SzooLD5LYHq1jgczWqj2oYVWjrxQSiGP/${nftOrder[i]}.json`
        );

        temp.push(response.data);
      }

      setNftMetadata(temp);
    } catch (error) {
      console.error(error);
    }
  };

  const getTotalSupply = async () => {
    try {
      if (!contract) return;

      const response = await contract.methods.totalSupply().call();

      setTotalSupply(Number(response));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNFTs();
  }, []);

  useEffect(() => {
    getTotalSupply();
  }, [contract]);

  return (
    <div>
      <div className="grid grid-cols-5">
        {nftMetadata?.map((v, i) => (
          <div key={i} className="relative border">
            {totalSupply < Number(v.name.split("#").pop()) && (
              <div className="absolute w-full h-full bg-white bg-opacity-50"></div>
            )}
            <img src={v.image} alt={v.name} />
          </div>
        ))}
      </div>

      <Link to="/nft">
        <div className="flex justify-center py-10">
          <button className="py-2 px-6 border-4 border-black/80 border-solid rounded-xl font-bold">
            Mint Now!
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Main;
