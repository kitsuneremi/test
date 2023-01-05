/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package de1;

/**
 *
 * @author lilyp
 */
public class HangHoa extends Hang {

    String maHang, tenHang, MauSac;
    int soLuong;

    public HangHoa() {
    }

    public HangHoa(String maHang) {
        this.maHang = maHang;
    }

    public String getMaHang() {
        return maHang;
    }

    public void setMaHang(String maHang) {
        this.maHang = maHang;
    }

    public String getTenHang() {
        return tenHang;
    }

    public void setTenHang(String tenHang) {
        this.tenHang = tenHang;
    }

    public String getMauSac() {
        return MauSac;
    }

    public void setMauSac(String MauSac) {
        this.MauSac = MauSac;
    }

    public int getSoLuong() {
        return soLuong;
    }

    public void setSoLuong(int soLuong) {
        this.soLuong = soLuong;
    }

    @Override
    public String getChungLoai() {
        return chungLoai;
    }

    @Override
    public void setChungLoai(String chungLoai) {
        this.chungLoai = chungLoai;
    }

    @Override
    public String getDonViTinh() {
        return donViTinh;
    }

    @Override
    public void setDonViTinh(String donViTinh) {
        this.donViTinh = donViTinh;
    }

    @Override
    public String toString() {
        return "HangHoa{" + "maHang=" + maHang + ", tenHang=" + tenHang + ", MauSac=" + MauSac + ", soLuong=" + soLuong + '}';
    }

}
