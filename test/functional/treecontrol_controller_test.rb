require 'test_helper'

class TreecontrolControllerTest < ActionController::TestCase
  test "should get addnode" do
    get :addnode
    assert_response :success
  end

  test "should get gettree" do
    get :gettree
    assert_response :success
  end

end
