class SharePostOnTwitterService
  attr_reader :user, :post

  def initialize(user:, post:)
    @user = user
    @post = post
  end

  # TODO* The URL is only for development env
  def share
    twitter_client.update(
      "I've just written #{@post.title} http://localhost:3000/posts/#{@post.uuid}"
    )
  end

  private

  def twitter_client
    @twitter_client ||= Twitter::REST::Client.new do |config|
      config.consumer_key = Rails.application.secrets.twitter_app_key
      config.consumer_secret = Rails.application.secrets.twitter_secret_key
      config.access_token = @user.twitter_access_token
      config.access_token_secret = @user.twitter_access_token_secret
    end
  end
end
