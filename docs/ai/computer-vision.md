# 计算机视觉

计算机视觉是让计算机理解和处理图像和视频的领域。

## 图像基础

### OpenCV 读取图像

```python
import cv2

# 读取图像
img = cv2.imread('image.jpg')

# 转换为灰度图
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# 显示图像
cv2.imshow('Image', img)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

## 目标检测

### YOLO 检测

```python
import cv2

# 加载模型
net = cv2.dnn.readNet('yolov3.weights', 'yolov3.cfg')

# 预处理图像
blob = cv2.dnn.blobFromImage(img, 1/255, (416, 416))
net.setInput(blob)

# 检测
outputs = net.forward(net.getUnconnectedOutLayersNames())
```

## 图像分割

### U-Net

```python
import torch
import torch.nn as nn

class ConvBlock(nn.Module):
    def __init__(self, in_ch, out_ch):
        super().__init__()
        self.conv = nn.Sequential(
            nn.Conv2d(in_ch, out_ch, 3, padding=1),
            nn.BatchNorm2d(out_ch),
            nn.ReLU(inplace=True),
            nn.Conv2d(out_ch, out_ch, 3, padding=1),
            nn.BatchNorm2d(out_ch),
            nn.ReLU(inplace=True)
        )
    
    def forward(self, x):
        return self.conv(x)

class UNet(nn.Module):
    def __init__(self, in_ch, out_ch):
        super().__init__()
        # 编码器
        self.enc1 = ConvBlock(in_ch, 64)
        self.enc2 = ConvBlock(64, 128)
        
        # 解码器
        self.dec2 = ConvBlock(128, 64)
        self.final = nn.Conv2d(64, out_ch, 1)
    
    def forward(self, x):
        # 简化的 U-Net 前向传播
        e1 = self.enc1(x)
        e2 = self.enc2(torch.max_pool2d(e1, 2))
        d2 = self.dec2(torch.nn.functional.interpolate(e2, scale_factor=2))
        return self.final(d2)
```

## 人脸检测

### MTCNN

```python
from mtcnn import MTCNN
import cv2

detector = MTCNN()

# 检测人脸
img = cv2.imread('face.jpg')
result = detector.detect_faces(img)

# 绘制关键点
for face in result:
    x, y, w, h = face['box']
    cv2.rectangle(img, (x,y), (x+w,y+h), (0,255,0), 2)
    
    for key, point in face['keypoints'].items():
        cv2.circle(img, point, 2, (0,0,255), 2)
```

## 图像增强

```python
import albumentations as A

transform = A.Compose([
    A.RandomCrop(width=256, height=256),
    A.HorizontalFlip(p=0.5),
    A.RandomBrightnessContrast(p=0.2),
    A.RandomGamma(p=0.2),
])

# 应用增强
augmented = transform(image=image)
```

## 更多资源

- [OpenCV 文档](https://docs.opencv.org/)
- [PyTorch Vision](https://pytorch.org/vision/)
