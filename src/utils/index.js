export function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '')
}

export function createBulletObject(item) {
  const newContent = Boolean(item.getAttribute('new-content'))
  const bullet = {
    ...(!newContent ? { id: parseInt(item.getAttribute('id')) } : {}),
    prettyText: item.querySelector('.li-input .ql-editor').innerHTML,
    rawText: item.querySelector('.li-input').textContent
  }

  return bullet
}

export function getContent(callback) {
  const bullets = []

  document
    .querySelectorAll('.main-list .composer-item')
    .forEach((currentNode) => {
      bullets.push(createBulletObject(currentNode))
    })

  new Promise((resolve) => resolve(callback(bullets)))
}

export const getLastInsertedChar = (delta) => {
  let ops = delta.ops
  if (!ops || ops.length < 1) {
    return
  }

  // Check last insert
  let lastOpIndex = ops.length - 1
  let lastOp = ops[lastOpIndex]

  while (!lastOp.insert && lastOpIndex > 0) {
    lastOpIndex--
    lastOp = ops[lastOpIndex]
  }
  return lastOp.insert && lastOp.insert.slice && lastOp.insert.slice(-1)
}

export const getLastDeltaOp = (delta) => {
  if (!delta || !delta.ops || delta.ops.length == 0) return
  const lastIndex = delta.ops.length - 1;
  const localDelta = delta.ops[lastIndex];
  const newDelta = {...delta}
  newDelta.ops = delta.ops.slice(0, lastIndex)
  return localDelta.insert !== '\n' ? localDelta : getLastDeltaOp(newDelta)
}
