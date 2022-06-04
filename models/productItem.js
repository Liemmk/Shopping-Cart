import { Item } from "./Item.js";

class ProductListNew extends Item {
    constructor(name, price, screen, backCamera, frontCamera, img, desc, type, id, quantity) {
        super(name, price, screen, backCamera, frontCamera, img, desc, type, id, quantity);
    }

    renderProducts() {
      return`
        <div class="col-sm-4">
          <div class="card mb-3">
            <img src= ${this.img} width="100%" height="300px" alt= ""/>
            <div class="card-body">
                <div class="card-title"><h5>${this.name}<h5/></div>
                <p class="card-text">${this.price} VND</p>
            </div>
            <button
                  class="btn btn-success mb-2 mx-2"
                  value = ${this.id}
                  id = "addToCart"   
                >
                  Add to Cart
                </button>
          </div>
       </div>
        `;
    }
    
  }

export default ProductListNew;
