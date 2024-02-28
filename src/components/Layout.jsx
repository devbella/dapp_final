import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useSDK } from "@metamask/sdk-react";
import Web3 from "web3";
import { useEffect, useState } from "react";
import mintNFTABI from "../abis/MintNFT.json";

const Layout = () => {
  const { provider, sdk } = useSDK();

  const [web3, setWeb3] = useState();
  const [contract, setContract] = useState();

  useEffect(() => {
    if (!provider) return;

    setWeb3(new Web3(provider));
  }, [provider]);
  useEffect(() => {
    if (!web3) return;

    setContract(
      new web3.eth.Contract(
        mintNFTABI,
        "0xF6F12867a4DAC28aB16e688DD5D8769f3dD1D688"
      )
    );
  }, [web3]);

  return (
    <div className="max-w-screen-md mx-auto min-h-screen">
      <Header />
      <Outlet context={{ contract, sdk }} />
    </div>
  );
};

export default Layout;
