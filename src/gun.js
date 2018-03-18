const gun = Gun()

function eventUsername (eventId) {
  // TODO: Hash eventId
  return `listecky-${eventId}`
}

export function createEvent (eventId) {
  const user = gun.user()
  return new Promise((resolve, reject) => {
    user.create(eventUsername(eventId), eventId, function ({err}) {
      if (!err) {
        resolve(user)
      } else {
        reject(new Error(err))
      }
    })
  })
}

export function loginEvent (eventId) {
  const user = gun.user()
  return new Promise((resolve, reject) => {
    user.auth(eventUsername(eventId), eventId, function ({err}) {
      if (!err) {
        resolve(user)
      } else {
        reject(new Error(err))
      }
    })
  })
}
