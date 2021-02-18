require 'rails_helper.rb'
#visit root route
# click create
# fill forms
# click submit
# expect page with content
# click back page
# expect main page with the content submitted


feature 'Work with products' do
  scenario 'Create product' do
    #visit root route
    visit '/'
    # click create
    click_button "Create product"
    # fill forms
    fill_in 'Title', with: 'title'
    fill_in 'Description', with: 'description'
    # click submit
    click_button 'Create Product'
    # expect page with content
    expect(page).to have_content('title')
    expect(page).to have_content('description')
    # click back page
    click_button 'Main page'
    # expect main page with the content submitted
    expect(page).to have_content('title')
  end

  scenario 'Edit product' do
    #create test object
    Product.new(title: "title", description: "description").save
    #withit page of product
    visit "/products/1"
    #click edit product
    click_button "Edit"
    #click back
    click_button "Back"
    # expect content
    expect(page).to have_content('title')
    expect(page).to have_content('description')
    # click edit
    click_button "Edit"
    #edit fields
    fill_in 'Title', with: 'title edited'
    fill_in 'Description', with: 'description edited'
    #save changes
    click_button 'Update Product'
    #expect appropriate content
    expect(page).to have_content('title edited')
    expect(page).to have_content('description edited')
  end

  scenario 'delete product' do
    #create test object
    Product.new(title: "title", description: "description").save
    #withit page of product
    visit "/products/1"
    #click delete product
    click_button( "Delete")
    #expect miss of deleted post
    expect(page).not_to have_content('title')
    expect(page).not_to have_content('description')
  end
end

feature 'Work with users' do
  scenario 'Check permissions' do
    #go to post page
  end
end
