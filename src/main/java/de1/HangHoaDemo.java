/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package de1;

import java.util.Scanner;

/**
 *
 * @author lilyp
 */
public class HangHoaDemo {
    public static void main(String[] args) {
        String[] dsHang = new String[100];
        Scanner sc = new Scanner(System.in);
        int i = 0;
        while(true){
            System.out.println("nhap vao gia tri");
            String value = sc.next();
            if(value.equalsIgnoreCase("''''")){
                break;
            }
            dsHang[i] = value;
            i++;
        }
        for (String string : dsHang) {
            System.out.println(string + "\n");
        }
    }
    //cái này t viết hàm riêng, có gì lúc chạy thì tự gọi hàm để chạy
    public String[] search(String[] dsHang){
        Scanner sc = new Scanner(System.in);
        System.out.println("nhap gia tri tim kiem");
        String value = sc.next();
        int a = 0;
        for(int i = 0; i < dsHang.length; i++){
            if(dsHang[i].equals(value)){
                a = i;
            }
        }
        System.out.println("nhap lai gia tri can sua");
        String newValue = sc.next();
        dsHang[a] = newValue; 
        return dsHang;
    }
}
