/*

JAMES HARDY ~  August 23, 2022

Weekly Coding Challenge: Chess Pieces
---------------------------------------------------------------------------------------
Create a function that takes the name of a chess piece, 
its position and a target position.
 The function should
  return true if the piece can move to the target and 
  false if it can't.


The possible inputs are "Pawn", "Knight", "Bishop", "Rook", "Queen" and "King".


Examples
canMove("Rook", "A8", "H8") ➞ true

canMove("Bishop", "A7", "G1") ➞ true

canMove("Queen", "C4", "D6") ➞ false


Notes
Do not include pawn capture moves and en passant.
Do not include castling.
Remember to include pawns' two-square move on the second rank!
Look for patterns in the movement of the pieces.
---------------------------------------------------------------------------------------
*/

const m = 8;
const n = 8;
const chessBoard = new Array(m);

for (i = 0; i < m; i = i + 1) {
 chessBoard[i] = new Array(n);  

}
//Begin chessBoard:-------------------------------------------------------------------------
const populateEntireBoard =()=>{
    populateH();
    populateG();
    populateF();
    populateE();
    populateD();
    populateC();
    populateB();
    populateA();
}

const populateA = ()=>{
chessBoard[0][0] = 'A1';
chessBoard[0][1] = 'A2';
chessBoard[0][2] = 'A3';
chessBoard[0][3] = 'A4';
chessBoard[0][4] = 'A5';
chessBoard[0][5] = 'A6';
chessBoard[0][6] = 'A7';
chessBoard[0][7] = 'A8';
console.log(chessBoard[0]);
}
const populateB = ()=>{
    chessBoard[1][0] = 'B1';
    chessBoard[1][1] = 'B2';
    chessBoard[1][2] = 'B3';
    chessBoard[1][3] = 'B4';
    chessBoard[1][4] = 'B5';
    chessBoard[1][5] = 'B6';
    chessBoard[1][6] = 'B7';
    chessBoard[1][7] = 'B8';
    console.log(chessBoard[1]);
    }
const populateC = ()=>{
    chessBoard[2][0] = 'C1';
    chessBoard[2][1] = 'C2';
    chessBoard[2][2] = 'C3';
    chessBoard[2][3] = 'C4';
    chessBoard[2][4] = 'C5';
    chessBoard[2][5] = 'C6';
    chessBoard[2][6] = 'C7';
    chessBoard[2][7] = 'C8';
    console.log(chessBoard[2]);
    }
const populateD = ()=>{
    chessBoard[3][0] = 'D1';
    chessBoard[3][1] = 'D2';
    chessBoard[3][2] = 'D3';
    chessBoard[3][3] = 'D4';
    chessBoard[3][4] = 'D5';
    chessBoard[3][5] = 'D6';
    chessBoard[3][6] = 'D7';
    chessBoard[3][7] = 'D8';
    console.log(chessBoard[3]);
    }
const populateE = ()=>{
    chessBoard[4][0] = 'E1';
    chessBoard[4][1] = 'E2';
    chessBoard[4][2] = 'E3';
    chessBoard[4][3] = 'E4';
    chessBoard[4][4] = 'E5';
    chessBoard[4][5] = 'E6';
    chessBoard[4][6] = 'E7';
    chessBoard[4][7] = 'E8';
    console.log(chessBoard[4]);
    }
const populateF = ()=>{
    chessBoard[5][0] = 'F1';
    chessBoard[5][1] = 'F2';
    chessBoard[5][2] = 'F3';
    chessBoard[5][3] = 'F4';
    chessBoard[5][4] = 'F5';
    chessBoard[5][5] = 'F6';
    chessBoard[5][6] = 'F7';
    chessBoard[5][7] = 'F8';
    console.log(chessBoard[5]);
    }
const populateG = ()=>{
    chessBoard[6][0] = 'G1';
    chessBoard[6][1] = 'G2';
    chessBoard[6][2] = 'G3';
    chessBoard[6][3] = 'G4';
    chessBoard[6][4] = 'G5';
    chessBoard[6][5] = 'G6';
    chessBoard[6][6] = 'G7';
    chessBoard[6][7] = 'G8';
    console.log(chessBoard[6]);
    }
const populateH = ()=>{
    chessBoard[7][0] = 'H1';
    chessBoard[7][1] = 'H2';
    chessBoard[7][2] = 'H3';
    chessBoard[7][3] = 'H4';
    chessBoard[7][4] = 'H5';
    chessBoard[7][5] = 'H6';
    chessBoard[7][6] = 'H7';
    chessBoard[7][7] = 'H8';
    console.log(chessBoard[7]);
    }

populateEntireBoard();

