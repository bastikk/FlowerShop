require 'rails_helper.rb'
#visit root route
# click create
# fill forms
# click submit
# expect page with content
# click back page
# expect main page with the content submitted


feature 'Creating Products' do
  scenario 'can create job' do
    #visit root route
    visit '/'
    # click create
    click_link "Create product"
    # fill forms
    fill_in 'Title', with: 'title'
    fill_in 'Description', with: 'description'
    # click submit
    click_button 'Create Update'
    # expect page with content
    expect(page).to have_content('title')
    expect(page).to have_content('description')
    # click back page
    click_button 'Main page'
    # expect main page with the content submitted
    expect(page).to have_content('title')
  end
end