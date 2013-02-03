class Edge < ActiveRecord::Base
  belongs_to :tree
  attr_accessible :child, :parent
end
