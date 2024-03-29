import gokuImage from "../assets/images/goku-party.png";
import vegetaImage from "../assets/images/vegeta-party.png";
import gohanImage from "../assets/images/gohan-party.png";
import cellImage from "../assets/images/cell-party.png";

const partyVotes = [
    {
      id: 'party1',
      name: 'Goku',
      votes: 0,
      img: gokuImage,
      voters: []
    },
    {
      id: 'party2',
      name: 'Vegeta',
      votes: 0,
      img: vegetaImage,
      voters: []
    },
    {
      id: 'party3',
      name: 'Gohan',
      votes: 0,
      img: gohanImage,
      voters: []
    },
    {
      id: 'party4',
      name: 'Cell',
      votes: 0,
      img: cellImage,
      voters: []
    },
  ];

  export default partyVotes;