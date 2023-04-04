
// Menu components
const emailContent = document.querySelector('.navbar-email'); //email menu
const menuClass = document.querySelector('.menu');  //burguer menu in mobile
const carShoppingMenu = document.querySelector('.navbar-shopping-cart'); //car shopping menu
//cards container
const cardsContainer = document.querySelector('.cards-container');

// content menus
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingList = document.querySelector('#product-detail');
const specificProductDetail = document.querySelector('#specific-product-detail')



//Toggling Desktop menu 

emailContent.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu(){

    shoppingList.classList.add('inactive');

    desktopMenu.classList.toggle('inactive');

}


//Toggling mobile menu

menuClass.addEventListener('click', toggleList);

function toggleList(){

    shoppingList.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
    
    
}


//Toggling cart shopping menu

carShoppingMenu.addEventListener('click', toggleShoppingList);

function toggleShoppingList(){
    
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    shoppingList.classList.toggle('inactive');
    
}


const productList = [];

//Creating the products object
productList.push({
    
    name: 'Bike',
    price: 220000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    
});

productList.push({
    name: "Toyota Prado",
    price: 220000000,
    image: "https://www.toyota.com.co/wp-content/uploads/2020/08/PLATA-METALICO-14.jpg"

});
productList.push({
    name: "Harley Davidson",
    price: 180000000,
    image: "https://www.motofichas.com/images/phocagallery/Harley-Davidson/sportster-s/01-harley-davidson-sportster-s-2021-estudio-rojo.jpg"

});
productList.push({

    name: "Mercedes Benz Gla 200",
    price: 94000000,
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/44784/gla-exterior-right-front-three-quarter.jpeg?q=75"

});


//adding products

productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 











//encapsulating the html layout
function addElementsBody(arr){

    for(product of arr){
    
        //main Div
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('product-card');
        
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
    
    
        //Product info container
        const divProductInfo = document.createElement('div');
        divProductInfo.classList.add('product-info');
    
        const divInfo = document.createElement('div');
    
        //Paragraph with the elements price
        const par_element_price = document.createElement('p');
        par_element_price.innerText = '$' + product.price;
    
        //Paragraph with the elements name
        const par_element_name = document.createElement('p');
        par_element_name.innerText = '$' + product.name;
        
        //svg format
        const figure = document.createElement('figure');
        const img2 = document.createElement('image');
        img2.setAttribute('src', "./icons/bt_add_to_cart.svg");
        
        //enclosing the tags
        figure.appendChild(img2);
        divInfo.append(par_element_price, par_element_name);
        divProductInfo.append(divInfo, figure);
        mainDiv.append(img, divProductInfo);
        cardsContainer.append(mainDiv);
        
        
    }

}

//calling the html layout function
addElementsBody(productList);



