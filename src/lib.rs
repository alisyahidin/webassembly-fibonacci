use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fib(num: i32) -> i32 {
    match num {
        0 => 0,
        1 => 1,
        2 => 1,
        _ => fib(num - 1) + fib(num - 2),
    }
}
