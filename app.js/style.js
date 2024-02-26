
function convertedValue(id){
    const price=document.getElementById(id).innerText;
    const convertPrice=parseInt(price); 
    
    return convertPrice;
}

const price= convertedValue("budget");
const cart=convertedValue("cart");
const left=convertedValue("left");

// totalCost

function updateTotalCost(value){
    const totalCost=convertedValue('total-cost');

    const sum=totalCost+parseInt(value);
    document.getElementById("total-cost").innerText=sum;
    
}

// grand total
function upadteGrandTotal(status){
    const totalCost=convertedValue('total-cost');
    if(status==undefined){
        document.getElementById("grand-total").innerText=totalCost;
    }else{
        const cuponCode=document.getElementById('cupon-code').value;


        if(cuponCode=='lovebird420'){
            const discountedPrice=totalCost*0.2;
            document.getElementById("grand-total").innerText=totalCost-discountedPrice;
        }else{
            alert("Enter a valid value");
        }
    }

    
}


// button
const allbtn=document.getElementsByClassName('btn');
console.log(allbtn)

for(const btn of allbtn){
    btn.addEventListener("click",function(event){

        const name=event.target.parentNode.childNodes[1].innerText;
        const price=event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const category=event.target.parentNode.childNodes[5].childNodes[1].innerText; 
        event.target.setAttribute('disabled',false);
        event.target.parentNode.style.backgroundColor='green'
        
        // limitation of card
        const firstcardCount=convertedValue("cart");
        if(firstcardCount+1>6){
            alert('limit sesh, barit jan');
            return;
        }

        // updadate bufget
        const budget=convertedValue('budget');
        document.getElementById('budget').innerText=budget-parseInt(price);

        const cartCount=convertedValue('cart');
        document.getElementById('cart').innerText=cartCount+1;;

        const leftCount=convertedValue('left');
        document.getElementById('left').innerText=leftCount-1;





        const selectedContainer=document.getElementById('selected-player-container');

        const div=document.createElement("div");
        div.classList.add("flex")

        const p1=document.createElement("p");
        const p2=document.createElement("p");
        const p3=document.createElement("p");

        p1.innerText=name;
        p2.innerText=price;
        p3.innerText=category;

        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)

        selectedContainer.appendChild(div);

        updateTotalCost(price);
        upadteGrandTotal();
    })
}