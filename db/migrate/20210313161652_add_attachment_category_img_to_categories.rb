class AddAttachmentCategoryImgToCategories < ActiveRecord::Migration[6.1]
  def self.up
    change_table :categories do |t|
      t.attachment :category_img
    end
  end

  def self.down
    remove_attachment :categories, :category_img
  end
end
