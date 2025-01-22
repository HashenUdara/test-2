CREATE TABLE "Page" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"name" text
);
--> statement-breakpoint
CREATE UNIQUE INDEX "Page_email_key" ON "Page" USING btree ("email" text_ops);