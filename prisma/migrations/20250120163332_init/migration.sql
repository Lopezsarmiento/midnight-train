-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_input" TEXT NOT NULL,
    "bot_response" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "conversation_id" TEXT NOT NULL,
    "user_input_time" TIMESTAMP(3) NOT NULL,
    "bot_response_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);
