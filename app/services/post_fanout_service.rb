class PostFanoutService
  attr_reader :target_user_ids, :post_uuid

  def initialize(target_user_ids: [], post_uuid:)
    @target_user_ids = target_user_ids
    @post_uuid = post_uuid
  end

  def fanout
    # Enhancement: batch process for too many target users
    redis.pipelined do
      target_user_ids.each do |user_id|
        # seconds
        redis.zadd("followings_timeline_inbox:#{user_id}", Time.zone.now.to_i, post_uuid)
      end
      # nano seconds
      redis.zadd("world_timeline", Time.zone.now.to_r.numerator, post_uuid)
    end
  end

  private

  def redis
    @redis ||= Redis.new
  end
end
