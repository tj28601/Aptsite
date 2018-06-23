class CreateAboutDetails < ActiveRecord::Migration[5.1]
  def change
    create_table :about_details do |t|
      t.string :about_description, null: false

      t.timestamps
    end
  end
end
