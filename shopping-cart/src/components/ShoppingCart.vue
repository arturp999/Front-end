<template>
  <div class="cart">
    <table class="table table-hover">
      <thead>
        <tr>
          <th class="text-center">Product</th>
          <th class="text-center">Ammount</th>
          <th class="text-center">Price</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td class="col-md-4">
            <div class="media">
              <div class="media-body">
                <div class="media-heading">
                  <img class="cart_img" :src="item.Image" :alt="item.Id" />
                </div>
              </div>
            </div>
          </td>
          <td>
            <strong v-if="item.Quantity > 1">{{"x" + item.Quantity}}</strong>
            <strong v-if="item.Quantity == 1">x1</strong>
          </td>
          <td class="col-sm-1 col-md-1 text-center">
            <strong>{{item.Preco + "€"}}</strong>
          </td>
          <td></td>
          <td class="col-sm-1 col-md-1">
            <button v-on:click="removeFromCart(item)" type="button" class="btn btn-danger">
              <span class="glyphicon glyphicon-remove"></span> Remove
            </button>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <h5>Total</h5>
          </td>
          <td class="text-right">
            <h5>
              <strong>{{total + "€"}}</strong>
            </h5>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <button v-on:click="alertarUser()" type="button" class="btn btn-success">
              Checkout
              <span class="glyphicon glyphicon-play"></span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    totalPrice: {
      type: Number,
      default: 0
    }
  },
  computed: {
    total: function() {
      var total = 0;

      this.items.forEach(element => {
        total += element.Preco * element.Quantity;
      });

      return total;
    }
  },
  methods: {
    removeFromCart(dog) {
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].Id == dog.Id) {
          if (this.items[i].Quantity > 1) {
            this.items[i].Quantity -= 1;
            break;
          } else {
            this.items.splice(i, 1);
            break;
          }
        }
      }
    },
    alertarUser() {
      if(this.items.length == 0){
        alert("VAIS COMPRAR MAS É O CRLH!")
      }else{
        alert("Parabéns agora tem uma divida de " + this.total)
      }
    }
  }
};
</script>

<style>
.cart_img {
  max-height: 5em;
  max-width: 5em;
}

.cart {
  height: inherit;
  max-width: inherit;
}

@media only screen and (min-device-width: 375px) and (min-device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait) {
  .cart {
    height: inherit;
    width: inherit;
  }
  .table {
    font-size: 12px;
  }
  .media-heading {
    font-size: 12px;
  }

  .btn-danger {
    font-size: 12px;
  }

  .form-control {
    font-size: 12px;
  }
}
</style>