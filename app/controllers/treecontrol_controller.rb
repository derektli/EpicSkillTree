class TreecontrolController < ApplicationController
  def addnode

		tree_name = params[:treename]
    t = Tree.find_by_name(tree_name)

		# if tree doesn't exist
    if t==nil
			t = Tree.create(:name => tree_name)
			Node.create(:name => tree_name, :link => params[:link], :description => params[:description])
		end

		if params[:parent]!=nil
			Node.create(:name => params[:name], :link => params[:link], :description => params[:description])
			t.edges.create(:parent => params[:parent], :child => params[:name])
		elsif params[:child]!=nil
			Node.create(:name => params[:name], :link => params[:link], :description => params[:description])
			t.edges.create(:parent => params[:name], :child => params[:parent])
		end

		# node_name = params[:name]
	  # node = Node.find_by_name(node_name)	

		# return_json = {:node_name => node_name, :node => node}
		return_json = {:msg => "haha"}
		
		respond_to do |format|
			format.json { render :json => return_json }
		end
	
  end

  def gettree
  end
end
