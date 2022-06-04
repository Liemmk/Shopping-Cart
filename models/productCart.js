import { Item } from "./Item.js";

class ProductCart extends Item {
    constructor(name, price, screen, backCamera, frontCamera, img, desc, type, id, quantity) {
        super(name, price, screen, backCamera, frontCamera, img, desc, type, id, quantity);
    }
   
    renderCart() {
      return`
            <tr>
                <td>
                    <img
                    src="'${this.img}'"
                    alt="${this.name}"
                    width="50px"
                    height="50px"
                    />
                </td>
                <td>${this.name}</td>

                <td>${this.price}</td>
                <td>${this.quantity}</td>
                <td>${this.price * this.quantity}</td>
                <td>
                    <button
                    className="btn btn-danger"
                    }
                    >
                    Xoá
                    </button>
                </td>
            </tr>        
        `;
    }
    
  }

export default ProductCart;
