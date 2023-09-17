/*@info initial section*/


let coursorIntervId;
let typerIntervId;
let conter=0;
let oldText='';
/*end initial section*/

async function init() {
	const myShortCarear="I am";
	const _carearElement=document.getElementById("carear");
	let typedItems=_carearElement.getAttribute("data-typed-items");
	typedItems=spliter(typedItems,',',false);
	oldText=_carearElement.innerText;
	//for(let i=0;i<typedItems.length;i++){
		//let _waiter= await completeCarear(typedItems[0],_carearElement);
		//completeCarear(typedItems[0],_carearElement);
	//}
	autoTyper(typedItems[0],_carearElement)
}

/*@info set interval for cursor and type machine*/
init();
//;
flashCursor();

/*@info type machine cursor*/
function flashText() {
  const oElem = document.getElementById("typerCursor");
  oElem.className = oElem.className === "on" ? "off" : "on";
}

/*@info type machine function*/
function completeCarear(content,_element){
	const _content=content.split('');
	if(_content.length <= conter){
		 clearInterval(coursorIntervId);
		 clearInterval(typerIntervId);
		 const oElem = document.getElementById("typerCursor").className='Off';
		 return true;
	}
	const _newText=oldText+_content[conter];
	_element.innerText=_newText;
	oldText=_newText;
	conter++;
}



function flashCursor(){
	 if (!coursorIntervId) {
		coursorIntervId = setInterval(flashText, 100);
		}
}

function autoTyper(content,_element){
	 if (!typerIntervId) {
		typerIntervId = setInterval(()=>completeCarear(content,_element), 100);
		}
}

function spliter(text,spliter,join){
	if(join){
		return text.split(spliter).join(' ');
	}
	return text.split(spliter)
}

