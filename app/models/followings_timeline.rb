class FollowingsTimeline
  include ActiveModel::Model

  attr_accessor :user, :page, :count_per_page, :post_uuids

  # The size of followings_timeline/inbox is 1000
  TIMELINE_SIZE = 1000

  def initialize(user: user, count_per_page: count_per_page)
    super(user: user, count_per_page: count_per_page)
    @post_uuids = []
  end

  def fetch_head!
    @page = 0

    results = redis.multi do
      redis.zunionstore("followings_timeline:#{@user.id}",
                        ["followings_timeline:#{@user.id}", "followings_timeline_inbox:#{@user.id}"],
                        aggregate: "max")
      redis.del("followings_timeline_inbox:#{@user.id}")
      redis.zremrangebyrank("followings_timeline:#{@user.id}", 0, - TIMELINE_SIZE - 1)
      redis.zrevrange("followings_timeline:#{@user.id}", 0, @count_per_page - 1)
    end

    @post_uuids = results[3]
  end

  def fetch(page: page)
    if page == @page
      return @post_uuids
    else
      @page = page
    end

    @post_uuids = redis.zrevrange(
      "followings_timeline:#{@user.id}",
      @count_per_page * @page,
      @count_per_page * (@page + 1) - 1,
    )
  end

  private

  def redis
    @redis ||= Redis.new
  end
end
