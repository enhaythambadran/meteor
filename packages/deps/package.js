// XXX rename package?

Package.describe({
  summary: "Deprecated package, please use tracker instead.",
  version: '1.0.2-rc0'
});

Package.on_use(function (api) {
  api.use('tracker');
  api.export('Deps');
  api.add_files('deps.js');
});
