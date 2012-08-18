Package.describe({
  summary: "Reproduce undefined template in smart package"
});

Package.on_use(function (api) {
  api.use('templating', 'client');
  api.add_files('client.js', 'client');
});
