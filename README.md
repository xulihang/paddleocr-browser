# paddleocr-browser

PaddleOCR running on browser using [eSearch-OCR](https://github.com/xushengfeng/eSearch-OCR)

[Online demo](https://www.basiccat.org/online-image-translator)


## Installation

```html
<script src="https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/ort.min.js"></script>
<script async src="https://docs.opencv.org/4.8.0/opencv.js" type="text/javascript"></script>
<script type="module">
  import * as Paddle from "https://cdn.jsdelivr.net/npm/esearch-ocr@5.1.5/dist/esearch-ocr.js";
  window.Paddle = Paddle;
</script>
```

## Usage

```js
const assetsPath = "https://cdn.jsdelivr.net/npm/paddleocr-browser/dist/";
const res = await fetch(assetsPath+"ppocr_keys_v1.txt");
const dic = await res.text();
await Paddle.init({
    detPath: assetsPath+"ppocr_det.onnx",
    recPath: assetsPath+"ppocr_rec.onnx",
    dic: dic,
    ort,
    node: false,
    cv:cv
});
let r = await Paddle.ocr(dataURL);
```
