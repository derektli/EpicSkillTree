class Tree < ActiveRecord::Base
  attr_accessible :name
  has_many :edges
end
