import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email"),
  nftAddress: text("nft_address"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const players = pgTable("players", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id).notNull(),
  playerName: text("player_name").notNull(),
  level: integer("level").default(1),
  experience: integer("experience").default(0),
  coins: integer("coins").default(100),
  brewingSkill: integer("brewing_skill").default(1),
  tradingSkill: integer("trading_skill").default(1),
  reputation: integer("reputation").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const breweries = pgTable("breweries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  playerId: varchar("player_id").references(() => players.id).notNull(),
  name: text("name").notNull(),
  level: integer("level").default(1),
  capacity: integer("capacity").default(10),
  efficiency: integer("efficiency").default(1),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const recipes = pgTable("recipes", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description"),
  difficulty: integer("difficulty").default(1),
  ingredients: json("ingredients").$type<{ [key: string]: number }>().notNull(),
  brewingTime: integer("brewing_time").notNull(), // in minutes
  baseValue: integer("base_value").default(10),
  rarity: text("rarity").default("common"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const playerRecipes = pgTable("player_recipes", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  playerId: varchar("player_id").references(() => players.id).notNull(),
  recipeId: varchar("recipe_id").references(() => recipes.id).notNull(),
  unlockedAt: timestamp("unlocked_at").defaultNow(),
});

export const seasons = pgTable("seasons", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description"),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date").notNull(),
  rewards: json("rewards").$type<{ [key: string]: any }>(),
  isActive: integer("is_active").default(0), // 0 = false, 1 = true
  createdAt: timestamp("created_at").defaultNow(),
});

export const leaderboards = pgTable("leaderboards", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  playerId: varchar("player_id").references(() => players.id).notNull(),
  seasonId: varchar("season_id").references(() => seasons.id),
  category: text("category").notNull(), // e.g., "brewing", "trading", "overall"
  score: integer("score").default(0),
  rank: integer("rank"),
  lastUpdated: timestamp("last_updated").defaultNow(),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
});

export const insertPlayerSchema = createInsertSchema(players).pick({
  userId: true,
  playerName: true,
});

export const insertBrewerySchema = createInsertSchema(breweries).pick({
  playerId: true,
  name: true,
});

export const insertRecipeSchema = createInsertSchema(recipes).pick({
  name: true,
  description: true,
  difficulty: true,
  ingredients: true,
  brewingTime: true,
  baseValue: true,
  rarity: true,
});

export const insertSeasonSchema = createInsertSchema(seasons).pick({
  name: true,
  description: true,
  startDate: true,
  endDate: true,
  rewards: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertPlayer = z.infer<typeof insertPlayerSchema>;
export type Player = typeof players.$inferSelect;

export type InsertBrewery = z.infer<typeof insertBrewerySchema>;
export type Brewery = typeof breweries.$inferSelect;

export type InsertRecipe = z.infer<typeof insertRecipeSchema>;
export type Recipe = typeof recipes.$inferSelect;

export type InsertSeason = z.infer<typeof insertSeasonSchema>;
export type Season = typeof seasons.$inferSelect;

export type Leaderboard = typeof leaderboards.$inferSelect;
export type PlayerRecipe = typeof playerRecipes.$inferSelect;
