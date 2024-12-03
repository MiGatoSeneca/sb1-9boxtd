import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const configSchema = z.object({
  port: z.number().default(3000),
  nodeEnv: z.enum(['development', 'production', 'test']).default('development'),
});

export const config = configSchema.parse({
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : undefined,
  nodeEnv: process.env.NODE_ENV,
});