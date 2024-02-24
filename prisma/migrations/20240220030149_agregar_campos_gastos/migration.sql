/*
  Warnings:

  - Added the required column `monto` to the `Gastos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoDeGasto` to the `Gastos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Gastos" ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "monto" INTEGER NOT NULL,
ADD COLUMN     "tipoDeGasto" TEXT NOT NULL,
ADD CONSTRAINT "Gastos_pkey" PRIMARY KEY ("id");
