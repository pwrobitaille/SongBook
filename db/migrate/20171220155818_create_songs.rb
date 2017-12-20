class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :name, null: false
      t.string :artist, null: false
      t.string :tuning, null: false
      t.string :capo, null: false
      t.string :tabs
      t.text :notes

      t.timestamps

    end
  end
end
