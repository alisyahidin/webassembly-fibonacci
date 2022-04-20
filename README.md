
## Run Locally

**Notes:** Make sure local computer have already installed `rust`, `cargo`, and `nodejs`

Install cargo dependencies

```bash
cargo install
```

Run cargo build

```bash
cargo build
```

Compile into webassembly using `wasm-pack`

```bash
wasm-pack build --release --target web
```

Open file index.html using `serve` npm

```bash
npx serve -s build
```

Open browser at [http://localhost:3000](http://localhost:3000)