let product = [
    {
        id: 1,
        name: 'HP 15s-eq2144au Laptop',
        price: 21000,
        image: 'assets/img/HP15s-EQ2144AU-Laptop.jpg'
    },
    {
        id: 2,
        name: 'Samsung Galaxy A23 Blue',
        price: 2000,
        image: 'assets/img/Samsung-Galaxy-A23%20Blue.png'
    }
]
const renderProduct = () => {
    const productDiv = document.getElementById('product');
    productDiv.innerHTML = '';
    product.forEach((item, index) => {
        productDiv.innerHTML += `<div class="col">
            <div class="card">
                <img src="${item.image}" class="card-img-top w-25 mx-auto" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <h4 class="card-text">${item.price}</h4>
                    <button  data-id="${item.id}"  type="button" class="btn btn-primary mt-3 addToChart">اضافه به سبد خرید</button>
                </div>
            </div>
        </div>`
    })
}
const Chart = () => {
    $('.addToChart').on('click', function () {
        let price = $(this).prev().html()
        let title = $(this).prev().prev().html()
        let idProduct = $(this).data('id')
        let contentChart = $('.content-chart')
        let getChild = $("div[data-id='" + idProduct + "']")
        //How to check if child exists
        if (getChild.length !== 1) {
            contentChart.append(`<div class="row text-center mt-2 product" data-id=${idProduct}>
                                 <div class="col  col-sm-3 col-md-3 col-lg-3 titleProductChart">${title}</div>
                                 <div class="col  col-sm-3 col-md-3 col-lg-3 numProductChart">1</div>
                                 <div class="col  col-sm-3 col-md-3 col-lg-3 priceProductChart"  data-price=${price}>${price}</div>
                                 <div class="col  col-sm-3 col-md-3 col-lg-3 bg-danger text-center  delProductChart d-block" onclick="delProductChart()">حذف</div>
                                 </div>
                               `);
        }
        if (getChild.length === 1) {
            let getChildNumProduct = $('.numProductChart');
            let priceProduct = $('.priceProductChart');
            let numProductChart = getChild.find(getChildNumProduct).html()
            let priceProductChart = getChild.find(priceProduct).data('price');
            let addProductChart = parseInt(numProductChart) + 1;
            let totalPriceProduct = parseInt(priceProductChart) * addProductChart;

            getChild.find(getChildNumProduct).html(addProductChart.toString())
            getChild.find(priceProduct).html(totalPriceProduct.toString())
        }
    })
}


const delProductChart = () =>{
     $('.delProductChart').on('click', function(e) {
     // Jquery - Remove() after hide()
         $(this).parent().hide(2000).delay(1).queue(function(){$(this).remove();});
     })
}

renderProduct();
Chart();


