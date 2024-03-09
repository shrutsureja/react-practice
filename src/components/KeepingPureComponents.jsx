let guest = 0;

// console.log(guest)

function Cup() {
  // Bad: changing a preexisting variable!
  console.log('guest' + guest);
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function KeepingPureComponents() {
  return (
    <>
      {console.log(guest)}
      <Cup />
      {console.log(guest)}
      <Cup />
      {console.log(guest)}
      <Cup />
      {console.log(guest)}
    </>
  );
}
