// Background Color Change //
const _bg = document.getElementById("background");
const _category = document.getElementById("category");
let index = 0;
const OFFERS = [        //colors which came when specific category is selected
  '#1a1aff',
  '#8080ff',
  '#e6e6ff'
]

const COUPON = [
  '#ff1a1a',
  '#ff6666',
  '#ffcccc'
]

const DISCOUNT = [
  '#009900',
  '#33ff33',
  '#99ff99'
]

// Selector Code for Offers //
function changeBack() {                  
  let colors = [];
  switch(_category.value){                        // switch case is used to change the color at specific case//
    case 'offers' :
      colors = OFFERS;
      document.getElementById('detail').innerHTML = ' Up to 15% Off';
      document.getElementById('code').innerHTML = ' RF6768';
      break;
    case 'coupon' :
      colors = COUPON;
      document.getElementById('detail').innerHTML = ' Up to 10% Off';
      document.getElementById('code').innerHTML = ' GF4565';
      break;
    case 'discount' :
      colors = DISCOUNT;
       document.getElementById('detail').innerHTML = ' Up to 20% Off';
       document.getElementById('code').innerHTML = ' CS4565';
      break;
  }
  index = index === colors.length ? 0 : index + 1;
  _bg.style.backgroundColor = colors[index];
}

_category.onchange = changeBack;
setInterval(changeBack, 1000);        //interval of 1000ms is selected to change the color after that interval//
