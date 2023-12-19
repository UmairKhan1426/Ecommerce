import { product } from "../db.js";

export const getAllProduct = function (req, res) {
    res.send(product);
}

export const getProductByid = function (req, res) {
    res.send(product);
}

export const creatNewProduct = function (req, res) {
    res.send(product);
}

export const updateProduct = function (req, res) {
    res.send(product);
}

export const deleteProduct = function (req, res) {
    res.send(product);
}