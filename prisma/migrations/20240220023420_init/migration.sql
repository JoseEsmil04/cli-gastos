-- CreateTable
CREATE TABLE "Gastos" (
    "usuarioId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "monto" INTEGER NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Gastos_usuarioId_key" ON "Gastos"("usuarioId");

-- AddForeignKey
ALTER TABLE "Gastos" ADD CONSTRAINT "Gastos_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
