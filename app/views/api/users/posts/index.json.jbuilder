json.posts @posts do |post|
  json.id post.id
  json.title post.title
  json.bookTitle post.book_title
  json.bookImageUrl post.book_image_url
  json.publishedAt format_date(post.first_published_at)
end
