<template>
    <div class="cart-item">
        <div class="cart-item__title">{{title}}</div>
        <div class="cart-item__price">R${{price}}</div>
        <div class="cart-item__controls">
            <cart-action :product="product" />
        </div>
    </div>
</template>

<script src="./cart-item.js"></script>
<style src="./cart-item.scss" lang="scss"></style>