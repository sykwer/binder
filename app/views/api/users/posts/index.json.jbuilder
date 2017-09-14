json.posts @posts do |post|
  json.id post.id
  json.bookTitle post.book_title
  json.bookImageUrl post.book_image_url
end