//END CHESSBOARD-------------------------------------------------------------------------------------------------


const chessPieces = ['Pawn', 'Knight', 'Bishop', 'Queen', 'King', 'Rook'];

//Utility Functions:
//-----------------------------------------------------------------------------------------------------------------
const searchBoardByIndex =(array, row, column)=>{
    let res = array[row][column];
    //console.log(res);
    return res;
}
const searchBoardByValue=(value)=>{
    let valStr = value.toString();
    for(let row = 0; row < chessBoard.length; row++){
        for(let column = 0; column < chessBoard[row].length;column++){
            if(chessBoard[row][column]===valStr){
                let resObj = {row: row,   column: column}
                //console.log(chessBoard[row][column] + ' found at: \nrow: ' + row + '\ncolumn: '+ column);
                return resObj;
            }
        }
    }
}
const calculateDistanceByRow_Column = (array, startRow, startCol, endRow, endCol)=>{
    let inputVal = array[startRow][startCol];
    let compareVal = array[endRow][endCol];
    console.log('calculating distance: ' + inputVal + ' to: ' + compareVal);
    let rowDistance = endRow - startRow;
    let colDistance = endCol - startCol;
    console.log('Row distance = '+ rowDistance +' Column Distance = '+ colDistance);
    return rowDistance + ' ' + colDistance;
}
const calculateDistanceByValue=(stringIn, destinationRow, destinationColumn)=>{ 
    let val = stringIn.toString();
    let endLocString = searchBoardByIndex(chessBoard, destinationRow,destinationColumn);
    let startPosRowPlaceHolder = searchBoardByValue(val);
    let startPosRow = startPosRowPlaceHolder.row;
    let startPosColPlaceHolder = searchBoardByValue(val);
    let startPosColumn = startPosColPlaceHolder.column; 
    let rowDiff = destinationRow - startPosRow;
    let colDiff = destinationColumn - startPosColumn;
    let diff = {
        start: val,
        rowDifference:  rowDiff,
        colDifference: colDiff,
        end: endLocString 
    }
    console.log(diff)
    return diff;
}
//-----------------------------------------------------------------------------------------------------------------
// MAIN :
const canMove = (chessPiece, startPosStr, endPosStr)=>{
    let endCoords = searchBoardByValue(endPosStr);
    let endRow = endCoords.row;
    let endColumn = endCoords.column;
    for(let i =0; i < chessPieces.length; i++){
        if(!chessPieces.includes(chessPiece)){
            let errMsg = 'Error: ' +chessPiece + ' is an invalid chess piece...';
            console.error(errMsg);
            return errMsg
        }
        var distance = calculateDistanceByValue(startPosStr, endRow, endColumn);
        switch(chessPiece){
            case chessPieces[0]: //Pawn
            if(distance.rowDifference===1 && distance.colDifference !=1){return true};
                if(distance.colDifference >= 0 || distance.colDifference <=-1){
                    return false;
                } 
                if(distance.rowDifference > 2 || distance.rowDifference < -1  ){
                    return false;
                }
                return true;
            case chessPieces[1]: //Knight
                if(distance.colDifference >= 3 || distance.rowDifference >= 3){
                    return false;
                }
                if(distance.colDifference <= -3 || distance.rowDifference <= -3){
                return false;
                }
                return true;
            case chessPieces[2]: //Bishop
                    if(distance.rowDifference + distance.colDifference ===0 
                        ||distance.colDifference + distance.rowDifference ===0 ){
                        return true;
                    }
                    if(distance.rowDifference===1 && distance.colDifference ===1){
                        return true
                    };
                    if(distance.colDifference===-1 && distance.rowDifference===-1){
                        return true;
                    }

                    if(distance.rowDifference <-1 || distance.colDifference <- 1){
                        return false;
                    }
                    if(distance.colDifference ===0){
                        return false;
                    }
                    return true;
            case chessPieces[3]: //Queen
                    if(distance.rowDifference ===1 && distance.colDifference===2){return false}
                    if(distance.rowDifference===1 && distance.colDifference <2 || distance.rowDifference ===-1 && distance.colDifference > -2);{
                        return true
                     };
                    if(distance.rowDifference===3 && distance.colDifference ===2){
                        return true
                    };
                    if(distance.rowDifference >3 && distance.colDifference <1){
                        return true
                    };
                    if(distance.rowDifference >3 && distance.colDifference >2 );{
                        return false;
                    }
                    break;
            case chessPieces[4]: //King
                if(distance.rowDifference >= 2 && distance.colDifference >= 1){
                    return false;
                }
                if(distance.rowDifference < -1 && distance.colDifference < -1){
                    return false;
                }  
                if(distance.rowDifference===0 && distance.colDifference >2){
                    return false;
                }   
                if(distance.rowDifference ===1 && distance.colDifference ===0 
                || distance.rowDifference ===-1 && distance.colDifference ===0){
                return true;       
                }  
                if(distance.rowDifference===0 && distance.colDifference ===1){
                    return true;
                }
                if(distance.rowDifference===1 && distance.colDifference ===1){
                    return true;
                }

            case chessPieces[5]: // Rook
                if(distance.rowDifference > 1 && distance.colDifference >1){
                    return false;
                } 
                if(distance.rowDifference ===1 && distance.colDifference ===1){
                    return false;
                }       
                if(distance.rowDifference< -1 && distance.colDifference >=5){
                    return false;
                }
                if(distance.rowDifference < -1 && distance.colDifference > -1){
                    return true;
                }
                if(distance.rowDifference < -3 && distance.colDifference <1){
                    return true;
                }
            
                return true;
        }
    }
}


