Rake::Task['db:migrate'].clear
Rake::Task['db:schema:dump'].clear
Rake::Task['db:schema:load'].clear

namespace :db do
  task :migrate do
    sh "bundle exec ridgepole -c config/database.yml -f db/Schemafile -a -E #{Rails.env}"
  end

  task 'migrate:dry-run' do
    sh "bundle exec ridgepole -c config/database.yml -f db/Schemafile -a -E #{Rails.env} --dry-run"
  end
end
