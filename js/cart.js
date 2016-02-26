/**
 * Скрипт для работы с данными по продаваемым товарам. Он учитывает купленный товар в корзину, доступный товар для
 * продажи, итоговую сумму покупки и пр.
 */

'use strict';

//TODO: удалить блок stubData после интеграции с серверными данными
var stubProducts = JSON.stringify([
    {
        id: 0,
        name: 'PROSHAR Skirmish Black',
        description: 'Pro Ice - это абсолютно новый продукт, разработанный для игры в пейнтбол в зимний период. Усиленная оболочка  сохраняет свойства шара при отрицательных температурах, что позволяет играть при любой погоде. Яркий, флуоресцентный  наполнитель сохраняет свою консистенцию и не оставит попадание не замеченным. Шары Pro Ice протестированы одной из лучших команд России и Европы "Полярные Медведи" в суровых условиях в г. Тарко Сале, что всего в 100 км от полярного круга. Pro Ice показал себя как наилучших шар для пейнтбола в зимний период',
        price: 2800,
        imageUrl: 'images/product_1.png'
    },
    {
        id: 1,
        name: 'PROSHAR TOURNAMENT',
        description: 'Pro Ice - это абсолютно новый продукт, разработанный для игры в пейнтбол в зимний период. Усиленная оболочка  сохраняет свойства шара при отрицательных температурах, что позволяет играть при любой погоде. Яркий, флуоресцентный  наполнитель сохраняет свою консистенцию и не оставит попадание не замеченным. Шары Pro Ice протестированы одной из лучших команд России и Европы "Полярные Медведи" в суровых условиях в г. Тарко Сале, что всего в 100 км от полярного круга. Pro Ice показал себя как наилучших шар для пейнтбола в зимний период',
        price: 2800,
        imageUrl: 'images/product_2.png'
    },
    {
        id: 2,
        name: 'PRO ICE',
        description: 'Pro Ice - это абсолютно новый продукт, разработанный для игры в пейнтбол в зимний период. Усиленная оболочка  сохраняет свойства шара при отрицательных температурах, что позволяет играть при любой погоде. Яркий, флуоресцентный  наполнитель сохраняет свою консистенцию и не оставит попадание не замеченным. Шары Pro Ice протестированы одной из лучших команд России и Европы "Полярные Медведи" в суровых условиях в г. Тарко Сале, что всего в 100 км от полярного круга. Pro Ice показал себя как наилучших шар для пейнтбола в зимний период',
        price: 2800,
        imageUrl: 'images/product_3.png'
    },
    {
        id: 3,
        name: 'PROSHAR Premium',
        description: 'Pro Ice - это абсолютно новый продукт, разработанный для игры в пейнтбол в зимний период. Усиленная оболочка  сохраняет свойства шара при отрицательных температурах, что позволяет играть при любой погоде. Яркий, флуоресцентный  наполнитель сохраняет свою консистенцию и не оставит попадание не замеченным. Шары Pro Ice протестированы одной из лучших команд России и Европы "Полярные Медведи" в суровых условиях в г. Тарко Сале, что всего в 100 км от полярного круга. Pro Ice показал себя как наилучших шар для пейнтбола в зимний период',
        price: 2800,
        imageUrl: 'images/product_4.png'
    }
]);

function Product(data) {
    this.name = data.name || '';
    this.description = data.description || '';
    this.price = data.price || 0;
    this.imageUrl = data.imageUrl || '';
}

$(document).ready(function() {
    var productItems = JSON.parse(stubProducts).map(function(item) {
        return new Product(item)
    });

    var $oneProductContainer = $('#oneProduct');
    var $oneProductItemTemplate = $('#oneProductItemTemplate');
    var oneProductItems = [];

    var $allProductsContainer = $('#allProducts');
    var $allProductsItemTemplate = $('#allProductsItemTemplate');
    var allProductsItems = [];

    var $cartContainer = $('#cartProducts');
    var $cartItemTemplate = $('#cartProductsTemplate');
    var $cartTotal = $cartContainer.find('.data-total');
    var cartProducts = [];

    var $tempTemplate;

    productItems.forEach(function(item, index) {
        $tempTemplate = $oneProductItemTemplate.clone();
        $tempTemplate.find('img').attr({src: item.imageUrl, alt: item.name});
        $tempTemplate.find('h4').text(item.name);
        $tempTemplate.find('.data-description').text(item.description);
        $tempTemplate.find('.data-price').text(item.price);
        $tempTemplate.find('.add_to_cart').on('click', function() {
            var number = $(this).find('input').val();
            addProductToCart(item.id, number);
        });
        oneProductItems.push($tempTemplate.html());

        $tempTemplate = $allProductsItemTemplate.clone();
        $tempTemplate.find('img').attr({src: item.imageUrl, alt: item.name});
        $tempTemplate.find('h4').text(item.name);
        $tempTemplate.children('div').data().owl = index;
        allProductsItems.push($tempTemplate.html());

    });

    $oneProductItemTemplate.remove();
    $allProductsItemTemplate.remove();

    $oneProductContainer.append(oneProductItems);
    $allProductsContainer.append(allProductsItems);

    function addProductToCart(itemId, number) {
        var isAdded = cartProducts.some(function(cartItem) {
            return cartItem.product.id === itemId;
        });

        if (!isAdded) {
            productItems.some(function(item) {
                cartProducts.push({
                    product: item,
                    number: number
                });
            });
            renderCart(true);
        } else {
            updateProductInCart(itemId, number);
        }
    }

    function updateProductInCart(itemId, number) {
        cartProducts.some(function(cartItem) {
            if (cartItem.product.id === itemId) {
                cartItem.number += number;
                return true;
            }
        });

        renderCart(false);
    }

    function renderCart(rerender) {
        var $cartTemplate;
        var total = 0;

        cartProducts.forEach(function(cartItem) {
            var item = cartItem.product;

            if (rerender) {
                $cartTemplate = $cartItemTemplate.clone();
                $cartTemplate.find('img').attr({src: item.imageUrl, alt: item.name});
                $cartTemplate.find('.data-name').text(item.name);
                $cartTemplate.find('.data-price').text(item.price);
            }

            $cartTemplate.find('input').val(cartItem.number);

            total += number * item.price;
        });

        $cartTotal.val(total);
    }


});