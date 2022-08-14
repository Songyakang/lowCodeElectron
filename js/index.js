const quit = () => {
  new Notification('title', {
    body: 'hello'
  }).onclick = () => {
    console.log('跳转了')
  }
}