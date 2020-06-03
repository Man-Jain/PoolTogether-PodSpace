import React from "react";
import "./PodDetails.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkSquareAlt,
  faCircle,
  faLongArrowAltUp,
} from "@fortawesome/free-solid-svg-icons";
import { shortenAddress } from "../../utils";
import ChatButton from "../ChatButton";
import { StateContext } from "../../hooks";

import { depositToPod, redeemFromPod, getUserPodBalance } from "../../services";

function PodDetails(props) {
  const [depositAmount, setDepositAmount] = React.useState("");
  const [withdrawAmount, setWithdrawAmount] = React.useState("");
  const [userTickets, setUserTickets] = React.useState("0");

  const { walletAddress, currentPod, estimatedPrize } = React.useContext(
    StateContext
  );

  const actionDepositPod = async () => {
    console.log("address", currentPod.address);
    await depositToPod(currentPod.address, depositAmount);
  };

  const actionWithdrawPod = async () => {
    console.log("address", currentPod.address);
    await redeemFromPod(withdrawAmount);
  };

  React.useEffect(() => {
    getUserTickets();
  });

  const getUserTickets = async () => {
    const tickets = await getUserPodBalance(currentPod.address, walletAddress);
    setUserTickets(tickets);
  };

  return (
    <div className="pod-details">
      {currentPod.address !== "" ? (
        <div>
          <div className="pool-together-details-container">
            <div className="pool-together-details-header">
              <span>Pool Together</span>
              <span className="pool-together-details-header-divider">
                <FontAwesomeIcon icon={faCircle} />
              </span>
              <span>Stats</span>
            </div>
            <div className="pool-together-details-subtitle">
              <span className="pool-together-details-subtitle-title">
                Address:
              </span>
              <span className="pool-together-details-subtitle-value">
                <span>
                  <a
                    href={
                      "https://etherscan.io/address/" +
                      currentPod.podDetails.pod.poolContract.id
                    }
                  >
                    {shortenAddress(currentPod.podDetails.pod.poolContract.id)}
                  </a>
                </span>
                <span>
                  <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
                </span>
              </span>
            </div>
            <div className="pool-together-estimate-prize">
              <div className="pool-together-estimate-prize-title">
                Estimated prize:
              </div>
              <div className="pool-together-estimate-prize-value">
                {estimatedPrize}
                <span className="pool-together-estimate-prize-icon">
                  <FontAwesomeIcon icon={faLongArrowAltUp} />
                </span>
              </div>
            </div>
          </div>
          <div className="pod-details-container">
            <div className="pod-details-header">
              <span>{currentPod.name}</span>
              <span className="pod-details-header-divider">
                <FontAwesomeIcon icon={faCircle} />
              </span>
              <span>Stats</span>
            </div>
            <div className="pod-details-subtitle">
              <span className="pool-together-details-subtitle-title">
                Address:
              </span>
              <span className="pool-together-details-subtitle-value">
                <span>
                  <a
                    href={"https://etherscan.io/address/" + currentPod.address}
                  >
                    {shortenAddress(currentPod.address)}
                  </a>
                </span>
                <span>
                  <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
                </span>
              </span>
            </div>
            <div className="pod-details-stats-container">
              <div className="pod-details-stats-item">
                <div className="pod-details-stats-title">Pod Balance</div>
                <div className="pod-details-stats-value">
                  ${" "}
                  {Math.round(
                    (parseInt(currentPod.podDetails.pod.balanceUnderlying) -
                      parseInt(
                        currentPod.podDetails.pod.totalPendingDeposits
                      )) /
                      10 ** 18
                  )}
                </div>
              </div>
              <div className="pod-details-stats-item">
                <div className="pod-details-stats-title">Your Balance</div>
                <div className="pod-details-stats-value">
                  {userTickets} Tickets
                </div>
              </div>
              <div className="pod-details-stats-item">
                <div className="pod-details-stats-title">Pod Players</div>
                <div className="pod-details-stats-value">
                  {currentPod.podDetails.pod.podPlayersCount}
                </div>
              </div>
            </div>
          </div>
          <div className="pod-actions-container">
            <div className="pod-actions-item">
              <div className="pod-actions-item-title">Deposit</div>
              <div className="pod-actions-item-input-container">
                <input
                  type="number"
                  className="pod-actions-item-input"
                  placeholder="0 Dai"
                  onChange={(e) => setDepositAmount(e.target.value)}
                />
              </div>
              <div className="pod-actions-item-button-container">
                <button
                  className="pod-actions-item-button"
                  onClick={actionDepositPod}
                >
                  Deposit
                </button>
              </div>
            </div>
            <div className="pod-actions-item">
              <div className="pod-actions-item-title">Withdraw</div>
              <div className="pod-actions-item-input-container">
                <input
                  type="number"
                  className="pod-actions-item-input"
                  placeholder="0 Dai"
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                />
              </div>
              <div className="pod-actions-item-button-container">
                <button
                  className="pod-actions-item-button"
                  onClick={actionWithdrawPod}
                >
                  Withdraw
                </button>
              </div>
            </div>
          </div>
          <div className="pools-stats-container">
            <div className="pool-together-details-header">
              <span>Stats</span>
            </div>
            <div className="pool-together-details-stats-container">
              <div className="pool-together-details-stats-item">
                <div className="pool-together-details-stats-title">
                  Total contract balance (Dai)
                </div>
                <div className="pool-together-details-stats-value">
                  $
                  {Math.round(
                    parseInt(
                      currentPod.podDetails.pod.poolContract.committedBalance
                    ) /
                      10 ** 18 +
                      parseInt(
                        currentPod.podDetails.pod.poolContract.openBalance
                      ) /
                        10 ** 18 +
                      parseInt(
                        currentPod.podDetails.pod.poolContract
                          .sponsorshipAndFeeBalance
                      ) /
                        10 ** 18
                  )}
                </div>
              </div>
              <div className="pool-together-details-stats-item">
                <div className="pool-together-details-stats-title">
                  # of current players
                </div>
                <div className="pool-together-details-stats-value">
                  {currentPod.podDetails.pod.poolContract.playersCount}
                </div>
              </div>
            </div>
          </div>
          <ChatButton
            threadName={currentPod.address}
            walletAddress={walletAddress}
          />
        </div>
      ) : (
        <div className="pool-together-details-container">
          <div className="pool-together-details-header">
            <span>Select a Pod From the left OR Add a New Pod</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default PodDetails;
