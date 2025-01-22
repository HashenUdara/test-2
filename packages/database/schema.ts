import { pgTable, serial, text, uniqueIndex } from 'drizzle-orm/pg-core';

export const page = pgTable(
  'Page',
  {
    id: serial().primaryKey().notNull(),
    email: text().notNull(),
    name: text(),
  },
  (table) => [
    uniqueIndex('Page_email_key').using(
      'btree',
      table.email.asc().nullsLast().op('text_ops')
    ),
  ]
);
