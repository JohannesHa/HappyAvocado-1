pragma solidity ^0.4.17;

import "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";
import "zeppelin-solidity/contracts/ownership/Ownable.sol";

contract HappyAvocadoToken is ERC721Token, Ownable {
  string public constant name = "HappyAvocadoToken";
  string public constant symbol = "HAT";

  struct Location {
    int longitude;
    int latitude;
  }

  Location[] public locations;

  function getLocation( uint _locationId ) public view returns(int longitude, int latitude){
    Location memory _loc = locations[_locationId];

    longitude = _loc.longitude;
    latitude = _loc.latitude;
  }

  function mint(int _longitude, int _latitude) public payable onlyOwner{
    Location memory _location = Location({ longitude: _longitude, latitude: _latitude });
    uint _locationId = locations.push(_location) - 1;

    _mint(msg.sender, _locationId);
  }
}
