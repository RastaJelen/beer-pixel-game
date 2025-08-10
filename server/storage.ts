import { 
  type User, 
  type InsertUser, 
  type Player, 
  type InsertPlayer,
  type Brewery,
  type InsertBrewery,
  type Recipe,
  type InsertRecipe,
  type Season,
  type InsertSeason,
  type Leaderboard,
  users,
  players,
  breweries,
  recipes,
  seasons,
  leaderboards,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Player methods
  getPlayer(id: string): Promise<Player | undefined>;
  getPlayerByUserId(userId: string): Promise<Player | undefined>;
  createPlayer(player: InsertPlayer): Promise<Player>;
  updatePlayer(id: string, updates: Partial<Player>): Promise<Player | undefined>;

  // Brewery methods
  getBrewery(id: string): Promise<Brewery | undefined>;
  getBreweriesByPlayerId(playerId: string): Promise<Brewery[]>;
  createBrewery(brewery: InsertBrewery): Promise<Brewery>;

  // Recipe methods
  getAllRecipes(): Promise<Recipe[]>;
  getRecipe(id: string): Promise<Recipe | undefined>;
  createRecipe(recipe: InsertRecipe): Promise<Recipe>;

  // Season methods
  getCurrentSeason(): Promise<Season | undefined>;
  getAllSeasons(): Promise<Season[]>;
  createSeason(season: InsertSeason): Promise<Season>;

  // Leaderboard methods
  getLeaderboard(category: string, seasonId?: string): Promise<Leaderboard[]>;
  updateLeaderboardScore(playerId: string, category: string, score: number, seasonId?: string): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  // Player methods
  async getPlayer(id: string): Promise<Player | undefined> {
    const [player] = await db.select().from(players).where(eq(players.id, id));
    return player || undefined;
  }

  async getPlayerByUserId(userId: string): Promise<Player | undefined> {
    const [player] = await db.select().from(players).where(eq(players.userId, userId));
    return player || undefined;
  }

  async createPlayer(insertPlayer: InsertPlayer): Promise<Player> {
    const [player] = await db
      .insert(players)
      .values(insertPlayer)
      .returning();
    return player;
  }

  async updatePlayer(id: string, updates: Partial<Player>): Promise<Player | undefined> {
    const [player] = await db
      .update(players)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(players.id, id))
      .returning();
    return player || undefined;
  }

  // Brewery methods
  async getBrewery(id: string): Promise<Brewery | undefined> {
    const [brewery] = await db.select().from(breweries).where(eq(breweries.id, id));
    return brewery || undefined;
  }

  async getBreweriesByPlayerId(playerId: string): Promise<Brewery[]> {
    return await db.select().from(breweries).where(eq(breweries.playerId, playerId));
  }

  async createBrewery(insertBrewery: InsertBrewery): Promise<Brewery> {
    const [brewery] = await db
      .insert(breweries)
      .values(insertBrewery)
      .returning();
    return brewery;
  }

  // Recipe methods
  async getAllRecipes(): Promise<Recipe[]> {
    return await db.select().from(recipes);
  }

  async getRecipe(id: string): Promise<Recipe | undefined> {
    const [recipe] = await db.select().from(recipes).where(eq(recipes.id, id));
    return recipe || undefined;
  }

  async createRecipe(insertRecipe: InsertRecipe): Promise<Recipe> {
    const [recipe] = await db
      .insert(recipes)
      .values(insertRecipe)
      .returning();
    return recipe;
  }

  // Season methods
  async getCurrentSeason(): Promise<Season | undefined> {
    const [season] = await db
      .select()
      .from(seasons)
      .where(eq(seasons.isActive, 1))
      .limit(1);
    return season || undefined;
  }

  async getAllSeasons(): Promise<Season[]> {
    return await db.select().from(seasons).orderBy(desc(seasons.createdAt));
  }

  async createSeason(insertSeason: InsertSeason): Promise<Season> {
    const [season] = await db
      .insert(seasons)
      .values(insertSeason)
      .returning();
    return season;
  }

  // Leaderboard methods
  async getLeaderboard(category: string, seasonId?: string): Promise<Leaderboard[]> {
    let query = db
      .select()
      .from(leaderboards)
      .where(eq(leaderboards.category, category))
      .orderBy(desc(leaderboards.score))
      .limit(100);

    if (seasonId) {
      query = db
        .select()
        .from(leaderboards)
        .where(
          and(
            eq(leaderboards.category, category),
            eq(leaderboards.seasonId, seasonId)
          )
        )
        .orderBy(desc(leaderboards.score))
        .limit(100);
    }

    return await query;
  }

  async updateLeaderboardScore(
    playerId: string, 
    category: string, 
    score: number, 
    seasonId?: string
  ): Promise<void> {
    // Check if entry exists
    let existingQuery = db
      .select()
      .from(leaderboards)
      .where(
        and(
          eq(leaderboards.playerId, playerId),
          eq(leaderboards.category, category)
        )
      );

    if (seasonId) {
      existingQuery = db
        .select()
        .from(leaderboards)
        .where(
          and(
            eq(leaderboards.playerId, playerId),
            eq(leaderboards.category, category),
            eq(leaderboards.seasonId, seasonId)
          )
        );
    }

    const [existing] = await existingQuery;

    if (existing) {
      // Update existing entry
      await db
        .update(leaderboards)
        .set({ 
          score, 
          lastUpdated: new Date() 
        })
        .where(eq(leaderboards.id, existing.id));
    } else {
      // Create new entry
      await db
        .insert(leaderboards)
        .values({
          playerId,
          seasonId,
          category,
          score,
        });
    }
  }
}

export const storage = new DatabaseStorage();
