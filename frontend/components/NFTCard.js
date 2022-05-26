import React from "react";
import { Card } from "web3uikit";

const OPENSEA_LINK = `https://testnets.opensea.io/assets/mumbai`;

const NFTCard = (props) => {
  return (
    <div className="flex lg:flex-row sm:flex-col md:flex-col flex-wrap lg:justify-between justify-around">
      {Object.keys(props.NFTs).map((key, value) => {
        if (
          props.NFTs[key].name === "Augmented Interactive Reality Experiences"
        ) {
          return (
            <a
              href={`${OPENSEA_LINK}/${props.NFTs[key].token_address}/${props.NFTs[key].token_id}`}
              key={key}
            >
              <div
                className="w-80 mr-10 ml-10 mt-10 mb-10 shadow-2xl"
                key={key}
              >
                <Card>
                  {
                    <img
                      // src={`ipfs://${
                      //   JSON.parse(props.NFTs[key].metadata).image
                      // }`}
                      src={`https://ipfs.io/ipfs/bafkreiepdaut42mgc3dqul7ly7bvatu54rxhaxunst2xbiyv6jf5dkn2ve`}
                      className="w-100 rounded-xl"
                    ></img>
                  }
                  <p className="font-bold text-black ml-8 mt-5 mb-5">
                    {props.NFTs[key].name + " #" + props.NFTs[key].token_id}
                  </p>
                </Card>
              </div>
            </a>
          );
        }
      })}
    </div>
  );
};

export default NFTCard;
