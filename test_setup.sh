
# Requires bundler 1.16.4
# > gem install bundler -v 1.16.4

psql -c 'CREATE USER canvas' -d postgres
psql -c 'ALTER USER canvas CREATEDB' -d postgres
createdb -U canvas canvas_test

psql -c 'GRANT ALL PRIVILEGES ON DATABASE canvas_test TO canvas' -d canvas_test
psql -c 'GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO canvas' -d canvas_test
psql -c 'GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO canvas' -d canvas_test

env RAILS_ENV=test bundle exec rails db:test:reset
# bundle exec rails canvas:compile_assets
bundle exec rspec ./spec/controllers/courses_controller_spec.rb
bundle exec rspec ./spec/controllers/courses_controller_spec.rb:2486