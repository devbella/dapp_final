import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex h-28 justify-between font-bold text-lg px-2 py-4">
      <div className="flex items-center">
        <Link to="/">
          <img
            src="images/TreeDAO_black.png"
            alt="TreeDAO with puzzle."
            width={190}
            height={190}
          />
        </Link>
      </div>
      <div className="flex items-center">
        <Link to="/nft">NFT</Link>
        <Link className="mx-4" to="/governance">
          Governance
        </Link>
        <div>
          <a
            href="https://app.gitbook.com/o/1diQVWY9RtXAOcQXoyiQ/s/eGB7Co2iSSUr5BcdfzsD/"
            target="_blank"
          >
            Docs
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
