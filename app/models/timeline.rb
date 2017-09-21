class Timeline
  include ActiveModel::Model

  attr_accessor :user, :page, :post_uuids

  # The size of timeline/inbox is 1000
  TIMELINE_SIZE = 1000
  FETCH_COUNT = 50

  def initialize(user: user)
    super(user: user)
    @post_uuids = []
  end

  def fetch_head!
    @page = 0

    results = redis.multi do
      redis.zunionstore("timeline:#{@user.id}",
                        ["timeline:#{@user.id}", "inbox:#{@user.id}"],
                        aggregate: "max")
      redis.del("inbox:#{@user.id}")
      redis.zremrangebyrank("timeline:#{@user.id}", 0, - TIMELINE_SIZE - 1)
      redis.zrevrange("timeline:#{@user.id}", 0, FETCH_COUNT - 1)
    end

    @post_uuids = results[3]
  end

  def fetch(page: page)
    if page == @page
      return @post_uuids
    else
      @page = page
    end

    @post_uuids = redis.zrevrange("timeline:#{@user.id}", FETCH_COUNT * @page, FETCH_COUNT * (@page + 1) - 1)
  end

  private

  def redis
    @redis ||= Redis.new
  end
end
