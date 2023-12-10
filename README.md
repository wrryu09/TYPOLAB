<div>
<img alt="image" src="https://github.com/wrryu09/TYPOLAB/assets/98469609/5382fa87-1f56-4f6d-8ae6-585a931ce3d0">
<img alt="image" src="https://github.com/wrryu09/TYPOLAB/assets/98469609/6fa36d66-37de-4028-9b5e-1c76da4ebe69">
<div/>
  
<br>
<br>

# Font Pairing Web, TYPOLAB
<br>
서비스 디자인을 하거나 포스터를 제작할 때, 어떤 폰트를 골라야 좋을지 고민했던 경험이 있으신가요?<br>
골라둔 한글 폰트와 어울리는 영문 폰트를 고민하고 계신가요? 🤷<br>
<br>
선택한 한글과 비슷한 영문 폰트를 추천해주고 폰트를 쉽게 사용할 수 있도록 도와주는 서비스를 제작했습니다.

<br>
<br>

## 기능 소개  
  
**1. ✏️ 태그 선택 기반 국문 글꼴 표시**  
  
**2. 🔠 선택한 국문 글꼴 기반 유사한 영문 폰트 추천**  
  
**3. 👀 다양한 폰트의 정보 조회**  
  
**4. 🤔 글꼴 미리 써보기**  

**5. ✅ 선택한 폰트 저장**   

**6. 👍 디자인 시스템 생성 및 이미지로 다운로드**  
<br>
<br>


## 폴더 구조

```
.
├── app
│   ├── about
│   │   └── page.tsx
│   ├── box
│   │   ├── designSys
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── pair
│   │   └── page.tsx
│   └── search
│       ├── [fontName]
│       │   └── page.tsx
│       └── page.tsx
├── components
├── containers
│   ├── box
│   │   └── designSys
│   ├── main
│   ├── pair
│   └── search
├── services
│   ├── apis
│   ├── convertFontDBDatatoFontInfo.ts
│   └── putFontSetToBox.ts
└── types
    └── types.ts
```
<br>
<br>

## How to test
https://www.typolabo.com/
<br>
<br>
