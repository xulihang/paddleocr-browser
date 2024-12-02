# paddleocr-browser

PaddleOCR running on browser

Built using <https://github.com/gutenye/ocr/tree/main/packages/browser/example>

## Installation

```html
<script>
  window.ortWasmPaths = "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.17.3/dist/"
</script>
<script src="https://cdn.jsdelivr.net/npm/paddleocr-browser/dist/paddleocr.js"></script>
```

## Usage



```js
let resourcesPath = "https://cdn.jsdelivr.net/npm/@gutenye/ocr-models/assets";
let ocr = await Ocr.create({
  models: {
    detectionPath: resourcesPath+'/ch_PP-OCRv4_det_infer.onnx',
    recognitionPath: resourcesPath+'/ch_PP-OCRv4_rec_infer.onnx',
    dictionaryPath: resourcesPath+'/ppocr_keys_v1.txt'
  }
})
ocr.detect(dataURL);
```
