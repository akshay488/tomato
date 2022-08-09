// data

const hoteldata =[
    {
        id:1,
        title:'hotel1',
        image:'hotel1.webp',
        items:'item1, item2, item3',
        rating:4.3,
        price:200,
        discount:10
        
    },
    {
        id:2,
        title:'hotel2',
        image:'hotel2.jpg',
        items:'item1, item2, item3',
        rating:4.2,
        price:100,
        discount:30
        
    },
    {
        id:3,
        title:'hotel3',
        image:'hotel3.webp',
        items:'item1, item2, item3',
        rating:3.5,
        price:150,
        discount:40
        
    },
    {
        id:4,
        title:'hotel4',
        image:'hotel5.jpg',
        items:'item1, item2, item3',
        rating:4.5,
        price:500,
        discount:50
        
    },
    {
        id:5,
        title:'hotel5',
        image:'hotel6.jpg',
        items:'item1, item2, item3',
        rating:2.5,
        price:300,
        discount:20
        
    },

]

relavance()

// document.getElementById('hotelList').addEventListener('load',(hoteldata)=>{hoteldata.map((x)=>{console.log(x);} )} )
function createCard(x){
    
    const hotelList=document.getElementById('hotelList');
    while (hotelList.firstElementChild) {
        
        hotelList.removeChild(hotelList.firstElementChild)
    }
    
    x.map((data)=>{
    let card = document.createElement('div');
    card.className = 'card'
    card.innerHTML=`  <div class="hotelcard"  onclick="navigate('${data.title}')">
    <img src="images/hotels/${data.image}" alt="${data.title}"  width="100%" height="auto" >
    <div class="hotelname">
        <h3>${data.title}</h3>
        <p >${data.items}</p>
    </div>
    <div class="about">
        <ul>
            <li> 
                <span><i class="fa-solid fa-star fa-xs"> </i></span>
               <span>${data.rating}</span>  
            </li>                           
             <li>time</li>
            <li>${data.price}</li>
        </ul>
    </div>
    <div class="thallupadi">
        <p><span>${data.discount}%</span> discount</p>
    </div>
</div>`
hotelList.appendChild(card)

})
}



//  sort functions

function relavance() {
  let result =  hoteldata.sort((a,b)=>{ return b.discount-a.discount})
    createCard(result)
}

function rating(){
    
    let result = hoteldata.sort(function (a,b){return b.rating -a.rating})
    createCard(result)
    
}
function priceLH(){
    
    let result = hoteldata.sort(function (a,b){return a.price -b.price})
    createCard(result)
    
}
function priceHL(){
    
    let result = hoteldata.sort(function (a,b){return b.price -a.price})
    createCard(result)
    
}



