function cekTablePerkalian(n: number): void {
  let Table: string = "";

  for (let i: number = 1; i <= n; i++) {
    Table += i + "\t";
  }
  Table += "\n";

  for (let i: number = 1; i <= n; i++) {
    Table += i + "\t";
  }
  Table += "\n";

  for (let i: number = 1; i <= n; i++) {
    for (let j: number = 1; j <= i; j++) {
      Table += i * j + "\t";
    }
    Table += "\n";
  }

  console.log(Table);
}

cekTablePerkalian(9);
