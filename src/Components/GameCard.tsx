import { Game } from "../hooks/useGames";

interface Props {
    game: Game;
}

const GameCard = ({game} : Props) => {
  return (
    <>
        <div>
            <img src={game.background_image} alt="picture"/>
            <h4>{game.name}</h4>
        </div>
    </>
  )
}

export default GameCard