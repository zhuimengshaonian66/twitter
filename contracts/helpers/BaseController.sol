pragma solidity ^0.4.19;

import './Owned.sol';

contract BaseController is Owned {
   // The Contract Manager's address
  address managerAddr;

  function setManagerAddr(address _managerAddr) public onlyOwner {
    managerAddr = _managerAddr;
  }

}
