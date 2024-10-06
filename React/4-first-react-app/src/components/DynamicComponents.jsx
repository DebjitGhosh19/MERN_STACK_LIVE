function DynamicComponents() {

  const studentName="Debjit";
  const marks=[85,84,63,74,59];

  function calMarks() {
    let sum=0;
    for(let i=0;i<marks.length;i++){
      sum+=marks[i];
    }
    return sum/marks.length;
  }

  return <p>
    {studentName} score {calMarks()}% marks .
  </p>
}
export default DynamicComponents;