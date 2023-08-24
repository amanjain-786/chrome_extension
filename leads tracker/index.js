//getting of hte input button 
const inputBtn=document.getElementById("input-btn")
//declaring the array to store the leads
let myLeads=[]
//getting hold of the input element
const inputEl=document.getElementById("input-el")
//geting hold of the unordered list
const ulEl=document.getElementById("ul-el")
console.log(ulEl)//just to check if we have get hold of the correct element,and yup i checked this is correct bros
let listItems=""
let leadsFromLocalStorage=localStorage.getItem("myLeads")
//if i has saved all the things in the array then i had to do here
// let leadsFromLocalStorage =JSON.parse(localStorage.getItem("myLeads"))
// and then do if(leadsFromLocalStorage){myLeads=leadsFromLocalStorage; renderLeads()}//using the commented render leads bro
if(leadsFromLocalStorage){
    listItems=leadsFromLocalStorage
    renderLeads(listItems)
}

//now we add and event listener using js and not html this seprates the two man it is cool too bro.
inputBtn.addEventListener("click",function(){
    // console.log("button clicked!!")
    let x=inputEl.value
    myLeads.push(x)//the all below code is so that i don't need to call the loop again so i put it in the string 
    // inputEl.innerText=""
    // listItems+="<li><a href='"+inputEl.value+"' target='_blank' >"+inputEl.value+"</a></li>" //this is  bit comples so we do like i.e we use the template strings bro
    listItems+=`<li>
                    <a target="_blank" href='${inputEl.value}'>${inputEl.value}</a>
                </li>`
    inputEl.value=""
    localStorage.setItem("myLeads",listItems)
    // console.log(myLeads)
    console.log(myLeads)
    renderLeads(listItems)
})


//this is the code to add enter key as the event listener and as we use enter in the input tab we use the id of htat and we have that stored in the inputEl so i used that
// inputEl.addEventListener('keypress',function(e){
//     if(e.key==='Enter'){
//         // console.log("button clicked!!")
//         let x=inputEl.value
//         myLeads.push(x)
//         // inputEl.innerText=""
//         // listItems+="<li><a href='"+inputEl.value+"' target='_blank' >"+inputEl.value+"</a></li>" //this is  bit comples so we do like 
//         listItems+=`<li>
//                         <a target="_blank" href='${inputEl.value}'>${inputEl.value}</a>
//                     </li>`
//         inputEl.value=""
//         // console.log(myLeads)
//         renderLeads()
//     }
// })

function renderLeads(list){
    ulEl.innerHTML=list
}

// let listItems="";
// for(let i=0;i<myLeads.length;i++){
//     listItems+="<li>"+myLeads[i]+"</li>"//and ye chal gaya bro yes.
//     // ulEl.innerHTML+="<li>"+myLeads[i]+"</li>"
// }
// console.log(listItems)
// ulEl.innerHTML=listItems

const deleteBtn=document.getElementById("delete-btn")
deleteBtn.addEventListener("dblclick",function(){
    console.log("delete button clicked")
    localStorage.setItem("myLeads","")
    listItems=""
    myLeads=[]
    renderLeads(listItems)
})


//use this one you use hte sir's method to store the data bro
// deleteBtn.addEventListener("click",function(){
//     console.log("delete button clicked!")
//     localStorage.getItem("myLeads")=null
//     listItems=""
//     myLeads=[]
//     renderLeads()
// })

const tabBtn=document.getElementById("tab-btn")
tabBtn.addEventListener("click",function(){
    console.log("tab button clicked!!")
    //the query shit won't work in hte simple site it is only for the extensions that we build so remember that too bro.
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url)
        listItems+=`<li>
                        <a target="_blank" href="${tabs[0].url}">${tabs[0].url}</a>
                    </li>`
        localStorage.setItem("myLeads",listItems)
        renderLeads(listItems)      
    })
})

//doing this by the sir's method
//tabBtn.addEventListener("click",function(){
    // console.log("button of the tab clicked!")
    // myLeads.push(tabs[0].url)
    // renderLeads(myLeads)
// })