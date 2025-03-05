import { Elysia, ElysiaConfig } from 'elysia';

interface ExtendedElysiaConfig extends ElysiaConfig {
  aot?: boolean;
}
(config?: ConstructorParameters<typeof Elysia>[0]) => new Elysia({ ...config, aot: process.env.RUNTIME === 'bun' } as ExtendedElysiaConfig);

export const createElysia = (
    config?: ConstructorParameters<typeof Elysia>[0]
  ) => new Elysia({ ...config, aot: process.env.RUNTIME === 'bun' } as ExtendedElysiaConfig);

