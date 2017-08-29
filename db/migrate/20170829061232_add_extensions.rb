class AddExtensions < ActiveRecord::Migration[5.1]
  def change
    enable_extension "fuzzystrmatch"
    enable_extension "pg_trgm"
  end
end
