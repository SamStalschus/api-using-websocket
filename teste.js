

function soma(...args) {
  return args.reduce((total, next) => total + next)
}

console.log(soma(800, 82, 53, 4))