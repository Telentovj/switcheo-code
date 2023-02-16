//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./dummyToken.sol";
contract BalancePrinter {
    struct TokenBalance {
        address Token;
        uint256 Balance;
    }

    function getBalances(
        address _wallet,
        address[] memory _tokens
    ) public view returns (TokenBalance[] memory) {
        TokenBalance[] memory balances = new TokenBalance[](_tokens.length);

        for (uint i = 0; i < _tokens.length; i++) {
            balances[i] = TokenBalance(_tokens[i],DummyToken(_tokens[i]).balanceOf(_wallet));           
        }
        return balances;
    }
}
