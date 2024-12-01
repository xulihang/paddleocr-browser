import Ocr from '@gutenye/ocr-browser';
import ort from 'onnxruntime-web';

function main() {
  if ((window as any).ortWasmPaths) {
    ort.env.wasm.wasmPaths = (window as any).ortWasmPaths;
  }else{
    ort.env.wasm.wasmPaths = 'https://cdn.jsdelivr.net/npm/paddleocr-browser/dist/';
  }
  (window as any)["Ocr"] = Ocr;
}

main()
