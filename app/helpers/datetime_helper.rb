module DatetimeHelper
  MONTHS = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ]

  def format_date(datetime)
    year = datetime.year
    month = MONTHS[datetime.month - 1]
    date  = datetime.day
    "#{month} #{date}, #{year}"
  end
end
