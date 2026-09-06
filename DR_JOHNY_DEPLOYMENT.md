# Dr. Johny’s portfolio concept

Public pitch URL: https://njx7.tech/dr-johny/
Portfolio entry: https://njx7.tech/#selected-work

The editable clinic project remains separate in `dr-johny-dental-concept/` and its private GitHub repository. This portfolio repository tracks only its static export in `public/dr-johny/`, so Vercel builds do not need access to the private source repository.

To update the export from the workspace root:

1. Run `NJX_BASE_PATH=/dr-johny npm --prefix dr-johny-dental-concept run build`.
2. Run `node scripts/sync-johny.mjs`.
3. Run `npm run build` and `node scripts/check-johny.mjs`.
4. Commit the source separately, then commit the updated portfolio export and deploy the portfolio.

The clinic uses `assetPrefix`, not `basePath`, because this version of Vinext skips rendering the root route when a basePath is set. Asset staging preserves the generated `/dr-johny/_next/` paths. Image URLs are relative to the clinic page.

This is an independent pitch concept, not the clinic’s official website. Clinic asset and review provenance is recorded in the source project README. Booking buttons open the clinic’s real contact channels; there is no scheduling backend.
