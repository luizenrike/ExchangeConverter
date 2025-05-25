/*
  Warnings:

  - The values [real,dolar,euro,libra,iene,franco,canadense,australiano,yuan,peso] on the enum `User_exchange` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `exchange` ENUM('BRL', 'USD', 'EUR', 'GBP', 'JPY', 'CHF', 'CAD', 'AUD', 'CNY', 'MXN') NOT NULL;
