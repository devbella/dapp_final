import { useOutletContext, useNavigate } from "react-router-dom";

const Nft = () => {
  const { contract, sdk } = useOutletContext();
  const navigate = useNavigate();

  const mintNFT = async () => {
    try {
      if (!contract || !sdk) return;

      const accounts = await sdk.connect();

      await contract.methods.mintNFT().send({ from: accounts[0] });

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center py-10">
      <button
        className="py-2 px-6 border-4 border-black/80 border-solid rounded-xl font-bold"
        onClick={mintNFT}
      >
        Mint
      </button>
    </div>
  );
};

export default Nft;
