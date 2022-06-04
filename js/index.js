import ProductListNew from "../models/productItem.js";
import ProductCart from "../models/productCart.js"
// import Items from "../models/Item.js"

let productList = [];

let select = document.querySelector("select");

select.addEventListener("change", () => {

    const valueSelect = select.value;
    if (valueSelect === "iphone") {
        return filterProductIphone();
    } else if (valueSelect === "samsung") {
        return filterProductSamsung();
    }
    return fetchProductList();
});


const fetchProductList = async () => {
    try {
        const res = await axios({
            url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/products",
            method: "GET",
        });
        productList = mapProduct(res.data);
        renderProduct(productList);
        
        
    } catch (err) {
        console.log(err);
    }
};

fetchProductList();

const renderProduct = (data) => {
    let productListHTML = "";

    data.forEach((item, index) => {
        productListHTML += item.renderProducts();
    });
    document.getElementById("product").innerHTML = productListHTML;
    addToCart(productList);
    
};

const mapProduct = (data) => {
    
    const results = data.map((item) => {
        return new ProductListNew(
            item.name,
            item.price,
            item.screen,
            item.backCamera,
            item.frontCamera,
            item.img,
            item.desc,
            item.type,
            item.id,
            item.quantity
        );
    }
    );

    console.log(results);

    return results;
};

const filterProductIphone = () => {
    const data = productList;
    const iphone = data.filter((item) => {
        if (item.type === "Iphone") {
            return new ProductListNew(
                item.name,
                item.price,
                item.screen,
                item.backCamera,
                item.frontCamera,
                item.img,
                item.desc,
                item.type,
                item.id,
                item.quantity
            )
        }

    });
    console.log(iphone);
    renderProduct(iphone);

};
const filterProductSamsung = () => {
    const data = productList;
    const samsung = data.filter((item) => {
        if (item.type === "Samsung") {
            return new ProductListNew(
                item.name,
                item.price,
                item.screen,
                item.backCamera,
                item.frontCamera,
                item.img,
                item.desc,
                item.type,
                item.id,
                item.quantity
            )
        }

    });
    console.log(samsung);
    renderProduct(samsung);

};


const addToCart = (id) => {
    const valueButton = document.querySelectorAll("button");
    
    valueButton.forEach((button, index) => {
        button.addEventListener("click", (event) => {

            let btnItem = event.target;
            let product = btnItem.parentElement;
            
            // let productImg = product.querySelector("img").src;
            // let productName = product.querySelector("h5").innerText;
            // let productPrice = product.querySelector("p").innerText;
            let productId = product.querySelector("button").value;
            
            addCart(productId);
            // renderCart(productImg, productName, productPrice);
            mapProductCart();
        })
    })
};
const addCart = (productId) => {
    let data = productList;
    // console.log(productId)
    for (var i = 0; i < data.length; i++){
        if(data[i].id === productId) {
            productCarts.push(data[i]);
        }
    }  
    console.log(productCarts);
    renderCarts(productCarts);
    // let addtr = document.createElement("tr");
    // trContent += '<tr><td><img src="'+productImg+'" alt="" width="50px" height="50px"/></td> <td>'+productName+'</td> <td>'+productPrice+'</td> <td>1</td> <td>1</td><td> <button className="btn btn-danger"}>Xoá</button></td></tr>'
    // addtr.innerHTML = trContent;
    // let cartTable = document.querySelector("tbody");
    // cartTable.append(addtr);
}

const renderCarts = () => {
    let trContent = "";
    
    productCarts.forEach((item) => {
        
        trContent += item.renderCart();
    });
    console.log(trContent);

    document.getElementById("tbodyCart").innerHTML = trContent;
}
const mapProductCart = () => {
    const data = productCarts;
    const results1 = data.map((item) => {
        return new ProductCart(
            item.name,
            item.price,
            item.screen,
            item.backCamera,
            item.frontCamera,
            item.img,
            item.desc,
            item.type,
            item.id,
            item.quantity
        );
     }
    );
   
    return results1;
    
};

let productCarts = [];
