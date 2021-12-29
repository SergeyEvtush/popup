"use strict"
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");
let unlock = true;
const timeout = 800;
if(popupLinks.length>0)
{
for(let index=0;index<popupLinks.length;index++)
{
	const popupLink=popupLinks[index];
	popupLink.addEventListener
	(
"click",function(e){
	const popupName = popupLink.getAttribute('href').replace('#',' ');//здесь мы берем ссылку на которую кликаем и из атрибута href  убирае решетку и заменяем на имя по id
	const curentPopup=document.getElementById(popupName);
	popupOpen(curentPopup);
	e.preventDefault();//с пом этой функции запрещаем перезагружать страницу
}
	);}
}
//метод для объектов закрывающих попап
const popupClosrIcon = document.querySelectorAll('.close-popup');
if(popupClosrIcon.length>0)
{
	for(let index=0;index<popupClosrIcon.length;index++)
	{
const el=popupClosrIcon[index];
el.addEventListener(
	'click',function(e){
		popupClose(el.closest('.popup'));
		e.preventDefault();
	}
);}
}
function popupOpen(curentPopup){
if(curentPopup && unlock)
{
const popupActive=document.querySelector('.popup.open');
if(popupActive){
popupClose(popupActive,false);

}
else{
bodyLock();

}
curentPopup.classList.add('open');
curentPopup.addEventListener("click",function(e){
if(!e.target.closest('.popup__content')){
	popupClose(e.target.closest('.popup'))
			}
		});
	}
}
function popupClose(popupActive,doUnlock = true){
if(unlock){
popupActive.classList.remove('open');
if(doUnlock){


}
}

}
/*https://youtu.be/qoO1ZNi1LyI?t=1391 */