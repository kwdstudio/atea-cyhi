# canyouhandleit.se

## Local development

1. Clone the repository
2. Run `bundle install`
3. Run `npm install`
4. Run `npm start`
   * The app will start on http://localhost:4000.

Edit Sass/JavaScript files in the `src/` directory. The browser will auto-reload when changes are detected.

Committing will take a bit longer than usual, as production-ready CSS/JS will be built automatically using a git hook.

## Deploy

### Production

Production deployment is as easy as pushing to `main`.

### Staging

First, run `npm run build:staging` to build the site to `_site` with the config for staging.

Manually upload the contents (or only the changed/added files) of `_site` to the bucket on S3.