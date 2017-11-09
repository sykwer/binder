class WorldTimeline
  include ActiveModel::Model

  attr_accessor :oldest_unixtime_nano, :count_per_page, :post_uuids

  def initialize(count_per_page:)
    super(count_per_page: count_per_page)
    @oldest_unixtime_nano = nil
    @post_uuids = []
  end

  def fetch(oldest_unixtime_nano: nil)
    @oldest_unixtime_nano = oldest_unixtime_nano

    if @oldest_unixtime_nano.blank?
      posts = redis.zrevrange(
        "world_timeline",
        0,
        @count_per_page - 1,
        with_scores: true,
      )

      @oldest_unixtime_nano = posts.last[1] if posts.last.present?
      @post_uuids = posts.map { |p| p[0] }
    else
      posts = redis.zrangebyscore(
        "world_timeline",            # key
        "-inf",                      # min
        @oldest_unixtime_nano - 1,   # max
        limit: [0, @count_per_page], with_scores: true # option
      )

      @oldest_unixtime_nano = posts.last[1] if posts.last.present?
      @post_uuids = posts.map { |p| p[0] }
    end
  end

  private

  def redis
    @redis ||= Redis.new
  end
end
