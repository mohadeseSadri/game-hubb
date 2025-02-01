import useGames from "../hooks/useGames"

function GameGrid() {
  const {games, error} = useGames();

  return (
    <>
      {error && <h4>{error}</h4>}
      <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
      </ul>
    </>
  )
}

export default GameGrid