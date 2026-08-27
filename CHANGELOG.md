# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Launch list signup modal that collects first name, email, and optional business name from all CTAs during pre-launch
- Server-side `/api/waitlist` endpoint that adds signups to a MailerLite subscriber group with immediate opt-in
- `useWaitlistModal()` composable for managing launch list modal state
- Support for MailerLite configuration via `NUXT_MAILERLITE_API_KEY` and `NUXT_MAILERLITE_GROUP_ID` environment variables (server-only, never exposed to client)

### Changed
- Header announcement bar and all primary CTAs site-wide now open the launch list signup modal instead of linking elsewhere during pre-launch
- Site deployment model now requires server runtime to support the `/api/waitlist` route (no longer static-only)

[Unreleased]: https://github.com/joshevensen/fibermade.app/compare/HEAD...HEAD
