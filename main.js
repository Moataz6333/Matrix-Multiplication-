//start div ,choosing div , radio buttons
let startDiv=document.querySelector(".start");
let choosingDiv=document.querySelector(".choosing");
let squareDiv = document.querySelector(".square");
let sqRadio=document.getElementById("sq");
let nonSqRadio=document.getElementById("nonsq");
let sqMarices = document.querySelector(".sqMarices");
//show divs
sqRadio.addEventListener("change",function(){
    choosingDiv.style.display="none";
squareDiv.style.display="inline-block";
newBtnDiv.style.display="none";
if(sqMarices.innerHTML != ""){
    buttonsDiv.style.display="grid";
}

});
nonSqRadio.addEventListener("change",function(){
    squareDiv.style.display="none";
    choosingDiv.style.display="inline-block";
    buttonsDiv.style.display="none";
    if(nonsqrMatrix.innerHTML!=""){
        newBtnDiv.style.display="grid";
    }

});
// ****************************

//function for multiplying
//function to get the col
function getCol(m,indexOfCol){
    let col=[];
    for(let i=0;i<m.length;i++){
        col[i]=m[i][indexOfCol];
    }
    return col;
}
//function to get row
function getRow(m,indexOfRow){
let row=[];
for(let i=0;i<m[0].length;i++){
    row[i]=m[indexOfRow][i];
}
return row;
}
//function to sum row and col
function sum(row,col){
    let value=0;
    for(i=0;i<row.length;i++){
        value=value+(row[i]*col[i]);
    }
    return value;

}

//funcion to multiply matrices
function multuplyMatrix(m1,m2){
    let result =[];
    for(let i=0 ; i<m1.length;i++){
        result[i]=[];
        for(let j =0 ;j <m2[0].length;j++){
         result[i][j]=sum(getRow(m1,i),getCol(m2,j));

        }
    }
    return result;
}
// ***************************************

//function to create html matrix
function MakeMatix(index,row,col,div) {
    let MatrixDiv=document.createElement("div");
for(let i=0;i<row;i++){

    for(let j=0;j<col;j++)
    {
        
        let newTextBox =document.createElement("input");
        newTextBox.type="text";
        newTextBox.setAttribute("class",`matrix${index}`);
        newTextBox.id=`m${index}_${i}${j}`;
        
        MatrixDiv.appendChild(newTextBox);
        MatrixDiv.setAttribute("class","matrix");
        MatrixDiv.style.display="inline-block";
        

    }
    let newDiv = document.createElement("div");
        newDiv.innerHTML="<br>";
        newDiv.style.display="inline";
       MatrixDiv.appendChild(newDiv);
   
       
}
if(index===2||index===5){
    MatrixDiv.style.marginLeft="100px";
}
if(index===3||index===6){
    let txt=document.createElement("h3");
    txt.innerHTML="the result:";
    MatrixDiv.prepend(txt);
    MatrixDiv.style.display="block";
    MatrixDiv.style.marginTop="16px";

}
div.appendChild(MatrixDiv);
    
}
//function to get values from html return 2D arr
function getValues(index,row,col){
    let m =document.querySelectorAll(`.matrix${index}`);//1D arr
 let m1 =[];
 let k=0;
 for(let i=0;i<row;i++){
    m1[i]=[]
    for(let j=0;j<col;j++){
      m1[i][j]=m[k].value;
      k++;
    }
 }
 return m1;
}
//function to set matrix at html
function setValues(m,index){
    let resultMatrix=document.querySelectorAll(`.matrix${index}`);//empty
    //m.len = rows , m[0].len = clos
    let rows=m.length;
    let cols= m[0].length;
    k=0;
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
           resultMatrix[k].value=m[i][j];
           k++;
        }
    }
}

//************************* */

//for square matrices
//first take n form user
//clicking ok
let okBtn = document.getElementById("ok");
let buttonsDiv=document.getElementById("btndiv");
okBtn.addEventListener("click",function(){
    sqMarices.innerHTML="";
    let nInput =document.getElementById("n");
    let n =nInput.value;
MakeMatix(1,n,n,sqMarices);
MakeMatix(2,n,n,sqMarices);
MakeMatix(3,n,n,sqMarices);
buttonsDiv.style.display="grid";
});
//while cliking multiply
let multiplyBtn=document.getElementById("multiply");
multiplyBtn.addEventListener("click",function(){
    let nInput =document.getElementById("n");
let n =nInput.value;
let m1 =getValues(1,n,n);
let m2 =getValues(2,n,n);
setValues(multuplyMatrix(m1,m2),3);
multresbtn.style.display="block";
});

//clear btn
let clearbtn=document.getElementById("clear");
clearbtn.addEventListener("click",function(){
let m1=document.querySelectorAll(".matrix1");
let m2=document.querySelectorAll(".matrix2");
let m3 =document.querySelectorAll(".matrix3");
for(let i=0;i<m1.length;i++){
    m1[i].value="";
    m2[i].value="";
    m3[i].value="";
}
});
//multiply the result 
let multresbtn=document.getElementById("multres");
multresbtn.addEventListener("click",function(){
    let nInput =document.getElementById("n");
    let n =nInput.value;
    let m3=getValues(3,n,n);
    clearbtn.click();
    setValues(m3,1);
   
});
// ********************************

