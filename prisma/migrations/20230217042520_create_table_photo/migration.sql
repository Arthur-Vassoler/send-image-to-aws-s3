-- CreateTable
CREATE TABLE "photo" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "directory" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "originalSize" DOUBLE PRECISION NOT NULL,
    "compressedSize" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "photo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "photo_name_key" ON "photo"("name");
