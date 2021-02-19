require 'rails_helper.rb'
# visit root route
# click create
# fill forms
# click submit
# expect page with content
# click back page
# expect main page with the content submitted


feature 'Work with products' do
  scenario 'Create product' do
    # visit root route
    visit '/'
    # click create
    click_button 'Create product'
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
    # create test object
    Product.new(title: 'title', description: 'description').save
    # visit page of product
    visit '/products/1'
    # click edit product
    click_button 'Edit'
    # click back
    click_button 'Back'
    # expect content
    expect(page).to have_content('title')
    expect(page).to have_content('description')
    # click edit
    click_button 'Edit'
    # edit fields
    fill_in 'Title', with: 'title edited'
    fill_in 'Description', with: 'description edited'
    # save changes
    click_button 'Update Product'
    # expect appropriate content
    expect(page).to have_content('title edited')
    expect(page).to have_content('description edited')
  end

  scenario 'delete product' do
    # create test object
    Product.new(title: 'title', description: 'description').save
    # visit page of product
    visit '/products/1'
    # click delete product
    click_button('Delete')
    # expect miss of deleted post
    expect(page).not_to have_content('title')
    expect(page).not_to have_content('description')
  end
end

feature 'Work with users' do
  scenario 'Check permissions' do
    # create test object
    Product.new(title: 'title', description: 'description').save
    # visit root
    visit '/'
    # visit page of product
    visit '/products/1'
    # expect miss of buttons as not signed in
    expect(page).not_to have_button('Edit')
    expect(page).not_to have_button('Delete')
    visit '/users/sign_up'
    fill_in 'Email', with: 'a1a1a1@gmail.com'
    fill_in 'Password', with: 'a1a1a1'
    fill_in 'Password confirmation', with: 'a1a1a1'
    # click button
    click_button 'Sign up'
    # visit page of product
    visit '/products/1'
    # expect buttons as signed in
    expect(page).to have_button('Edit')
    expect(page).to have_button('Delete')
  end
end

feature 'Layout navigation' do
  scenario 'Check necessary buttons' do
    # visit root
    visit '/'

    #not sign in
    # expect buttons
    expect(page).to have_button('Edit')
    expect(page).to have_button('Delete')
    # expect miss of buttons
    expect(page).not_to have_button('Edit')
    expect(page).not_to have_button('Delete')

    #visit register and create user
    visit '/users/sign_up'
    fill_in 'Email', with: 'a1a1a1@gmail.com'
    fill_in 'Password', with: 'a1a1a1'
    fill_in 'Password confirmation', with: 'a1a1a1'
    # click button
    click_button 'Sign up'

    #not sign in
    # expect buttons
    expect(page).to have_button('Edit')
    expect(page).to have_button('Delete')
    # expect miss of buttons
    expect(page).not_to have_button('Edit')
    expect(page).not_to have_button('Delete')
  end
end
