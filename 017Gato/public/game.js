document.addEventListener("DOMContentLoaded", () => {

    const bigBoard = document.getElementById("bigBoard");
    let turn = "X";

    const winPatterns = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    function checkWinner(board) {
        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;

            if (
                board[a] &&
                board[a] === board[b] &&
                board[a] === board[c]
            ) {
                return board[a];
            }
        }
        return null;
    }

    for (let i = 0; i < 9; i++) {
        const small = document.createElement("div");
        small.classList.add("small-board");

        let board = Array(9).fill("");

        for (let j = 0; j < 9; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            cell.onclick = () => {

                if (cell.textContent !== "") return;

                cell.textContent = turn;
                board[j] = turn;

                const winner = checkWinner(board);

                if (winner) {
                    alert("Ganó " + winner + " en un tablero!");
                }

                turn = turn === "X" ? "O" : "X";
            };

            small.appendChild(cell);
        }

        bigBoard.appendChild(small);
    }
});