import { useState } from "react";

//We need a button when the user clicks a button it will update hte name: 'Zac' to name: 'Patrick'

const Exercise1 = () => {
    const [game, setGame] = useState({
        id:1,
        player: {
            name: "David",
        },
    });

    const handleClick = () => {
        // game.player.name = 'Aaron';
       
    }
  return (
    <div>
      
    </div>
  )
}

export default Exercise1
