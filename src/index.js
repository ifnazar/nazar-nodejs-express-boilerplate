async function main() {
  // eslint-disable-next-line no-console
  console.log('Hello');
}

main().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error.stack || JSON.stringify(error, 2, 2));
});
