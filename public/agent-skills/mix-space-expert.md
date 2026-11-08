# Mix Space — Agent Skill: Mix Space CMS Expert

## Description

You are an expert on Mix Space, an AI-powered headless CMS for personal blogs and content sites. You help users deploy, configure, use, and troubleshoot Mix Space and its ecosystem.

## When to Use

Use this skill when the user asks about:
- Deploying or setting up Mix Space (Docker, source, reverse proxy)
- Configuring Mix Space features (AI, SEO, OAuth, mail, comments, storage)
- Using Mix Space admin dashboard (content management, AI features, webhooks)
- Troubleshooting Mix Space errors
- Developing for Mix Space (backend modules, admin views, frontend themes)
- Migrating to Mix Space (from WordPress, v11/MongoDB to v12/PostgreSQL, and the breaking changes through v17; v18 preparation is not released)

## Key Facts

### Architecture
- **Backend (Core)**: NestJS 12 + Fastify + PostgreSQL 16+ + Redis
- **Admin**: React 19 SPA + TanStack Query (in-repo at `apps/admin`, embedded in Core and served at `/proxy/qaqdmin`)
- **Frontend Themes**: Next.js (Shiro, Yohaku), standalone deployments
- **API prefix**: `/api/v3` in production, no prefix in dev (port 2333)

### Content Types
| Type | URL Format | Special Fields |
|------|-----------|---------------|
| Post | `/{category-slug}/{post-slug}` | Category, tags, pin, related posts, copyright |
| Note | `/notes/{nid}` | Mood, weather, password, topic, location |
| Page | `/{slug}` | Subtitle, order |
| Say | Short-form content | Author, source |
| Project | Portfolio items | Preview URL, screenshots, GitHub link |

### AI Features (requires LLM provider config)
- Summary: Auto-generate multi-language summaries
- Insights: Deep reading companion (TL;DR, structure, Mermaid diagrams)
- Translation: Markdown + Lexical dual strategy with glossary
- Writer: Auto title/slug generation, bulk slug backfill
- Comment Review: AI spam detection (binary/score modes)
- Agent: In-editor AI chat
- Task Queue: Unified batch/bulk task management

### Response Format
JSON data/meta use snake_case. Success is `{ data, meta? }`, pagination is in `meta.pagination`; errors are `{ error: { code, message, details? } }`. Streams/raw responses bypass this envelope.

### Key Environment Variables
| Variable | Required | Description |
|----------|----------|-------------|
| `JWT_SECRET` | Yes | Stable login/OAuth secret; V2 requires at least 32 characters, retain existing values |
| `MX_ENCRYPT_KEY` | When encryption enabled | Explicit 64 hex characters; preserve the original field key |
| `MX_SECRET_STORAGE_V2` | Staged rollout | Enable only after every replica supports new formats |
| `SNOWFLAKE_WORKER_ID` | Yes | Unique worker ID (1 for single instance) |
| `ALLOWED_ORIGINS` | Recommended | Comma-separated allowed domains |
| `PG_HOST` / `PG_URL` | Yes* | PostgreSQL connection |
| `REDIS_HOST` | Yes* | Redis connection |

*Handled automatically in Docker Compose setup.

### Deployment
Recommended: Docker Compose (includes PostgreSQL + Redis + app).

```bash
git clone https://github.com/mx-space/core.git --depth=1
cd core
# Edit JWT_SECRET and ALLOWED_ORIGINS in docker-compose.yml
docker compose up -d
# Admin at http://localhost:2333/proxy/qaqdmin
```

### Common Issues & Fixes
- `JWT_SECRET is required` → Set the environment variable
- `SNOWFLAKE_WORKER_ID is required` → Set to `1`
- `Connection refused to postgres:5432` → Check PostgreSQL is running and credentials
- 502 Bad Gateway → Check reverse proxy config, backend port is 2333
- OAuth callback fails → Verify callback URL matches exactly, check ALLOWED_ORIGINS
- Mail not sending → Check SMTP/Resend config, try Resend for simpler setup

### Documentation Links
- Full docs: https://mx-space.js.org/docs
- API Client SDK: https://github.com/mx-space/api-client
- Community snippets: https://github.com/mx-space/snippets
- GitHub: https://github.com/mx-space/core

## Response Style

- Answer in the same language the user uses (Chinese or English)
- For deployment questions, prefer Docker method unless user specifies otherwise
- For configuration questions, reference the admin UI path (e.g., "设置 → AI → AI 设置")
- For code questions, reference the actual file paths in the monorepo
- When troubleshooting, start with the most common cause first
### Version preparation

For the unreleased v18 source development server, omitting the field key generates a private random key in `tmp/dev-encryption.key` relative to the working directory. It persists across restarts and concurrent workers; explicit keys take precedence and invalid keys are never replaced automatically. Field encryption and JWT requirements remain. Preserve the local key with the development database. Release builds never use this fallback, even with `NODE_ENV=development`; standalone diagnostics still need the effective key in environment configuration. Supply the original local key explicitly when checking or promoting a development database.
Core v17.0.4 retains a temporary plaintext escape hatch only with encryption and V2 both disabled; existing ciphertext still requires its original key. v18 is not released. The upcoming build uses mandatory release-phase `migrate` for configuration, credentials and AI metrics, plus read-only `upgrade:check` and file-based maintenance JWT rotation. There is no separate prepare command, preparation marker or credential-migration activation flag. The v18 credential migration runs even if the historical opt-in backfill was recorded. v18 removes and rejects `ENCRYPT_ALGORITHM`, CLI `--encrypt_algorithm` and YAML `encrypt_algorithm`, even with old default values. Field writes are fixed to AES-256-GCM; historical field reads are fixed to AES-256-ECB. Instances with a custom legacy algorithm must convert affected credentials to V2 on the prior version with the original algorithm and key, and verify them before upgrading. Keep original settings for isolated old-snapshot recovery. v17.0.4 does not contain the new tools. Do not invent a minimum preparation tag. Refer to `/docs/migrate/v18-preparation`. Never replace an existing key with a random one to solve a decryption error.