//------------------------------------------------------------------------------------------------------------------------------------

                                    //TESTING//

                                    /*
canMove("Rook", "A8", "H8") ➞ true

canMove("Bishop", "A7", "G1") ➞ true

canMove("Queen", "C4", "D6") ➞ false
                                    */

//REQUIRED:
//-------------------------------------------------------------
if(canMove('Rook', 'A8', 'H8')){console.log('Rook Test Case Passed')} // T -pass

if(canMove('Bishop', 'A7', 'G1')){console.log('Bishop  Test Case Passed')} // T -pass

if(!canMove('Queen', 'C4', 'D6')){console.log('Queen Test Case Passed')} // F -pass

console.log('====================================================================');
//PAWN TEST SUITE:
console.log('Testing Pawn Moves..... ');
console.log('forward 1: '+ canMove('Pawn', 'B1', 'C1')); 
console.log('diagonal: '+canMove('Pawn', 'B1', 'C2')); 
console.log('big jump: '+canMove('Pawn', 'B2', 'E2')); 
console.log('backwards:'+canMove('Pawn', 'B7', 'A7')); 
console.log('backwards diagonal: '+ canMove('Pawn', 'G2', 'F1'));
console.log('====================================================================');

//Knight TEST SUITE:
console.log('Testing Knight Moves..... ');
console.log('Knight shape: '+canMove('Knight', 'A2', 'C3')); 
console.log('big vert jump: '+canMove('Knight', 'A2', 'D2')); 
console.log('reverse Knight shape: '+canMove('Knight', 'D3', 'B2')); 
console.log('big horiz jump: '+canMove('Knight', 'B6', 'B2')); 
console.log('diagonal jump: '+canMove('Knight', 'A2', 'E6')); 
console.log('====================================================================');

//Bishop TEST SUITE:
console.log('Testing Bishop Moves..... ');
console.log('bishop diagonal: '+canMove('Bishop', 'A2', 'B3')); 
console.log('bishop reverse diagonal: '+canMove('Bishop', 'D2', 'C1')); 
console.log('forward 1: '+canMove('Bishop', 'D3', 'E3'));
console.log('big horiz jump: '+canMove('Bishop', 'B6', 'B2'));
console.log('diagonal jump: '+canMove('Bishop', 'A2', 'E6'));
console.log('====================================================================');

//Queen TEST SUITE:
console.log('Testing Queen Moves.....');
console.log('forward 1: '+ canMove('Queen', 'D3', 'E3')); 
console.log('backward 1: '+ canMove('Queen', 'C1', 'B1')); 
console.log('diagonal: '+ canMove('Queen', 'B2', 'C3'));
console.log('big jump: '+ canMove('Queen', 'A2', 'H1')); 
console.log('====================================================================');

//King TEST SUITE:
console.log('Testing King Moves.....');
console.log('forward 1: '+ canMove('King', 'D3', 'E3'));
console.log('backward 1: '+ canMove('King', 'D3', 'C3'));
console.log('diagonal: '+ canMove('King', 'D3', 'E4'));
console.log('big jump: '+ canMove('King', 'D3', 'D7'));
console.log('knight shape: '+ canMove('King', 'D3', 'F4'));
console.log('====================================================================');

//Rook TEST SUITE:
console.log('Testing Rook Moves......');
console.log('forward jump: '+ canMove('Rook', 'A2', 'G2'));
console.log('backward jump: '+ canMove('Rook', 'G2', 'A2'));
console.log('horizontal jump: '+ canMove('Rook', 'D1', 'D7'));
console.log('diagonal: '+ canMove('Rook', 'A2', 'B3'));
console.log('wildcard: '+ canMove('Rook', 'H1', 'F6'));