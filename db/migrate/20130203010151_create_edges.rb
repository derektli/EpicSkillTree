class CreateEdges < ActiveRecord::Migration
  def change
    create_table :edges do |t|
      t.string :parent
      t.string :child
      t.references :tree

      t.timestamps
    end
    add_index :edges, :tree_id
  end
end
