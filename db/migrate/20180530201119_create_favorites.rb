class CreateFavorites < ActiveRecord::Migration[5.1]
  def change
    create_table :favorites do |t|

      t.belongs_to :apartment
      t.belongs_to :user

      t.timestamps
    end
  end
end
