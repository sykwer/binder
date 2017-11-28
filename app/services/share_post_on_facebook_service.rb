class SharePostOnFacebookService
  attr_reader :user, :post

  def initialize(user:, post:)
    @user = user
    @post = post
  end

  def share
    facebook_client.put_wall_post(
      "I've just written #{@post.title} http://localhost:3000/posts/#{@post.uuid}"
    )
  end

  private

  def facebook_client
    @facebook_client ||= Koala::Facebook::API.new(@user.social_profile(:facebook).access_token)
  end
end
