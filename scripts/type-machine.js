/*@info initial section*/

let coursorIntervId;
let typerIntervId;
let eraseIntervId;
let conter=0;
let TyperConter=0;
let oldText='';
let eraseConter=0;
let typedItems
let carearElement
/*end initial section*/

async function init() {
	const myShortCarear="I am";
	carearElement=document.getElementById("carear");
	typedItems=carearElement.getAttribute("data-typed-items");
	typedItems=spliter(typedItems,',',false);
	oldText=carearElement.innerText;

  //typedItems.forEach(typedItem => {
    
    autoTyper(typedItems[TyperConter],carearElement);
  //});
    
  // for (let i = 0; i < typedItems.length; i++) {
  //     console.log(typedItems[i]);
  //     autoTyper(typedItems[i],_carearElement);
  // }

}



/*@info set interval for cursor and type machine*/
init();
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
		coursorIntervId= clearInterval(coursorIntervId);
		typerIntervId= clearInterval(typerIntervId);
		 const oElem = document.getElementById("typerCursor").className='Off';
		 conter=0;
		 return true;
	}
	const _newText=oldText+_content[conter];
	_element.innerText=_newText;
	oldText=_newText;
	conter++;

 if(oldText.length == _content.length){
  autoEraser(oldText,_element);
  flashCursor();
 }
}


function eraseCarear(content,_element){
	const _content=content.split('');
	if(_content.length == eraseConter){
		coursorIntervId=clearInterval(coursorIntervId);
		eraseIntervId=clearInterval(eraseIntervId);
		const oElem = document.getElementById("typerCursor").className='Off';
    TyperConter++;
		if(TyperConter < 4){
			autoTyper(typedItems[TyperConter],carearElement);
			eraseConter=0;
			return true;
		}
		return false;
	}	
  const _newText=oldText.replace(/.$/, "");
  _element.innerText=_newText;
	oldText=_newText;
	eraseConter++;
}


function flashCursor(){
	 if (!coursorIntervId) {
		coursorIntervId = setInterval(flashText, 100);
		}
}

function autoTyper(content,_element){
  //clearInterval(eraseIntervId);
	 if (!typerIntervId) {
		typerIntervId = setInterval(()=>completeCarear(content,_element), 100);
		}
}

function autoEraser(content,_element){
  //clearInterval(typerIntervId);
  if (!eraseIntervId) {
    eraseIntervId = setInterval(()=>eraseCarear(content,_element), 100);
   }
}

function spliter(text,spliter,join){
	if(join){
		return text.split(spliter).join(' ');
	}
	return text.split(spliter);
}

