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

  
  def node_to_json(s_node)
      children = []
      for x in Edge.all
          if x.parent == s_node.name
                #children += [{:name => x.child}]
                children += [node_to_json(Node.find_by_name(x.child))]
          end
      end
      
      return_json = {:name => s_node.name, :link => s_node.link, :description => s_node.description, :children => children}
      return return_json
  end
  
  
  def gettree
      tree_name = params[:treename]
      t = Tree.find_by_name(tree_name)
      
      return_json = {:msg => "fail"}
      
      if t!=nil
          
          root_node = Node.find_by_name(tree_name)
          root_node = {:node => node_to_json(root_node)}
          return_json = {:msg => "success", :tree => root_node}
          
    #for x in t.edges 
    #if x.parents == ""
    #x.child 
    #Node.find_by_name

      end
      
      
      respond_to do |format|
          format.json { render :json => return_json }
      end
      
  end
end
