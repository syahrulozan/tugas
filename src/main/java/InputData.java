/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author Asus Notebook
 */
import java.util.Scanner;
public class InputData {
    public static void main (String[] args){
        
        Scanner masuk = new Scanner( System.in);
        
        System.out.print("Masukkan nama : ");
        String Nama = masuk.nextLine();
        System.out.println("Hallo "+Nama);
    }
}
