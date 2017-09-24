export default function loops() {
  for(let i = 0; i < 3; i++) {
    console.log('outer:', i);
    for(let i = 0; i < 3; i++) {
      console.log('inner:', i);
    }
  }
}