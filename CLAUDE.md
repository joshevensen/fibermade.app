# fibermade.app

The Fibermade marketing site — a Nuxt 4 app. See `README.md` for how it runs,
its env vars, and its structure.

## Verification

```bash
npm run typecheck   # vue-tsc across the whole project
npm run build       # nuxt build — must succeed in server mode
```

## Focused Verification

This repo has no test framework and no `test` script — `npm run typecheck`
already type-checks the whole project in one pass (TypeScript/vue-tsc has no
narrower per-file mode worth scoping to), so there is no smaller focused
command. Run the same two commands above after each wave; there is nothing to
filter down to.
