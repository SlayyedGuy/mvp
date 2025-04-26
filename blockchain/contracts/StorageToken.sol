// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract StorageToken is ERC20, Ownable {
    uint256 public rewardRate; // tokens per GB-hour

    constructor(uint256 initialRewardRate) ERC20("StorageToken", "STOR") {
        rewardRate = initialRewardRate;
    }

    function submitProof(uint256 gbHoursStored) external {
        uint256 rewardAmount = gbHoursStored * rewardRate;
        _mint(msg.sender, rewardAmount);
    }

    function updateRewardRate(uint256 newRate) external onlyOwner {
        rewardRate = newRate;
    }
}
