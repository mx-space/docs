# Mix Space — Agent Skill: Mix Space Development

## Description

You are an expert developer for the Mix Space ecosystem. You help contributors write code for the backend (mx-core), admin dashboard (admin-vue3), and frontend themes.

## When to Use

Use this skill when the user asks about:
- Developing new features for Mix Space backend
- Creating or modifying admin dashboard pages
- Building frontend themes for Mix Space
- Writing tests for Mix Space
- Understanding the codebase architecture
- Contributing to Mix Space open source

## Project Structure

### Backend (mx-core)

```
mx-core/
├── apps/core/
│   ├── src/modules/        # 44+ business modules
│   ├── src/processors/     # Infra (database, redis, gateway, task-queue)
│   ├── src/common/         # Guards, Interceptors, Decorators, Filters
│   ├── src/constants/      # Business events, cache keys, error codes
│   ├── src/transformers/   # Response transforms (snake_case, pagination)
│   └── test/               # Vitest tests
├── packages/
│   ├── api-client/         # @mx-space/api-client SDK
│   └── webhook/            # @mx-space/webhook SDK
└── docker-compose.yml
```

### Admin (admin-vue3)

```
admin-vue3/
├── apps/admin/src/
│   ├── api/                # API layer (ofetch wrapper)
│   ├── views/              # Page views
│   ├── components/         # Shared components
│   ├── hooks/queries/      # TanStack Query hooks
│   ├── stores/             # Pinia stores
│   └── router/             # Route config
└── packages/rich-react/    # React editor bridge
```

## Key Patterns

### Backend Module Structure

Every module follows NestJS conventions:

```
modules/example/
├── example.module.ts       # Module registration
├── example.controller.ts   # API endpoints
├── example.service.ts      # Business logic
├── example.model.ts        # Database model (Drizzle ORM)
└── example.schema.ts       # Zod validation schemas
```

### Key Decorators

```typescript
@ApiController()           // Adds /api/v{version} prefix in production
@Auth()                    // Requires admin authentication
@HasAdminAccess()          // Checks if request has admin access (optional auth)
@Paginator                 // Wraps paginated response
@HTTPDecorators.Bypass     // Skip response transform
@HTTPDecorators.Idempotence()  // Deduplicate requests
@IpLocation()              // Extract IP geo info
@Lang()                    // Get Accept-Language header
@TranslateFields({...})    // Auto-translate specified fields
```

### Response Transform (ResponseInterceptor)

- Array → `{ data: [...] }`
- Object → returned as-is
- `@Paginator` → `{ data: [...], pagination: {...} }`
- All keys auto-converted to **snake_case**
- `@Bypass` → skip transform

### Config System

Configuration is defined in `configs.schema.ts` using Zod with a DSL:

```typescript
export const MySchema = section('配置名称', {
  enable: field.toggle(z.boolean().optional(), '开关名称'),
  value: field.plain(z.string().optional(), '字段名称'),
  items: field.array(z.array(z.string()).optional(), '列表名称'),
  secret: field.password(z.string().optional(), '密钥'),
  select: field.select(z.enum(['a', 'b']).optional(), '选择', [
    { label: '选项A', value: 'a' },
    { label: '选项B', value: 'b' },
  ]),
})
```

Register in `configSchemaMapping`.

### Admin Frontend Patterns

**API layer** (`api/xxx.ts`):
```typescript
export const xxxApi = {
  getList: (params) => request.get('/xxx', { params }),
  create: (data) => request.post('/xxx', data),
}
```

**TanStack Query hooks** (`hooks/queries/use-xxx.ts`):
```typescript
export const useXxxList = (params) =>
  useQuery({
    queryKey: queryKeys.xxx.list(params),
    queryFn: () => xxxApi.getList(params),
  })
```

**Page view** (`views/xxx/index.tsx`): Vue 3 + TSX with Naive UI components.

### CSS Conventions

- **Colors**: MUST use `neutral` (never `gray`): `text-neutral-500`, `bg-neutral-800`
- **Font sizes**: Standard Tailwind classes only, never arbitrary values
- **Breakpoints**: `phone:` (≤768px), `tablet:` (≤1024px), `desktop:` (≥1024px)
- **Path alias**: `~` → `./src`

## Development Commands

### Backend
```bash
pnpm dev          # Dev server (port 2333)
pnpm build        # Compile TypeScript
pnpm bundle       # Production bundle (tsdown)
pnpm test         # Run tests (Vitest)
pnpm test -- test/src/modules/xxx.spec.ts  # Single test file
pnpm lint         # ESLint
pnpm typecheck    # TypeScript check
```

### Admin
```bash
pnpm dev          # Dev server
pnpm build        # Production build
pnpm lint         # Oxlint
pnpm typecheck    # tsc --noEmit (NOT build)
```

## Adding a New Feature Checklist

### Backend:
1. Create module directory `modules/xxx/`
2. Define Drizzle schema in model file
3. Create controller with `@ApiController()` 
4. Implement service with business logic
5. Add Zod validation schemas
6. Register module in `app.module.ts`
7. Add config fields if needed in `configs.schema.ts`
8. Write tests in `test/src/modules/`

### Admin:
1. Add API functions in `api/xxx.ts`
2. Add TanStack Query hooks in `hooks/queries/`
3. Create page view in `views/xxx/`
4. Register route in `router/route.tsx`
5. Add config form fields if needed

## Testing

### Backend (Vitest + in-memory DB)
```typescript
const proxy = createE2EApp({
  imports: [...],
  controllers: [MyController],
  providers: [...],
  models: [MyModel],
  pourData: async (modelMap) => { /* seed data */ }
})
```

### Admin
```bash
npx tsc --noEmit  # Type check only, do NOT use build
```

## Important Notes

- Package manager: **pnpm** only (via Corepack)
- API versioning: `/api/v2` prefix in production, none in dev
- Path aliases: Backend `~` → `apps/core/src/`, Admin `~` → `apps/admin/src/`
- The admin is Vue 3 but uses React for the rich editor (bridge pattern via `packages/rich-react/`)
- All `@haklex/*` packages use pinned npm versions, NOT workspace links
