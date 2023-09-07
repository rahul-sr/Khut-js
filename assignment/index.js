import data from './data.json';
import Row from './Row';
const productsDiv = document.querySelector('#products');

const renderRows = function (items) {
  const domNodes = items
    .map(({ product, cost, totalCost = 'N/A' }) =>
      Row(product, cost, totalCost)
    )
    .join('');

  productsDiv.innerHTML = domNodes;
};

const totalCost = function (tax, shipping, cost) {
  return (Number(tax) / 100) * Number(cost) + Number(cost) + Number(shipping);
};

// smartphones and catfood are taxed at 12%
// televisions are taxed at 18%
// Default shipping rates (if absent in dataset): Pet food (2.5), Smartphones (5), Televisions (15)

const prepCurry = (fn)=>
  function curry(...args){
    return args.length === fn.length
    ? fn(...args)
    :(...newArgs) => curry(...args, ...newArgs);
  };

const totalCostCurr = prepCurry(totalCost);




(function (){
  const revisedData = data.map((item) =>{
    return{
      ...item,
      totalCost: !item.shipping 
      ? shipping[item.category](item.cost)
      : ['smartphones', 'petfood'].includes(item.category)
      ? taxes.tax12(item.shipping)(item.cost)
      : taxes.tax18(item.shipping)(item.cost),
    };
  });

  renderRows(revisedData);
})();

renderRows(data);

const taxes ={
  tax12: totalCostCurr(12),
  tax18: totalCostCurr(18),
};


const shipping={
  petfood: taxes.tax12(2.5),
  smartphones: taxes.tax12(5),
  television: taxes.tax18(15),
};

const revisedData = data.map((item) =>{
  return{
    ...item,
    totalCost: !item.shipping 
    ? taxes.tax12(2.5)(item.cost)
    : ['smartphones', 'petfood'].includes(item.category)
    ? taxes.tax12(item.shipping)(item.cost)
    : taxes.tax18(item.shipping)(item.cost),
  }

  {
    "id": 3,
    "product": "Orange MX20 Smartphone",
    "cost": 800,
    "shipping": 10,
    "category": "smartphones"
  }

  totalCost(18, 10, 800)


  taxes.tax18(item.shipping)(item.cost)

  if(!item.shipping) {
    shipping[item.category](item.cost)
  } else {
    if(['smartphones', 'petfood'].includes(item.category)) {
      taxes.tax12(item.shipping)(item.cost)
    } else {
      taxes.tax18(item.shipping)(item.cost)
    }
  }


  const ele = document.getElementById("app");
  const cb = function() {
    
  };
  
  ele.addEventListener('click', cb)


this 
call, apply, bind

function add(a,b) {
    return a + b;
}

const add = (a,b) => {
    return a + b;
};

const add = (a,b) => a + b;


class Car {
  constructor(brand) {
    this.brand = brand;
  }

  showBrand() {
    console.log(this.brand);
  }


}

// Arrow Function
// This refers to the parent context - Either class object or window
let f1 = () => {
  console.log("In Arrow Function");
  console.log(this);
}



// Normal Function
// This refers to the caller(whosever is calling) context
function f2() {
    console.log("In Normal Function");
    console.log(this);
}

obj = {

}


first class citizens - args to function, returned, used values in an object

function() {
  

  return function() {

  }
}