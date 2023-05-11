const getTimeStr = function (date: number) {
  const time = new Date(date * 1000).getTime()
  const cur_time = new Date().getTime()
  const dur = cur_time - time
  const minute = Math.floor(dur / 60000)
  const hour = Math.floor(minute / 60)
  const day = Math.floor(hour / 24)
  const month = Math.floor(day / 30)
  const year = Math.floor(month / 12)
  if (minute <= 0) {
    return 'Just now'
  } else if (minute < 60) {
    return minute + ' minutes ago'
  } else if (hour < 24) {
    return hour + ' hours ago'
  } else if (day < 30) {
    return day + ' days ago'
  } else if (month < 12) {
    return month + 'month ago'
  } else {
    return year + 'year ago'
  }
}

export { getTimeStr }
