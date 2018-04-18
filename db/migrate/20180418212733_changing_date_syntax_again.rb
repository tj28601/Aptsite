class ChangingDateSyntaxAgain < ActiveRecord::Migration[5.1]
  def up
    change_column :apartments, :date_available, :date
  end
  def down
    change_column :apartments, :date_available, :datetime
  end
end
