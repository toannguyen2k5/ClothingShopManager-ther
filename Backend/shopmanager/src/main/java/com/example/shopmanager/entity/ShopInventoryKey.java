package com.example.shopmanager.entity;

import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class ShopInventoryKey implements Serializable {

    @Column(name = "id_shop")
    private String idShop;

    @Column(name = "id_variant")
    private String idVariant;

    public ShopInventoryKey() {
    }

    public ShopInventoryKey(String idShop, String idVariant) {
        this.idShop = idShop;
        this.idVariant = idVariant;
    }

    public String getIdShop() {
        return idShop;
    }

    public void setIdShop(String idShop) {
        this.idShop = idShop;
    }

    public String getIdVariant() {
        return idVariant;
    }

    public void setIdVariant(String idVariant) {
        this.idVariant = idVariant;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ShopInventoryKey)) return false;
        ShopInventoryKey that = (ShopInventoryKey) o;
        return Objects.equals(idShop, that.idShop) && Objects.equals(idVariant, that.idVariant);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idShop, idVariant);
    }
}
