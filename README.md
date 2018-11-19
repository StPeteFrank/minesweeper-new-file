Instructions Below

New Game
When the user clicks the new game button
Use the new game API to request a new game
POST /games
Take what the API gives back and put that in the state
Display the number of the game we are playing
Draw the board

8x8 grid of and elements
comes from the state, the API calls this board (Render based on the state)
So for each element in the board, put the appropriate character in the table
Update the number of mines remaining
Check a cell

Tell the API that the user checked a cell
We need to tell it:
id (number of the game)
row
col
POST /games/{id}/check
Take what the API gives back and put that in the state
Flag a cell

Tell the API that the user flagged a cell

We need to tell it:
id (number of the game)
row
col
POST /games/{id}/flag
Take what the API gives back and put that in the state
Handle a game over (display something to the user)

Handle easy/intermediate/expert
