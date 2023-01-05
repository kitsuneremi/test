/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package de1;

/**
 *
 * @author lilyp
 */
public class Hang {

    String chungLoai, donViTinh;

    public Hang() {
    }

    public Hang(String chungLoai, String donViTinh) {
        this.chungLoai = chungLoai;
        this.donViTinh = donViTinh;
    }

    public String getChungLoai() {
        return chungLoai;
    }

    public void setChungLoai(String chungLoai) {
        this.chungLoai = chungLoai;
    }

    public String getDonViTinh() {
        return donViTinh;
    }

    public void setDonViTinh(String donViTinh) {
        this.donViTinh = donViTinh;
    }

    @Override
    public String toString() {
        return "Hang{" + "chungLoai=" + chungLoai + ", donViTinh=" + donViTinh + '}';
    }

}
