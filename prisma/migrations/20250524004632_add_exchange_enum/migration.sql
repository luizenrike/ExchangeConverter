/*
  Warnings:

  - You are about to alter the column `exchange` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `exchange` ENUM('real', 'dolar', 'euro', 'libra', 'iene', 'franco', 'canadense', 'australiano', 'yuan', 'peso') NOT NULL;
