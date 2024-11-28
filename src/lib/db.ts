import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  user: process.env.VITE_DB_USER,
  host: process.env.VITE_DB_HOST,
  database: process.env.VITE_DB_NAME,
  password: process.env.VITE_DB_PASSWORD,
  port: parseInt(process.env.VITE_DB_PORT || '5432'),
  ssl: process.env.VITE_DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined
});

export const db = {
  // Connexions et utilisation
  async getDailyConnections(startDate: string, endDate: string) {
    const result = await pool.query(`
      SELECT DATE(lastLogin) as date, COUNT(*) as value
      FROM "Account"
      WHERE lastLogin BETWEEN $1 AND $2
      GROUP BY DATE(lastLogin)
      ORDER BY date DESC
    `, [startDate, endDate]);
    return result.rows;
  },

  async getUserTypeDistribution() {
    const result = await pool.query(`
      SELECT 
        CASE 
          WHEN EXISTS (SELECT 1 FROM "Contractor" WHERE "accountId" = "Account".id) THEN 'Employés'
          WHEN EXISTS (SELECT 1 FROM "Business" WHERE "accountId" = "Account".id) THEN 'Employeurs'
        END as name,
        COUNT(*) as value
      FROM "Account"
      GROUP BY 
        CASE 
          WHEN EXISTS (SELECT 1 FROM "Contractor" WHERE "accountId" = "Account".id) THEN 'Employés'
          WHEN EXISTS (SELECT 1 FROM "Business" WHERE "accountId" = "Account".id) THEN 'Employeurs'
        END
    `);
    return result.rows;
  },

  async getAgeDistribution() {
    const result = await pool.query(`
      SELECT 
        CASE 
          WHEN EXTRACT(YEAR FROM AGE("dateOfBirth")) BETWEEN 18 AND 24 THEN '18-24'
          WHEN EXTRACT(YEAR FROM AGE("dateOfBirth")) BETWEEN 25 AND 34 THEN '25-34'
          WHEN EXTRACT(YEAR FROM AGE("dateOfBirth")) BETWEEN 35 AND 44 THEN '35-44'
          WHEN EXTRACT(YEAR FROM AGE("dateOfBirth")) BETWEEN 45 AND 54 THEN '45-54'
          ELSE '55+'
        END as age,
        SUM(CASE WHEN a.gender = 'MALE' THEN 1 ELSE 0 END) as homme,
        SUM(CASE WHEN a.gender = 'FEMALE' THEN 1 ELSE 0 END) as femme
      FROM "Contractor" c
      JOIN "Account" a ON c."accountId" = a.id
      GROUP BY 
        CASE 
          WHEN EXTRACT(YEAR FROM AGE("dateOfBirth")) BETWEEN 18 AND 24 THEN '18-24'
          WHEN EXTRACT(YEAR FROM AGE("dateOfBirth")) BETWEEN 25 AND 34 THEN '25-34'
          WHEN EXTRACT(YEAR FROM AGE("dateOfBirth")) BETWEEN 35 AND 44 THEN '35-44'
          WHEN EXTRACT(YEAR FROM AGE("dateOfBirth")) BETWEEN 45 AND 54 THEN '45-54'
          ELSE '55+'
        END
      ORDER BY age
    `);
    return result.rows;
  },

  async getLocationDistribution() {
    const result = await pool.query(`
      SELECT "addressCity" as name, COUNT(*) as value
      FROM "Account"
      WHERE "addressCity" IS NOT NULL
      GROUP BY "addressCity"
      ORDER BY value DESC
      LIMIT 10
    `);
    return result.rows;
  },

  async getProfileStatus() {
    const result = await pool.query(`
      SELECT 
        'Total' as name,
        SUM(CASE WHEN "minimalProfileComplete" = true THEN 1 ELSE 0 END) as completed,
        SUM(CASE WHEN "minimalProfileComplete" = false THEN 1 ELSE 0 END) as incomplete
      FROM "Contractor"
    `);
    return result.rows;
  },

  // Engagement et interactions
  async getDailyApplications(startDate: string, endDate: string) {
    const result = await pool.query(`
      SELECT DATE("createdAt") as date, COUNT(*) as value
      FROM "AdContractor"
      WHERE "createdAt" BETWEEN $1 AND $2
      GROUP BY DATE("createdAt")
      ORDER BY date DESC
    `, [startDate, endDate]);
    return result.rows;
  },

  async getApplicationsPerAd() {
    const result = await pool.query(`
      SELECT 
        a.id as ad_id,
        COUNT(ac.id) as applications_count
      FROM "Ad" a
      LEFT JOIN "AdContractor" ac ON a.id = ac."adId"
      GROUP BY a.id
    `);
    return result.rows;
  },

  async getResponseTime() {
    const result = await pool.query(`
      SELECT 
        ac.id,
        EXTRACT(EPOCH FROM (ac."businessAgreedAt" - ac."createdAt"))/3600 as response_time_hours
      FROM "AdContractor" ac
      WHERE ac."businessAgreedAt" IS NOT NULL
    `);
    return result.rows;
  }
};