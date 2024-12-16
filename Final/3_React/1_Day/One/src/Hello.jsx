function Hello() {
  let age=22;
  function fullName() {
    return 'Debjit Ghosh'
  }
  return <h3>Hello my name is {fullName()}</h3>
}
export default Hello;