//for m*n matrices
//first taka a clone form btnsDiv
newBtnDiv =buttonsDiv.cloneNode(true);

//then change the id of btns
newBtnDiv.childNodes[1].id="clear2";
newBtnDiv.childNodes[3].id="multiply2";
newBtnDiv.childNodes[5].id="multres2";
newBtnDiv.id="buttons2";

newBtnDiv.style.display="grid";
//the matrices clss
let nonsqrMatrix=document.querySelector(".nonsqrMatrix");
let page=document.querySelector(".page");
//

//to get values

/////////////////////
//boolean for multres
let multresFlag =false;

let ok2=document.getElementById("ok2");
page.appendChild(newBtnDiv);
newBtnDiv.style.display="none";
ok2.addEventListener("click",function(){

    nonsqrMatrix.innerHTML="";
    if(multresFlag != true){
    let rowsOfmatrix1=document.getElementById("rowsOfmatrix1");
    let colsOfmatrix1=document.getElementById("colsOfmatrix1");
    let rowsOfmatrix2=document.getElementById("rowsOfmatrix2");
    let colsOfmatrix2=document.getElementById("colsOfmatrix2");
    
    let row1=rowsOfmatrix1.value;
    let row2=rowsOfmatrix2.value;
    let col1=colsOfmatrix1.value;
    let col2=colsOfmatrix2.value;
    MakeMatix(4,row1,col1,nonsqrMatrix);
    MakeMatix(5,row2,col2,nonsqrMatrix);
    MakeMatix(6,row1,col2,nonsqrMatrix);
    
    }else{
        let rowsOfmatrix1=document.getElementById("rowsOfmatrix1");
        let colsOfmatrix1=document.getElementById("colsOfmatrix1");
        let rowsOfmatrix2=document.getElementById("rowsOfmatrix2");
        let colsOfmatrix2=document.getElementById("colsOfmatrix2");
        
        let row1=rowsOfmatrix1.value;
        let row2=rowsOfmatrix2.value;
        let col1=colsOfmatrix1.value;
        let col2=colsOfmatrix2.value;
        MakeMatix(4,row1,col1,nonsqrMatrix);
        MakeMatix(5,row2,col2,nonsqrMatrix);
        MakeMatix(6,row1,col2,nonsqrMatrix);
        setValues(res,4);
        multresFlag=false;

    }
    newBtnDiv.style.display="grid";
    
});

//when pressing multiply
let multiplyBtn2=document.getElementById("multiply2");
multiplyBtn2.addEventListener("click",function(){
    let rowsOfmatrix1=document.getElementById("rowsOfmatrix1");
    let colsOfmatrix1=document.getElementById("colsOfmatrix1");
    let rowsOfmatrix2=document.getElementById("rowsOfmatrix2");
    let colsOfmatrix2=document.getElementById("colsOfmatrix2");
    
    let row1=rowsOfmatrix1.value;
    let row2=rowsOfmatrix2.value;
    let col1=colsOfmatrix1.value;
    let col2=colsOfmatrix2.value;
    let m1=getValues(4,row1,col1);
    let m2 =getValues(5,row2,col2);
    setValues(multuplyMatrix(m1,m2),6);
    multres2.style.display="block";
});

//clear btn2
let clearbtn2 =document.getElementById("clear2");
clearbtn2.addEventListener("click",function(){
    let m1=document.querySelectorAll(".matrix4");
    let m2=document.querySelectorAll(".matrix5");
    let m3 =document.querySelectorAll(".matrix6");
     for(let i=0;i<m1.length;i++){
        m1[i].value="";
     }
     for(let j=0;j<m2.length;j++){
        m2[j].value="";
     }
     for(let k=0;k<m3.length;k++){
        m3[k].value="";
     }
    });
//multres btn for nonsqMatrices
let res;
let multres2 =document.getElementById("multres2");
multres2.addEventListener("click",function(){
    multresFlag=true;
        let rowsOfmatrix1=document.getElementById("rowsOfmatrix1");
        let colsOfmatrix1=document.getElementById("colsOfmatrix1");
         let rowsOfmatrix2=document.getElementById("rowsOfmatrix2");
    let colsOfmatrix2=document.getElementById("colsOfmatrix2");
    
    let row1=rowsOfmatrix1.value;
    
    let col2=colsOfmatrix2.value;
    res=getValues(6,row1,col2);
   
    rowsOfmatrix1.value=row1;
    colsOfmatrix1.value=col2;
    rowsOfmatrix2.value=col2;
    colsOfmatrix2.value="";
     nonsqrMatrix.innerHTML="";
     MakeMatix(4,row1,col2,nonsqrMatrix);
     setValues(res,4);


});

