const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://pub-08298820ca884cc49d536c1b0ce8b7c4.r2.dev/main/1.jpg'
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
        <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: 800,
          height: 500
        }}
      />
    </>
  )
}