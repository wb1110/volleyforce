/*
  Warnings:

  - The primary key for the `Service` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Service` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.
  - Added the required column `description` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service_name` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "Service" DROP CONSTRAINT "Service_pkey",
DROP COLUMN "created_at",
DROP COLUMN "id",
DROP COLUMN "name",
DROP COLUMN "type",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "service_id" SERIAL NOT NULL,
ADD COLUMN     "service_name" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD CONSTRAINT "Service_pkey" PRIMARY KEY ("service_id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "created_at",
DROP COLUMN "id",
DROP COLUMN "name",
DROP COLUMN "phone",
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "phone_number" TEXT NOT NULL,
ADD COLUMN     "user_id" SERIAL NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("user_id");

-- CreateTable
CREATE TABLE "Payment" (
    "payment_id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "payment_date" TIMESTAMP(3) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "service_id" INTEGER NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("payment_id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "subscription_id" SERIAL NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "service_id" INTEGER NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("subscription_id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "transaction_id" SERIAL NOT NULL,
    "payment_id" INTEGER NOT NULL,
    "subscription_id" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "transaction_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("transaction_id")
);

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("service_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("service_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "Payment"("payment_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_subscription_id_fkey" FOREIGN KEY ("subscription_id") REFERENCES "Subscription"("subscription_id") ON DELETE RESTRICT ON UPDATE CASCADE;
