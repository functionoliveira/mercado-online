<template>
    <div class="cart-content">
        <div class="cart-content__list">
            <cart-item 
                v-for="(product, index) in getItems" :key="index"
                :title="product.title"
                :price="product.price"
                :qtd="product.qtd"
                :product="product"
            />
            <div v-if="getItems.length === 0">Não há produtos no carrinho</div>
        </div>
        <v-divider
            class="my-4"
            horizontal
        ></v-divider>
        <div class="cart-content__footer">
            <div class="cart-content__total">
                Total R${{ getTotal.toFixed(2) }}
            </div>
            <div class="cart-content__discount">
                Total com desconto R${{ getTotalWithDiscount.toFixed(2) }}
            </div>
        </div>
    </div>
</template>

<script src="./cart-content.js"></script>
<style src="./cart-content.scss" lang="scss"></style>