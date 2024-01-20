const names = ["Muhammad", "Saufi"];
function Post() {
  let angka = 1;
  let nama = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
      <p>{nama}</p>
      <p>React Sangat Mantap Mas Bro!!</p>
    </div>
  );
}
export default Post;
