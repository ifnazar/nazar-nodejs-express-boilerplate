class CA {
  async method1() {
    throw new Error('FOO');
  }
}

class C2 {
  async method2() {
    await new CA().method1();
  }
}

class C3 {
  async method3() {
    await new C2().method2();
  }
}

async function main() {
  await new C3().method3();
}

main().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error.stack || JSON.stringify(error, 2, 2));
});
