import React from "react";


export const Small = React.memo(({value}) => {
  console.log('Hey me volví a renderizar :)');
  return (
    <small className="text-muted">
      {JSON.stringify(value)}
    </small>
  )
})