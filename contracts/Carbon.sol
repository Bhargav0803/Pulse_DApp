//SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract Carbon{
	struct Record{
    	string name;
    	string message;
    	uint timestamp;
    	address from;
	}
	Record[] records;
	address payable owner;

	constructor(){
    	owner = payable(msg.sender);
	}

	function buyCarbonCredit(string memory name, string memory message)public payable {
    	require(msg.value>0,"Pay something!");
    	owner.transfer(msg.value);
    	records.push(Record(name,message,block.timestamp,msg.sender));
	}

	function getRecords() public view returns(Record[] memory){
    	return records;
	}
}
